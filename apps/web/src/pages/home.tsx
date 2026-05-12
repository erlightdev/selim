import React from "react";
import {
  ArrowRight,
  BracketsCurly,
  ChartLineUp,
  CheckCircle,
  CirclesFour,
  Code,
  CubeFocus,
  FlowArrow,
  Lightning,
  Pulse,
  ShieldCheck,
  Sparkle,
  Strategy,
  TrendUp,
  Quotes,
} from "@phosphor-icons/react";

// --- DATA ---
const clientLogos = [
  "Harbor Ledger",
  "Northline Health",
  "Aster Freight",
  "Fieldnote Labs",
  "Atlas Meridian",
  "Copper Row",
] as const;

const services = [
  {
    icon: Strategy,
    title: "Product strategy",
    text: "Define the first useful release, map the risks, and turn scattered requirements into a buildable plan.",
    size: "md:col-span-2 md:row-span-2",
    metric: "01",
    panel: "Roadmap",
    stat: "6.4w",
  },
  {
    icon: CubeFocus,
    title: "UX architecture",
    text: "Structure roles, states, permissions, and core flows before visual polish hides product gaps.",
    size: "md:col-span-1 md:row-span-1",
    metric: "02",
    panel: "Flows",
    stat: "18",
  },
  {
    icon: Code,
    title: "Frontend build",
    text: "Ship React interfaces with tokens, responsive constraints, and real empty, loading, and error states.",
    size: "md:col-span-1 md:row-span-1",
    metric: "03",
    panel: "React",
    stat: "92%",
  },
  {
    icon: CirclesFour,
    title: "Design systems",
    text: "Create components, interaction rules, and usage patterns that scale beyond the first launch.",
    size: "md:col-span-1 md:row-span-1",
    metric: "04",
    panel: "Tokens",
    stat: "48",
  },
  {
    icon: BracketsCurly,
    title: "Product cleanup",
    text: "Tighten slow screens, repair hierarchy, and remove decisions that make users hesitate.",
    size: "md:col-span-2 md:row-span-1",
    metric: "05",
    panel: "Audit",
    stat: "31%",
  },
] as const;

const cases = [
  {
    name: "Harbor Ledger",
    type: "Fintech operations",
    result: "Review time reduced by 42.7%",
    summary:
      "A reconciliation command center for finance teams under audit pressure.",
  },
  {
    name: "Northline Health",
    type: "Clinical scheduling",
    result: "Intake errors cut by 31.4%",
    summary: "A role-aware patient intake flow for multi-location care teams.",
  },
  {
    name: "Aster Freight",
    type: "Logistics platform",
    result: "Task completion lifted by 24.8%",
    summary: "A dispatch surface for dense triage, exceptions, and handoffs.",
  },
] as const;

const technologies = [
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Vite", slug: "vite" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Figma", slug: "figma" },
] as const;

const testimonials = [
  {
    quote:
      "Selim took a product that felt scattered and gave us a clear operating surface in weeks, not quarters.",
    name: "Mara Voss",
    role: "COO, Harbor Ledger",
  },
  {
    quote:
      "The redesign did not just look better. Our team finally understood where every handoff belonged.",
    name: "Talia Brenner",
    role: "Product Lead, Northline Health",
  },
  {
    quote:
      "We stopped debating the interface and started shipping. The system made decisions visible.",
    name: "Ren Ito",
    role: "Founder, Aster Freight",
  },
] as const;

const dashboardRows = [
  { label: "Exception queue", value: "18 active", tone: "bg-emerald-500" },
  { label: "Design review", value: "04 changes", tone: "bg-amber-500" },
  { label: "Release risk", value: "Low", tone: "bg-blue-500" },
] as const;

const collaborationMarkers = [
  {
    label: "Product Manager",
    className: "left-[11%] top-[24%] hidden sm:block",
  },
  {
    label: "Designer",
    className: "right-[13%] top-[20%] hidden md:block",
  },
  {
    label: "Developer",
    className: "left-[23%] bottom-[13%] hidden md:block",
  },
  {
    label: "Art Director",
    className: "right-[23%] bottom-[22%] hidden sm:block",
  },
] as const;

