import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  PanelLeft,
  LayoutGrid,
  MessageSquare,
  GraduationCap,
  Code2,
  Trophy,
  Rocket,
  Briefcase,
  Plane,
  Building2,
  Headphones,
  Bell,
  Flame,
  Cookie,
  Code,
  Network,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import type { ReactNode } from "react";

const nav = [
  { label: "Dashboard", icon: LayoutGrid, to: "/" as const },
  { label: "Socials", icon: MessageSquare, to: "/" as const },
  {
    label: "Learn",
    icon: GraduationCap,
    to: "/" as const,
    expandable: true,
  },
  {
    label: "Employability Track",
    icon: Code2,
    to: "/" as const,
    expandable: true,
    children: [
      { label: "Coding Track", to: "/" },
      { label: "Aptitude Track", to: "/" },
      { label: "Verbal Track", to: "/" },
      { label: "Case Study Track", to: "/" },
      { label: "System Design Track", to: "/" },
      { label: "Smart Interview", to: "/" },
    ],
  },
  { label: "Prepare", icon: Trophy, to: "/" as const, expandable: true },
  { label: "Compete", icon: Rocket, to: "/" as const, expandable: true },
  { label: "Job Posts", icon: Briefcase, to: "/" as const },
  { label: "Study Abroad", icon: Plane, to: "/" as const, expandable: true },
  { label: "My College", icon: Building2, to: "/" as const },
  { label: "Support", icon: Headphones, to: "/" as const, expandable: true },
];

export default function AppShell({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[var(--brand-sidebar)] text-[var(--brand-sidebar-foreground)]">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col py-4 px-3 gap-1 overflow-y-auto transition-transform duration-300 ease-in-out bg-[var(--brand-sidebar)] ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:static lg:translate-x-0 lg:flex lg:h-screen`}>
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="size-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 grid place-items-center text-xs font-bold">T</div>
          <div>
            <div className="font-bold leading-none">TaPTaP</div>
            <div className="text-[11px] text-white/60 leading-tight">by Blackbucks</div>
          </div>
        </div>
        <button
          className="mx-2 mb-2 size-9 grid place-items-center rounded-md hover:bg-white/5 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="size-4" />
        </button>
        <nav className="flex flex-col gap-0.5 px-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = item.label === "Employability Track";
            return (
              <div key={item.label}>
                <Link
                  to={item.to}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    active ? "bg-white/5" : "hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="size-[18px] text-white/80" />
                  <span className="flex-1">{item.label}</span>
                  {item.expandable && <ChevronDown className="size-4 text-white/50" />}
                </Link>
                {item.children && (
                  <div className="ml-3 pl-4 border-l border-white/10 mt-1 mb-1 flex flex-col gap-0.5">
                    {item.children.map((c) => {
                      const isActive = c.label === "Coding Track";
                      return (
                        <Link
                          key={c.label}
                          to="/"
                          className={`relative text-sm px-3 py-2 rounded-md transition-colors ${
                            isActive
                              ? "bg-[var(--brand-purple)]/15 text-white font-medium"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className={`absolute -left-[17px] top-1/2 -translate-y-1/2 size-2 rounded-full ${isActive ? "bg-emerald-400" : "bg-white/30"}`} />
                          {c.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-20 bg-[var(--brand-sidebar)] px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-3">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden size-9 grid place-items-center rounded-md hover:bg-white/5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="size-4" />
          </button>

          {/* Desktop Spacer */}
          <div className="hidden lg:block w-9" />

          {/* Header Items - Responsive */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-1 justify-end min-w-0">
            <div className="hidden sm:flex items-center gap-2 bg-white/5 rounded-full pl-1 pr-2 sm:pr-4 py-1">
              <span className="size-7 grid place-items-center rounded-full bg-[var(--brand-purple-soft)] text-[10px] font-bold text-black">NA</span>
              <span className="text-xs font-semibold hidden md:inline">MET Score</span>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full pl-1 pr-4 py-1">
              <span className="size-7 grid place-items-center rounded-full bg-[var(--brand-purple-soft)] text-[10px] font-bold text-black">NA</span>
              <span className="text-xs font-semibold">MET Band</span>
            </div>
            <div className="flex items-center gap-1 bg-white/5 rounded-full px-2 sm:px-3 py-1.5">
              <Flame className="size-4 text-orange-400" />
              <span className="text-xs font-bold">6</span>
            </div>
            <div className="hidden xs:flex items-center gap-1 bg-white/5 rounded-full px-2 sm:px-3 py-1.5">
              <Cookie className="size-4 text-amber-500" />
              <span className="text-xs font-bold">124</span>
            </div>
            <button className="size-8 sm:size-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10">
              <Code className="size-3 sm:size-4" />
            </button>
            <button className="hidden sm:grid size-9 place-items-center rounded-full bg-white/5 hover:bg-white/10">
              <Network className="size-4" />
            </button>
            <button className="size-8 sm:size-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10">
              <Bell className="size-3 sm:size-4" />
            </button>
            <div className="flex items-center gap-1 sm:gap-2 bg-white/5 rounded-full pl-1 pr-2 sm:pr-3 py-1 min-w-0">
              <span className="size-6 sm:size-8 grid place-items-center rounded-full bg-pink-500 text-[10px] sm:text-xs font-bold">C</span>
              <div className="hidden sm:block text-right min-w-0">
                <div className="text-xs font-bold leading-tight truncate">Sravan</div>
                <div className="text-[10px] text-white/60 leading-tight truncate">MVSR Engineering Col...</div>
              </div>
              <ChevronDown className="size-3 sm:size-4 text-white/60" />
            </div>
          </div>
        </header>

        {/* Page content card */}
        <main className="flex-1 bg-background text-foreground rounded-tl-2xl p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}