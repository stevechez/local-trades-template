"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import siteData from "@/data.json";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const { hero, trustBanner } = siteData;

  const words = hero.headline.split(" ");
  const highlightStartIndex = words.length - 2;

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pt-24 pb-12">
      {/* Subtle background lighting orb */}
      <div className="absolute top-1/4 left-0 lg:left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 dark:bg-amber-500/20 blur-[120px] rounded-full pointer-events-none z-10" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        className="relative z-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
      >
        {/* LEFT COLUMN: Content */}
        <div className="flex flex-col items-start text-left pt-12 lg:pt-0">
          {/* Kicker Badge */}
          <motion.div variants={fadeUpVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-sm dark:shadow-inner transition-colors duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              {trustBanner.badges[0]}
            </span>
          </motion.div>

          {/* Typography */}
          <motion.h1
            variants={fadeUpVariants}
            className="max-w-2xl text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-[1.05] transition-colors duration-300"
          >
            {words.map((word, i) =>
              i >= highlightStartIndex ? (
                <span
                  key={i}
                  className="text-transparent bg-clip-text bg-gradient-to-br from-slate-700 to-slate-400 dark:from-white dark:to-slate-400"
                >
                  {" "}
                  {word}{" "}
                </span>
              ) : (
                <span key={i}> {word} </span>
              ),
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400 sm:text-xl font-light leading-relaxed transition-colors duration-300"
          >
            {hero.subheadline}
          </motion.p>

          {/* Buttons & Trust Cluster */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-10 flex flex-col items-start w-full gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 opacity-50 blur transition duration-500 group-hover:opacity-100" />
                <Link
                  href={hero.primaryCtaLink}
                  className="relative flex w-full sm:w-auto items-center justify-center rounded-xl bg-slate-900 dark:bg-slate-950 px-8 py-4 text-base font-bold text-white transition-all hover:bg-slate-800 dark:hover:bg-slate-900 ring-1 ring-slate-800 dark:ring-white/20"
                >
                  {hero.primaryCtaText}
                </Link>
              </div>

              <Link
                href={hero.secondaryCtaLink}
                className="flex w-full sm:w-auto items-center justify-center rounded-xl px-8 py-4 text-base font-medium text-slate-600 dark:text-slate-300 transition-all hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5"
              >
                {hero.secondaryCtaText}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-slate-50 dark:border-slate-950 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden transition-colors duration-300"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 15}`}
                      alt="Client"
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-0.5 text-sm text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300">
                <div className="flex text-yellow-500 text-xs">★★★★★</div>
                <span>{trustBanner.heading}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Image Container with Locked Heights */}
        <motion.div
          variants={fadeUpVariants}
          // Swapped aspect ratio for fixed heights: 450px on mobile, 600px on desktop, 650px on ultrawide
          className="relative w-full h-[450px] lg:h-[600px] xl:h-[650px] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl dark:shadow-amber-500/5"
        >
          <Image
            src={hero.heroImageUrl}
            alt={hero.headline}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent dark:from-slate-950/60 mix-blend-multiply" />
        </motion.div>
      </motion.div>
    </section>
  );
}
