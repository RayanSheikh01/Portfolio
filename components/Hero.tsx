"use client";

import { motion, useReducedMotion } from "framer-motion";

const focus = [
  "Threat Detection",
  "Phishing Analysis",
  "Offensive Security",
  "AI/LLM Security",
  "Python",
  "Log Analysis",
];

const session = [
  { prompt: true, text: "whoami" },
  { text: "Rayan Sheikh \u2014 cyber security student", tone: "bright" },
  { text: "Cyber Security, King's College London" },
  { prompt: true, text: "cat focus.txt" },
  { text: "Detection engineering. Threat intelligence." },
  { text: "Security tooling that surfaces real attacker activity." },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100vh-9rem)] flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 py-16">
      {/* Terminal */}
      <div className="flex-1 w-full max-w-xl">
        <div className="rounded-lg border border-[#23272f] bg-[#101216] shadow-[0_0_0_1px_rgba(245,165,36,0.06),0_24px_60px_-30px_rgba(0,0,0,0.9)]">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-[#23272f] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2f343d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2f343d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2f343d]" />
            <span className="ml-2 font-mono text-xs text-[#8b939e]">
              rayan@sec &mdash; zsh
            </span>
          </div>

          {/* Session */}
          <div className="px-5 py-5 font-mono text-sm leading-7">
            {session.map((line, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reduce ? 0 : 0.25 + i * 0.35, duration: 0.2 }}
                className={
                  line.prompt
                    ? "mt-3 first:mt-0 text-[#e6e8eb]"
                    : line.tone === "bright"
                    ? "text-[#f5a524]"
                    : "text-[#8b939e]"
                }
              >
                {line.prompt && <span className="mr-2 text-[#f5a524]">&#36;</span>}
                {line.text}
              </motion.div>
            ))}

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduce ? 0 : 2.4 }}
              className="mt-3 flex items-center text-[#e6e8eb]"
            >
              <span className="mr-2 text-[#f5a524]">&#36;</span>
              <motion.span
                animate={reduce ? {} : { opacity: [1, 1, 0, 0] }}
                transition={{ repeat: Infinity, duration: 1.1, times: [0, 0.5, 0.5, 1] }}
                className="inline-block h-4 w-2 bg-[#f5a524]"
                aria-hidden
              />
            </motion.div>
          </div>
        </div>

        {/* Focus areas */}
        <div className="mt-7 flex flex-wrap gap-2">
          {focus.map((f) => (
            <span
              key={f}
              className="border border-[#23272f] bg-[#101216] px-3 py-1 font-mono text-xs text-[#8b939e]"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="border border-[#f5a524] bg-[#f5a524] px-5 py-2.5 font-mono text-sm text-[#08090b] transition-colors hover:bg-transparent hover:text-[#f5a524]"
          >
            View projects
          </a>
          <a
            href="/Rayan_Sheikh_CV.pdf"
            className="border border-[#23272f] px-5 py-2.5 font-mono text-sm text-[#e6e8eb] transition-colors hover:border-[#f5a524] hover:text-[#f5a524]"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Portrait with corner ticks */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative">
          <div className="h-64 w-64 md:h-72 md:w-72 overflow-hidden border border-[#23272f]">
            <img
              src="/profile.jpg"
              alt="Rayan Sheikh"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -top-px -left-px h-5 w-5 border-t-2 border-l-2 border-[#f5a524]" />
          <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-[#f5a524]" />
        </div>
      </div>
    </section>
  );
}
