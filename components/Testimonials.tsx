"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";

// (Assuming you have this interface defined in your types/lib file)
export interface ReviewItem {
  name: string;
  role: string;
  image: string;
  quote: string;
}

interface TestimonialsProps {
  reviews?: ReviewItem[];
}

const defaultReviews: ReviewItem[] = [
  {
    name: "Mark & Lisa T.",
    role: "Custom Home Build",
    image: "https://i.pravatar.cc/150?u=mark",
    quote:
      "The easiest construction process we've ever experienced. They showed up on time, kept the site clean, and delivered exactly what they promised.",
  },
  {
    name: "David H.",
    role: "Bathroom Renovation",
    image: "https://i.pravatar.cc/150?u=david",
    quote:
      "Our bathroom remodel was finished a week ahead of schedule. The tile work is absolutely flawless. Worth every single penny.",
  },
  {
    name: "Elena R.",
    role: "Full House Remodel",
    image: "https://i.pravatar.cc/150?u=elena",
    quote:
      "Professional, transparent pricing, and incredible craftsmanship. It's hard to find contractors you can actually trust, but these guys are the real deal.",
  },
  {
    name: "James W.",
    role: "Commercial Build-out",
    image: "https://i.pravatar.cc/150?u=james",
    quote:
      "Got our retail space open 2 weeks early. The project management was night and day compared to other GC's we've worked with.",
  },
  {
    name: "Sarah M.",
    role: "Kitchen Renovation",
    image: "https://i.pravatar.cc/150?u=sarah",
    quote:
      "They completely transformed our kitchen. The custom cabinetry and attention to detail blew us away. Highly recommend.",
  },
  {
    name: "Tom C.",
    role: "Deck & Hardscaping",
    image: "https://i.pravatar.cc/150?u=tom",
    quote:
      "Transformed our backyard into a total oasis. The crew was respectful, fast, and the final product is stunning.",
  },
];

const ReviewCard = ({ review }: { review: ReviewItem }) => (
  // Card background flips from solid white to translucent white
  <div className="relative w-[350px] md:w-[450px] shrink-0 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 backdrop-blur-md transition-colors duration-300 hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm dark:shadow-none">
    <div className="flex items-center gap-4 mb-6">
      {/* Avatar border flips from light gray to dark slate */}
      <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <Image
          src={review.image}
          alt={review.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <div className="flex items-center gap-2">
          {/* Name text flips from slate-900 to white */}
          <h3 className="font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            {review.name}
          </h3>
          <CheckCircle2 className="w-4 h-4 text-amber-500" />
        </div>
        {/* Role text flips from slate-600 to slate-400 */}
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-300">
          {review.role}
        </p>
      </div>
    </div>
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
      ))}
    </div>
    {/* Quote text flips from slate-700 to slate-300 */}
    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-light transition-colors duration-300">
      &quot;{review.quote}&quot;
    </p>
  </div>
);

export function Testimonials({ reviews = defaultReviews }: TestimonialsProps) {
  const midIndex = Math.ceil(reviews.length / 2);
  const firstRow = reviews.slice(0, midIndex);
  const secondRow = reviews.slice(midIndex);

  return (
    // Base section background flips from slate-50 to slate-950
    <section
      id="reviews"
      className="relative bg-slate-50 dark:bg-slate-950 py-32 overflow-hidden transition-colors duration-300"
    >
      {/* Background glow changed to amber to match theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-amber-500/10 dark:bg-amber-500/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main heading flips from slate-900 to white */}
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Loved by thousands of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500">
              happy homeowners.
            </span>
          </h2>
          {/* Subtext flips from slate-600 to slate-400 */}
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto transition-colors duration-300">
            We let our work and our clients speak for us.
          </p>
        </motion.div>
      </div>

      <div
        className="relative flex flex-col gap-6 w-full"
        // This mask fades the edges to transparent so the cards look like they are appearing/disappearing out of thin air
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Row 1: Scrolls Left */}
        <div className="flex w-max overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6 hover:[animation-play-state:paused]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...firstRow, ...firstRow].map((review, idx) => (
              <ReviewCard key={`row1-${idx}`} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="flex w-max overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6 hover:[animation-play-state:paused]"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          >
            {[...secondRow, ...secondRow].map((review, idx) => (
              <ReviewCard key={`row2-${idx}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
