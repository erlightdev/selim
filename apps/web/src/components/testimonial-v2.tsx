import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Threats we couldn't see before now surface in seconds. Our SOC finally has a single pane of glass instead of ten dashboards.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Head of Security Operations",
  },
  {
    text: "The AI caught a credential stuffing campaign three hours before our legacy SIEM would have. That window saved us from a breach.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "CISO",
  },
  {
    text: "Onboarding took two days. Two days. Zero-trust policies, endpoint agents, identity hooks — all live before our next standup.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Security Engineer",
  },
  {
    text: "Auto-response contained a ransomware attempt inside our finance subnet before the on-call analyst even opened the alert.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "VP Engineering",
  },
  {
    text: "Compliance audits used to take weeks. Now I export a single report with full forensic trails and our auditors are speechless.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Compliance Lead",
  },
  {
    text: "Behavioral models flagged lateral movement no signature-based tool would have caught. That alone justified the entire budget.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Threat Intel Analyst",
  },
  {
    text: "Our incident response time dropped from hours to under three minutes. The team can finally focus on real threats, not noise.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Director of Cyber Defense",
  },
  {
    text: "Open APIs meant we wired it into our existing stack in an afternoon. No rip-and-replace, just better signal across everything.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Platform Security Lead",
  },
  {
    text: "Every endpoint, identity, and workload monitored 24/7. Our board sleeps better. So do I.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "Chief Technology Officer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="m-0 flex list-none flex-col gap-6 bg-transparent p-0 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  className="group w-full max-w-xs cursor-default select-none rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(79,70,229,0.45)] transition-all duration-300 hover:border-indigo-200 hover:shadow-[0_30px_80px_-40px_rgba(79,70,229,0.7)] focus:outline-none focus:ring-2 focus:ring-indigo-400/40 dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/40"
                >
                  <blockquote className="m-0 p-0">
                    <p className="m-0 leading-relaxed text-zinc-700 dark:text-indigo-100/75">
                      {text}
                    </p>
                    <footer className="mt-6 flex items-center gap-3">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="size-10 rounded-full object-cover ring-2 ring-zinc-100 transition-all duration-300 group-hover:ring-indigo-300 dark:ring-white/10 dark:group-hover:ring-indigo-400/50"
                      />
                      <div className="flex flex-col">
                        <cite className="text-sm font-semibold not-italic leading-5 tracking-tight text-zinc-950 dark:text-white">
                          {name}
                        </cite>
                        <span className="mt-0.5 text-xs leading-5 tracking-tight text-zinc-500 dark:text-indigo-100/55">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-white py-16 dark:bg-[#06031a]"
    >
      <div className="pointer-events-none absolute -left-32 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/20" />
      <div className="pointer-events-none absolute -right-32 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/15" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto  px-0 md:px-6"
      >
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
            <span className="size-1.5 rounded-full bg-indigo-500" />
            Testimonials
          </div>

          <h2
            id="testimonials-heading"
            className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl dark:text-white"
          >
            Trusted by security teams worldwide
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-600 dark:text-indigo-100/65">
            From CISOs to SOC analysts — see how teams stay ahead of modern
            threats with our platform.
          </p>
        </div>

        <div
          className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
}
