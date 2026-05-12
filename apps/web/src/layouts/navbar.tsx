import { Button } from "@selim/ui/components/button";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { ShieldCheck } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet";

const navLinks = [
  { to: "/", label: "Home", description: "Studio overview" },
  { to: "/about", label: "About Us", description: "Team + culture" },
  {
    to: "/case-studies",
    label: "Case Studies",
    description: "Real-world results",
  },
  { to: "/contact", label: "Contact Us", description: "Let’s collaborate" },
] as const;

const servicesLinks = [
  { href: "/services#strategy", label: "Product Strategy" },
  { href: "/services#design", label: "UX/UI Design" },
  { href: "/services#development", label: "Full-stack Development" },
  { href: "/services#systems", label: "Design Systems" },
] as const;

const CONTACT_EMAIL = "hello@selim.studio";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const baseLink =
    "rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200";
  const activeLink = "bg-white/14 text-white shadow-sm";
  const inactiveLink = "text-white/68 hover:bg-white/10 hover:text-white";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky z-50 transition-all duration-300 ${
        isScrolled ? "top-3" : "top-4"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-visible rounded-2xl border border-white/14 bg-[#0c0830]/80 text-white shadow-[0_24px_90px_-48px_rgba(79,70,229,0.9)] backdrop-blur-2xl transition-all duration-300">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(90deg,rgba(255,255,255,0.12),transparent_22%,transparent_78%,rgba(255,255,255,0.08))]" />
            <div className="relative flex items-center justify-between gap-3 px-3 py-3 sm:px-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-items-center">
              <div className="flex min-w-0 items-center gap-3 lg:justify-self-start">
                <Link to="/" className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-700 text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.6)]">
                    <ShieldCheck className="size-5" weight="fill" />
                  </div>
                  <div className="hidden min-w-0 flex-col sm:flex">
                    <span className="text-base font-semibold leading-tight tracking-tight text-white">
                      Selim
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
                      Cybersecurity
                    </span>
                  </div>
                </Link>
              </div>
				<nav className="hidden items-center justify-center lg:flex lg:justify-self-center">
					<div className="flex items-center gap-1 rounded-xl bg-white/[0.07] p-1 ring-1 ring-white/10">
                  {navLinks.slice(0, 2).map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className={baseLink}
                      activeProps={{ className: `${baseLink} ${activeLink}` }}
                      inactiveProps={{
                        className: `${baseLink} ${inactiveLink}`,
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                  <div className="group relative">
				                    <button
				                      type="button"
				                      className={`${baseLink} ${inactiveLink} inline-flex items-center gap-1 group-focus-within:bg-white/10 group-focus-within:text-white`}
				                      aria-haspopup="true"
				                    >
                      Services
                      <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                    </button>
                    <div className="pointer-events-none absolute left-0 top-full z-50 w-60 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="grid gap-1 rounded-xl border border-white/12 bg-[#0d092d]/95 p-2 shadow-2xl backdrop-blur">
                        {servicesLinks.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="rounded-md px-3 py-2 text-sm text-white/68 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  {navLinks.slice(2).map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className={baseLink}
                      activeProps={{ className: `${baseLink} ${activeLink}` }}
                      inactiveProps={{
                        className: `${baseLink} ${inactiveLink}`,
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="flex shrink-0 items-center justify-end gap-2 lg:justify-self-end">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/14 bg-white/8 text-white shadow-sm transition-colors hover:bg-white/12 sm:h-10 sm:w-10 [&_.att-btn]:text-white">
                  <AnimatedThemeToggler />
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hidden h-9 items-center gap-2 rounded-xl bg-white px-3 font-semibold text-[#16113a] text-xs shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 min-[420px]:inline-flex sm:h-10 sm:px-4 sm:text-sm"
                >
                  <Sparkles className="size-3.5" />
                  Start
                </a>
                <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 shadow-sm lg:hidden"
                      aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                      {menuOpen ? (
                        <X className="size-4" />
                      ) : (
                        <Menu className="size-4" />
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[min(22rem,calc(100vw-2rem))] overflow-y-auto bg-background/95 p-0 shadow-xl backdrop-blur"
                  >
                    <SheetHeader>
                      <SheetTitle>Selim Studio</SheetTitle>
                      <SheetDescription className="text-xs">
                        Digital agency building software that feels inevitable.
                      </SheetDescription>
                    </SheetHeader>
                    <nav className="grid gap-2 px-4 py-4">
                      {navLinks.map(({ to, label, description }) => (
                        <SheetClose asChild key={to}>
                          <Link
                            to={to}
                            className="rounded-md border border-transparent p-3 transition-colors hover:border-border/70 hover:bg-muted/40"
                          >
                            <span className="block font-semibold text-foreground text-sm">
                              {label}
                            </span>
                            <span className="block text-muted-foreground text-xs">
                              {description}
                            </span>
                          </Link>
                        </SheetClose>
                      ))}
                      <div className="mt-2 rounded-md border border-border/60 bg-muted/30 p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          Services
                        </p>
                        <div className="mt-2 grid gap-2">
                          {servicesLinks.map((item) => (
                            <SheetClose asChild key={item.href}>
                              <a
                                href={item.href}
                                className="rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                              >
                                {item.label}
                              </a>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    </nav>
                    <div className="mt-auto border-border/60 border-t px-4 py-4">
                      <SheetClose asChild>
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground text-sm shadow-sm transition-colors hover:bg-primary/90"
                        >
                          Say Hi
                        </a>
                      </SheetClose>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
