"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-950/95 backdrop-blur-md border-b border-tactical-900/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-earth-600 to-tactical-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <div className="text-xl font-bold text-stone-100">Project ATLAS</div>
              <div className="text-xs text-tactical-400 tracking-wider">Elite Technical Teams</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-stone-300 hover:text-earth-400 transition-colors text-sm font-medium">
              How It Works
            </a>
            <a href="#engage" className="px-5 py-2.5 bg-earth-600 hover:bg-earth-500 text-white font-semibold rounded-lg transition-all text-sm">
              Deploy Team
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
