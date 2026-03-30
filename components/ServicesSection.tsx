"use client";

import { motion } from "framer-motion";
import siteData from "@/data.json";
import {
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  PaintBrushIcon,
  Square3Stack3DIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

// 1. The Icon Map: Translates JSON strings to actual Heroicons
const iconMap: Record<string, React.ElementType> = {
  Hammer: WrenchScrewdriverIcon, // Heroicons doesn't have a standalone hammer, this is the go-to builder icon
  Brush: PaintBrushIcon,
  Ruler: Square3Stack3DIcon,
  Wrench: WrenchIcon,
  Home: HomeIcon,
  Briefcase: BriefcaseIcon,
};

export default function ServicesSection() {
  // 2. Pull the services array from our flat-file brain
  const { servicesBento } = siteData;

  return (
    <section
      id="services"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
        >
          Our Services
        </motion.h2>

        {/* Responsive grid: 1 col on mobile, 2 on tablet, up to 4 on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesBento.map((s, i) => {
            // 3. Safely grab the icon component, fallback to Wrench if name doesn't match
            const IconComponent = iconMap[s.iconName] || WrenchIcon;

            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-4 bg-amber-100 rounded-2xl mb-5 text-amber-600">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl text-slate-900">{s.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
