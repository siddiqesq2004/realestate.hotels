"use client";

interface HtmlOverlayProps {
  activeScene?: number; // 0, 1, 2, 3
}

export default function HtmlOverlay({ activeScene = 0 }: HtmlOverlayProps) {
  
  const getSceneOpacity = (sceneIndex: number) => {
    if (activeScene === sceneIndex) {
      return "opacity-100 translate-y-0";
    }
    return "opacity-0 translate-y-4 pointer-events-none";
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8">
      
      {/* Scene 1: The Arrival */}
      <div className={`transition-all duration-700 ease-out absolute flex flex-col items-center ${getSceneOpacity(0)}`}>
        <p className="font-sans text-sm md:text-base text-white/70 uppercase tracking-[0.3em] mb-4 drop-shadow-lg">
          HOTEL REAL ESTATE REIMAGINED
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] tracking-wide leading-tight">
          Where Luxury<br />Meets the Extraordinary.
        </h1>
      </div>

      {/* Scene 2: The Architecture Reveals Itself */}
      <div className={`transition-all duration-700 ease-out absolute flex flex-col items-center ${getSceneOpacity(1)}`}>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-white mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-tight tracking-wide">
          CRAFTED FOR<br />EXCEPTIONAL LIVING.
        </h2>
        <p className="font-sans text-lg md:text-xl text-white/90 font-light tracking-widest drop-shadow-lg">
          Every detail.<br />Every view.<br />Every arrival.
        </p>
      </div>

      {/* Scene 3: The Destination Expands */}
      <div className={`transition-all duration-700 ease-out absolute flex flex-col items-center ${getSceneOpacity(2)}`}>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-tight tracking-wide mb-4">
          MORE THAN A STAY.
        </h2>
        <p className="font-serif text-2xl sm:text-4xl md:text-5xl text-white/90 drop-shadow-lg tracking-wide">
          A LEGACY OF OWNERSHIP.
        </p>
      </div>

      {/* Scene 4: The Grand Reveal */}
      <div className={`transition-all duration-1000 ease-out absolute flex flex-col items-center justify-center w-full max-w-6xl px-4 ${getSceneOpacity(3)} ${activeScene === 3 ? "pointer-events-auto" : ""}`}>
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] tracking-widest uppercase text-center leading-tight">
          AURA HOTEL<br className="md:hidden" /> RESIDENCES
        </h2>
        <p className="font-sans text-base sm:text-lg md:text-xl text-white/95 font-light tracking-wide drop-shadow-xl mb-12 text-center max-w-2xl">
          Discover a new standard of hotel real estate ownership. Select a chapter below to begin your journey.
        </p>

        {/* Creative Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 w-full mb-10">
          
          <a href="/property" className="group relative overflow-hidden rounded-xl bg-charcoal-900/40 border border-white/10 backdrop-blur-md p-5 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/10 hover:border-bronze-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(181,141,60,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-bronze-400 mb-2 uppercase opacity-80 group-hover:opacity-100 transition-opacity">01</span>
            <span className="font-serif text-base sm:text-lg text-white relative z-10 text-center drop-shadow-md">Properties<br/>Available</span>
          </a>

          <a href="/experience" className="group relative overflow-hidden rounded-xl bg-charcoal-900/40 border border-white/10 backdrop-blur-md p-5 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/10 hover:border-bronze-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(181,141,60,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-bronze-400 mb-2 uppercase opacity-80 group-hover:opacity-100 transition-opacity">02</span>
            <span className="font-serif text-base sm:text-lg text-white relative z-10 text-center drop-shadow-md">The<br/>Experience</span>
          </a>

          <a href="/amenities" className="group relative overflow-hidden rounded-xl bg-charcoal-900/40 border border-white/10 backdrop-blur-md p-5 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/10 hover:border-bronze-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(181,141,60,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-bronze-400 mb-2 uppercase opacity-80 group-hover:opacity-100 transition-opacity">03</span>
            <span className="font-serif text-base sm:text-lg text-white relative z-10 text-center drop-shadow-md">World-Class<br/>Amenities</span>
          </a>

          <a href="/location" className="group relative overflow-hidden rounded-xl bg-charcoal-900/40 border border-white/10 backdrop-blur-md p-5 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/10 hover:border-bronze-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(181,141,60,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-bronze-400 mb-2 uppercase opacity-80 group-hover:opacity-100 transition-opacity">04</span>
            <span className="font-serif text-base sm:text-lg text-white relative z-10 text-center drop-shadow-md">Prime<br/>Location</span>
          </a>

          <a href="/investment" className="group relative overflow-hidden rounded-xl bg-charcoal-900/40 border border-white/10 backdrop-blur-md p-5 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/10 hover:border-bronze-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(181,141,60,0.3)] md:col-span-1 lg:col-span-1 col-span-2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-bronze-400 mb-2 uppercase opacity-80 group-hover:opacity-100 transition-opacity">05</span>
            <span className="font-serif text-base sm:text-lg text-white relative z-10 text-center drop-shadow-md">Investment<br/>Returns</span>
          </a>

        </div>

        <a href="/property" className="inline-flex items-center gap-3 px-8 py-3 bg-[#b58d3c] hover:bg-[#cbad67] text-[#1c1c1c] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(181,141,60,0.6)] rounded-full group">
          <span>Explore Full Portfolio</span>
          <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>
      </div>

    </div>
  );
}
