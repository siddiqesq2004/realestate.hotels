"use client";

import Navigation from "@/components/ui/Navigation";
import FadeIn from "@/components/ui/FadeIn";

export default function EnquirePage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest. A Private Client Advisor will contact you shortly.");
  };

  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hotel-frames/frame_0180.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-charcoal-900/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <FadeIn delay={0.2}>
            <p className="text-bronze-400 uppercase tracking-[0.3em] text-sm mb-4 font-medium">Connect With Us</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-4xl md:text-6xl font-serif tracking-wide">Real Estate Enquiry</h1>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 md:px-12 max-w-3xl mx-auto">
        <FadeIn direction="up">
          <div className="bg-[#1a1a1a] p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl">
            <p className="text-ivory-300 font-sans font-light leading-relaxed mb-8 text-center">
              Register your interest in Aura Hotel Residences. A Private Client Advisor will reach out to discuss ownership opportunities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-ivory-300">First Name *</label>
                  <input required type="text" className="w-full bg-transparent border border-white/20 focus:border-bronze-500 text-ivory-100 px-4 py-3 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-ivory-300">Last Name *</label>
                  <input required type="text" className="w-full bg-transparent border border-white/20 focus:border-bronze-500 text-ivory-100 px-4 py-3 outline-none transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-ivory-300">Email Address *</label>
                  <input required type="email" className="w-full bg-transparent border border-white/20 focus:border-bronze-500 text-ivory-100 px-4 py-3 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-ivory-300">Phone Number *</label>
                  <input required type="tel" className="w-full bg-transparent border border-white/20 focus:border-bronze-500 text-ivory-100 px-4 py-3 outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] text-ivory-300">Property of Interest *</label>
                <select required className="w-full bg-[#1a1a1a] border border-white/20 focus:border-bronze-500 text-ivory-100 px-4 py-3 outline-none transition-colors appearance-none cursor-pointer">
                  <option value="" disabled selected>Select a Development</option>
                  <option value="aura-residences">Aura Hotel Residences (Flagship)</option>
                  <option value="villa-serenity">Villa Serenity Resort & Residences</option>
                  <option value="azure-estate">Azure Hotel & Residences</option>
                  <option value="the-pinnacle">The Pinnacle Hotel Estates</option>
                  <option value="global-portfolio">Global Portfolio (Paris, Maldives, Dubai)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] text-ivory-300">Investment Budget *</label>
                <select required className="w-full bg-[#1a1a1a] border border-white/20 focus:border-bronze-500 text-ivory-100 px-4 py-3 outline-none transition-colors appearance-none cursor-pointer">
                  <option value="" disabled selected>Select Budget Range</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-25m">$10M - $25M</option>
                  <option value="25m+">$25M+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] text-ivory-300">Additional Information</label>
                <textarea rows={4} className="w-full bg-transparent border border-white/20 focus:border-bronze-500 text-ivory-100 px-4 py-3 outline-none transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-bronze-500 hover:bg-bronze-400 text-charcoal-900 px-8 py-4 uppercase tracking-[0.2em] text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,106,0.2)] hover:shadow-[0_0_25px_rgba(212,175,106,0.5)] mt-4"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
