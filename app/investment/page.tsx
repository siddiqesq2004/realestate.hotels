"use client";

import Navigation from "@/components/ui/Navigation";
import FadeIn from "@/components/ui/FadeIn";
import ROICalculator from "@/components/ui/ROICalculator";

export default function InvestmentPage() {
  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hotel-frames/frame_0010.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-charcoal-900/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-20 max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <p className="text-bronze-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Own The Legacy</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-8xl font-serif tracking-wide mb-6">Investment</h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="font-sans text-xl text-ivory-200 font-light leading-relaxed mb-10">
              A rare opportunity to secure a piece of history. We offer an exclusive selection of private residences and branded suites for visionary investors.
            </p>
            <a 
              href="mailto:invest@aura.com"
              className="inline-block bg-bronze-500 hover:bg-bronze-400 text-charcoal-900 px-10 py-4 uppercase tracking-[0.2em] text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,106,0.3)] hover:shadow-[0_0_25px_rgba(212,175,106,0.6)]"
            >
              Request Prospectus
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Press & Prestige Banner */}
      <section className="w-full py-12 bg-charcoal-900 border-b border-white/5 flex flex-col items-center justify-center">
        <p className="text-xs uppercase tracking-[0.2em] text-ivory-400 mb-8 font-medium">As Featured In</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="font-serif text-2xl tracking-widest text-white">FORBES</span>
          <span className="font-serif text-2xl tracking-widest text-white">VOGUE LIVING</span>
          <span className="font-serif text-xl tracking-[0.2em] text-white">ARCHITECTURAL DIGEST</span>
          <span className="font-serif text-2xl tracking-widest text-white">ROBB REPORT</span>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="up" delay={0.1}>
            <div className="border border-white/10 p-10 hover:border-bronze-500/30 transition-colors h-full bg-[#181818]">
              <h3 className="text-2xl font-serif text-ivory-100 mb-4">Private Residences</h3>
              <p className="text-ivory-300 font-sans font-light leading-relaxed mb-6">
                Uncompromising luxury in your own standalone estate. Ranging from 3 to 6 bedrooms, featuring private pools and dedicated staff quarters.
              </p>
              <p className="text-bronze-400 font-sans uppercase tracking-[0.1em] text-xs font-medium">Starting from $8.5M</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div className="border border-white/10 p-10 hover:border-bronze-500/30 transition-colors h-full bg-[#181818]">
              <h3 className="text-2xl font-serif text-ivory-100 mb-4">Branded Suites</h3>
              <p className="text-ivory-300 font-sans font-light leading-relaxed mb-6">
                Turnkey investment properties fully managed by Aura. Owners receive 45 days of annual usage and a share of the resort rental yield.
              </p>
              <p className="text-bronze-400 font-sans uppercase tracking-[0.1em] text-xs font-medium">Starting from $1.2M</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <ROICalculator />
    </main>
  );
}
