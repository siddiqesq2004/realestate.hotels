import Navigation from "@/components/ui/Navigation";
import FadeIn from "@/components/ui/FadeIn";

export default function LocationPage() {
  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hotel-frames/frame_0050.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-charcoal-900/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <FadeIn delay={0.2}>
            <p className="text-bronze-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">The Setting</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-8xl font-serif tracking-wide mb-6">Location</h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="font-sans text-xl text-ivory-200 max-w-2xl mx-auto font-light leading-relaxed">
              Nestled at the intersection of untamed nature and cosmopolitan accessibility.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center border-b border-white/5">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-serif text-ivory-100 mb-8 leading-tight">
            An Oasis of Calm, <br/><span className="text-bronze-400 text-italic">Moments from the Pulse</span>
          </h2>
          <p className="text-ivory-300 font-sans max-w-3xl mx-auto leading-relaxed text-lg font-light mb-12">
            Grand Heritage occupies a highly coveted topographical vantage point, offering sweeping 360-degree views of the surrounding mountain ranges and valley floor. Despite its profound sense of seclusion, the property remains within a convenient 45-minute drive from the international airport and the metropolitan center.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-serif text-bronze-400 mb-1">15<span className="text-lg">m</span></p>
              <p className="text-xs uppercase tracking-[0.1em] text-ivory-300">Helipad Transfer</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-serif text-bronze-400 mb-1">45<span className="text-lg">m</span></p>
              <p className="text-xs uppercase tracking-[0.1em] text-ivory-300">Intl Airport</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Global Developments Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-ivory-100 text-center mb-16">
            Global <span className="text-bronze-400 italic">Hotel Estates</span>
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={0.1} direction="up">
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-full relative mb-6 border-4 border-bronze-900/30 p-2">
                <div 
                  className="w-full h-full rounded-full transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2 text-center">Aura Paris Residences</h3>
              <p className="text-ivory-300 font-sans font-light text-center">France</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-full relative mb-6 border-4 border-bronze-900/30 p-2">
                <div 
                  className="w-full h-full rounded-full transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2 text-center">Aura Maldives Estates</h3>
              <p className="text-ivory-300 font-sans font-light text-center">Indian Ocean</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-full relative mb-6 border-4 border-bronze-900/30 p-2">
                <div 
                  className="w-full h-full rounded-full transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2 text-center">Aura Dubai Suites</h3>
              <p className="text-ivory-300 font-sans font-light text-center">United Arab Emirates</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.7} direction="up">
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-full relative mb-6 border-4 border-bronze-900/30 p-2">
                <div 
                  className="w-full h-full rounded-full transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2 text-center">Aura New York Penthouses</h3>
              <p className="text-ivory-300 font-sans font-light text-center">United States</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.9} direction="up">
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-full relative mb-6 border-4 border-bronze-900/30 p-2">
                <div 
                  className="w-full h-full rounded-full transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2 text-center">Aura Tokyo Towers</h3>
              <p className="text-ivory-300 font-sans font-light text-center">Japan</p>
            </div>
          </FadeIn>

          <FadeIn delay={1.1} direction="up">
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-full relative mb-6 border-4 border-bronze-900/30 p-2">
                <div 
                  className="w-full h-full rounded-full transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif text-ivory-100 mb-2 text-center">Aura London Residences</h3>
              <p className="text-ivory-300 font-sans font-light text-center">United Kingdom</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
