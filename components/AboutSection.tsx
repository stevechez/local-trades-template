"use client";

import { motion } from "framer-motion";
import siteData from "@/data.json";
import Image from "next/image";

export default function AboutSection() {
  const { about } = siteData;

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors duration-300">
            {about.heading}
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
            {about.bioText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={about.ownerImageUrl}
            alt="About us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
