import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, useNavigate, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { X, LayoutGrid, MessageSquare, GraduationCap, Code2, Trophy, Rocket, Briefcase, Plane, Building2, Headphones, ChevronDown, Menu, Flame, Cookie, Code, Network, Bell, ChevronRight, Clock, Coins, History, CheckCircle2, Hourglass, Zap, Search, Timer, Circle, ChevronLeft, Award, Check, ChevronUp, Calendar, XCircle, ExternalLink, FileText, RotateCw, Maximize2 } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const appCss = "/assets/styles-D7JGMxFI.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const nav = [
  { label: "Dashboard", icon: LayoutGrid, to: "/" },
  { label: "Socials", icon: MessageSquare, to: "/" },
  {
    label: "Learn",
    icon: GraduationCap,
    to: "/",
    expandable: true
  },
  {
    label: "Employability Track",
    icon: Code2,
    to: "/",
    expandable: true,
    children: [
      { label: "Coding Track", to: "/" },
      { label: "Aptitude Track", to: "/" },
      { label: "Verbal Track", to: "/" },
      { label: "Case Study Track", to: "/" },
      { label: "System Design Track", to: "/" },
      { label: "Smart Interview", to: "/" }
    ]
  },
  { label: "Prepare", icon: Trophy, to: "/", expandable: true },
  { label: "Compete", icon: Rocket, to: "/", expandable: true },
  { label: "Job Posts", icon: Briefcase, to: "/" },
  { label: "Study Abroad", icon: Plane, to: "/", expandable: true },
  { label: "My College", icon: Building2, to: "/" },
  { label: "Support", icon: Headphones, to: "/", expandable: true }
];
function AppShell({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex bg-[var(--brand-sidebar)] text-[var(--brand-sidebar-foreground)]", children: [
    mobileMenuOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
        onClick: () => setMobileMenuOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs("aside", { className: `fixed inset-y-0 left-0 z-50 w-64 flex flex-col py-4 px-3 gap-1 overflow-y-auto transition-transform duration-300 ease-in-out bg-[var(--brand-sidebar)] ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:static lg:translate-x-0 lg:flex lg:h-screen`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2 py-3", children: [
        /* @__PURE__ */ jsx("div", { className: "size-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 grid place-items-center text-xs font-bold", children: "T" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold leading-none", children: "TaPTaP" }),
          /* @__PURE__ */ jsx("div", { className: "text-[11px] text-white/60 leading-tight", children: "by Blackbucks" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "mx-2 mb-2 size-9 grid place-items-center rounded-md hover:bg-white/5 lg:hidden",
          onClick: () => setMobileMenuOpen(false),
          children: /* @__PURE__ */ jsx(X, { className: "size-4" })
        }
      ),
      /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-0.5 px-1", children: nav.map((item) => {
        const Icon = item.icon;
        const active = item.label === "Employability Track";
        return /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: item.to,
              className: `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${active ? "bg-white/5" : "hover:bg-white/5"}`,
              onClick: () => setMobileMenuOpen(false),
              children: [
                /* @__PURE__ */ jsx(Icon, { className: "size-[18px] text-white/80" }),
                /* @__PURE__ */ jsx("span", { className: "flex-1", children: item.label }),
                item.expandable && /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 text-white/50" })
              ]
            }
          ),
          item.children && /* @__PURE__ */ jsx("div", { className: "ml-3 pl-4 border-l border-white/10 mt-1 mb-1 flex flex-col gap-0.5", children: item.children.map((c) => {
            const isActive = c.label === "Coding Track";
            return /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/",
                className: `relative text-sm px-3 py-2 rounded-md transition-colors ${isActive ? "bg-[var(--brand-purple)]/15 text-white font-medium" : "text-white/70 hover:text-white hover:bg-white/5"}`,
                onClick: () => setMobileMenuOpen(false),
                children: [
                  /* @__PURE__ */ jsx("span", { className: `absolute -left-[17px] top-1/2 -translate-y-1/2 size-2 rounded-full ${isActive ? "bg-emerald-400" : "bg-white/30"}` }),
                  c.label
                ]
              },
              c.label
            );
          }) })
        ] }, item.label);
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-20 bg-[var(--brand-sidebar)] px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "lg:hidden size-9 grid place-items-center rounded-md hover:bg-white/5",
            onClick: () => setMobileMenuOpen(true),
            children: /* @__PURE__ */ jsx(Menu, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block w-9" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-2 md:gap-3 flex-1 justify-end min-w-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-2 bg-white/5 rounded-full pl-1 pr-2 sm:pr-4 py-1", children: [
            /* @__PURE__ */ jsx("span", { className: "size-7 grid place-items-center rounded-full bg-[var(--brand-purple-soft)] text-[10px] font-bold text-black", children: "NA" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold hidden md:inline", children: "MET Score" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2 bg-white/5 rounded-full pl-1 pr-4 py-1", children: [
            /* @__PURE__ */ jsx("span", { className: "size-7 grid place-items-center rounded-full bg-[var(--brand-purple-soft)] text-[10px] font-bold text-black", children: "NA" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold", children: "MET Band" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 bg-white/5 rounded-full px-2 sm:px-3 py-1.5", children: [
            /* @__PURE__ */ jsx(Flame, { className: "size-4 text-orange-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold", children: "6" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden xs:flex items-center gap-1 bg-white/5 rounded-full px-2 sm:px-3 py-1.5", children: [
            /* @__PURE__ */ jsx(Cookie, { className: "size-4 text-amber-500" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold", children: "124" })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "size-8 sm:size-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10", children: /* @__PURE__ */ jsx(Code, { className: "size-3 sm:size-4" }) }),
          /* @__PURE__ */ jsx("button", { className: "hidden sm:grid size-9 place-items-center rounded-full bg-white/5 hover:bg-white/10", children: /* @__PURE__ */ jsx(Network, { className: "size-4" }) }),
          /* @__PURE__ */ jsx("button", { className: "size-8 sm:size-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10", children: /* @__PURE__ */ jsx(Bell, { className: "size-3 sm:size-4" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-2 bg-white/5 rounded-full pl-1 pr-2 sm:pr-3 py-1 min-w-0", children: [
            /* @__PURE__ */ jsx("span", { className: "size-6 sm:size-8 grid place-items-center rounded-full bg-pink-500 text-[10px] sm:text-xs font-bold", children: "C" }),
            /* @__PURE__ */ jsxs("div", { className: "hidden sm:block text-right min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs font-bold leading-tight truncate", children: "Sravan" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-white/60 leading-tight truncate", children: "MVSR Engineering Col..." })
            ] }),
            /* @__PURE__ */ jsx(ChevronDown, { className: "size-3 sm:size-4 text-white/60" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 bg-background text-foreground rounded-tl-2xl p-4 sm:p-6 md:p-8", children })
    ] })
  ] });
}
const Route$3 = createFileRoute("/coding-track")({
  head: () => ({
    meta: [
      { title: "Coding Track — TaPTaP" },
      { name: "description", content: "Daily coding challenges, plans, and practice." }
    ]
  }),
  component: CodingTrackPage
});
const challenges = [
  { level: "EASY", title: "Count Negative Numbers in a Sorted Matrix", accuracy: "92.31%", attempts: 13, coins: 5 },
  { level: "MEDIUM", title: "Compare Strings by Frequency of the Smallest Character", accuracy: "100%", attempts: 4, coins: 10 },
  { level: "HARD", title: "Change Minimum Characters to Satisfy One of Three Conditions", accuracy: "50%", attempts: 6, coins: 15 }
];
const stats = [
  { icon: CheckCircle2, color: "text-emerald-500", value: "11", label: "Solved" },
  { icon: Hourglass, color: "text-blue-500", value: "269", label: "Missed" },
  { icon: Flame, color: "text-orange-500", value: "5", suffix: "days", label: "Current Streak" },
  { icon: Trophy, color: "text-amber-500", value: "5", suffix: "days", label: "Longest Streak" },
  { icon: Zap, color: "text-pink-500", value: "0.57", suffix: "mins", label: "Fastest Solved" }
];
const plans = [
  { code: "AW", title: "Algorithm Wizards 50", subtitle: "Unleashing the Magic of...", color: "bg-amber-700" },
  { code: "MM", title: "Mathematical Minds 50", subtitle: "Unleashing the Power of Math.", color: "bg-slate-400" },
  { code: "PP", title: "Pattern Pioneers 30", subtitle: "Crafting Tomorrow, One Patter...", color: "bg-orange-800" },
  { code: "GG", title: "Graph Gurus 25", subtitle: "Navigating the Complexities of...", color: "bg-indigo-900" },
  { code: "SS", title: "Sorting Sages 80", subtitle: "Sorting Solutions with Sage...", color: "bg-lime-400" },
  { code: "SS", title: "String Sorcerers 100", subtitle: "Weaving Wonders with Every...", color: "bg-blue-500" }
];
const topics = [
  ["Dynamic Programming", 375],
  ["Array", 276],
  ["Strings", 207],
  ["Greedy Algorithms", 156],
  ["Binary Search", 120]
];
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
  { status: "done", title: "Palindrome lover", acc: "67%", diff: "Easy" }
];
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
  { code: "cg", name: "Cognizant GenC Elevate", points: 712 }
];
const solvers = [
  { rank: 1, name: "Sravan REDDY", college: "MVSR Engineering...", coins: 140, streak: "5 Day...", solved: 8, init: "C", color: "bg-pink-500" },
  { rank: 2, name: "Ishrath Jasmine", college: "Kakatiya Institute Of...", coins: 61, streak: "0 Day Streak", solved: 1, init: "IJ", color: "bg-emerald-500" },
  { rank: 3, name: "Akshay Raj", college: "Matrusri Engineering...", coins: 44, streak: "0 Day Streak", solved: 1, init: "AR", color: "bg-orange-500" },
  { rank: 4, name: "Mohan Burgula", college: "MVSR Engineering...", coins: 9, streak: "0 Day Streak", solved: 1, init: "M", color: "bg-amber-700" },
  { rank: 5, name: "Praveen A", college: "Matrusri Engineering...", coins: 119, streak: "1 Day...", solved: 1, init: "A", color: "bg-blue-500" }
];
function diffColor(d) {
  if (d === "Easy") return "text-emerald-500";
  if (d === "Medium") return "text-amber-500";
  return "text-red-500";
}
function diffBg(d) {
  if (d === "EASY") return "bg-emerald-200/60 text-emerald-900";
  if (d === "MEDIUM") return "bg-amber-200/60 text-amber-900";
  return "bg-red-200/60 text-red-900";
}
function CodingTrackPage() {
  return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-2 text-sm text-muted-foreground mb-4 sm:mb-6 flex-wrap", children: [
      /* @__PURE__ */ jsx(Code2, { className: "size-4" }),
      /* @__PURE__ */ jsx("span", { className: "text-[var(--brand-purple)] font-medium", children: "Practice" }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "size-3 sm:size-4" }),
      /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Coding Track" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4 xl:gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs(
          "section",
          {
            className: "rounded-2xl p-6 text-white relative overflow-hidden",
            style: { background: "var(--gradient-cod)" },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold", children: "Challenge of the Day" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-white/80 text-sm mt-1 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Flame, { className: "size-4 text-orange-300" }),
                    " Streak active · 3/3 solved today"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-left sm:text-right", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-white/15 backdrop-blur rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "size-4" }),
                    " End in ",
                    /* @__PURE__ */ jsx("span", { className: "font-bold", children: "07:06:40" })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-white/70 mt-2", children: [
                    "Total ",
                    /* @__PURE__ */ jsx(Coins, { className: "inline size-3 text-amber-300" }),
                    " +30 available"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: challenges.map((c) => /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur rounded-xl px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4", children: [
                /* @__PURE__ */ jsx("span", { className: `text-xs font-bold px-2 sm:px-3 py-1 rounded-md ${diffBg(c.level)} self-start`, children: c.level }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold line-through decoration-white/60", children: c.title }),
                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-white/80 flex flex-wrap items-center gap-2 sm:gap-3 mt-0.5", children: [
                    /* @__PURE__ */ jsxs("span", { children: [
                      "✓ ",
                      c.accuracy,
                      " accuracy"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      "👥 ",
                      c.attempts,
                      " attempts"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Coins, { className: "size-3 text-amber-300" }),
                      " +",
                      c.coins,
                      " coins"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("button", { className: "bg-white/20 hover:bg-white/30 transition rounded-md px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold flex items-center gap-1 self-start", children: "✓ Solved" })
              ] }, c.title)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold", children: "COD Stats" }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/coding-history",
                className: "inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-purple)] hover:text-[var(--brand-purple-2)] hover:underline transition",
                children: [
                  /* @__PURE__ */ jsx(History, { className: "size-4" }),
                  " View History"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4", children: stats.map((s) => {
            const Icon = s.icon;
            return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-3 sm:p-5", children: [
              /* @__PURE__ */ jsx(Icon, { className: `size-4 sm:size-5 ${s.color}` }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 sm:mt-4 flex items-baseline gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-2xl sm:text-3xl font-bold", children: s.value }),
                s.suffix && /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: s.suffix })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-xs sm:text-sm text-muted-foreground mt-1", children: s.label })
            ] }, s.label);
          }) })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Coding Plan" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4", children: plans.map((p) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-3 flex items-center gap-3 hover:shadow-md transition", children: [
            /* @__PURE__ */ jsx("div", { className: `size-12 sm:size-16 rounded-lg ${p.color} grid place-items-center text-white font-bold text-lg sm:text-xl shrink-0`, children: p.code }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold truncate", children: p.title }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground truncate", children: p.subtitle })
            ] })
          ] }, p.title)) })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6", children: [
          topics.map(([t, n]) => /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium hover:text-[var(--brand-purple)]", children: [
            t,
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground bg-muted rounded-full px-1.5 sm:px-2 py-0.5", children: n })
          ] }, t)),
          /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-1 text-xs sm:text-sm font-semibold bg-lime-300 text-black rounded-md px-2 sm:px-3 py-1.5", children: [
            "Mathematic ",
            /* @__PURE__ */ jsx(ChevronDown, { className: "size-3" }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline ml-1", children: "Expand" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "flex flex-col sm:flex-row gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 relative", children: [
            /* @__PURE__ */ jsx(Search, { className: "size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                placeholder: "Search Questions",
                className: "w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-card text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxs("button", { className: "flex-1 sm:flex-none px-3 sm:px-4 py-2.5 rounded-lg border border-border bg-card text-sm flex items-center gap-2 justify-center", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Difficulty" }),
              /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Diff" }),
              /* @__PURE__ */ jsx(ChevronDown, { className: "size-3" })
            ] }),
            /* @__PURE__ */ jsxs("button", { className: "flex-1 sm:flex-none px-3 sm:px-4 py-2.5 rounded-lg border border-border bg-card text-sm flex items-center gap-2 justify-center", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Status" }),
              /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Stat" }),
              /* @__PURE__ */ jsx(ChevronDown, { className: "size-3" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsxs("div", { className: "hidden md:grid grid-cols-[40px_1fr_80px_80px] px-4 py-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("div", { children: "Status" }),
            /* @__PURE__ */ jsx("div", { children: "Title" }),
            /* @__PURE__ */ jsx("div", { className: "text-right", children: "Acceptance" }),
            /* @__PURE__ */ jsx("div", { className: "text-right", children: "Difficulty" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: questions.map((q, i) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "grid grid-cols-[40px_1fr] md:grid-cols-[40px_1fr_80px_80px] items-center px-3 sm:px-4 py-3 rounded-lg border border-border bg-card border-l-4 border-l-lime-300 gap-2 md:gap-0",
              children: [
                /* @__PURE__ */ jsx("div", { children: q.status === "done" ? /* @__PURE__ */ jsx(CheckCircle2, { className: "size-4 sm:size-5 text-lime-500 fill-lime-200" }) : q.status === "attempted" ? /* @__PURE__ */ jsx(Timer, { className: "size-4 sm:size-5 text-muted-foreground" }) : /* @__PURE__ */ jsx(Circle, { className: "size-4 sm:size-5 text-muted-foreground/40" }) }),
                /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium truncate", children: q.title }),
                  /* @__PURE__ */ jsxs("div", { className: "md:hidden flex items-center gap-2 mt-1", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: q.acc }),
                    /* @__PURE__ */ jsx("span", { className: `text-xs font-medium ${diffColor(q.diff)}`, children: q.diff })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "hidden md:block text-right text-sm", children: q.acc }),
                /* @__PURE__ */ jsx("div", { className: `hidden md:block text-right text-sm font-medium ${diffColor(q.diff)}`, children: q.diff })
              ]
            },
            i
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-3 sm:p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsx("button", { className: "size-6 sm:size-7 grid place-items-center rounded-md bg-[var(--brand-purple)] text-white", children: /* @__PURE__ */ jsx(ChevronLeft, { className: "size-3 sm:size-4" }) }),
            /* @__PURE__ */ jsx("div", { className: "font-bold text-[var(--brand-purple)] text-sm sm:text-base", children: "May 2026" }),
            /* @__PURE__ */ jsx("button", { className: "size-6 sm:size-7 grid place-items-center rounded-md bg-[var(--brand-purple)] text-white", children: /* @__PURE__ */ jsx(ChevronRight, { className: "size-3 sm:size-4" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 text-center text-xs font-semibold text-[var(--brand-purple)] mb-2", children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => /* @__PURE__ */ jsx("div", { className: "text-xs sm:text-sm", children: d }, d)) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-7 gap-1 text-center text-sm", children: [
            Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx("div", {}, `e${i}`)),
            Array.from({ length: 31 }).map((_, i) => {
              const d = i + 1;
              const solved = [5, 6, 7, 8].includes(d);
              const today = d === 9;
              const locked = d > 9;
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `aspect-square grid place-items-center rounded-md text-xs border ${today ? "bg-[var(--brand-purple)] text-white border-[var(--brand-purple)] font-bold" : solved ? "border-emerald-400 text-foreground" : "border-border text-foreground"} ${locked ? "text-muted-foreground/60" : ""}`,
                  children: [
                    d,
                    locked && /* @__PURE__ */ jsx("span", { className: "text-[8px] absolute mt-4", children: "🔒" })
                  ]
                },
                d
              );
            })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 text-white", style: { background: "var(--gradient-cod)" }, children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg", children: "My Practice" }),
            /* @__PURE__ */ jsx("button", { className: "text-xs font-semibold underline", children: "View Badges" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 text-center", children: [
            /* @__PURE__ */ jsx(Award, { className: "size-14 mx-auto text-amber-700" }),
            /* @__PURE__ */ jsx("div", { className: "font-bold text-amber-700 mt-2", children: "Bronze" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "11 Questions Solved" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs", children: [
                /* @__PURE__ */ jsx("span", { children: "11/15" }),
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Next: Bronze" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-2 bg-muted rounded-full mt-1 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-[var(--brand-purple)]", style: { width: "73%" } }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 mt-4 bg-muted rounded-lg overflow-hidden", children: [
              /* @__PURE__ */ jsxs("div", { className: "p-3", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-[var(--brand-purple)]", children: "38" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Points" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-3 border-l border-border", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-[var(--brand-purple)]", children: "3" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Bucks" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm mb-2", children: "Overall coding score" }),
              /* @__PURE__ */ jsxs("div", { className: "text-xs flex justify-between mb-2", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "My Rank: ",
                  /* @__PURE__ */ jsx("b", { children: "124" })
                ] }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "My Points: ",
                  /* @__PURE__ */ jsx("b", { children: "19/150" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { children: "Easy" }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: "8/820" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { children: "Hard" }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: "0/711" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { children: "Medium" }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: "1/1244" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold", children: "Trending Companies" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsx("button", { className: "size-6 grid place-items-center rounded border border-border", children: /* @__PURE__ */ jsx(ChevronLeft, { className: "size-3" }) }),
              /* @__PURE__ */ jsx("button", { className: "size-6 grid place-items-center rounded border border-border", children: /* @__PURE__ */ jsx(ChevronRight, { className: "size-3" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative mb-3", children: [
            /* @__PURE__ */ jsx(Search, { className: "size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsx("input", { placeholder: "Search For Company...", className: "w-full pl-9 pr-3 py-2 rounded-md border border-border bg-background text-sm" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: companies.map((c) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 border border-border rounded-full pl-1 pr-2 py-0.5 text-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "size-5 rounded-full bg-muted grid place-items-center text-[9px] font-bold", children: c.code }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: c.name }),
            /* @__PURE__ */ jsx("span", { className: "bg-lime-300 text-black rounded-full px-1.5 py-0.5 text-[10px] font-bold", children: c.points })
          ] }, c.name)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Trophy, { className: "size-4 text-amber-500" }),
              " Top Solvers (7 Days)"
            ] }),
            /* @__PURE__ */ jsx("button", { className: "text-xs font-semibold text-[var(--brand-purple)]", children: "View Leaderboard" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: solvers.map((s) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold text-muted-foreground w-6", children: [
              "#",
              s.rank
            ] }),
            /* @__PURE__ */ jsx("div", { className: `size-10 rounded-md ${s.color} grid place-items-center text-white font-bold text-sm`, children: s.init }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold truncate", children: s.name }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground truncate", children: s.college }),
              /* @__PURE__ */ jsxs("div", { className: "text-[10px] text-muted-foreground flex gap-2 mt-0.5", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ jsx(Coins, { className: "size-2.5 text-amber-500" }),
                  s.coins,
                  " Coins"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ jsx(Flame, { className: "size-2.5 text-orange-500" }),
                  s.streak
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", children: s.solved }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-muted-foreground", children: "SOLVED" })
            ] })
          ] }, s.rank)) })
        ] })
      ] })
    ] })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const Route$2 = createFileRoute("/coding-history")({
  head: () => ({
    meta: [
      { title: "Coding History — TaPTaP" },
      { name: "description", content: "Your past Challenge of the Day attempts and progress." }
    ]
  }),
  component: CodingHistory
});
const sampleProblems = [
  [
    { id: "p1", title: "Two Sum Variant", difficulty: "Easy", status: "Solved" },
    { id: "p2", title: "Balanced Parentheses", difficulty: "Medium", status: "Solved" },
    { id: "p3", title: "Longest Substring", difficulty: "Hard", status: "Attempted" }
  ],
  [
    { id: "p4", title: "Reverse Linked List", difficulty: "Easy", status: "Solved" },
    { id: "p5", title: "Merge Intervals", difficulty: "Medium", status: "Solved" },
    { id: "p6", title: "Word Ladder", difficulty: "Hard", status: "Not Attempted" }
  ]
];
const history = Array.from({ length: 12 }).map((_, i) => ({
  date: `May ${9 - i}, 2026`,
  solved: Math.max(0, 3 - i % 4),
  total: 3,
  coins: Math.max(0, (3 - i % 4) * 10),
  status: i % 4 === 3 ? "missed" : "completed",
  problems: sampleProblems[i % sampleProblems.length]
}));
const rangeOptions = [
  { value: "1w", label: "Last 1 week" },
  { value: "30d", label: "Last 30 days" },
  { value: "6m", label: "Last 6 months" },
  { value: "1y", label: "Last 1 year" }
];
const diffClass = (d) => d === "Easy" ? "bg-emerald-100 text-emerald-700" : d === "Medium" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700";
function CodingHistory() {
  const [openIndex, setOpenIndex] = useState(null);
  const [range, setRange] = useState("30d");
  return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 sm:gap-2 text-sm text-muted-foreground mb-4 sm:mb-6", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "text-[var(--brand-purple)] font-medium hover:underline flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(ChevronLeft, { className: "size-4" }),
      " ",
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Back to Coding Track" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-bold", children: "Coding History" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Track your daily challenge attempts and progress" })
      ] }),
      /* @__PURE__ */ jsxs(Select, { value: range, onValueChange: setRange, children: [
        /* @__PURE__ */ jsxs(SelectTrigger, { className: "w-full sm:w-[180px] bg-card", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "size-4 text-[var(--brand-purple)]" }),
          /* @__PURE__ */ jsx(SelectValue, {})
        ] }),
        /* @__PURE__ */ jsx(SelectContent, { children: rangeOptions.map((o) => /* @__PURE__ */ jsx(SelectItem, { value: o.value, children: o.label }, o.value)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-4 sm:p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Total Solved" }),
        /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-bold mt-1", children: "11" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-4 sm:p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Days Active" }),
        /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-bold mt-1", children: "5" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-4 sm:p-5 sm:col-span-2 lg:col-span-1", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Coins Earned" }),
        /* @__PURE__ */ jsxs("div", { className: "text-2xl sm:text-3xl font-bold mt-1 flex items-center gap-2", children: [
          "124 ",
          /* @__PURE__ */ jsx(Coins, { className: "size-4 sm:size-5 text-amber-500" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden md:grid grid-cols-[1fr_120px_120px_120px_140px] px-4 sm:px-5 py-3 text-sm font-semibold text-muted-foreground border-b border-border", children: [
        /* @__PURE__ */ jsx("div", { children: "Date" }),
        /* @__PURE__ */ jsx("div", { children: "Solved" }),
        /* @__PURE__ */ jsx("div", { children: "Coins" }),
        /* @__PURE__ */ jsx("div", { children: "Status" }),
        /* @__PURE__ */ jsx("div", { className: "text-right", children: "Action" })
      ] }),
      history.map((h, i) => {
        const isOpen = openIndex === i;
        return /* @__PURE__ */ jsxs("div", { className: "border-b border-border last:border-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:hidden p-4 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: h.date }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setOpenIndex(isOpen ? null : i),
                  className: "inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-purple)] hover:underline",
                  "aria-expanded": isOpen,
                  children: [
                    "View Details",
                    isOpen ? /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                  h.solved,
                  "/",
                  h.total,
                  " solved"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 font-semibold", children: [
                  /* @__PURE__ */ jsx(Coins, { className: "size-4 text-amber-500" }),
                  " ",
                  h.coins
                ] })
              ] }),
              h.status === "completed" ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "size-3" }),
                " Completed"
              ] }) : /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded-md", children: [
                /* @__PURE__ */ jsx(XCircle, { className: "size-3" }),
                " Missed"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:grid grid-cols-[1fr_120px_120px_120px_140px] px-4 sm:px-5 py-4 items-center hover:bg-muted/50", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: h.date }),
            /* @__PURE__ */ jsxs("div", { className: "font-semibold", children: [
              h.solved,
              "/",
              h.total
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 font-semibold", children: [
              /* @__PURE__ */ jsx(Coins, { className: "size-4 text-amber-500" }),
              " ",
              h.coins
            ] }),
            /* @__PURE__ */ jsx("div", { children: h.status === "completed" ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "size-3" }),
              " Completed"
            ] }) : /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded-md", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "size-3" }),
              " Missed"
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setOpenIndex(isOpen ? null : i),
                className: "inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-purple)] hover:underline",
                "aria-expanded": isOpen,
                children: [
                  "View Details",
                  isOpen ? /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
                ]
              }
            ) })
          ] }),
          isOpen && /* @__PURE__ */ jsxs("div", { className: "bg-muted/30 px-4 sm:px-5 py-4 border-t border-border", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3", children: "Challenge of the Day — Problems" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: h.problems.map((p) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-border bg-card px-3 sm:px-4 py-3",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0", children: [
                    /* @__PURE__ */ jsx("span", { className: `text-[10px] font-bold uppercase px-2 py-1 rounded ${diffClass(p.difficulty)} self-start`, children: p.difficulty }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium truncate", children: p.title }),
                    /* @__PURE__ */ jsx("span", { className: `text-xs font-semibold ${p.status === "Solved" ? "text-emerald-600" : p.status === "Attempted" ? "text-amber-600" : "text-muted-foreground"}`, children: p.status })
                  ] }),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/submissions/$id",
                      params: { id: p.id },
                      className: "inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-purple)] border border-[var(--brand-purple)]/30 hover:bg-[var(--brand-purple)]/10 px-3 py-1.5 rounded-md whitespace-nowrap self-start sm:self-auto",
                      children: [
                        "View ",
                        /* @__PURE__ */ jsx(ExternalLink, { className: "size-3" })
                      ]
                    }
                  )
                ]
              },
              p.id
            )) })
          ] })
        ] }, i);
      })
    ] })
  ] }) });
}
const $$splitComponentImporter = () => import("./index-BFys4Muk.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const Route = createFileRoute("/submissions/$id")({
  head: () => ({
    meta: [
      { title: "Submission — TaPTaP" },
      { name: "description", content: "View your submission, code, and question." }
    ]
  }),
  component: SubmissionPage
});
const problems = [
  {
    id: "p1",
    title: "Top K Frequent Words",
    topic: "Hashing",
    difficulty: "medium",
    success: "52% success",
    description: "Given a sentence and an integer k, return the k most frequent words in the sentence sorted by frequency (highest first). If two words have the same frequency, sort them alphabetically.",
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
      { time: "04/18/2026 12:50", result: "Pass", language: "Python" }
    ]
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
    submissions: [{ time: "04/17/2026 09:12", result: "Pass", language: "Python" }]
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
    submissions: [{ time: "04/16/2026 18:40", result: "Fail", language: "Python" }]
  }
];
const diffPill = (d) => d === "easy" ? "bg-emerald-100 text-emerald-700" : d === "medium" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700";
function SubmissionPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("description");
  const idx = Math.max(0, problems.findIndex((p) => p.id === id));
  const problem = problems[idx] ?? problems[0];
  const prev = problems[idx - 1];
  const next = problems[idx + 1];
  const goTo = (pid) => navigate({ to: "/submissions/$id", params: { id: pid } });
  return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col pb-[72px] relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto w-full flex-1 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-2 text-sm mb-4 flex-wrap", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-[var(--brand-purple)] font-medium hover:underline", children: "Coding Track" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "size-3 text-muted-foreground" }),
        /* @__PURE__ */ jsx(Link, { to: "/coding-history", className: "text-[var(--brand-purple)] font-medium hover:underline", children: "Coding History" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "size-3 text-muted-foreground" }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold truncate", children: problem.title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[calc(100vh-300px)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card flex flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-2 px-4 py-3 border-b border-border overflow-x-auto", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setTab("description"),
                className: `inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full transition whitespace-nowrap ${tab === "description" ? "bg-[var(--easy)] text-emerald-900" : "text-muted-foreground hover:bg-muted/50"}`,
                children: [
                  /* @__PURE__ */ jsx(FileText, { className: "size-3 sm:size-4" }),
                  " Description"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setTab("submission"),
                className: `inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full transition whitespace-nowrap ${tab === "submission" ? "bg-[var(--easy)] text-emerald-900" : "text-muted-foreground hover:bg-muted/50"}`,
                children: [
                  /* @__PURE__ */ jsx(History, { className: "size-3 sm:size-4" }),
                  " Submission"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-5 overflow-auto flex-1", children: tab === "description" ? /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: problem.title }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: problem.topic }),
              /* @__PURE__ */ jsx("span", { className: `text-xs font-semibold px-3 py-1 rounded-full ${diffPill(problem.difficulty)}`, children: problem.difficulty }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold px-3 py-1 rounded-full bg-muted", children: problem.success })
            ] }),
            /* @__PURE__ */ jsx("hr", { className: "border-border" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-2", children: "Problem Description" }),
              /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-border px-4 py-3 text-sm", children: problem.description })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-2", children: "Problem Constraints" }),
              /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-border px-4 py-3", children: /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5 text-sm space-y-1", children: problem.constraints.map((c, i) => /* @__PURE__ */ jsx("li", { children: c }, i)) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-2", children: "Input Format" }),
              /* @__PURE__ */ jsx("pre", { className: "rounded-lg border border-border px-4 py-3 text-sm font-mono whitespace-pre-wrap", children: problem.inputFormat })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-2", children: "Output Format" }),
              /* @__PURE__ */ jsx("pre", { className: "rounded-lg border border-border px-4 py-3 text-sm font-mono whitespace-pre-wrap", children: problem.outputFormat })
            ] })
          ] }) : /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 px-4 py-2 text-sm font-semibold text-muted-foreground", children: [
              /* @__PURE__ */ jsx("div", { children: "Time (IST)" }),
              /* @__PURE__ */ jsx("div", { children: "Result" }),
              /* @__PURE__ */ jsx("div", { children: "Language" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: problem.submissions.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 items-center px-4 py-3 rounded-xl border border-border bg-background", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm", children: s.time }),
              /* @__PURE__ */ jsx("div", { className: `text-sm font-medium ${s.result === "Pass" ? "text-emerald-600" : "text-red-600"}`, children: s.result }),
              /* @__PURE__ */ jsx("div", { className: "text-sm", children: s.language })
            ] }, i)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-[#0b1020] text-slate-100 flex flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-white/10 gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-2 overflow-x-auto min-w-0", children: [
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-medium px-2 sm:px-3 py-1.5 rounded-full bg-white/5 whitespace-nowrap", children: [
                /* @__PURE__ */ jsx(Timer, { className: "size-3.5" }),
                " 00:00:00"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-medium px-2 sm:px-3 py-1.5 rounded-full bg-white/5 whitespace-nowrap", children: [
                /* @__PURE__ */ jsx(Zap, { className: "size-3.5 text-yellow-400" }),
                " score: 3/3"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-medium px-2 sm:px-3 py-1.5 rounded-full bg-white/5 whitespace-nowrap", children: [
                "Python ",
                /* @__PURE__ */ jsx(ChevronDown, { className: "size-3.5" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-2 shrink-0", children: [
              /* @__PURE__ */ jsx("button", { className: "size-7 grid place-items-center rounded-md hover:bg-white/10", children: /* @__PURE__ */ jsx(RotateCw, { className: "size-3 sm:size-4" }) }),
              /* @__PURE__ */ jsx("button", { className: "size-7 grid place-items-center rounded-md hover:bg-white/10", children: /* @__PURE__ */ jsx(Maximize2, { className: "size-3 sm:size-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("pre", { className: "text-xs leading-6 p-5 overflow-auto font-mono flex-1", children: problem.code.split("\n").map((line, i) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[2.5rem_1fr] gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-slate-500 text-right select-none", children: i + 1 }),
            /* @__PURE__ */ jsx("span", { children: line || " " })
          ] }, i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 lg:left-64 bg-card border-t border-border z-40 shadow-[0_-8px_30px_-20px_rgba(0,0,0,0.35)]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-4 py-3 gap-2 sm:gap-0", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => prev && goTo(prev.id),
          disabled: !prev,
          className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 text-sm font-semibold px-4 py-2 rounded-md border border-border disabled:opacity-40 hover:bg-muted",
          children: [
            /* @__PURE__ */ jsx(ChevronLeft, { className: "size-4" }),
            " Previous"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => next && goTo(next.id),
          disabled: !next,
          className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 text-sm font-semibold px-4 py-2 rounded-full bg-[var(--easy)] text-emerald-900 disabled:opacity-40 hover:opacity-90",
          children: [
            "Next Question ",
            /* @__PURE__ */ jsx(ChevronRight, { className: "size-4" })
          ]
        }
      )
    ] }) })
  ] }) });
}
const CodingTrackRoute = Route$3.update({
  id: "/coding-track",
  path: "/coding-track",
  getParentRoute: () => Route$4
});
const CodingHistoryRoute = Route$2.update({
  id: "/coding-history",
  path: "/coding-history",
  getParentRoute: () => Route$4
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const SubmissionsIdRoute = Route.update({
  id: "/submissions/$id",
  path: "/submissions/$id",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  CodingHistoryRoute,
  CodingTrackRoute,
  SubmissionsIdRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CodingTrackPage as C,
  router as r
};
