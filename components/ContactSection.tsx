"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import siteData from "@/data.json";

export default function ContactSection() {
  const { contact, siteMeta } = siteData;

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* LEFT COLUMN: Copy & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h4 className="text-amber-600 dark:text-amber-500 font-bold tracking-widest text-xs mb-3 uppercase">
                Start Your Project
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight transition-colors duration-300">
                Let&apos;s build something <br /> exceptional.
              </h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md transition-colors duration-300">
                Whether you&apos;re planning a quick repair, a full-scale
                renovation, or a custom build, we bring the same level of
                meticulous craftsmanship to every job.
              </p>
            </div>

            {/* Simulated Map Card */}
            <div className="relative w-full h-56 rounded-3xl overflow-hidden bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex flex-col justify-end p-4 shadow-inner transition-colors duration-300">
              {/* Abstract Map Grid/Texture */}
              <div
                className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05]"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              {/* Glowing Location Radar */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]"></span>
                </span>
              </div>

              {/* Location Badge */}
              <div className="relative z-10 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-4 flex items-center gap-4 transition-colors duration-300">
                <div className="bg-amber-100 dark:bg-amber-500/20 p-2.5 rounded-full text-amber-600 dark:text-amber-400 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm transition-colors duration-300">
                    {contact.address}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300">
                    Serving the Local Area
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white text-sm font-semibold transition-all group"
              >
                <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 transition-colors" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white text-sm font-semibold transition-all group"
              >
                <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 transition-colors" />
                Email Us
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl dark:shadow-none transition-colors duration-300"
          >
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                />
              </div>

              {/* Project Type Select */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Project Type
                </label>
                <select className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all appearance-none">
                  <option value="" disabled selected>
                    Select a project type...
                  </option>
                  <option value="repair">Maintenance & Repair</option>
                  <option value="renovation">Room Renovation</option>
                  <option value="custom">Custom Build / ADU</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Details Textarea */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us a bit about your timeline, location, and vision..."
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
