import Navigation from "@/components/ui/Navigation";
import FadeIn from "@/components/ui/FadeIn";

export default function AmenitiesPage() {
  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hotel-frames/frame_0100.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-charcoal-900/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <FadeIn delay={0.2}>
            <p className="text-bronze-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">World-Class Facilities</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-8xl font-serif tracking-wide mb-6">Amenities</h1>
          </FadeIn>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto -mt-32 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          <FadeIn delay={0.1} direction="up">
            <div className="bg-[#1a1a1a] border border-white/5 hover:border-bronze-500/30 transition-colors duration-500 group h-full flex flex-col overflow-hidden">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-2xl mb-4 text-bronze-400 group-hover:scale-110 transition-transform origin-left">✦</div>
                <h3 className="text-2xl font-serif text-ivory-100 mb-4">The Spa Sanctuary</h3>
                <p className="text-ivory-300 font-sans font-light leading-relaxed flex-grow">
                  A 10,000 sq ft holistic wellness center featuring hydrotherapy circuits, bespoke treatments, and meditation pavilions.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <div className="bg-[#1a1a1a] border border-white/5 hover:border-bronze-500/30 transition-colors duration-500 group h-full flex flex-col overflow-hidden">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-2xl mb-4 text-bronze-400 group-hover:scale-110 transition-transform origin-left">✦</div>
                <h3 className="text-2xl font-serif text-ivory-100 mb-4">Infinity Pool Club</h3>
                <p className="text-ivory-300 font-sans font-light leading-relaxed flex-grow">
                  Three temperature-controlled infinity pools overlooking the valley, complete with private cabanas and dedicated butler service.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <div className="bg-[#1a1a1a] border border-white/5 hover:border-bronze-500/30 transition-colors duration-500 group h-full flex flex-col overflow-hidden">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-2xl mb-4 text-bronze-400 group-hover:scale-110 transition-transform origin-left">✦</div>
                <h3 className="text-2xl font-serif text-ivory-100 mb-4">Epicurean Dining</h3>
                <p className="text-ivory-300 font-sans font-light leading-relaxed flex-grow">
                  Multiple signature restaurants helmed by award-winning chefs, alongside a subterranean wine cellar holding 15,000 rare vintages.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.7} direction="up">
            <div className="bg-[#1a1a1a] border border-white/5 hover:border-bronze-500/30 transition-colors duration-500 group h-full flex flex-col overflow-hidden mt-8 md:mt-0">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-2xl mb-4 text-bronze-400 group-hover:scale-110 transition-transform origin-left">✦</div>
                <h3 className="text-2xl font-serif text-ivory-100 mb-4">Private Cinema</h3>
                <p className="text-ivory-300 font-sans font-light leading-relaxed flex-grow">
                  An intimate, acoustically-perfected 12-seat screening room featuring 4K laser projection and curated film libraries.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.9} direction="up">
            <div className="bg-[#1a1a1a] border border-white/5 hover:border-bronze-500/30 transition-colors duration-500 group h-full flex flex-col overflow-hidden mt-8 md:mt-0">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-2xl mb-4 text-bronze-400 group-hover:scale-110 transition-transform origin-left">✦</div>
                <h3 className="text-2xl font-serif text-ivory-100 mb-4">Helipad & Marina</h3>
                <p className="text-ivory-300 font-sans font-light leading-relaxed flex-grow">
                  Exclusive access via private chartered helicopters and luxury yachts, ensuring absolute discretion upon arrival.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={1.1} direction="up">
            <div className="bg-[#1a1a1a] border border-white/5 hover:border-bronze-500/30 transition-colors duration-500 group h-full flex flex-col overflow-hidden mt-8 md:mt-0">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-2xl mb-4 text-bronze-400 group-hover:scale-110 transition-transform origin-left">✦</div>
                <h3 className="text-2xl font-serif text-ivory-100 mb-4">Championship Golf</h3>
                <p className="text-ivory-300 font-sans font-light leading-relaxed flex-grow">
                  An 18-hole signature golf course designed by legends, weaving through the breathtaking natural topography.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
