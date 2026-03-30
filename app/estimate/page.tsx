// app/estimate/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EstimatePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Spacer to push content below the fixed navbar */}
      <div className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Request an Estimate
        </h1>

        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10">
          {/* DROP YOUR OLD INTAKE FORM CODE HERE 
            (Or a simple form using shadcn Input/Textarea)
          */}
          <p className="text-slate-600 dark:text-slate-400 text-center">
            Form goes here...
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
