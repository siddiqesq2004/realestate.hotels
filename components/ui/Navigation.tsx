"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

// Subtle magnetic button wrapper
const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 }); // Subtle pull
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Property", href: "#property" },
    { name: "Experience", href: "#experience" },
    { name: "Amenities", href: "#amenities" },
    { name: "Location", href: "#location" },
    { name: "Investment", href: "#investment" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
        isScrolled
          ? "py-4 bg-charcoal-900/80 backdrop-blur-md border-b border-white/5"
          : "py-8 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 z-50 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-bronze-300 to-bronze-600 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <span className="text-charcoal-900 font-serif font-bold text-lg leading-none">A</span>
          </div>
          <span className="font-serif text-xl tracking-[0.2em] font-medium text-ivory-100 hidden sm:block">
            AURA
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs tracking-[0.15em] uppercase text-ivory-300 hover:text-bronze-300 transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bronze-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-xs tracking-[0.15em] uppercase font-medium text-ivory-100 hover:text-bronze-300 transition-colors">
            Login
          </button>
          <MagneticButton className="text-xs tracking-[0.15em] uppercase font-medium bg-bronze-500 hover:bg-bronze-400 text-charcoal-900 px-6 py-2.5 rounded-sm transition-colors duration-300 shadow-[0_0_10px_rgba(212,175,106,0.2)] hover:shadow-[0_0_20px_rgba(212,175,106,0.5)]">
            Enquire
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ivory-200 z-50 transition-transform duration-300 active:scale-95"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-charcoal-900/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-700 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-ivory-200 hover:text-bronze-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-12 h-[1px] bg-bronze-600/30 my-6" />
          <button className="text-sm tracking-[0.2em] uppercase font-medium text-bronze-400">
            Enquire Now
          </button>
        </nav>
      </div>
    </header>
  );
}
