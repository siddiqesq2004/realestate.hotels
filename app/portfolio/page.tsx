import Navigation from "@/components/ui/Navigation";

export default function PortfolioPage() {
  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image using one of the cinematic frames as a placeholder */}
        <div className="absolute inset-0 bg-[url('/hotel-frames/frame_0200.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 to-transparent h-40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 animate-fade-in">
          <span className="text-bronze-400 tracking-[0.3em] text-xs md:text-sm uppercase font-semibold mb-6 block">
            Global Destinations
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-wide drop-shadow-lg">
            Our Portfolio
          </h1>
          <p className="text-ivory-300/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            A breathtaking collection of architectural marvels and luxury retreats spanning the globe's most coveted locations.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Portfolio Item 1 */}
          <div className="group cursor-pointer rounded-2xl overflow-hidden bg-charcoal-800/50 backdrop-blur-md border border-white/5 hover:border-bronze-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(181,141,60,0.3)]">
            <div className="h-96 bg-charcoal-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/hotel-frames/frame_0180.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-70"></div>
              <div className="absolute top-6 left-6 bg-charcoal-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-ivory-100">DUBAI, UAE</div>
            </div>
            <div className="p-10">
              <h3 className="font-serif text-3xl mb-3 group-hover:text-bronze-300 transition-colors">Aura Desert Oasis</h3>
              <p className="text-base text-ivory-300/70 mb-8 font-light tracking-wide leading-relaxed">
                Rising from the golden dunes, this architectural masterpiece redefines modern luxury with unparalleled views of the Arabian horizon and exclusive private villas.
              </p>
              <div className="flex justify-between items-center text-sm font-semibold tracking-widest uppercase">
                <span className="text-bronze-500 group-hover:text-bronze-300 transition-colors flex items-center gap-2">View Gallery <span className="text-lg">→</span></span>
              </div>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="group cursor-pointer rounded-2xl overflow-hidden bg-charcoal-800/50 backdrop-blur-md border border-white/5 hover:border-bronze-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(181,141,60,0.3)]">
            <div className="h-96 bg-charcoal-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/hotel-frames/frame_0130.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-70"></div>
              <div className="absolute top-6 left-6 bg-charcoal-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-ivory-100">MIAMI, FL</div>
            </div>
            <div className="p-10">
              <h3 className="font-serif text-3xl mb-3 group-hover:text-bronze-300 transition-colors">Aura Oceanfront</h3>
              <p className="text-base text-ivory-300/70 mb-8 font-light tracking-wide leading-relaxed">
                Where the sky meets the sea. Experience the vibrant energy of South Beach combined with the serene exclusivity of a private, world-class resort.
              </p>
              <div className="flex justify-between items-center text-sm font-semibold tracking-widest uppercase">
                <span className="text-bronze-500 group-hover:text-bronze-300 transition-colors flex items-center gap-2">View Gallery <span className="text-lg">→</span></span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
