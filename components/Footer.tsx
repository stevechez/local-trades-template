import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import siteData from "@/data.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { siteMeta, navigation, hero, servicesBento, contact } = siteData;

  const nameParts = siteMeta.businessName.split(" ");
  const lastWord = nameParts.pop();
  const firstPart = nameParts.join(" ");

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 pt-20 overflow-hidden transition-colors duration-300">
      {/* 1. The Glow Bleed */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand & Value Prop */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 inline-block transition-colors duration-300"
            >
              {firstPart}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500">
                {lastWord}
              </span>
            </Link>
            <p className="max-w-sm mb-8 text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-colors duration-300">
              {siteMeta.description}
            </p>
            <Link
              href={hero.primaryCtaLink}
              className="group inline-flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-sm hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
            >
              {hero.primaryCtaText}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-start-4">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-tight transition-colors duration-300">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Core Services */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-tight transition-colors duration-300">
              Core Services
            </h4>
            <ul className="space-y-4">
              {servicesBento.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href="#services"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Local SEO (NAP) */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-tight transition-colors duration-300">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-500" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-amber-500" />
                {contact.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                <Clock className="w-4 h-4 text-amber-500" />
                {contact.businessHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Status, Copyright */}
        <div className="pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-200 dark:border-white/5 relative z-10 transition-colors duration-300">
          <div className="flex items-center gap-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-3 py-1.5 shadow-sm dark:shadow-none transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">
              Licensed & Fully Insured
            </span>
          </div>

          <p className="text-sm text-slate-500">
            © {currentYear} {siteMeta.businessName}. All rights reserved.
          </p>
        </div>
      </div>

      {/* 3. The Massive Typography Anchor */}
      <div className="w-full overflow-hidden flex justify-center pointer-events-none select-none pb-[-20px] translate-y-[25%]">
        <h1 className="text-[12vw] font-extrabold leading-none tracking-tighter text-slate-900/[0.03] dark:text-white/[0.02] whitespace-nowrap transition-colors duration-300">
          {siteMeta.businessName.toUpperCase()}
        </h1>
      </div>
    </footer>
  );
}
