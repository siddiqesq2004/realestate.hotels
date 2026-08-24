"use client";

import { useState } from "react";
import Navigation from "@/components/ui/Navigation";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function PropertyPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hotel-frames/frame_0209.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-charcoal-900/60" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <FadeIn delay={0.2}>
            <p className="text-bronze-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Flagship Development</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-8xl font-serif tracking-wide mb-6">Grand Heritage</h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="font-sans text-xl text-ivory-200 max-w-2xl mx-auto font-light leading-relaxed">
              Our flagship hotel residence where visionary design meets natural splendor. Discover a real estate sanctuary crafted for the most discerning legacy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/hotel-frames/frame_0120.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </FadeIn>
          
          <FadeIn direction="left" className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-ivory-100 leading-tight">
              A Masterclass <br/><span className="text-bronze-400 text-italic">in Design</span>
            </h2>
            <p className="text-ivory-300 font-sans leading-relaxed text-lg font-light">
              Every cornerstone, every archway, and every expansive vista at Grand Heritage has been meticulously planned to evoke a sense of timeless elegance. The property seamlessly blends classical architectural motifs with state-of-the-art modern comforts, ensuring an ownership experience that is both majestic and effortlessly intuitive.
            </p>
            <p className="text-ivory-300 font-sans leading-relaxed text-lg font-light">
              Spread across acres of pristine landscaping, the estate offers an unparalleled sense of space and privacy, allowing residents and guests to truly disconnect from the outside world.
            </p>
            <button 
              onClick={() => setShowModal(true)}
              className="border border-bronze-500 text-bronze-400 hover:bg-bronze-500 hover:text-charcoal-900 transition-colors duration-300 px-8 py-3 uppercase tracking-[0.2em] text-sm font-medium mt-4"
            >
              View Masterplan
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#1a1a1a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <FadeIn delay={0.1}>
            <div className="text-5xl font-serif text-bronze-400 mb-2">
              <AnimatedCounter value={45} />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-ivory-300">Acres of Estate</div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-5xl font-serif text-bronze-400 mb-2">
              <AnimatedCounter value={120} />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-ivory-300">Bespoke Suites</div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-5xl font-serif text-bronze-400 mb-2">
              <AnimatedCounter value={5} />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-ivory-300">Michelin Dining</div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="text-5xl font-serif text-bronze-400 mb-2">
              <AnimatedCounter value={24} suffix="/7" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-ivory-300">Private Concierge</div>
          </FadeIn>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-ivory-100 mb-4">
              Architectural <span className="text-bronze-400 italic">Floor Plans</span>
            </h2>
            <p className="text-ivory-300 font-sans font-light max-w-2xl mx-auto">
              Explore the meticulously crafted layouts of our flagship residences. Each estate is designed to maximize natural light, privacy, and panoramic views.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* 3 Bedroom Layout */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-[#1a1a1a] p-8 border border-white/5 hover:border-bronze-500/30 transition-colors h-full flex flex-col">
              <div className="aspect-[16/9] mb-8 bg-charcoal-900 border border-white/10 relative overflow-hidden flex items-center justify-center group">
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <span className="relative z-10 font-serif text-2xl tracking-widest text-white/50 group-hover:text-white transition-colors duration-500">
                  FLOORPLAN A
                </span>
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2">The 3-Bedroom Estate</h3>
              <p className="text-ivory-300 font-sans font-light mb-6 flex-grow">
                Spanning 4,500 sq ft of indoor-outdoor living space, featuring a private infinity pool, sprawling master suite, and dedicated staff quarters.
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full border border-bronze-500 text-bronze-400 hover:bg-bronze-500 hover:text-charcoal-900 transition-colors duration-300 py-3 uppercase tracking-[0.2em] text-xs font-bold"
              >
                Download Floorplan (PDF)
              </button>
            </div>
          </FadeIn>

          {/* 6 Bedroom Layout */}
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-[#1a1a1a] p-8 border border-white/5 hover:border-bronze-500/30 transition-colors h-full flex flex-col">
              <div className="aspect-[16/9] mb-8 bg-charcoal-900 border border-white/10 relative overflow-hidden flex items-center justify-center group">
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <span className="relative z-10 font-serif text-2xl tracking-widest text-white/50 group-hover:text-white transition-colors duration-500">
                  FLOORPLAN B
                </span>
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2">The 6-Bedroom Signature Villa</h3>
              <p className="text-ivory-300 font-sans font-light mb-6 flex-grow">
                An expansive 12,000 sq ft sanctuary. Includes a private cinema, wellness spa, subterranean wine cellar, and rooftop helipad access.
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full border border-bronze-500 text-bronze-400 hover:bg-bronze-500 hover:text-charcoal-900 transition-colors duration-300 py-3 uppercase tracking-[0.2em] text-xs font-bold"
              >
                Download Floorplan (PDF)
              </button>
            </div>
          </FadeIn>

          {/* 4 Bedroom Layout */}
          <FadeIn direction="up" delay={0.5}>
            <div className="bg-[#1a1a1a] p-8 border border-white/5 hover:border-bronze-500/30 transition-colors h-full flex flex-col">
              <div className="aspect-[16/9] mb-8 bg-charcoal-900 border border-white/10 relative overflow-hidden flex items-center justify-center group">
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <span className="relative z-10 font-serif text-2xl tracking-widest text-white/50 group-hover:text-white transition-colors duration-500">
                  FLOORPLAN C
                </span>
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2">The 4-Bedroom Garden Villa</h3>
              <p className="text-ivory-300 font-sans font-light mb-6 flex-grow">
                A 6,200 sq ft masterpiece featuring expansive indoor botanical gardens, a private sunken lounge, and a stunning reflection pool.
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full border border-bronze-500 text-bronze-400 hover:bg-bronze-500 hover:text-charcoal-900 transition-colors duration-300 py-3 uppercase tracking-[0.2em] text-xs font-bold"
              >
                Download Floorplan (PDF)
              </button>
            </div>
          </FadeIn>

          {/* 5 Bedroom Layout */}
          <FadeIn direction="up" delay={0.7}>
            <div className="bg-[#1a1a1a] p-8 border border-white/5 hover:border-bronze-500/30 transition-colors h-full flex flex-col">
              <div className="aspect-[16/9] mb-8 bg-charcoal-900 border border-white/10 relative overflow-hidden flex items-center justify-center group">
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <span className="relative z-10 font-serif text-2xl tracking-widest text-white/50 group-hover:text-white transition-colors duration-500">
                  FLOORPLAN D
                </span>
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2">The 5-Bedroom Penthouse</h3>
              <p className="text-ivory-300 font-sans font-light mb-6 flex-grow">
                Elevated 8,500 sq ft luxury. Showcases wrap-around balconies, a private suspended pool, and a dual-kitchen setup for entertaining.
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full border border-bronze-500 text-bronze-400 hover:bg-bronze-500 hover:text-charcoal-900 transition-colors duration-300 py-3 uppercase tracking-[0.2em] text-xs font-bold"
              >
                Download Floorplan (PDF)
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Other Properties Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-ivory-100 text-center mb-16">
            Explore <span className="text-bronze-400 italic">Our Hotel Portfolio</span>
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={0.1} direction="up">
            <a href="/property/villa-serenity" className="block group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-sm relative mb-6">
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2">Villa Serenity Resort & Residences</h3>
              <p className="text-ivory-300 font-sans font-light">Tuscany, Italy</p>
            </a>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <a href="/property/azure-estate" className="block group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-sm relative mb-6">
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2">Azure Hotel & Residences</h3>
              <p className="text-ivory-300 font-sans font-light">Malibu, California</p>
            </a>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <a href="/property/the-pinnacle" className="block group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-sm relative mb-6">
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2">The Pinnacle Hotel Estates</h3>
              <p className="text-ivory-300 font-sans font-light">Swiss Alps</p>
            </a>
          </FadeIn>
          <FadeIn delay={0.7} direction="up">
            <a href="/property/oasis-desert" className="block group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-sm relative mb-6">
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2">Oasis Desert Resort</h3>
              <p className="text-ivory-300 font-sans font-light">Dubai, UAE</p>
            </a>
          </FadeIn>

          <FadeIn delay={0.9} direction="up">
            <a href="/property/emerald-retreat" className="block group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-sm relative mb-6">
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1538964173425-93884d739596?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2">The Emerald Retreat</h3>
              <p className="text-ivory-300 font-sans font-light">Bali, Indonesia</p>
            </a>
          </FadeIn>

          <FadeIn delay={1.1} direction="up">
            <a href="/property/aurora-ice" className="block group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-sm relative mb-6">
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2">Aurora Ice Hotel</h3>
              <p className="text-ivory-300 font-sans font-light">Reykjavik, Iceland</p>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Gated Content Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] bg-charcoal-900/80 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="bg-[#151515] border border-bronze-500/30 p-12 max-w-lg w-full text-center relative shadow-2xl">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-ivory-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="w-16 h-16 mx-auto rounded-full bg-bronze-900/20 flex items-center justify-center mb-6 border border-bronze-500/30">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className="text-2xl font-serif text-ivory-100 mb-4">Secure Access Required</h3>
            <p className="text-ivory-300 font-sans font-light mb-8">
              Architectural blueprints and masterplans are exclusively available to registered prospective owners. Please submit an enquiry to request access.
            </p>
            <a 
              href="/enquire"
              className="inline-block w-full bg-bronze-500 text-charcoal-900 py-4 uppercase tracking-[0.2em] text-sm font-bold transition-all hover:bg-bronze-400"
            >
              Request Access
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
