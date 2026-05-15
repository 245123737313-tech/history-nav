import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Coins,
  CheckCircle2,
  Circle,
  Hourglass,
  Flame,
  Trophy,
  Zap,
  History,
  Search,
  ChevronDown,
  Award,
  Timer,
  Code2,
} from "lucide-react";

const challenges = [
  { level: "EASY", title: "Count Negative Numbers in a Sorted Matrix", accuracy: "92.31%", attempts: 13, coins: 5 },
  { level: "MEDIUM", title: "Compare Strings by Frequency of the Smallest Character", accuracy: "100%", attempts: 4, coins: 10 },
  { level: "HARD", title: "Change Minimum Characters to Satisfy One of Three Conditions", accuracy: "50%", attempts: 6, coins: 15 },
];

const stats = [
  { icon: CheckCircle2, color: "text-emerald-500", value: "11", label: "Solved" },
  { icon: Hourglass, color: "text-blue-500", value: "269", label: "Missed" },
  { icon: Flame, color: "text-orange-500", value: "5", suffix: "days", label: "Current Streak" },
  { icon: Trophy, color: "text-amber-500", value: "5", suffix: "days", label: "Longest Streak" },
  { icon: Zap, color: "text-pink-500", value: "0.57", suffix: "mins", label: "Fastest Solved" },
];

const plans = [
  { code: "AW", title: "Algorithm Wizards 50", subtitle: "Unleashing the Magic of...", color: "bg-amber-700" },
  { code: "MM", title: "Mathematical Minds 50", subtitle: "Unleashing the Power of Math.", color: "bg-slate-400" },
  { code: "PP", title: "Pattern Pioneers 30", subtitle: "Crafting Tomorrow, One Patter...", color: "bg-orange-800" },
  { code: "GG", title: "Graph Gurus 25", subtitle: "Navigating the Complexities of...", color: "bg-indigo-900" },
  { code: "SS", title: "Sorting Sages 80", subtitle: "Sorting Solutions with Sage...", color: "bg-lime-400" },
  { code: "SS", title: "String Sorcerers 100", subtitle: "Weaving Wonders with Every...", color: "bg-blue-500" },
];

const topics = [
  ["Dynamic Programming", 375],
  ["Array", 276],
  ["Strings", 207],
  ["Greedy Algorithms", 156],
  ["Binary Search", 120],
] as const;

const questions = [
  { status: "done", title: "Top K Frequent Words", acc: "53%", diff: "Easy" },
  { status: "done", title: "Unique Binary Search Trees II", acc: "34%", diff: "Medium" },
  { status: "todo", title: "Letter Tile Possibilities", acc: "45%", diff: "Medium" },
  { status: "done", title: "operators", acc: "36%", diff: "Easy" },
  { status: "attempted", title: "Swap Alternate", acc: "43%", diff: "Easy" },
  { status: "done", title: "Divisible by 7", acc: "87%", diff: "Easy" },
  { status: "todo", title: "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree", acc: "18%", diff: "Hard" },
  { status: "todo", title: "operators", acc: "79%", diff: "Hard" },
  { status: "todo", title: "Score After Flipping Matrix", acc: "35%", diff: "Medium" },
  { status: "todo", title: "Make Array Empty", acc: "58%", diff: "Hard" },
  { status: "todo", title: "Split Array into Fibonacci Sequence", acc: "42%", diff: "Medium" },
  { status: "done", title: "Palindrome lover", acc: "67%", diff: "Easy" },
] as const;

const companies = [
  { code: "tcs", name: "TCS Code Vita", points: 950 },
  { code: "cp", name: "CodePrism", points: 950 },
  { code: "in", name: "Infosys Specialist Programmer", points: 945 },
  { code: "ac", name: "Accenture Advanced Analyst", points: 945 },
  { code: "tcs", name: "TCS Innovator", points: 858 },
  { code: "cg", name: "Congnizant GenC Next", points: 779 },
  { code: "tcs", name: "TCS NQT", points: 719 },
  { code: "8b", name: "8byte", points: 717 },
  { code: "vt", name: "Virtusa", points: 712 },
  { code: "cg", name: "Cognizant GenC Elevate", points: 712 },
];

