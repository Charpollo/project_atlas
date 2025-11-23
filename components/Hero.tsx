export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center tactical-gradient">
      {/* Grid overlay for tactical feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,132,87,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,132,87,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-block mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-tactical-600/30 bg-tactical-900/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-earth-500 animate-pulse" />
            <span className="text-sm text-tactical-300 font-medium tracking-wider uppercase">Operational</span>
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
          <span className="block text-stone-100">Deploy an</span>
          <span className="block text-gradient">ATLAS Team.</span>
          <span className="block text-stone-100">Problem Solved.</span>
        </h1>

        <p className="text-xl sm:text-2xl text-stone-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Elite technical operators. Fixed-price engagements. No bureaucracy, no mediocre talent.
          Just rapid deployment, precision execution, and results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#engage"
            className="group px-8 py-4 bg-earth-600 hover:bg-earth-500 text-white font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-earth-900/50"
          >
            Deploy a Team
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 border border-tactical-600 hover:border-tactical-500 text-stone-300 hover:text-stone-100 font-semibold rounded-lg transition-all duration-200"
          >
            How It Works
          </a>
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-earth-400 mb-2">2-6</div>
            <div className="text-sm text-stone-400 uppercase tracking-wider">Weeks Typical</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-earth-400 mb-2">Fixed</div>
            <div className="text-sm text-stone-400 uppercase tracking-wider">Price & Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-earth-400 mb-2">Elite</div>
            <div className="text-sm text-stone-400 uppercase tracking-wider">Operators Only</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-tactical-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
