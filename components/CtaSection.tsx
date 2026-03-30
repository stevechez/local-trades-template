"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import siteData from "@/data.json";

export default function CtaSection() {
  const { siteMeta, hero, contact } = siteData;

  return (
    // Background flips from slate-100 to slate-950
    <section className="py-24 bg-slate-100 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background abstract elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Text flips from dark slate to white */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors duration-300">
            Ready to transform your space?
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 font-light leading-relaxed transition-colors duration-300">
            Stop putting off your dream project. Contact{" "}
            <span className="text-amber-600 dark:text-amber-500 font-semibold transition-colors duration-300">
              {siteMeta.businessName}
            </span>{" "}
            today to schedule your consultation and see how we can bring your
            vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <Link
              href={hero.primaryCtaLink}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-slate-950 transition-all hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)] dark:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:-translate-y-1"
            >
              {hero.primaryCtaText}
            </Link>

            {/* Secondary Button - Flips from white card to dark card */}
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 px-8 py-4 text-base font-bold text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40"
            >
              <PhoneCall className="w-5 h-5 text-amber-500" />
              Call {contact.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
