"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  increment,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { ArrowLeft, ThumbsUp, Send, TrendingUp, Clock, Loader2 } from "lucide-react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  body: string;
  votes: number;
  createdAt: Timestamp | null;
}

type SortKey = "votes" | "createdAt";

export default function BoardPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>("votes");
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  // Firestore リアルタイム取得
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("votes", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<Post, "id">),
      }));
      setPosts(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // ローカルストレージで投票済みIDを管理
  useEffect(() => {
    const stored = localStorage.getItem("votedIds");
    if (stored) setVotedIds(new Set(JSON.parse(stored)));
  }, []);

  const handleSubmit = async () => {
    if (!title.trim() || !body.trim()) return;
    setSubmitting(true);
    try {
      await addDoc(collection(db, "posts"), {
        title: title.trim(),
        body: body.trim(),
        votes: 0,
        createdAt: serverTimestamp(),
      });
      setTitle("");
      setBody("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setSubmitting(false);
    }
  };

  const handleVote = async (postId: string) => {
    if (votedIds.has(postId)) return;
    await updateDoc(doc(db, "posts", postId), { votes: increment(1) });
    const newSet = new Set(votedIds).add(postId);
    setVotedIds(newSet);
    localStorage.setItem("votedIds", JSON.stringify([...newSet]));
  };

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortKey === "votes") return b.votes - a.votes;
    const aTime = a.createdAt?.seconds ?? 0;
    const bTime = b.createdAt?.seconds ?? 0;
    return bTime - aTime;
  });

  return (
    <main
      className="min-h-screen font-sans antialiased text-slate-200"
      style={{ background: "#0a0f1e" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b px-4 py-4"
        style={{
          background: "rgba(10, 15, 30, 0.9)",
          borderColor: "#1e293b",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 transition-colors text-sm"
            style={{ color: "#94a3b8" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
          >
            <ArrowLeft size={16} />
            トップへ戻る
          </Link>
          <h1 className="text-white font-bold text-lg">みんなの声プラットフォーム</h1>
          <div style={{ width: "80px" }} />
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* 投稿フォーム */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-1">やってほしいことを投稿する</h2>
            <p className="text-slate-400 text-sm">匿名OK。どんな小さな声でも受け取ります。</p>
          </div>

          <div
            className="rounded-2xl p-6 space-y-4"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid #1e293b",
            }}
          >
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                タイトル
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="例：自習室の開放時間を延ばしてほしい"
                maxLength={60}
                className="w-full rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-all"
                style={{
                  background: "#020817",
                  border: "1px solid #334155",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#06b6d4";
                  e.currentTarget.style.boxShadow = "0 0 0 1px #06b6d4";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#334155";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                具体的な理由・困っていること
              </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="例：テスト前は復習したいのに、閉まるのが早くて困っています..."
                rows={4}
                className="w-full rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-all resize-none"
                style={{
                  background: "#020817",
                  border: "1px solid #334155",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#06b6d4";
                  e.currentTarget.style.boxShadow = "0 0 0 1px #06b6d4";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#334155";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              {submitted && (
                <p className="text-sm" style={{ color: "#22d3ee" }}>
                  投稿しました！ありがとうございます。
                </p>
              )}
              {!submitted && <div />}
              <button
                onClick={handleSubmit}
                disabled={submitting || !title.trim() || !body.trim()}
                className="flex items-center gap-2 font-bold py-2.5 px-6 rounded-lg transition-all text-sm"
                style={{
                  background: title.trim() && body.trim() ? "#0891b2" : "#1e293b",
                  color: title.trim() && body.trim() ? "white" : "#475569",
                  cursor: title.trim() && body.trim() ? "pointer" : "not-allowed",
                }}
                onMouseEnter={(e) => {
                  if (title.trim() && body.trim()) {
                    (e.currentTarget as HTMLElement).style.background = "#06b6d4";
                  }
                }}
                onMouseLeave={(e) => {
                  if (title.trim() && body.trim()) {
                    (e.currentTarget as HTMLElement).style.background = "#0891b2";
                  }
                }}
              >
                {submitting ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                投稿する
              </button>
            </div>
          </div>
        </section>

        {/* 一覧 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              みんなの声
              <span className="ml-2 text-base font-normal" style={{ color: "#22d3ee" }}>
                {posts.length}件
              </span>
            </h2>

            {/* ソート切替 */}
            <div
              className="flex rounded-lg overflow-hidden text-sm font-medium"
              style={{ border: "1px solid #1e293b" }}
            >
              <button
                onClick={() => setSortKey("votes")}
                className="flex items-center gap-1.5 px-4 py-2 transition-all"
                style={{
                  background: sortKey === "votes" ? "#0891b2" : "transparent",
                  color: sortKey === "votes" ? "white" : "#94a3b8",
                }}
              >
                <TrendingUp size={14} />
                共感順
              </button>
              <button
                onClick={() => setSortKey("createdAt")}
                className="flex items-center gap-1.5 px-4 py-2 transition-all"
                style={{
                  background: sortKey === "createdAt" ? "#0891b2" : "transparent",
                  color: sortKey === "createdAt" ? "white" : "#94a3b8",
                }}
              >
                <Clock size={14} />
                新着順
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin" style={{ color: "#22d3ee" }} />
            </div>
          ) : sortedPosts.length === 0 ? (
            <div
              className="text-center py-20 rounded-2xl"
              style={{
                background: "rgba(15, 23, 42, 0.5)",
                border: "1px solid #1e293b",
              }}
            >
              <p className="text-slate-500">まだ投稿がありません。最初の一件を投稿してみましょう！</p>
            </div>
          ) : (
            <div className="space-y-4">
              {sortedPosts.map((post, idx) => (
                <div
                  key={post.id}
                  className="rounded-2xl p-5 flex gap-4 transition-all"
                  style={{
                    background: "rgba(15, 23, 42, 0.8)",
                    border: idx === 0 && sortKey === "votes"
                      ? "1px solid rgba(6, 182, 212, 0.4)"
                      : "1px solid #1e293b",
                    boxShadow: idx === 0 && sortKey === "votes"
                      ? "0 0 12px rgba(6, 182, 212, 0.08)"
                      : "none",
                  }}
                >
                  {/* 投票ボタン */}
                  <button
                    onClick={() => handleVote(post.id)}
                    disabled={votedIds.has(post.id)}
                    className="flex flex-col items-center justify-center gap-1 min-w-[56px] rounded-xl py-3 px-2 transition-all shrink-0"
                    style={{
                      background: votedIds.has(post.id)
                        ? "rgba(6, 182, 212, 0.15)"
                        : "rgba(30, 41, 59, 0.8)",
                      border: votedIds.has(post.id)
                        ? "1px solid rgba(6, 182, 212, 0.4)"
                        : "1px solid #334155",
                      cursor: votedIds.has(post.id) ? "default" : "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!votedIds.has(post.id)) {
                        (e.currentTarget as HTMLElement).style.borderColor = "#06b6d4";
                        (e.currentTarget as HTMLElement).style.background = "rgba(6, 182, 212, 0.1)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!votedIds.has(post.id)) {
                        (e.currentTarget as HTMLElement).style.borderColor = "#334155";
                        (e.currentTarget as HTMLElement).style.background = "rgba(30, 41, 59, 0.8)";
                      }
                    }}
                  >
                    <ThumbsUp
                      size={18}
                      style={{
                        color: votedIds.has(post.id) ? "#22d3ee" : "#64748b",
                      }}
                    />
                    <span
                      className="text-lg font-bold leading-none"
                      style={{
                        color: votedIds.has(post.id) ? "#22d3ee" : "#94a3b8",
                      }}
                    >
                      {post.votes}
                    </span>
                    <span className="text-xs" style={{ color: "#475569" }}>共感</span>
                  </button>

                  {/* 投稿内容 */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-base mb-1 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {post.body}
                    </p>
                    {post.createdAt && (
                      <p className="text-xs mt-2" style={{ color: "#475569" }}>
                        {new Date(post.createdAt.seconds * 1000).toLocaleDateString("ja-JP")}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer
        className="mt-20 border-t py-8 px-4 text-center text-xs"
        style={{ borderColor: "#1e293b", color: "#475569" }}
      >
        <p>Made by Gemini &mdash; AIで作成されたため、不適切な表現やデザインが含まれる可能性があります。ご了承ください。</p>
        <p className="mt-1">&copy; 2025 Mizuno Taiyo Campaign. All rights reserved.</p>
      </footer>
    </main>
  );
}
