"use client";

import Navigation from "@/components/ui/Navigation";
import FadeIn from "@/components/ui/FadeIn";

export default function ExperiencePage() {
  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hotel-frames/frame_0150.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-charcoal-900/60" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <FadeIn delay={0.2}>
            <p className="text-bronze-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Beyond Hospitality</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-8xl font-serif tracking-wide mb-6">The Experience</h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="font-sans text-xl text-ivory-200 max-w-2xl mx-auto font-light leading-relaxed">
              Curated moments of perfection. Lose yourself in an environment designed exclusively for your pleasure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right" className="space-y-8 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-ivory-100 leading-tight">
              Service That <br/><span className="text-bronze-400 text-italic">Anticipates</span>
            </h2>
            <p className="text-ivory-300 font-sans leading-relaxed text-lg font-light">
              True luxury is invisible. Our dedicated staff is trained to anticipate your needs before they even arise. From the moment your car pulls into the grand driveway, every aspect of your ownership is seamlessly orchestrated.
            </p>
            <p className="text-ivory-300 font-sans leading-relaxed text-lg font-light">
              Whether it is arranging a private twilight dinner overlooking the valley, or preparing your suite to your exact climate and lighting preferences, the Aura ownership experience is profoundly personal.
            </p>
            <a 
              href="/amenities"
              className="inline-block border border-bronze-500 text-bronze-400 hover:bg-bronze-500 hover:text-charcoal-900 transition-colors duration-300 px-8 py-3 uppercase tracking-[0.2em] text-sm font-medium mt-4"
            >
              Explore Services
            </a>
          </FadeIn>

          <FadeIn direction="left" className="order-1 md:order-2">
            <div className="aspect-square relative overflow-hidden rounded-full border-4 border-bronze-900/30 p-2">
              <div 
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Owner Benefits Section */}
      <section className="py-24 px-6 md:px-12 bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-ivory-100 text-center mb-16">
              The Privileges <span className="text-bronze-400 italic">of Ownership</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-4 gap-8">
            <FadeIn delay={0.1} direction="up" className="text-center p-6 border border-white/5 hover:border-bronze-500/30 transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-bronze-900/20 flex items-center justify-center mb-6 border border-bronze-500/30 overflow-hidden relative">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-xl font-serif text-ivory-100 mb-3">Global Access</h3>
              <p className="text-sm font-sans font-light text-ivory-300 leading-relaxed">
                Enjoy reciprocal usage rights across the entire Aura portfolio worldwide.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up" className="text-center p-6 border border-white/5 hover:border-bronze-500/30 transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-bronze-900/20 flex items-center justify-center mb-6 border border-bronze-500/30 overflow-hidden relative">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-xl font-serif text-ivory-100 mb-3">Priority Charters</h3>
              <p className="text-sm font-sans font-light text-ivory-300 leading-relaxed">
                Exclusive access to the Aura fleet of superyachts with priority booking.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" className="text-center p-6 border border-white/5 hover:border-bronze-500/30 transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-bronze-900/20 flex items-center justify-center mb-6 border border-bronze-500/30 overflow-hidden relative">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-xl font-serif text-ivory-100 mb-3">Private Butler</h3>
              <p className="text-sm font-sans font-light text-ivory-300 leading-relaxed">
                A dedicated private butler assigned to your residence, available 24/7.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" className="text-center p-6 border border-white/5 hover:border-bronze-500/30 transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-bronze-900/20 flex items-center justify-center mb-6 border border-bronze-500/30 overflow-hidden relative">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-xl font-serif text-ivory-100 mb-3">Elite Status</h3>
              <p className="text-sm font-sans font-light text-ivory-300 leading-relaxed">
                Immediate induction into the highest tier of the exclusive Aura Club.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
