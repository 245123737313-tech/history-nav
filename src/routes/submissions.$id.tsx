import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import AppShell from "@/components/AppShell";
import { ChevronLeft, ChevronRight, FileText, History } from "lucide-react";

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
    difficulty: "Medium",
    description:
      "Given a sentence and an integer k, return the k most frequent words in the sentence sorted by frequency (highest first). If two words have the same frequency, sort them alphabetically.",
    constraints: ["1 <= k <= number of unique words", "Sentence contains only letters and spaces"],
    example: {
      input: "the day is sunny the the\n3",
      output: "['the', 'day', 'is']",
    },
    code: `from collections import Counter
import re

def topKFrequent(sentence, k):
    words = re.findall(r'\\b[a-z]+\\b', sentence.lower())
    freq = Counter(words)
    sorted_words = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
    return [word for word, _ in sorted_words[:k]]

# ---- User Input ----
sentence = input()
k = int(input())

result = topKFrequent(sentence, k)
print(result)`,
    submissions: [
      { time: "04/18/2026 12:50", result: "Pass", language: "Python" },
      { time: "04/18/2026 12:50", result: "Pass", language: "Python" },
    ],
  },
  {
    id: "p2",
    title: "Balanced Parentheses",
    difficulty: "Medium",
    description: "Given a string of brackets, determine whether they are balanced.",
    constraints: ["1 <= |s| <= 10^5"],
    example: { input: "(()())", output: "true" },
    code: `def isBalanced(s):\n    stack = []\n    pairs = {')':'(', ']':'[', '}':'{'}\n    for ch in s:\n        if ch in '([{':\n            stack.append(ch)\n        elif not stack or stack.pop() != pairs[ch]:\n            return False\n    return not stack\n\nprint(isBalanced(input()))`,
    submissions: [{ time: "04/17/2026 09:12", result: "Pass", language: "Python" }],
  },
  {
    id: "p3",
    title: "Longest Substring",
    difficulty: "Hard",
    description: "Find the length of the longest substring without repeating characters.",
    constraints: ["0 <= |s| <= 5 * 10^4"],
    example: { input: "abcabcbb", output: "3" },
    code: `def lengthOfLongestSubstring(s):\n    seen = {}\n    left = best = 0\n    for right, ch in enumerate(s):\n        if ch in seen and seen[ch] >= left:\n            left = seen[ch] + 1\n        seen[ch] = right\n        best = max(best, right - left + 1)\n    return best\n\nprint(lengthOfLongestSubstring(input()))`,
    submissions: [{ time: "04/16/2026 18:40", result: "Fail", language: "Python" }],
  },
];

function SubmissionPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("submission");

  const idx = Math.max(0, problems.findIndex((p) => p.id === id));
  const problem = problems[idx] ?? problems[0];
  const prev = problems[idx - 1];
  const next = problems[idx + 1];

  const goTo = (pid: string) => navigate({ to: "/submissions/$id", params: { id: pid } });

  return (
    <AppShell>
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm mb-4">
          <Link to="/" className="text-[var(--brand-purple)] font-medium hover:underline">Practice</Link>
          <ChevronRight className="size-3 text-muted-foreground" />
          <Link to="/coding-history" className="text-[var(--brand-purple)] font-medium hover:underline">Coding Track</Link>
          <ChevronRight className="size-3 text-muted-foreground" />
          <span className="font-semibold">{problem.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left panel */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTab("description")}
                  className={`inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-md ${
                    tab === "description" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <FileText className="size-4" /> Description
                </button>
                <button
                  onClick={() => setTab("submission")}
                  className={`inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full ${
                    tab === "submission"
                      ? "bg-[var(--easy)] text-emerald-900"
                      : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <History className="size-4" /> Submission
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => prev && goTo(prev.id)}
                  disabled={!prev}
                  className="size-8 grid place-items-center rounded-md border border-border disabled:opacity-40 hover:bg-muted"
                  aria-label="Previous question"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <span className="text-sm font-medium">{idx + 1}/{problems.length}</span>
                <button
                  onClick={() => next && goTo(next.id)}
                  disabled={!next}
                  className="size-8 grid place-items-center rounded-md border border-border disabled:opacity-40 hover:bg-muted"
                  aria-label="Next question"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>

            <div className="p-5">
              {tab === "submission" ? (
                <div>
                  <div className="grid grid-cols-3 px-4 py-2 text-sm font-semibold text-muted-foreground">
                    <div>Time (IST )</div>
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
              ) : (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">{problem.title}</h2>
                  <p className="text-sm leading-relaxed">{problem.description}</p>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Example</h3>
                    <pre className="text-xs bg-muted rounded-md p-3 whitespace-pre-wrap">Input:
{problem.example.input}

Output:
{problem.example.output}</pre>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Constraints</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {problem.constraints.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right panel — code */}
          <div className="rounded-2xl border border-border bg-[#0b1020] text-slate-100 overflow-hidden">
            <pre className="text-xs leading-6 p-5 overflow-auto font-mono">
{problem.code.split("\n").map((line, i) => (
  <div key={i} className="grid grid-cols-[2.5rem_1fr] gap-3">
    <span className="text-slate-500 text-right select-none">{i + 1}</span>
    <span>{line || " "}</span>
  </div>
))}
            </pre>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => prev && goTo(prev.id)}
            disabled={!prev}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card text-sm font-semibold disabled:opacity-40 hover:bg-muted"
          >
            <ChevronLeft className="size-4" /> Previous Question
          </button>
          <Link to="/coding-history" className="text-sm text-[var(--brand-purple)] hover:underline font-medium">
            Back to Coding History
          </Link>
          <button
            onClick={() => next && goTo(next.id)}
            disabled={!next}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--brand-purple)] text-white text-sm font-semibold disabled:opacity-40 hover:opacity-90"
          >
            Next Question <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </AppShell>
  );
}

export default SubmissionPage;