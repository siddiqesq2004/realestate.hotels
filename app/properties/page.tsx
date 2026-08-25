import Navigation from "@/components/ui/Navigation";

export default function PropertiesPage() {
  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 font-sans">
      {/* 
        We use the Navigation component here. 
        It naturally handles its own scrolled state, but since this isn't 
        the cinematic page, we don't need to worry about the UI store hiding it.
      */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image using one of the cinematic frames as a placeholder */}
        <div className="absolute inset-0 bg-[url('/hotel-frames/frame_0150.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 to-transparent h-40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 animate-fade-in">
          <span className="text-bronze-400 tracking-[0.3em] text-xs md:text-sm uppercase font-semibold mb-6 block">
            Exclusive Offerings
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-wide drop-shadow-lg">
            Properties Available
          </h1>
          <p className="text-ivory-300/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Discover a curated collection of ultra-luxury hotel residences designed for the most discerning investors.
          </p>
        </div>
      </section>

      {/* Property Grid Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Property Card 1 */}
          <div className="group cursor-pointer rounded-2xl overflow-hidden bg-charcoal-800/50 backdrop-blur-md border border-white/5 hover:border-bronze-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(181,141,60,0.3)] hover:-translate-y-2">
            <div className="h-72 bg-charcoal-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/hotel-frames/frame_0050.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-60"></div>
              <div className="absolute top-4 left-4 bg-charcoal-900/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-ivory-100">AVAILABLE</div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl mb-2 group-hover:text-bronze-300 transition-colors">The Grand Penthouse</h3>
              <p className="text-sm text-ivory-300/60 mb-8 font-light tracking-wide">4 Bedrooms • 5,200 Sq.Ft • Panoramic Views</p>
              <div className="flex justify-between items-center text-sm font-semibold tracking-widest uppercase">
                <span className="text-ivory-100">From $4.5M</span>
                <span className="text-bronze-500 group-hover:text-bronze-300 transition-colors">Explore →</span>
              </div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="group cursor-pointer rounded-2xl overflow-hidden bg-charcoal-800/50 backdrop-blur-md border border-white/5 hover:border-bronze-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(181,141,60,0.3)] hover:-translate-y-2">
            <div className="h-72 bg-charcoal-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/hotel-frames/frame_0080.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-60"></div>
              <div className="absolute top-4 left-4 bg-bronze-500/20 backdrop-blur-md border border-bronze-500/30 text-bronze-400 px-3 py-1 rounded-full text-xs font-semibold tracking-widest">RESERVED</div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl mb-2 group-hover:text-bronze-300 transition-colors">Presidential Suite</h3>
              <p className="text-sm text-ivory-300/60 mb-8 font-light tracking-wide">3 Bedrooms • 3,800 Sq.Ft • Private Pool</p>
              <div className="flex justify-between items-center text-sm font-semibold tracking-widest uppercase">
                <span className="text-ivory-100">From $3.2M</span>
                <span className="text-bronze-500 group-hover:text-bronze-300 transition-colors">Waitlist →</span>
              </div>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="group cursor-pointer rounded-2xl overflow-hidden bg-charcoal-800/50 backdrop-blur-md border border-white/5 hover:border-bronze-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(181,141,60,0.3)] hover:-translate-y-2">
            <div className="h-72 bg-charcoal-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/hotel-frames/frame_0120.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-60"></div>
              <div className="absolute top-4 left-4 bg-charcoal-900/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-ivory-100">AVAILABLE</div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl mb-2 group-hover:text-bronze-300 transition-colors">Oceanfront Villa</h3>
              <p className="text-sm text-ivory-300/60 mb-8 font-light tracking-wide">2 Bedrooms • 2,400 Sq.Ft • Beach Access</p>
              <div className="flex justify-between items-center text-sm font-semibold tracking-widest uppercase">
                <span className="text-ivory-100">From $2.1M</span>
                <span className="text-bronze-500 group-hover:text-bronze-300 transition-colors">Explore →</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