// --- COMPONENTS ---
function TechIcon({ slug, name }: { slug: string; name: string }) {
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/GLINCKER/thesvg@main/public/icons/${slug}/default.svg`}
      alt={`${name} logo`}
      className="size-7 object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 grayscale group-hover:grayscale-0"
      loading="lazy"
    />
  );
}

function ServiceBentoCard({
  icon: Icon,
  title,
  text,
  size,
  metric,
  panel,
  stat,
}: (typeof services)[number]) {
  return (
    <article
      className={`group relative flex min-h-[18rem] flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_34px_100px_-54px_rgba(79,70,229,0.8)] dark:border-white/10 dark:bg-[#0d092d] ${size}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(79,70,229,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_38%)] opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-indigo-500/10 to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-indigo-200/70 bg-indigo-50 text-indigo-600 shadow-inner shadow-white dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
            <Icon className="size-5" weight="duotone" />
          </div>
          <span className="font-mono text-xs text-zinc-400 dark:text-white/38">
            {metric}
          </span>
        </div>

        <div className="mt-6 max-w-md">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/62">
            {text}
          </p>
        </div>

        <div className="relative mt-auto pt-8">
          <div className="relative h-36 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-inner dark:border-white/10 dark:bg-[#08051f]">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(79,70,229,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(79,70,229,0.08)_1px,transparent_1px)] bg-[size:2.4rem_2.4rem]" />
            <div className="absolute left-5 top-5 flex items-center gap-2">
              <span className="size-2 rounded-full bg-indigo-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-indigo-100/55">
                {panel}
              </span>
            </div>
            <div className="absolute right-5 top-5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-indigo-600 shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-indigo-100">
              {stat}
            </div>
            <div className="absolute bottom-5 left-5 right-5 space-y-2.5">
              <div className="h-2 w-4/5 rounded-full bg-indigo-200/80 dark:bg-white/14">
                <div className="h-full w-3/5 rounded-full bg-indigo-500 transition-all duration-700 group-hover:w-[82%]" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="h-12 rounded-xl border border-zinc-200 bg-white/80 dark:border-white/10 dark:bg-white/8" />
                <span className="h-12 rounded-xl border border-zinc-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.06]" />
                <span className="h-12 rounded-xl border border-zinc-200 bg-white/40 dark:border-white/10 dark:bg-white/[0.04]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className=" bg-zinc-50 font-sans text-zinc-950 selection:bg-emerald-200 selection:text-emerald-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Injecting keyframes safely for the marquee without needing tailwind.config.js changes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
				@keyframes infinite-scroll {
					from { transform: translateX(0); }
					to { transform: translateX(-50%); }
				}
				@keyframes selim-hero-spotlight {
					0%, 100% { transform: translate3d(-6%, 6%, 0) scale(1); opacity: .88; }
					50% { transform: translate3d(8%, -4%, 0) scale(1.08); opacity: 1; }
				}
				@keyframes selim-marker-float {
					0%, 100% { transform: translate3d(0, 0, 0); }
					50% { transform: translate3d(0, -10px, 0); }
				}
				.animate-infinite-scroll {
					animation: infinite-scroll 30s linear infinite;
				}
				.animate-selim-spotlight {
					animation: selim-hero-spotlight 10s ease-in-out infinite;
				}
				.animate-selim-marker {
					animation: selim-marker-float 6s ease-in-out infinite;
				}
				.hide-scrollbar::-webkit-scrollbar {
					display: none;
				}
				.hide-scrollbar {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
			`,
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative -mt-24 overflow-hidden pt-0 pb-8 sm:-mt-28 sm:pb-20 lg:-mt-26 lg:pb-6">
        <div className="mx-auto  px-0 sm:px-2 lg:px-4">
          <div className="relative min-h-[550px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#08051f] px-5 pt-24 pb-10 text-white shadow-[0_40px_140px_-70px_rgba(79,70,229,0.95)] sm:min-h-[560px] sm:px-10 sm:pt-32 lg:min-h-[620px] lg:px-16 lg:pt-20">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.11)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:9.5rem_100%,100%_9.5rem]" />
            <div className="animate-selim-spotlight pointer-events-none absolute -left-40 top-0 h-[38rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(49,140,255,0.95)_0%,rgba(61,94,232,0.62)_36%,rgba(79,70,229,0.18)_64%,transparent_76%)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-18rem] right-[7%] h-[35rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(94,67,255,0.76)_0%,rgba(79,70,229,0.32)_48%,transparent_72%)] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(8,5,31,0.08)_30%,rgba(8,5,31,0.68)_78%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:24px_24px]" />

            {collaborationMarkers.map((marker, index) => (
              <div
                key={marker.label}
                className={`animate-selim-marker absolute z-10 ${marker.className}`}
                style={{ animationDelay: `${index * 0.9}s` }}
              >
                <div className="mb-2 h-0 w-0 rotate-[-20deg] border-y-[12px] border-y-transparent border-l-[22px] border-l-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]" />
                <span className="ml-7 inline-flex rounded-sm bg-indigo-100 px-2.5 py-1 text-sm font-medium text-[#18142f] shadow-[0_12px_34px_-20px_rgba(255,255,255,0.8)] lg:text-base">
                  {marker.label}
                </span>
              </div>
            ))}

            <div className="relative z-20 mx-auto flex min-h-[400px] max-w-5xl flex-col items-center justify-center text-center sm:min-h-[420px] lg:min-h-[460px]">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-medium text-indigo-100 shadow-inner shadow-white/5 backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-300 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-indigo-200"></span>
                </span>
                Product, interface, and build partners
              </div>

              <h1 className="max-w-7xl text-balance text-[clamp(2.4rem,9vw,3.2rem)] font-semibold leading-[0.93] tracking-tight text-white">
                We bring more innovative products with intuitive interfaces into
                the world
              </h1>

              <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-indigo-100/74 sm:text-lg">
                Selim Studio designs and ships indigo-branded product systems,
                SaaS dashboards, and web experiences with crisp strategy,
                polished motion, and production-ready React.
              </p>

              <div className="mt-10 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
                <a
                  href="/contact"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#151032] shadow-[0_20px_60px_-28px_rgba(255,255,255,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 active:translate-y-0 sm:w-auto"
                >
                  Start a product sprint
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/16 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/12 active:translate-y-0 sm:w-auto"
                >
                  See the work
                  <ChartLineUp className="size-4" weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGO MARQUEE */}
      <section className="border-y border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-infinite-scroll items-center gap-12 pr-12">
              {[...clientLogos, ...clientLogos, ...clientLogos].map(
                (client, index) => (
                  <span
                    key={index}
                    className="text-lg font-bold tracking-tight text-zinc-400 dark:text-zinc-600 whitespace-nowrap"
                  >
                    {client}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT & METRICS */}
      <section className="bg-white py-16 text-zinc-950 sm:py-20 dark:bg-zinc-950 dark:text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 shadow-[0_10px_30px_-22px_rgba(24,24,27,0.7)] dark:border-white/10 dark:bg-white/5 dark:text-white/55">
            About us
          </div>

          <h2 className="mx-auto mt-5 max-w-6xl text-balance text-[clamp(1.8rem,9vw,2.7rem)] font-medium leading-[1.08] tracking-tight">
            At Selim Studio, we specialize in crafting innovative app design,
            web design,{" "}
            <span className="inline-flex size-8 translate-y-1 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-50 to-amber-50 shadow-[inset_0_0_0_1px_rgba(24,24,27,0.08)] sm:size-10">
              <span className="h-3 w-5 rounded-sm bg-gradient-to-b from-amber-200 to-amber-400 sm:h-4 sm:w-6" />
            </span>{" "}
            and branding{" "}
            <span className="inline-flex size-8 translate-y-1 items-center justify-center rounded-lg bg-indigo-100 shadow-[inset_0_0_0_1px_rgba(79,70,229,0.18)] sm:size-10">
              <span className="size-4 rounded-[0.35rem] bg-gradient-to-br from-indigo-400 to-sky-300 shadow-[0_0_18px_rgba(79,70,229,0.45)] sm:size-5" />
            </span>{" "}
            solutions to elevate and transform your brand{" "}
            <span className="inline-flex size-8 translate-y-1 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 via-indigo-100 to-fuchsia-100 sm:size-10">
              <span className="size-4 rounded-full bg-gradient-to-br from-sky-300 via-indigo-400 to-fuchsia-300 blur-[0.2px] sm:size-5" />
            </span>
          </h2>
        </div>
      </section>

      {/* 4. BENTO GRID SERVICES */}
      <section className="bg-zinc-100 py-24 sm:py-32 dark:bg-zinc-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-base font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
              Capabilities
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Bento cards for the parts that make products work.
            </p>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Each service includes the interaction details users notice only
              when they are missing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[16rem]">
            {services.map((service) => (
              <ServiceBentoCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASE STUDIES (Enterprise Horizontal Scroll) */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h2 className="text-base font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Outcomes
              </h2>
              <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Product surfaces with visible results.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="flex size-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
                aria-label="Previous"
              >
                <ArrowRight className="size-4 rotate-180" />
              </button>
              <button
                className="flex size-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
                aria-label="Next"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="hide-scrollbar -mx-4 flex snap-x snap-mandatory overflow-x-auto px-4 pb-8 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="flex w-max gap-6">
              {cases.map((item, index) => (
                <article
                  key={item.name}
                  className="group w-[85vw] max-w-[400px] shrink-0 snap-start overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
                >
                  {/* Card Image/Abstract representation */}
                  <div className="relative h-48 w-full border-b border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-zinc-400">
                        0{index + 1}
                      </span>
                      <TrendUp
                        className="size-5 text-emerald-600 dark:text-emerald-400"
                        weight="bold"
                      />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 space-y-2">
                      <div className="h-2 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800"></div>
                      <div className="h-2 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800"></div>
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                      {item.type}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <Sparkle className="size-3.5" weight="fill" />
                      {item.result}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECH STACK */}
      <section className="bg-zinc-950 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-base font-semibold uppercase tracking-widest text-emerald-400">
                Technologies
              </h2>
              <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Tools selected for maintainable velocity.
              </p>
              <p className="mt-4 text-lg text-zinc-400">
                We build on proven ecosystems. No esoteric frameworks, just
                robust primitives that your internal team can actually inherit
                and maintain.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:bg-zinc-800/80 hover:border-zinc-700"
                >
                  <TechIcon slug={tech.slug} name={tech.name} />
                  <span className="text-xs font-medium tracking-wide text-zinc-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Clean Grid) */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Client Feedback
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Teams remember the clarity after launch.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30"
              >
                <Quotes
                  className="size-8 text-zinc-300 dark:text-zinc-700"
                  weight="fill"
                />
                <blockquote className="mt-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {item.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FOOTER */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 px-6 py-20 shadow-2xl sm:px-16 sm:py-24 lg:px-24">
          {/* Background Glow */}
          <div className="absolute -top-24 right-0 size-96 rounded-full bg-emerald-500/20 blur-[128px]"></div>

          <div className="relative flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Send the rough context.
                <br /> We will build the path.
              </h2>
              <ul className="mt-8 flex flex-col gap-3 text-left sm:items-center lg:items-start">
                {[
                  "Scope the first useful release",
                  "Design the states that usually get missed",
                  "Build with responsive constraints from day one",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <CheckCircle
                      className="size-5 shrink-0 text-emerald-400"
                      weight="fill"
                    />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:w-full sm:max-w-sm lg:mt-0 lg:shrink-0">
              <a
                href="/contact"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-zinc-900 transition-all hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Contact the studio
                <FlowArrow className="size-5" />
              </a>
              <div className="flex justify-center gap-4 text-sm text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Lightning weight="fill" className="text-emerald-400" /> Fast
                  delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck weight="fill" className="text-emerald-400" />{" "}
                  Scalable builds
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
