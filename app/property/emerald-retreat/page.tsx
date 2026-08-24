"use client";

import Navigation from "@/components/ui/Navigation";
import FadeIn from "@/components/ui/FadeIn";

export default function EmeraldRetreatPage() {
  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1538964173425-93884d739596?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-charcoal-900/60" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <FadeIn delay={0.2}>
            <p className="text-bronze-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Bali, Indonesia</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-8xl font-serif tracking-wide mb-6">The Emerald Retreat</h1>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-4xl font-serif text-ivory-100 mb-8">Location & Amenities</h2>
            <p className="text-ivory-300 font-sans leading-relaxed text-lg font-light mb-6">
              Hidden within the lush jungles of Ubud, The Emerald Retreat provides a secluded sanctuary where nature and sophisticated real estate coalesce.
            </p>
            <ul className="space-y-4 font-sans font-light text-ivory-200">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-bronze-500" />
                Infinity edge pools overlooking the Ayung River
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-bronze-500" />
                Holistic Ayurvedic spa and yoga pavilions
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-bronze-500" />
                Farm-to-table organic dining
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-bronze-500" />
                Private guided jungle treks and cultural tours
              </li>
            </ul>
          </FadeIn>
          <FadeIn direction="left">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
