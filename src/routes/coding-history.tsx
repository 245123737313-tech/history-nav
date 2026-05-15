import { Link } from "react-router-dom";
import { useState } from "react";
import AppShell from "@/components/AppShell";
import {
  ChevronLeft,
  CheckCircle2,
  XCircle,
  Coins,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Problem = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "Solved" | "Attempted" | "Not Attempted";
};

const sampleProblems: Problem[][] = [
  [
    { id: "p1", title: "Two Sum Variant", difficulty: "Easy", status: "Solved" },
    { id: "p2", title: "Balanced Parentheses", difficulty: "Medium", status: "Solved" },
    { id: "p3", title: "Longest Substring", difficulty: "Hard", status: "Attempted" },
  ],
  [
    { id: "p4", title: "Reverse Linked List", difficulty: "Easy", status: "Solved" },
    { id: "p5", title: "Merge Intervals", difficulty: "Medium", status: "Solved" },
    { id: "p6", title: "Word Ladder", difficulty: "Hard", status: "Not Attempted" },
  ],
];

const history = Array.from({ length: 12 }).map((_, i) => ({
  date: `May ${9 - i}, 2026`,
  solved: Math.max(0, 3 - (i % 4)),
  total: 3,
  coins: Math.max(0, (3 - (i % 4)) * 10),
  status: i % 4 === 3 ? "missed" : "completed",
  problems: sampleProblems[i % sampleProblems.length],
}));

const rangeOptions = [
  { value: "1w", label: "Last 1 week" },
  { value: "30d", label: "Last 30 days" },
  { value: "6m", label: "Last 6 months" },
  { value: "1y", label: "Last 1 year" },
];

const diffClass = (d: Problem["difficulty"]) =>
  d === "Easy"
    ? "bg-emerald-100 text-emerald-700"
    : d === "Medium"
      ? "bg-amber-100 text-amber-700"
      : "bg-red-100 text-red-700";

function CodingHistory() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [range, setRange] = useState("30d");

  return (
    <AppShell>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 sm:gap-2 text-sm text-muted-foreground mb-4 sm:mb-6">
          <Link to="/" className="text-[var(--brand-purple)] font-medium hover:underline flex items-center gap-1">
            <ChevronLeft className="size-4" /> <span className="hidden sm:inline">Back to Coding Track</span>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Coding History</h1>
            <p className="text-muted-foreground text-sm mt-1">Track your daily challenge attempts and progress</p>
          </div>
          <Select value={range} onValueChange={setRange}>
            <SelectTrigger className="w-full sm:w-[180px] bg-card">
              <Calendar className="size-4 text-[var(--brand-purple)]" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {rangeOptions.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
            <div className="text-sm text-muted-foreground">Total Solved</div>
            <div className="text-2xl sm:text-3xl font-bold mt-1">11</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
            <div className="text-sm text-muted-foreground">Days Active</div>
            <div className="text-2xl sm:text-3xl font-bold mt-1">5</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
            <div className="text-sm text-muted-foreground">Coins Earned</div>
            <div className="text-2xl sm:text-3xl font-bold mt-1 flex items-center gap-2">124 <Coins className="size-4 sm:size-5 text-amber-500" /></div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          {/* Desktop Header */}
          <div className="hidden md:grid grid-cols-[1fr_120px_120px_120px_140px] px-4 sm:px-5 py-3 text-sm font-semibold text-muted-foreground border-b border-border">
            <div>Date</div>
            <div>Solved</div>
            <div>Coins</div>
            <div>Status</div>
            <div className="text-right">Action</div>
          </div>
          {history.map((h, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-border last:border-0">
                {/* Mobile Layout */}
                <div className="md:hidden p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{h.date}</div>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-purple)] hover:underline"
                      aria-expanded={isOpen}
                    >
                      View Details
                      {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">{h.solved}/{h.total} solved</span>
                      <div className="flex items-center gap-1 font-semibold"><Coins className="size-4 text-amber-500" /> {h.coins}</div>
                    </div>
                    {h.status === "completed" ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md"><CheckCircle2 className="size-3" /> Completed</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded-md"><XCircle className="size-3" /> Missed</span>
                    )}
                  </div>
                </div>
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-[1fr_120px_120px_120px_140px] px-4 sm:px-5 py-4 items-center hover:bg-muted/50">
                  <div className="font-medium">{h.date}</div>
                  <div className="font-semibold">{h.solved}/{h.total}</div>
                  <div className="flex items-center gap-1 font-semibold"><Coins className="size-4 text-amber-500" /> {h.coins}</div>
                  <div>
                    {h.status === "completed" ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md"><CheckCircle2 className="size-3" /> Completed</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded-md"><XCircle className="size-3" /> Missed</span>
                    )}
                  </div>
                  <div className="text-right">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-purple)] hover:underline"
                      aria-expanded={isOpen}
                    >
                      View Details
                      {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                    </button>
                  </div>
                </div>
                {isOpen && (
                  <div className="bg-muted/30 px-4 sm:px-5 py-4 border-t border-border">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Challenge of the Day — Problems
                    </div>
                    <div className="space-y-2">
                      {h.problems.map((p) => (
                        <div
                          key={p.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-border bg-card px-3 sm:px-4 py-3"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0">
                            <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${diffClass(p.difficulty)} self-start`}>{p.difficulty}</span>
                            <span className="font-medium truncate">{p.title}</span>
                            <span className={`text-xs font-semibold ${
                              p.status === "Solved"
                                ? "text-emerald-600"
                                : p.status === "Attempted"
                                  ? "text-amber-600"
                                  : "text-muted-foreground"
                            }`}>
                              {p.status}
                            </span>
                          </div>
                          <Link
                            to={`/submissions/${p.id}`}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-purple)] border border-[var(--brand-purple)]/30 hover:bg-[var(--brand-purple)]/10 px-3 py-1.5 rounded-md whitespace-nowrap self-start sm:self-auto"
                          >
                            View <ExternalLink className="size-3" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}

export default CodingHistory;