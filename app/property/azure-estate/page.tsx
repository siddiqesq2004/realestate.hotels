import Navigation from "@/components/ui/Navigation";
import FadeIn from "@/components/ui/FadeIn";

export default function AzureEstatePage() {
  return (
    <main className="bg-charcoal-900 min-h-screen text-ivory-100 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-charcoal-900/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <FadeIn delay={0.2}>
            <p className="text-bronze-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Malibu, California</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl font-serif tracking-wide mb-6">Azure Hotel & Residences</h1>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <FadeIn direction="up">
          <p className="text-ivory-300 font-sans leading-relaxed text-xl font-light mb-12">
            Perched on the dramatic cliffs of Malibu, Azure Hotel & Residences redefines modern coastal luxury. Featuring floor-to-ceiling glass walls, a cantilevered infinity pool, and private beach access. Invest in a legacy of California living with our branded residences.
          </p>
          <button className="border border-bronze-500 text-bronze-400 hover:bg-bronze-500 hover:text-charcoal-900 transition-colors duration-300 px-8 py-3 uppercase tracking-[0.2em] text-sm font-medium">
            Enquire Now
          </button>
        </FadeIn>
      </section>
    </main>
  );
}
