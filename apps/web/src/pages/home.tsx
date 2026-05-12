import React from "react";
import { TestimonialsSection } from "@/components/testimonial-v2";
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
  "Nepali Commercial Bank",
  "National Insurer",
  "Govt e-Services",
  "Himalayan Telecom",
  "Kathmandu Hospital",
  "NGO Network",
] as const;

const services = [
  {
    icon: Pulse,
    title: "SOC as a Service",
    text: "24/7 SIEM monitoring, threat detection and incident response from our Kathmandu SOC.",
    size: "md:col-span-2 md:row-span-2",
    metric: "01",
    panel: "SOC",
    stat: "24/7",
  },
  {
    icon: CubeFocus,
    title: "VAPT",
    text: "Vulnerability assessment and penetration testing across web, mobile, network, APIs and cloud.",
    size: "md:col-span-1 md:row-span-1",
    metric: "02",
    panel: "VAPT",
    stat: "87%",
  },
  {
    icon: Code,
    title: "Cloud Security",
    text: "AWS, Azure and GCP posture management — misconfigurations caught before attackers find them.",
    size: "md:col-span-1 md:row-span-1",
    metric: "03",
    panel: "Cloud",
    stat: "3",
  },
  {
    icon: CirclesFour,
    title: "EDR",
    text: "Endpoint detection and response — every laptop, server and device watched in real time.",
    size: "md:col-span-1 md:row-span-1",
    metric: "04",
    panel: "EDR",
    stat: "99.9%",
  },
  {
    icon: BracketsCurly,
    title: "GRC & Compliance",
    text: "ISO 27001, NIA Guideline 2076, PCI-DSS and Nepal Rastra Bank directives — advisory, audit and evidence.",
    size: "md:col-span-2 md:row-span-1",
    metric: "05",
    panel: "GRC",
    stat: "100%",
  },
] as const;

