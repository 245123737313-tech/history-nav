import { createFileRoute, Link } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { ChevronLeft, CheckCircle2, XCircle, Coins, Calendar } from "lucide-react";

export const Route = createFileRoute("/coding-history")({
  head: () => ({
    meta: [
      { title: "Coding History — TaPTaP" },
      { name: "description", content: "Your past Challenge of the Day attempts and progress." },
    ],
  }),
  component: CodingHistory,
});

const history = Array.from({ length: 12 }).map((_, i) => ({
  date: `May ${9 - i}, 2026`,
  solved: Math.max(0, 3 - (i % 4)),
  total: 3,
  coins: Math.max(0, (3 - (i % 4)) * 10),
  status: i % 4 === 3 ? "missed" : "completed",
}));

function CodingHistory() {
  return (
    <AppShell>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="text-[var(--brand-purple)] font-medium hover:underline flex items-center gap-1">
            <ChevronLeft className="size-4" /> Back to Coding Track
          </Link>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Coding History</h1>
            <p className="text-muted-foreground text-sm mt-1">Track your daily challenge attempts and progress</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm">
            <Calendar className="size-4 text-[var(--brand-purple)]" />
            Last 30 days
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-sm text-muted-foreground">Total Solved</div>
            <div className="text-3xl font-bold mt-1">11</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-sm text-muted-foreground">Days Active</div>
            <div className="text-3xl font-bold mt-1">5</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-sm text-muted-foreground">Coins Earned</div>
            <div className="text-3xl font-bold mt-1 flex items-center gap-2">124 <Coins className="size-5 text-amber-500" /></div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-[1fr_120px_120px_120px_120px] px-5 py-3 text-sm font-semibold text-muted-foreground border-b border-border">
            <div>Date</div>
            <div>Solved</div>
            <div>Coins</div>
            <div>Status</div>
            <div className="text-right">Action</div>
          </div>
          {history.map((h, i) => (
            <div key={i} className="grid grid-cols-[1fr_120px_120px_120px_120px] px-5 py-4 items-center border-b border-border last:border-0 hover:bg-muted/50">
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
                <a href="#" className="text-sm font-semibold text-[var(--brand-purple)] hover:underline">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

export default CodingHistory;