"use client";

interface HtmlOverlayProps {
  progress?: number;
}

export default function HtmlOverlay({ progress = 0 }: HtmlOverlayProps) {
  
  const getSceneOpacity = (start: number, end: number) => {
    // If progress is within the exact range, fully visible.
    // Allow slight fade-in/out buffers automatically via CSS transitions if it falls out of range.
    if (progress >= start && progress <= end) {
      return "opacity-100 translate-y-0";
    }
    return "opacity-0 translate-y-4";
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8">
      
      {/* Scene 1: The Arrival (0% - 18%) */}
      <div className={`transition-all duration-700 ease-out absolute flex flex-col items-center ${getSceneOpacity(0.00, 0.18)}`}>
        <p className="font-sans text-sm md:text-base text-white/70 uppercase tracking-[0.3em] mb-4 drop-shadow-lg">
          HOTEL REAL ESTATE REIMAGINED
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] tracking-wide leading-tight">
          Where Luxury<br />Meets the Extraordinary.
        </h1>
      </div>

      {/* Scene 2: The Architecture Reveals Itself (22% - 48%) */}
      <div className={`transition-all duration-700 ease-out absolute flex flex-col items-center ${getSceneOpacity(0.22, 0.48)}`}>
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-tight tracking-wide">
          CRAFTED FOR<br />EXCEPTIONAL LIVING.
        </h2>
        <p className="font-sans text-lg md:text-xl text-white/90 font-light tracking-widest drop-shadow-lg">
          Every detail.<br />Every view.<br />Every arrival.
        </p>
      </div>

      {/* Scene 3: The Destination Expands (52% - 78%) */}
      <div className={`transition-all duration-700 ease-out absolute flex flex-col items-center ${getSceneOpacity(0.52, 0.78)}`}>
        <h2 className="font-serif text-5xl md:text-7xl text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-tight tracking-wide mb-4">
          MORE THAN A STAY.
        </h2>
        <p className="font-serif text-4xl md:text-5xl text-white/90 drop-shadow-lg tracking-wide">
          A LEGACY OF OWNERSHIP.
        </p>
      </div>

      {/* Scene 4: The Grand Reveal (82% - 100%) */}
      <div className={`transition-all duration-700 ease-out absolute flex flex-col items-center ${getSceneOpacity(0.82, 1.00)} ${progress >= 0.82 ? "pointer-events-auto" : ""}`}>
        <h2 className="font-serif text-6xl md:text-8xl text-white mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] tracking-widest uppercase">
          AURA HOTEL RESIDENCES
        </h2>
        <p className="font-sans text-xl md:text-2xl text-white/95 font-light tracking-wide drop-shadow-xl mb-12">
          Discover a new standard of hotel real estate ownership.
        </p>
        <a href="/property" className="inline-block px-12 py-5 bg-[#b58d3c] hover:bg-[#cbad67] text-[#1c1c1c] uppercase tracking-[0.2em] text-sm font-bold transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(181,141,60,0.6)]">
          EXPLORE THE PORTFOLIO &rarr;
        </a>
      </div>

    </div>
  );
}
