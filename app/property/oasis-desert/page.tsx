"use client";

import Navigation from "@/components/ui/Navigation";
import FadeIn from "@/components/ui/FadeIn";

export default function OasisDesertPage() {
  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-charcoal-900/60" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <FadeIn delay={0.2}>
            <p className="text-bronze-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Dubai, UAE</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-8xl font-serif tracking-wide mb-6">Oasis Desert Resort</h1>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-4xl font-serif text-ivory-100 mb-8">Location & Amenities</h2>
            <p className="text-ivory-300 font-sans leading-relaxed text-lg font-light mb-6">
              Situated in the heart of the Arabian dunes, just 40 minutes from Downtown Dubai, Oasis Desert Resort offers an unparalleled blend of ancient Bedouin heritage and modern luxury.
            </p>
            <ul className="space-y-4 font-sans font-light text-ivory-200">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-bronze-500" />
                Private temperature-controlled plunge pools
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-bronze-500" />
                Award-winning desert spa and wellness center
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-bronze-500" />
                Fine dining under the starlit sky
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-bronze-500" />
                Exclusive falconry and dune driving experiences
              </li>
            </ul>
          </FadeIn>
          <FadeIn direction="left">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c53cd3816002?auto=format&fit=crop&w=800&q=80')",
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
