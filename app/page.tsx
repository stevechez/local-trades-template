// app/page.tsx
import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import { Testimonials } from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <CtaSection />
    </main>
  );
}