const solvers = [
  { rank: 1, name: "Sravan REDDY", college: "MVSR Engineering...", coins: 140, streak: "5 Day...", solved: 8, init: "C", color: "bg-pink-500" },
  { rank: 2, name: "Ishrath Jasmine", college: "Kakatiya Institute Of...", coins: 61, streak: "0 Day Streak", solved: 1, init: "IJ", color: "bg-emerald-500" },
  { rank: 3, name: "Akshay Raj", college: "Matrusri Engineering...", coins: 44, streak: "0 Day Streak", solved: 1, init: "AR", color: "bg-orange-500" },
  { rank: 4, name: "Mohan Burgula", college: "MVSR Engineering...", coins: 9, streak: "0 Day Streak", solved: 1, init: "M", color: "bg-amber-700" },
  { rank: 5, name: "Praveen A", college: "Matrusri Engineering...", coins: 119, streak: "1 Day...", solved: 1, init: "A", color: "bg-blue-500" },
];

function diffColor(d: string) {
  if (d === "Easy") return "text-emerald-500";
  if (d === "Medium") return "text-amber-500";
  return "text-red-500";
}
function diffBg(d: string) {
  if (d === "EASY") return "bg-emerald-200/60 text-emerald-900";
  if (d === "MEDIUM") return "bg-amber-200/60 text-amber-900";
  return "bg-red-200/60 text-red-900";
}

function CodingTrackPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 sm:gap-2 text-sm text-muted-foreground mb-4 sm:mb-6 flex-wrap">
        <Code2 className="size-4" />
        <span className="text-[var(--brand-purple)] font-medium">Practice</span>
        <ChevronRight className="size-3 sm:size-4" />
        <span className="text-foreground font-medium">Coding Track</span>
      </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4 xl:gap-6">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Challenge of the Day */}
            <section
              className="rounded-2xl p-6 text-white relative overflow-hidden"
              style={{ background: "var(--gradient-cod)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Challenge of the Day</h2>
                  <p className="text-white/80 text-sm mt-1 flex items-center gap-1">
                    <Flame className="size-4 text-orange-300" /> Streak active · 3/3 solved today
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="bg-white/15 backdrop-blur rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <Clock className="size-4" /> End in <span className="font-bold">07:06:40</span>
                  </div>
                  <p className="text-xs text-white/70 mt-2">
                    Total <Coins className="inline size-3 text-amber-300" /> +30 available
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {challenges.map((c) => (
                  <div key={c.title} className="bg-white/10 backdrop-blur rounded-xl px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <span className={`text-xs font-bold px-2 sm:px-3 py-1 rounded-md ${diffBg(c.level)} self-start`}>{c.level}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold line-through decoration-white/60">{c.title}</div>
                      <div className="text-xs text-white/80 flex flex-wrap items-center gap-2 sm:gap-3 mt-0.5">
                        <span>✓ {c.accuracy} accuracy</span>
                        <span>👥 {c.attempts} attempts</span>
                        <span className="flex items-center gap-1"><Coins className="size-3 text-amber-300" /> +{c.coins} coins</span>
                      </div>
                    </div>
                    <button className="bg-white/20 hover:bg-white/30 transition rounded-md px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold flex items-center gap-1 self-start">
                      ✓ Solved
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* COD Stats */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">COD Stats</h3>
                <Link
                  to="/coding-history"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-purple)] hover:text-[var(--brand-purple-2)] hover:underline transition"
                >
                  <History className="size-4" /> View History
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="rounded-xl border border-border bg-card p-3 sm:p-5">
                      <Icon className={`size-4 sm:size-5 ${s.color}`} />
                      <div className="mt-2 sm:mt-4 flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-bold">{s.value}</span>
                        {s.suffix && <span className="text-xs text-muted-foreground">{s.suffix}</span>}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Coding Plan */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Coding Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {plans.map((p) => (
                  <div key={p.title} className="rounded-xl border border-border bg-card p-3 flex items-center gap-3 hover:shadow-md transition">
                    <div className={`size-12 sm:size-16 rounded-lg ${p.color} grid place-items-center text-white font-bold text-lg sm:text-xl shrink-0`}>{p.code}</div>
                    <div className="min-w-0">
                      <div className="font-semibold truncate">{p.title}</div>
                      <div className="text-xs text-muted-foreground truncate">{p.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Topics */}
            <section className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6">
              {topics.map(([t, n]) => (
                <button key={t} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium hover:text-[var(--brand-purple)]">
                  {t}
                  <span className="text-xs text-muted-foreground bg-muted rounded-full px-1.5 sm:px-2 py-0.5">{n}</span>
                </button>
              ))}
              <button className="flex items-center gap-1 text-xs sm:text-sm font-semibold bg-lime-300 text-black rounded-md px-2 sm:px-3 py-1.5">
                Mathematic <ChevronDown className="size-3" />
                <span className="hidden sm:inline ml-1">Expand</span>
              </button>
            </section>

            {/* Search & filters */}
            <section className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="flex-1 relative">
                <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  placeholder="Search Questions"
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-card text-sm"
                />
              </div>
              <div className="flex gap-2 sm:gap-3">
                <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2.5 rounded-lg border border-border bg-card text-sm flex items-center gap-2 justify-center">
                  <span className="hidden sm:inline">Difficulty</span>
                  <span className="sm:hidden">Diff</span>
                  <ChevronDown className="size-3" />
                </button>
                <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2.5 rounded-lg border border-border bg-card text-sm flex items-center gap-2 justify-center">
                  <span className="hidden sm:inline">Status</span>
                  <span className="sm:hidden">Stat</span>
                  <ChevronDown className="size-3" />
                </button>
              </div>
            </section>

            {/* Question list */}
            <section>
              <div className="hidden md:grid grid-cols-[40px_1fr_80px_80px] px-4 py-2 text-sm text-muted-foreground">
                <div>Status</div>
                <div>Title</div>
                <div className="text-right">Acceptance</div>
                <div className="text-right">Difficulty</div>
              </div>
              <div className="space-y-2">
                {questions.map((q, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[40px_1fr] md:grid-cols-[40px_1fr_80px_80px] items-center px-3 sm:px-4 py-3 rounded-lg border border-border bg-card border-l-4 border-l-lime-300 gap-2 md:gap-0"
                  >
                    <div>
                      {q.status === "done" ? (
                        <CheckCircle2 className="size-4 sm:size-5 text-lime-500 fill-lime-200" />
                      ) : q.status === "attempted" ? (
                        <Timer className="size-4 sm:size-5 text-muted-foreground" />
                      ) : (
                        <Circle className="size-4 sm:size-5 text-muted-foreground/40" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate">{q.title}</div>
                      <div className="md:hidden flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">{q.acc}</span>
                        <span className={`text-xs font-medium ${diffColor(q.diff)}`}>{q.diff}</span>
                      </div>
                    </div>
                    <div className="hidden md:block text-right text-sm">{q.acc}</div>
                    <div className={`hidden md:block text-right text-sm font-medium ${diffColor(q.diff)}`}>{q.diff}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            {/* Calendar */}
            <div className="rounded-2xl border border-border bg-card p-3 sm:p-4">
              <div className="flex items-center justify-between mb-3">
                <button className="size-6 sm:size-7 grid place-items-center rounded-md bg-[var(--brand-purple)] text-white">
                  <ChevronLeft className="size-3 sm:size-4" />
                </button>
                <div className="font-bold text-[var(--brand-purple)] text-sm sm:text-base">May 2026</div>
                <button className="size-6 sm:size-7 grid place-items-center rounded-md bg-[var(--brand-purple)] text-white">
                  <ChevronRight className="size-3 sm:size-4" />
                </button>
              </div>
              <div className="grid grid-cols-7 text-center text-xs font-semibold text-[var(--brand-purple)] mb-2">
                {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => <div key={d} className="text-xs sm:text-sm">{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {Array.from({ length: 5 }).map((_, i) => <div key={`e${i}`} />)}
                {Array.from({ length: 31 }).map((_, i) => {
                  const d = i + 1;
                  const solved = [5,6,7,8].includes(d);
                  const today = d === 9;
                  const locked = d > 9;
                  return (
                    <div
                      key={d}
                      className={`aspect-square grid place-items-center rounded-md text-xs border ${
                        today
                          ? "bg-[var(--brand-purple)] text-white border-[var(--brand-purple)] font-bold"
                          : solved
                          ? "border-emerald-400 text-foreground"
                          : "border-border text-foreground"
                      } ${locked ? "text-muted-foreground/60" : ""}`}
                    >
                      {d}
                      {locked && <span className="text-[8px] absolute mt-4">🔒</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* My Practice */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="flex items-center justify-between p-4 text-white" style={{ background: "var(--gradient-cod)" }}>
                <h4 className="font-bold text-lg">My Practice</h4>
                <button className="text-xs font-semibold underline">View Badges</button>
              </div>
              <div className="p-5 text-center">
                <Award className="size-14 mx-auto text-amber-700" />
                <div className="font-bold text-amber-700 mt-2">Bronze</div>
                <div className="text-sm text-muted-foreground">11 Questions Solved</div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs">
                    <span>11/15</span>
                    <span className="text-muted-foreground">Next: Bronze</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-[var(--brand-purple)]" style={{ width: "73%" }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 mt-4 bg-muted rounded-lg overflow-hidden">
                  <div className="p-3">
                    <div className="text-xl font-bold text-[var(--brand-purple)]">38</div>
                    <div className="text-xs text-muted-foreground">Points</div>
                  </div>
                  <div className="p-3 border-l border-border">
                    <div className="text-xl font-bold text-[var(--brand-purple)]">3</div>
                    <div className="text-xs text-muted-foreground">Bucks</div>
                  </div>
                </div>
                <div className="mt-4 text-left">
                  <div className="font-semibold text-sm mb-2">Overall coding score</div>
                  <div className="text-xs flex justify-between mb-2"><span>My Rank: <b>124</b></span><span>My Points: <b>19/150</b></span></div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between"><span>Easy</span><span className="font-bold">8/820</span></div>
                    <div className="flex justify-between"><span>Hard</span><span className="font-bold">0/711</span></div>
                    <div className="flex justify-between"><span>Medium</span><span className="font-bold">1/1244</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trending Companies */}
            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold">Trending Companies</h4>
                <div className="flex gap-1">
                  <button className="size-6 grid place-items-center rounded border border-border"><ChevronLeft className="size-3" /></button>
                  <button className="size-6 grid place-items-center rounded border border-border"><ChevronRight className="size-3" /></button>
                </div>
              </div>
              <div className="relative mb-3">
                <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input placeholder="Search For Company..." className="w-full pl-9 pr-3 py-2 rounded-md border border-border bg-background text-sm" />
              </div>
              <div className="flex flex-wrap gap-2">
                {companies.map((c) => (
                  <div key={c.name} className="flex items-center gap-1 border border-border rounded-full pl-1 pr-2 py-0.5 text-xs">
                    <span className="size-5 rounded-full bg-muted grid place-items-center text-[9px] font-bold">{c.code}</span>
                    <span className="font-medium">{c.name}</span>
                    <span className="bg-lime-300 text-black rounded-full px-1.5 py-0.5 text-[10px] font-bold">{c.points}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Solvers */}
            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold flex items-center gap-2"><Trophy className="size-4 text-amber-500" /> Top Solvers (7 Days)</h4>
                <button className="text-xs font-semibold text-[var(--brand-purple)]">View Leaderboard</button>
              </div>
              <div className="space-y-3">
                {solvers.map((s) => (
                  <div key={s.rank} className="flex items-center gap-3">
                    <div className="text-sm font-bold text-muted-foreground w-6">#{s.rank}</div>
                    <div className={`size-10 rounded-md ${s.color} grid place-items-center text-white font-bold text-sm`}>{s.init}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">{s.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{s.college}</div>
                      <div className="text-[10px] text-muted-foreground flex gap-2 mt-0.5">
                        <span className="flex items-center gap-0.5"><Coins className="size-2.5 text-amber-500" />{s.coins} Coins</span>
                        <span className="flex items-center gap-0.5"><Flame className="size-2.5 text-orange-500" />{s.streak}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{s.solved}</div>
                      <div className="text-[10px] text-muted-foreground">SOLVED</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
  );
}

export default CodingTrackPage;