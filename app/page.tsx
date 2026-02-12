"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, limit, onSnapshot, Timestamp } from "firebase/firestore";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  FileCheck,
  MessageCircle,
  RefreshCw,
  CreditCard,
  Lock,
  TrendingUp,
  MessageSquarePlus,
  ThumbsUp,
} from "lucide-react";

interface TopPost {
  id: string;
  title: string;
  body: string;
  votes: number;
  createdAt: Timestamp | null;
}

export default function Home() {
  const [topPost, setTopPost] = useState<TopPost | null>(null);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("votes", "desc"), limit(1));
    const unsub = onSnapshot(q, (snap) => {
      if (!snap.empty) {
        const d = snap.docs[0];
        setTopPost({ id: d.id, ...(d.data() as Omit<TopPost, "id">) });
      }
    });
    return () => unsub();
  }, []);

  return (
    <main className="font-sans antialiased text-slate-200" style={{ background: "#0a0f1e" }}>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "#0a0f1e" }}>
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div
            className="absolute rounded-full animate-pulse-slow"
            style={{
              top: "-20%",
              left: "-10%",
              width: "600px",
              height: "600px",
              background: "rgba(30, 58, 138, 0.2)",
              filter: "blur(100px)",
            }}
          />
          <div
            className="absolute rounded-full animate-pulse-slow"
            style={{
              top: "40%",
              right: "-10%",
              width: "500px",
              height: "500px",
              background: "rgba(22, 78, 99, 0.2)",
              filter: "blur(120px)",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute bottom-0 w-full"
            style={{
              height: "50%",
              background: "linear-gradient(to top, #0a0f1e, transparent)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

          <h1
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            副生徒会長候補
            <br />
            <span
              className="neon-text"
              style={{
                backgroundImage: "linear-gradient(to right, #22d3ee, #2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
            水野太陽
            </span>
          </h1>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {/* <a
              href="#concept"
              className="group relative px-8 py-4 font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
              style={{
                background: "#06b6d4",
                color: "#0a0f1e",
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#22d3ee";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(6, 182, 212, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#06b6d4";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.4)";
              }}
            >
              <FileText className="w-5 h-5" />
              コンセプトを見る
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#manifesto"
              className="px-8 py-4 text-slate-300 font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
              style={{
                border: "1px solid #475569",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#06b6d4";
                e.currentTarget.style.color = "#22d3ee";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#475569";
                e.currentTarget.style.color = "#cbd5e1";
              }}
            >
              <ShieldCheck className="w-5 h-5" />
              政策を見る
            </a> */}
            <Link
              href="/board"
              className="px-8 py-4 font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
              style={{
                border: "1px solid rgba(6, 182, 212, 0.5)",
                background: "rgba(6, 182, 212, 0.08)",
                color: "#22d3ee",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(6, 182, 212, 0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(6, 182, 212, 0.08)";
              }}
            >
              <MessageSquarePlus className="w-5 h-5" />
              声を届ける
            </Link>
          </div>

          <p
            className="text-xs text-slate-600 mt-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Geminiで作成されたため、適切でない表現やデザインが含まれる可能性があります。
          </p>
        </div>
      </div>

      {/* Concept Section */}
      <section id="concept" className="py-20 px-4 md:px-8 max-w-7xl mx-auto" style={{ background: "#0a0f1e" }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span style={{ borderBottom: "4px solid #06b6d4" }}>なんでもします</span>
            　＝
            <span style={{ color: "#22d3ee" }}>100% 企画書化</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageCircle className="w-10 h-10" style={{ color: "#22d3ee" }} />,
              title: "1. 拾う",
              desc: "どんなに小さな不満や呟きも逃しません。目安箱、直接の声、すべてが変革の種です。",
              featured: false,
            },
            {
              icon: <FileCheck className="w-10 h-10" style={{ color: "#22d3ee" }} />,
              title: "2. 仕立てる",
              desc: "意見を、論理的で説得力のある「企画書」へと私が責任を持って編集します。",
              featured: true,
            },
            {
              icon: <RefreshCw className="w-10 h-10" style={{ color: "#22d3ee" }} />,
              title: "3. 完遂する",
              desc: "提出して終わりではありません。学校側からの回答があるまで交渉を続け、結果を必ずフィードバックします。",
              featured: false,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
              style={{
                border: item.featured ? "1px solid #0e7490" : "1px solid #164e63",
                background: item.featured ? "rgba(15, 23, 42, 0.8)" : "rgba(15, 23, 42, 0.5)",
                boxShadow: item.featured ? "0 0 15px rgba(34, 211, 238, 0.1)" : "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                className="mb-6 p-4 rounded-full inline-block"
                style={{
                  background: "#0a0f1e",
                  border: "1px solid #0c4a6e",
                }}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 p-8 rounded-r-xl"
          style={{
            background: "linear-gradient(to right, rgba(30, 58, 138, 0.3), rgba(22, 78, 99, 0.3))",
            borderLeft: "4px solid #22d3ee",
          }}
        >
          <h3 className="text-xl font-bold text-white mb-2">責任の所在を明確に</h3>
          <p className="text-slate-300">
            このサイトから投稿された意見は、私が副生徒会長に当選した暁には、
            <strong style={{ color: "#22d3ee" }}>100%の確率で企画書としてアウトプットすること</strong>
            をここに約束します。黙殺はあり得ません。
          </p>
        </div>
      </section>

      {/* Top Voice Section */}
      {topPost && (
        <section className="py-16 px-4 md:px-8" style={{ background: "rgba(15, 23, 42, 0.6)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <ThumbsUp className="w-5 h-5" style={{ color: "#22d3ee" }} />
              <h2 className="text-lg font-bold" style={{ color: "#22d3ee" }}>
                今一番共感されている声
              </h2>
            </div>
            <Link href="/board">
              <div
                className="rounded-2xl p-6 flex gap-5 items-start transition-all duration-300"
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1px solid rgba(6, 182, 212, 0.35)",
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(6, 182, 212, 0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(6, 182, 212, 0.35)";
                }}
              >
                <div
                  className="flex flex-col items-center justify-center gap-1 min-w-14 rounded-xl py-3 px-2 shrink-0"
                  style={{
                    background: "rgba(6, 182, 212, 0.12)",
                    border: "1px solid rgba(6, 182, 212, 0.4)",
                  }}
                >
                  <ThumbsUp size={18} style={{ color: "#22d3ee" }} />
                  <span className="text-xl font-bold leading-none" style={{ color: "#22d3ee" }}>
                    {topPost.votes}
                  </span>
                  <span className="text-xs" style={{ color: "#475569" }}>共感</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-lg mb-1">{topPost.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{topPost.body}</p>
                  <p className="text-xs mt-3" style={{ color: "#22d3ee" }}>
                    → 他の声も見る・投稿する
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Policy Section */}
      <section id="policy" className="py-32 px-4 md:px-8 max-w-7xl mx-auto" style={{ background: "#0a0f1e" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            電子決済の実証実験を
            <br />
            <span style={{ color: "#22d3ee" }}>「確実な制度」</span>へ。
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
            <p>
              前期生徒会での活動により、
              <br />
              電子決済の実証実験は確定しました。
              <br />
              しかし、これはゴールではありません。
            </p>
            <p>
              実証実験を実現するには、決済端末などの
              <strong style={{ color: "#22d3ee" }}>機材の準備</strong>や、
              <br />
              それに伴う
              <strong style={{ color: "#22d3ee" }}>来季の予算の確保・適切な管理</strong>が不可欠です。
            </p>
            <p>
              そのうえで最も重要なのは、
              <br />
              <strong style={{ color: "#22d3ee" }}>「運用ルール」</strong>の確立です。
            </p>
          </div>

          {/* <div className="mt-16">
            <div
              className="inline-block p-1 rounded-lg"
              style={{
                background: "linear-gradient(to right, #06b6d4, #2563eb)",
              }}
            >
              <div className="px-8 py-4 rounded-md" style={{ background: "#0a0f1e" }}>
                <span className="text-2xl md:text-3xl font-bold text-white">
                  実証実験を、永続的な制度へ。
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </section>


      {/* Footer */}
      <footer
        className="border-t py-12 px-4"
        style={{
          background: "#020817",
          borderColor: "#1e293b",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              副生徒会長立候補者
              <br/>
              <span
                className="neon-text"
                style={{
                  backgroundImage: "linear-gradient(to right, #22d3ee, #2563eb)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  水野太陽
              </span>
            </h3>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-600 space-y-1">
          <p>Geminiで作成されたため、適切でない表現やデザインが含まれる可能性があります。</p>
          {/* <p>&copy; All rights reserved.</p> */}
        </div>
      </footer>

    </main>
  );
}