const cases = [
  {
    name: "Nepali Commercial Bank",
    sector: "Banking",
    headline: "87% reduction in critical vulnerabilities in 6 weeks",
    metric: "87%",
    metricLabel: "Critical vulns closed",
    summary:
      "Combined SOC, VAPT and GRC engagement aligned the bank with Nepal Rastra Bank directives and hardened core banking systems.",
    stack: ["SOC", "VAPT", "GRC"],
  },
  {
    name: "Regional Insurer",
    sector: "Insurance",
    headline: "Achieved NIA Guideline 2076 compliance",
    metric: "2076",
    metricLabel: "NIA compliant",
    summary:
      "Policies, controls and evidence assembled in line with NIA Guideline 2076 — passed audit on first attempt.",
    stack: ["GRC", "Awareness", "Advisory"],
  },
  {
    name: "Government e-Services",
    sector: "Public sector",
    headline: "Hardened against DDoS and credential attacks",
    metric: "24/7",
    metricLabel: "SOC monitoring",
    summary:
      "Citizen-facing platform now monitored around the clock from our Kathmandu SOC, with DFIR retainer in place.",
    stack: ["SOC", "Cloud", "DFIR"],
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
    label: "Firewall Active",
    icon: ShieldCheck,
    className: "left-[11%] top-[24%] hidden sm:block",
  },
  {
    label: "Threat Blocked",
    icon: Lightning,
    className: "right-[13%] top-[20%] hidden md:block",
  },
  {
    label: "Endpoint Secured",
    icon: Pulse,
    className: "left-[20%] bottom-[13%] hidden md:block",
  },
  {
    label: "AI Monitoring",
    icon: Sparkle,
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
    <main className=" bg-zinc-50 font-sans text-zinc-950 selection:bg-indigo-200 selection:text-indigo-950 dark:bg-zinc-950 dark:text-zinc-50">
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
				.cases-swiper { padding-bottom: 4.5rem !important; overflow: hidden !important; }
				.cases-swiper .swiper-wrapper { align-items: stretch; }
				.cases-swiper .swiper-slide { height: auto; display: flex; }
				.cases-swiper .swiper-slide > article { width: 100%; }
				@media (min-width: 640px) {
					.cases-swiper { overflow: visible !important; }
				}
				@media (max-width: 639px) {
					.cases-swiper > .swiper-button-prev,
					.cases-swiper > .swiper-button-next { display: none !important; }
					.cases-swiper > .swiper-pagination {
						left: 50% !important;
						transform: translateX(-50%);
						text-align: center !important;
					}
				}
				.cases-swiper > .swiper-button-prev,
				.cases-swiper > .swiper-button-next {
					top: auto !important;
					bottom: 0 !important;
					width: 44px !important;
					height: 44px !important;
					margin-top: 0 !important;
					border-radius: 9999px !important;
					border: 1px solid rgb(228 228 231) !important;
					background: #ffffff !important;
					color: #18142f !important;
					transition: all 0.2s ease !important;
					box-shadow: 0 12px 30px -18px rgba(79,70,229,0.45) !important;
				}
				.dark .cases-swiper > .swiper-button-prev,
				.dark .cases-swiper > .swiper-button-next {
					background: #0d092d !important;
					border-color: rgba(255,255,255,0.1) !important;
					color: #c7d2fe !important;
				}
				.cases-swiper > .swiper-button-prev:hover,
				.cases-swiper > .swiper-button-next:hover {
					background: #4f46e5 !important;
					border-color: #4f46e5 !important;
					color: #ffffff !important;
					transform: translateY(-2px);
				}
				.cases-swiper > .swiper-button-prev { left: auto !important; right: 56px !important; }
				.cases-swiper > .swiper-button-next { left: auto !important; right: 0 !important; }
				.cases-swiper > .swiper-button-prev::after,
				.cases-swiper > .swiper-button-next::after {
					font-size: 14px !important;
					font-weight: 800 !important;
				}
				.cases-swiper > .swiper-button-disabled { opacity: 0.4 !important; }
				.cases-swiper > .swiper-pagination {
					bottom: 16px !important;
					top: auto !important;
					left: 0 !important;
					text-align: left;
					width: auto !important;
				}
				.cases-swiper .swiper-pagination-bullet {
					width: 22px;
					height: 4px;
					border-radius: 9999px;
					background: rgb(212 212 216);
					opacity: 1;
					transition: all 0.3s ease;
				}
				.dark .cases-swiper .swiper-pagination-bullet {
					background: rgba(255,255,255,0.18);
				}
				.cases-swiper .swiper-pagination-bullet-active {
					width: 36px;
					background: #4f46e5;
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

            {collaborationMarkers.map((marker, index) => {
              const Icon = marker.icon;
              return (
                <div
                  key={marker.label}
                  className={`animate-selim-marker absolute z-10 ${marker.className}`}
                  style={{ animationDelay: `${index * 0.9}s` }}
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-[#0d092d]/85 px-3 py-1.5 text-xs font-medium text-indigo-200 shadow-[0_12px_34px_-18px_rgba(79,70,229,0.6)] backdrop-blur lg:text-sm">
                    <Icon className="size-3.5 text-indigo-400" weight="fill" />
                    {marker.label}
                  </span>
                </div>
              );
            })}

            <div className="relative z-20 mx-auto flex min-h-[400px] max-w-5xl flex-col items-center justify-center text-center sm:min-h-[420px] lg:min-h-[460px]">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-medium text-indigo-100 shadow-inner shadow-white/5 backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-300 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-indigo-200"></span>
                </span>
                Nepal's Managed Cyber Security Service Provider
              </div>

              <h1 className="max-w-7xl text-balance text-[clamp(2.4rem,9vw,3.2rem)] font-semibold leading-[0.93] tracking-tight text-white">
                Your digital world. Watched. Protected. Secured.
              </h1>

              <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-indigo-100/74 sm:text-lg">
                Selim Solution is Nepal's leading Managed Cyber Security
                Service Provider — named after the Seim Lake of Humla's Nimi
                Valley, standing guard over your business like the Himalayas
                stand over the horizon.
              </p>

              <ul className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
                {[
                  "200+ organisations protected",
                  "24/7/365 SOC monitoring",
                  "99.9% threat detection accuracy",
                  "NIA Guideline 2076 advisory",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-indigo-100/85"
                  >
                    <CheckCircle
                      className="size-4 shrink-0 text-indigo-300"
                      weight="fill"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
                <a
                  href="/contact"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#151032] shadow-[0_20px_60px_-28px_rgba(255,255,255,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 active:translate-y-0 sm:w-auto"
                >
                  Get a Free Security Assessment
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/services"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/16 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/12 active:translate-y-0 sm:w-auto"
                >
                  Explore Our Services
                  <ShieldCheck className="size-4" weight="bold" />
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
            Born in the Himalayas. Built for Nepal. Selim Solution delivers managed cyber security with{" "}
            <span className="inline-flex size-8 translate-y-1 items-center justify-center rounded-lg bg-indigo-100 shadow-[inset_0_0_0_1px_rgba(79,70,229,0.18)] sm:size-10">
              <ShieldCheck
                className="size-4 text-indigo-500 sm:size-5"
                weight="duotone"
              />
            </span>{" "}
            24/7 monitoring{" "}
            <span className="inline-flex size-8 translate-y-1 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-sky-100 shadow-[inset_0_0_0_1px_rgba(79,70,229,0.18)] sm:size-10">
              <Pulse
                className="size-4 text-indigo-500 sm:size-5"
                weight="duotone"
              />
            </span>{" "}
            and rapid incident response that keeps Nepali organisations{" "}
            <span className="inline-flex size-8 translate-y-1 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 via-indigo-200 to-sky-100 sm:size-10">
              <Lightning
                className="size-4 text-indigo-500 sm:size-5"
                weight="fill"
              />
            </span>{" "}
            resilient against modern threats.
          </h2>
        </div>
      </section>

      {/* 4. BENTO GRID — CYBERSECURITY CAPABILITIES */}
      <section className=" py-16 dark:bg-[#06031a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-base font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
                Capabilities
              </h2>
              <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Seven services. One vigilant team.
              </p>
              <p className="mt-4 text-lg text-zinc-600 dark:text-indigo-100/65">
                SOC, VAPT, Cloud, EDR, GRC, DFIR and Security Awareness Training — delivered 24/7 from our Kathmandu SOC.
              </p>
            </div>
            <a
              href="/services"
              className="group inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-xl border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 sm:self-end dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-indigo-400/40 dark:hover:text-indigo-200"
            >
              View all services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[18rem]">
            {/* Brand mark / shield card */}
            <article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-[#0d092d]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(79,70,229,0.28),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
              <div className="relative flex h-full flex-col items-center justify-center p-6">
                <div className="relative">
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-indigo-500/40 blur-2xl" />
                  <div className="flex size-24 items-center justify-center rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white shadow-[0_30px_60px_-20px_rgba(79,70,229,0.6)] dark:border-white/10 dark:from-indigo-500/30 dark:to-[#0d092d]">
                    <ShieldCheck
                      className="size-12 text-indigo-600 dark:text-indigo-200"
                      weight="duotone"
                    />
                  </div>
                </div>
                <p className="mt-8 text-center text-sm font-medium text-zinc-700 dark:text-indigo-100/75">
                  Vigilant. Resilient. Nepali.
                </p>
              </div>
            </article>

            {/* Code / security snippet — large card */}
            <article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 md:col-span-2 dark:border-white/10 dark:bg-[#0d092d]">
              <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-indigo-500/30 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(79,70,229,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(79,70,229,0.06)_1px,transparent_1px)] bg-[size:2.4rem_2.4rem]" />
              <div className="relative flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
                    <span className="size-1.5 rounded-full bg-indigo-500" />
                    SOC Engine
                  </div>
                  <Code
                    className="size-5 text-zinc-400 dark:text-indigo-200/50"
                    weight="duotone"
                  />
                </div>

                <div className="mt-6 flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-5 font-mono text-[13px] leading-relaxed shadow-inner dark:border-white/10 dark:bg-[#08051f]">
                  <div className="flex items-center gap-1.5 pb-3">
                    <span className="size-2.5 rounded-full bg-rose-400/70" />
                    <span className="size-2.5 rounded-full bg-amber-400/70" />
                    <span className="size-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <pre className="whitespace-pre-wrap text-zinc-700 dark:text-indigo-100/80">
{`const selim = soc.watch({
  signals: ["siem", "endpoint", "cloud"],
  region: "np-kathmandu",
});
selim.on("incident", (e) => respond(e));`}
                  </pre>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <ShieldCheck
                    className="size-4 text-indigo-600 dark:text-indigo-300"
                    weight="fill"
                  />
                  <span className="text-sm text-zinc-600 dark:text-indigo-100/70">
                    Detections tuned to NIA 2076 and NRB directives
                  </span>
                </div>
              </div>
            </article>

            {/* Global threat tracking */}
            <article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 md:row-span-2 dark:border-white/10 dark:bg-[#0d092d]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-500/15 to-transparent" />
              <div className="relative flex h-full flex-col p-6 sm:p-8">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-white/8 dark:text-indigo-200">
                  <Lightning weight="fill" className="size-3" />
                  Live
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-white">
                  24/7 SOC
                  <br /> from Kathmandu
                </h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-indigo-100/65">
                  Local analysts, global tooling. Watching every endpoint,
                  identity and cloud workload the moment it shifts.
                </p>

                {/* Globe-like dot grid */}
                <div className="relative mt-auto flex justify-center pt-8">
                  <div className="relative size-48 sm:size-56">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_55%,rgba(79,70,229,0.55),transparent_60%)] blur-2xl" />
                    <div
                      className="absolute inset-0 rounded-full opacity-90 [mask-image:radial-gradient(circle_at_50%_60%,black_55%,transparent_70%)]"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(79,70,229,0.85) 1.4px, transparent 1.4px)",
                        backgroundSize: "10px 10px",
                      }}
                    />
                    <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
                  </div>
                </div>
              </div>
            </article>

            {/* Detection metric */}
            <article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-[#0d092d]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.18),transparent_55%)]" />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-indigo-200/60">
                    Detection accuracy
                  </p>
                  <p className="mt-4 text-6xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                    99.9<span className="text-indigo-500">%</span>
                  </p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-indigo-100/65">
                  Threats detected before payload across 200+ Nepali organisations.
                </p>
              </div>
            </article>

            {/* AI monitoring pulse */}
            <article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-[#0d092d]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(79,70,229,0.2),transparent_55%)]" />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <Pulse
                    className="size-5 text-indigo-600 dark:text-indigo-300"
                    weight="duotone"
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-indigo-200/60">
                    SOC Pulse
                  </span>
                </div>
                <svg
                  viewBox="0 0 200 60"
                  className="w-full text-indigo-500 dark:text-indigo-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  role="img"
                  aria-label="AI monitoring signal waveform"
                >
                  <path d="M0 40 L25 40 L35 20 L45 50 L55 30 L70 30 L80 10 L90 50 L105 30 L120 30 L130 24 L145 40 L200 40" />
                </svg>
                <p className="text-sm text-zinc-600 dark:text-indigo-100/65">
                  24/7 SIEM signals across users, devices and Nepali cloud workloads.
                </p>
              </div>
            </article>

            {/* CTA card */}
            <article className="group relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white shadow-[0_30px_90px_-40px_rgba(79,70,229,0.8)] transition-all duration-500 hover:-translate-y-1 md:col-span-2 dark:border-white/10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.35),transparent_55%)]" />
              <div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-white/10 blur-2xl" />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                    Get started
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">
                    Ready to secure your organisation?
                    <br /> Start with a free consultation.
                  </h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-indigo-700 transition-transform hover:-translate-y-0.5"
                  >
                    Book a Call
                    <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur transition-transform hover:-translate-y-0.5"
                  >
                    Download Company Profile
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. CASE STUDIES */}
      <section className="bg-white py-24 sm:py-32 dark:bg-[#06031a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
                <span className="size-1.5 rounded-full bg-indigo-500" />
                Case studies
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
                Real threats. Real Nepali organisations. Real outcomes.
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-indigo-100/65">
                How banks, insurers and government platforms across Nepal use
                Selim Solution to detect, contain and respond.
              </p>
            </div>
            <a
              href="/case-studies"
              className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-zinc-200 px-5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
            >
              All case studies
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, index) => (
              <article
                key={item.name}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_90px_-50px_rgba(79,70,229,0.6)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(79,70,229,0.1),transparent_45%)]" />

                <div className="relative flex items-center justify-between p-6 pb-0">
                  <span className="font-mono text-xs text-zinc-400 dark:text-indigo-200/50">
                    {String(index + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:border-white/10 dark:text-indigo-200/70">
                    {item.sector}
                  </span>
                </div>

                <div className="relative p-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                      {item.metric}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-indigo-100/55">
                      {item.metricLabel}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight text-zinc-950 dark:text-white">
                    {item.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/65">
                    {item.summary}
                  </p>
                </div>

                <div className="relative mt-auto border-t border-zinc-100 px-6 py-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-white/5 dark:text-indigo-100/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-zinc-900 dark:text-white">
                      {item.name}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY LAYERS */}
      <section className="relative overflow-hidden rounded-lg bg-white py-16 text-zinc-950  dark:bg-[#06031a] dark:text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
        <div className="pointer-events-none absolute -left-32 top-1/3 size-[28rem] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
                <span className="size-1.5 rounded-full bg-indigo-500" />
                Defense stack
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Clarity from the highest ground.
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-indigo-100/65">
                Selim Solution takes its name from Seim Lake in Humla's Nimi
                Valley — Nepal's far-western Himalayas. Like that lake at
                altitude, our SOC keeps watch over your business with
                high-altitude clarity, vigilance and resilience.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "ISO 27001 & NIA Guideline 2076 advisory",
                  "Kathmandu SOC, 24/7/365 coverage",
                  "Local team, global tooling",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-700 dark:text-indigo-100/75"
                  >
                    <CheckCircle
                      className="size-5 shrink-0 text-indigo-500 dark:text-indigo-300"
                      weight="fill"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { icon: Pulse, label: "SOC as a Service" },
                { icon: ShieldCheck, label: "VAPT" },
                { icon: BracketsCurly, label: "Cloud Security" },
                { icon: Lightning, label: "EDR" },
                { icon: CubeFocus, label: "GRC" },
                { icon: FlowArrow, label: "DFIR" },
                { icon: Sparkle, label: "Awareness Training" },
                { icon: Code, label: "NIA 2076" },
                { icon: Strategy, label: "ISO 27001" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-[0_18px_40px_-26px_rgba(79,70,229,0.5)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/40"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex size-10 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
                    <Icon className="size-5" weight="duotone" />
                  </div>
                  <span className="relative text-xs font-medium tracking-wide text-zinc-700 dark:text-indigo-100/80">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 7.5 INSIGHTS / BLOG */}
      <section className="bg-white py-24 sm:py-32 dark:bg-[#06031a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
                <span className="size-1.5 rounded-full bg-indigo-500" />
                Insights
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
                Threat intelligence, Nepal-first.
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-indigo-100/65">
                Research, regulatory breakdowns and field notes from our
                Kathmandu SOC team.
              </p>
            </div>
            <a
              href="/blog"
              className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-zinc-200 px-5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
            >
              View all articles
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                tag: "NIA 2076",
                date: "May 8, 2026",
                readTime: "6 min read",
                title:
                  "What NIA Guideline 2076 really expects from Nepali insurers",
                excerpt:
                  "A practical walk-through of the controls our GRC team uses to get insurance clients audit-ready in 90 days.",
                gradient:
                  "from-indigo-500/80 via-indigo-600/70 to-purple-600/80",
                icon: ShieldCheck,
                featured: true,
              },
              {
                tag: "NRB Directives",
                date: "April 24, 2026",
                readTime: "4 min read",
                title:
                  "Nepal Rastra Bank IT directives: a VAPT checklist",
                excerpt:
                  "What every Nepali commercial bank should be testing before its next NRB audit — straight from our engagements.",
                gradient: "from-sky-500/70 via-indigo-500/70 to-indigo-700/80",
                icon: CubeFocus,
                featured: false,
              },
              {
                tag: "DFIR",
                date: "April 11, 2026",
                readTime: "5 min read",
                title:
                  "Ransomware in 90 seconds: a DFIR playbook for Nepal",
                excerpt:
                  "How our DFIR team contained a payload mid-encryption inside a Kathmandu enterprise network.",
                gradient:
                  "from-indigo-600/80 via-fuchsia-500/60 to-indigo-500/70",
                icon: Lightning,
                featured: false,
              },
            ].map(({ icon: Icon, ...post }) => (
              <article
                key={post.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_90px_-50px_rgba(79,70,229,0.6)] dark:border-white/10 dark:bg-[#0d092d]"
              >
                <div
                  className={`relative h-44 overflow-hidden bg-gradient-to-br ${post.gradient}`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                  <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:14px_14px]" />
                  <div className="pointer-events-none absolute -bottom-20 -right-10 size-56 rounded-full bg-white/15 blur-3xl" />
                  <div className="absolute right-5 top-5 inline-flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                    <Icon className="size-6 text-white" weight="duotone" />
                  </div>
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                    {post.tag}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-indigo-100/55">
                    <span>{post.date}</span>
                    <span className="size-1 rounded-full bg-zinc-300 dark:bg-indigo-100/30" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-zinc-950 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/65">
                    {post.excerpt}
                  </p>

                  <a
                    href="/blog"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-transform group-hover:translate-x-0.5 dark:text-indigo-300"
                  >
                    Read article
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FOOTER */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#08051f] px-6 py-20 shadow-[0_40px_140px_-60px_rgba(79,70,229,0.9)] sm:px-16 sm:py-24 lg:px-24">
          {/* grid */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          {/* dot pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:24px_24px]" />
          {/* vignette */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(8,5,31,0.4)_60%,rgba(8,5,31,0.85)_100%)]" />
          {/* animated spotlights */}
          <div className="animate-selim-spotlight pointer-events-none absolute -left-32 top-0 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.9)_0%,rgba(79,70,229,0.45)_40%,transparent_72%)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 right-[-8%] size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.6)_0%,rgba(79,70,229,0.25)_50%,transparent_75%)] blur-3xl" />

          <div className="relative flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200 backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-indigo-300 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-indigo-200" />
                </span>
                Ready when you are
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Ready to secure
                <br /> your organisation?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-indigo-100/70 sm:text-lg">
                Start with a free consultation. Our Kathmandu team will map
                your risks and walk you through the right MSSP services.
              </p>

              <ul className="mt-8 flex flex-col gap-3 sm:items-center lg:items-start">
                {[
                  "24/7 SOC monitoring from Kathmandu",
                  "VAPT, EDR, Cloud and DFIR on demand",
                  "ISO 27001, NIA 2076 and NRB-aligned advisory",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-indigo-100/85"
                  >
                    <CheckCircle
                      className="size-5 shrink-0 text-indigo-300"
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
                className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-[#151032] shadow-[0_20px_60px_-24px_rgba(255,255,255,0.7)] transition-all hover:-translate-y-0.5 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#08051f]"
              >
                Book a Call
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Download Company Profile
                <FlowArrow className="size-5" />
              </a>
              <div className="mt-2 flex justify-center gap-5 text-sm text-indigo-100/60">
                <span className="flex items-center gap-1.5">
                  <Lightning weight="fill" className="size-4 text-indigo-300" />
                  Kathmandu, Nepal
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck
                    weight="fill"
                    className="size-4 text-indigo-300"
                  />
                  ISO 27001 advisory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
