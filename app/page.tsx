"use client";

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
} from "lucide-react";

export default function Home() {

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
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-fade-in-up"
            style={{
              border: "1px solid rgba(6, 182, 212, 0.3)",
              background: "rgba(8, 47, 73, 0.3)",
              color: "#22d3ee",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#22d3ee" }}
            />
            奈良女子大学附属中等教育学校 副生徒会長立候補 | 水野 太陽
          </div>

          <h1
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            あなたの「不満」を、
            <br />
            <span
              className="neon-text"
              style={{
                backgroundImage: "linear-gradient(to right, #22d3ee, #2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              「企画書」
            </span>
            に変える。
          </h1>

          <p
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            ただの「便利屋」ではありません。
            <br />
            あなたの声をプロレベルの文書に昇華させ、
            <br />
            学校当局から正式な回答を勝ち取るまで完遂します。
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
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
            </a>
          </div>
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
          <p className="text-slate-400 mt-4 text-lg">
            雑用係ではありません。あなたの声を「学校を変える武器」にする専門家です。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageCircle className="w-10 h-10" style={{ color: "#22d3ee" }} />,
              title: "1. 拾う",
              desc: "どんなに小さな不満や呟きも逃しません。SNS、目安箱、直接の声、すべてが変革の種です。",
              featured: false,
            },
            {
              icon: <FileCheck className="w-10 h-10" style={{ color: "#22d3ee" }} />,
              title: "2. 仕立てる",
              desc: "感情的な意見を、論理的で説得力のある「行政文書レベルの企画書」へと私が責任を持って編集します。",
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

      {/* Policy Section */}
      <section id="policy" className="py-20 px-4 md:px-8 max-w-7xl mx-auto" style={{ background: "rgba(15, 23, 42, 0.5)" }}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase rounded-full"
              style={{
                color: "#22d3ee",
                border: "1px solid rgba(6, 182, 212, 0.3)",
              }}
            >
              Key Policy
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              電子決済の実証実験を
              <br />
              <span style={{ color: "#22d3ee" }}>「確実な制度」</span>へ。
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              前期生徒会での活動により、電子決済の実証実験は確定しました。しかし、これはゴールではありません。
              実証実験を実現するには、決済端末などの<strong className="text-white">機材の準備</strong>や、
              それに伴う<strong className="text-white">予算の確保・適切な管理</strong>が不可欠です。
              そのうえで最も重要なのは<strong className="text-white">「運用ルール」</strong>の確立です。
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div
                  className="mt-1 p-1 rounded"
                  style={{ background: "rgba(8, 47, 73, 0.5)", color: "#22d3ee" }}
                >
                  <Lock size={16} />
                </div>
                <p className="text-slate-400">トラブルゼロを目指す厳格なセキュリティガイドラインの策定</p>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className="mt-1 p-1 rounded"
                  style={{ background: "rgba(8, 47, 73, 0.5)", color: "#22d3ee" }}
                >
                  <TrendingUp size={16} />
                </div>
                <p className="text-slate-400">実証実験データを詳細に分析し、永続的な導入へのロードマップを作成</p>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className="mt-1 p-1 rounded"
                  style={{ background: "rgba(8, 47, 73, 0.5)", color: "#22d3ee" }}
                >
                  <CreditCard size={16} />
                </div>
                <p className="text-slate-400">透明性の高い会計処理フローの構築</p>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
              style={{
                background: "linear-gradient(to right, #06b6d4, #2563eb)",
              }}
            />
            <div
              className="relative rounded-2xl p-8 shadow-2xl"
              style={{
                background: "#0f172a",
                border: "1px solid #334155",
              }}
            >
              <div
                className="flex justify-between items-center mb-8 pb-4"
                style={{ borderBottom: "1px solid #334155" }}
              >
                <div className="w-12 h-8 rounded" style={{ background: "#334155" }} />
                <div className="text-slate-500 font-mono text-xs">ID: 8829-1029</div>
              </div>
              <div className="space-y-4">
                <div
                  className="h-4 rounded w-3/4 animate-pulse"
                  style={{ background: "rgba(51, 65, 85, 0.5)" }}
                />
                <div
                  className="h-4 rounded w-1/2 animate-pulse"
                  style={{ background: "rgba(51, 65, 85, 0.5)", animationDelay: "0.2s" }}
                />
                <div
                  className="h-20 rounded flex items-center justify-center font-mono"
                  style={{
                    background: "rgba(8, 47, 73, 0.2)",
                    border: "1px solid rgba(6, 182, 212, 0.3)",
                    color: "#22d3ee",
                  }}
                >
                  System Status: PROTOTYPE READY
                </div>
              </div>
              <div
                className="mt-8 pt-4 flex justify-between items-center"
                style={{ borderTop: "1px solid #334155" }}
              >
                <span className="text-xs text-slate-400">BUDGET CONTROL</span>
                <span className="font-bold" style={{ color: "#22d3ee" }}>OPTIMIZED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-32 px-4 md:px-8 max-w-7xl mx-auto" style={{ background: "#0a0f1e" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            「仕方ない」で
            <br />
            片付けさせない。
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
            <p>
              「どうせ言っても変わらない」
              <br />
              そう思っていませんか？
            </p>
            <p>
              確かに、ただ文句を言うだけでは学校は動きません。
              <br />
              必要なのは、感情論ではなく
              <strong style={{ color: "#22d3ee" }}>「論理」</strong>。
              <br />
              そして、アイデアを行政文書へと落とし込む
              <strong style={{ color: "#22d3ee" }}>「実務能力」</strong>です。
            </p>
            <p>
              私は、その「面倒な作業」のすべてを引き受けます。
              <br />
              あなたが感じる学校への違和感を、私に預けてください。
            </p>
            <p>
              副生徒会長として、生徒と学校の間に立つ「最強の翻訳機」となり、
              <br />
              理路整然とした企画書で、大人たちを納得させます。
            </p>
          </div>

          <div className="mt-16">
            <div
              className="inline-block p-1 rounded-lg"
              style={{
                background: "linear-gradient(to right, #06b6d4, #2563eb)",
              }}
            >
              <div className="px-8 py-4 rounded-md" style={{ background: "#0a0f1e" }}>
                <span className="text-2xl md:text-3xl font-bold text-white">
                  あなたの「不満」を、「企画書」に変えます。
                </span>
              </div>
            </div>
          </div>
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
              奈良女子大学附属中等教育学校
              <br />
              副生徒会長立候補者 水野 太陽 特設サイト
            </h3>
            <p className="text-sm text-slate-500">実行力 × 信頼感 × デジタル</p>
          </div>

          <div className="flex gap-6 text-sm text-slate-400">
            <a
              href="#concept"
              className="transition-colors"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
            >
              コンセプト
            </a>
            <a
              href="#policy"
              className="transition-colors"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
            >
              政策詳細
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-600 space-y-1">
          <p>Made by Gemini &mdash; AIで作成されたため、不適切な表現やデザインが含まれる可能性があります。ご了承ください。</p>
          <p>&copy; 2025 Mizuno Taiyo Campaign. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
