"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import siteData from "@/data.json";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const { siteMeta, navigation, hero } = siteData;

  const nameParts = siteMeta.businessName.split(" ");
  const lastWord = nameParts.pop();
  const firstPart = nameParts.join(" ");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 py-4 shadow-sm"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Dynamic Logo */}
        <Link
          href="/"
          className="relative z-10 text-2xl font-extrabold tracking-tighter text-slate-900 dark:text-white transition-colors duration-300 hover:scale-105"
        >
          {firstPart}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500">
            {lastWord}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 relative z-10">
          {navigation.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredPath(link.label)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative px-6 py-3 text-base font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300 hover:text-slate-900 dark:hover:text-white active:scale-95"
            >
              {link.label}
              {hoveredPath === link.label && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 -z-10 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-10">
          <ThemeToggle />

          {/* Glowing CTA Button */}
          <div className="relative hidden md:block group">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 blur transition duration-500 group-hover:opacity-70" />
            <Link
              href={hero.primaryCtaLink}
              className="relative flex items-center justify-center rounded-full bg-slate-900 dark:bg-white px-6 py-2.5 text-sm font-bold text-white dark:text-slate-950 transition-colors duration-300 hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-95"
            >
              {hero.primaryCtaText}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-2xl h-screen"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navigation.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-8 py-6 text-xl font-bold text-slate-900 dark:text-slate-200 border-b border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="pt-6 mt-4 border-t border-slate-700 dark:border-white/10"
              >
                <Link
                  href={hero.primaryCtaLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-amber-500 px-6 py-4 text-lg font-bold text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  {hero.primaryCtaText}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
