import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import AppShell from "@/components/AppShell";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  History,
  Timer,
  Zap,
  RotateCw,
  Maximize2,
  ThumbsUp,
  ThumbsDown,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/submissions/$id")({
  head: () => ({
    meta: [
      { title: "Submission — TaPTaP" },
      { name: "description", content: "View your submission, code, and question." },
    ],
  }),
  component: SubmissionPage,
});

type Tab = "description" | "submission";

const problems = [
  {
    id: "p1",
    title: "Top K Frequent Words",
    topic: "Hashing",
    difficulty: "medium",
    success: "52% success",
    description:
      "Given a sentence and an integer k, return the k most frequent words in the sentence sorted by frequency (highest first). If two words have the same frequency, sort them alphabetically.",
    constraints: ["1 <= k <= number of unique words", "Sentence contains only lowercase letters and spaces"],
    inputFormat: 'sentence = "the day is sunny the the"\nk = 3',
    outputFormat: "['the', 'day', 'is']",
    code: `from collections import Counter
import re

def topKFrequent(sentence, k):
    words = re.findall(r'\\b[a-z]+\\b', sentence.lower())
    freq = Counter(words)
    sorted_words = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
    return [word for word, _ in sorted_words[:k]]

sentence = input()
k = int(input())

print(topKFrequent(sentence, k))`,
    submissions: [
      { time: "04/18/2026 12:50", result: "Pass", language: "Python" },
      { time: "04/18/2026 12:50", result: "Pass", language: "Python" },
    ],
  },
  {
    id: "p2",
    title: "Balanced Parentheses",
    topic: "Stack",
    difficulty: "medium",
    success: "61% success",
    description: "Given a string of brackets, determine whether they are balanced.",
    constraints: ["1 <= |s| <= 10^5", "s consists only of '()[]{}'"],
    inputFormat: 's = "(()())"',
    outputFormat: "true",
    code: `def isBalanced(s):
    stack = []
    pairs = {')':'(', ']':'[', '}':'{'}
    for ch in s:
        if ch in '([{':
            stack.append(ch)
        elif not stack or stack.pop() != pairs[ch]:
            return False
    return not stack

print(isBalanced(input()))`,
    submissions: [{ time: "04/17/2026 09:12", result: "Pass", language: "Python" }],
  },
  {
    id: "p3",
    title: "Longest Substring",
    topic: "Sliding Window",
    difficulty: "hard",
    success: "34% success",
    description: "Find the length of the longest substring without repeating characters.",
    constraints: ["0 <= |s| <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces"],
    inputFormat: 's = "abcabcbb"',
    outputFormat: "3",
    code: `def lengthOfLongestSubstring(s):
    seen = {}
    left = best = 0
    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1
        seen[ch] = right
        best = max(best, right - left + 1)
    return best

print(lengthOfLongestSubstring(input()))`,
    submissions: [{ time: "04/16/2026 18:40", result: "Fail", language: "Python" }],
  },
];

const diffPill = (d: string) =>
  d === "easy"
    ? "bg-emerald-100 text-emerald-700"
    : d === "medium"
      ? "bg-amber-100 text-amber-700"
      : "bg-red-100 text-red-700";

function SubmissionPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("description");

  const idx = Math.max(0, problems.findIndex((p) => p.id === id));
  const problem = problems[idx] ?? problems[0];
  const prev = problems[idx - 1];
  const next = problems[idx + 1];

  const goTo = (pid: string) => navigate({ to: "/submissions/$id", params: { id: pid } });

  return (
    <AppShell>
      <div className="min-h-screen flex flex-col pb-[72px] relative">
        <div className="max-w-[1400px] mx-auto w-full flex-1 relative">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 sm:gap-2 text-sm mb-4 flex-wrap">
            <Link to="/" className="text-[var(--brand-purple)] font-medium hover:underline">Coding Track</Link>
            <ChevronRight className="size-3 text-muted-foreground" />
            <Link to="/coding-history" className="text-[var(--brand-purple)] font-medium hover:underline">Coding History</Link>
            <ChevronRight className="size-3 text-muted-foreground" />
            <span className="font-semibold truncate">{problem.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[calc(100vh-300px)]">
            {/* LEFT — Question / Submission */}
            <div className="rounded-2xl border border-border bg-card flex flex-col overflow-hidden">
              <div className="flex items-center gap-1 sm:gap-2 px-4 py-3 border-b border-border overflow-x-auto">
                <button
                  onClick={() => setTab("description")}
                  className={`inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full transition whitespace-nowrap ${
                    tab === "description"
                      ? "bg-[var(--easy)] text-emerald-900"
                      : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <FileText className="size-3 sm:size-4" /> Description
                </button>
                <button
                  onClick={() => setTab("submission")}
                  className={`inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full transition whitespace-nowrap ${
                    tab === "submission"
                      ? "bg-[var(--easy)] text-emerald-900"
                      : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <History className="size-3 sm:size-4" /> Submission
                </button>
              </div>

              <div className="p-5 overflow-auto flex-1">
                {tab === "description" ? (
                  <div className="space-y-5">
                    <h2 className="text-2xl font-bold">{problem.title}</h2>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-muted-foreground">{problem.topic}</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${diffPill(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted">{problem.success}</span>
                    </div>
                    <hr className="border-border" />

                    <div>
                      <h3 className="text-sm font-semibold mb-2">Problem Description</h3>
                      <div className="rounded-lg border border-border px-4 py-3 text-sm">
                        {problem.description}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold mb-2">Problem Constraints</h3>
                      <div className="rounded-lg border border-border px-4 py-3">
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {problem.constraints.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold mb-2">Input Format</h3>
                      <pre className="rounded-lg border border-border px-4 py-3 text-sm font-mono whitespace-pre-wrap">{problem.inputFormat}</pre>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold mb-2">Output Format</h3>
                      <pre className="rounded-lg border border-border px-4 py-3 text-sm font-mono whitespace-pre-wrap">{problem.outputFormat}</pre>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="grid grid-cols-3 px-4 py-2 text-sm font-semibold text-muted-foreground">
                      <div>Time (IST)</div>
                      <div>Result</div>
                      <div>Language</div>
                    </div>
                    <div className="space-y-3">
                      {problem.submissions.map((s, i) => (
                        <div key={i} className="grid grid-cols-3 items-center px-4 py-3 rounded-xl border border-border bg-background">
                          <div className="text-sm">{s.time}</div>
                          <div className={`text-sm font-medium ${s.result === "Pass" ? "text-emerald-600" : "text-red-600"}`}>{s.result}</div>
                          <div className="text-sm">{s.language}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT — Code panel */}
            <div className="rounded-2xl border border-border bg-[#0b1020] text-slate-100 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 gap-2">
                <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto min-w-0">
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-2 sm:px-3 py-1.5 rounded-full bg-white/5 whitespace-nowrap">
                    <Timer className="size-3.5" /> 00:00:00
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-2 sm:px-3 py-1.5 rounded-full bg-white/5 whitespace-nowrap">
                    <Zap className="size-3.5 text-yellow-400" /> score: 3/3
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-2 sm:px-3 py-1.5 rounded-full bg-white/5 whitespace-nowrap">
                    Python <ChevronDown className="size-3.5" />
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                  <button className="size-7 grid place-items-center rounded-md hover:bg-white/10">
                    <RotateCw className="size-3 sm:size-4" />
                  </button>
                  <button className="size-7 grid place-items-center rounded-md hover:bg-white/10">
                    <Maximize2 className="size-3 sm:size-4" />
                  </button>
                </div>
              </div>

              <pre className="text-xs leading-6 p-5 overflow-auto font-mono flex-1">
{problem.code.split("\n").map((line, i) => (
  <div key={i} className="grid grid-cols-[2.5rem_1fr] gap-3">
    <span className="text-slate-500 text-right select-none">{i + 1}</span>
    <span>{line || " "}</span>
  </div>
))}
              </pre>
            </div>
          </div>
        </div>

        {/* Page Footer */}
        <div className="fixed bottom-0 left-0 right-0 lg:left-64 bg-card border-t border-border z-40 shadow-[0_-8px_30px_-20px_rgba(0,0,0,0.35)]">
          <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-4 py-3 gap-2 sm:gap-0">
            <button
              onClick={() => prev && goTo(prev.id)}
              disabled={!prev}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 text-sm font-semibold px-4 py-2 rounded-md border border-border disabled:opacity-40 hover:bg-muted"
            >
              <ChevronLeft className="size-4" /> Previous
            </button>
            <button
              onClick={() => next && goTo(next.id)}
              disabled={!next}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 text-sm font-semibold px-4 py-2 rounded-full bg-[var(--easy)] text-emerald-900 disabled:opacity-40 hover:opacity-90"
            >
              Next Question <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

export default SubmissionPage;
