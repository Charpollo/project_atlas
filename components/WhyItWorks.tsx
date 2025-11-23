export default function WhyItWorks() {
  const principles = [
    {
      title: "Aligned Incentives",
      description: "We profit from speed and quality, not from dragging timelines. Finish early? That's our win. Take too long? We eat the cost. Our interests align with yours.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Small Elite Teams",
      description: "We don't believe in throwing bodies at problems. Small, hand-picked teams of actually good engineers. No dead weight, no politics, just execution.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Kelly Johnson Principles",
      description: "Lockheed's Skunk Works built the SR-71 with 25 engineers. We apply the same principles: small teams, minimal bureaucracy, maximum autonomy, impossible results.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Reputation Economy",
      description: "Our business lives or dies on results. Every engagement is a case study. Every client is a reference. We can't afford to half-ass anything.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: "Fixed-Price Skin in the Game",
      description: "We commit to delivery at a fixed price. If it costs more than we estimated, that's on us. If we nail it, we profit. This is how real businesses work.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "No Long-Term Contracts",
      description: "You're not locked in. Every engagement stands on its own merit. If we do good work, you'll call us back. If we don't, you won't. As it should be.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-stone-950 border-t border-tactical-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm text-earth-500 font-semibold tracking-wider uppercase">The Foundation</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-100 mb-6">
            Why This Works
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            This isn't theory. These principles have built everything from the SR-71 Blackbird
            to successful startups. They work because they align with reality, not wishful thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="p-6 bg-tactical-950/20 border border-tactical-900/50 rounded-lg hover:border-tactical-700/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-earth-900/50 border border-earth-700/50 flex items-center justify-center text-earth-400 mb-4">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-100 mb-3">{principle.title}</h3>
              <p className="text-stone-300 leading-relaxed text-sm">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-earth-950/50 via-tactical-950/50 to-stone-950 border-2 border-earth-600/50 rounded-lg">
            <blockquote className="text-xl sm:text-2xl text-stone-200 italic mb-6 leading-relaxed">
              "The Skunk Works manager must be delegated practically complete control of their program
              in all aspects. They should report to a division president or higher."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-1 h-16 bg-earth-600"></div>
              <div>
                <p className="text-earth-400 font-semibold">Kelly Johnson</p>
                <p className="text-stone-400 text-sm">14 Rules of Skunk Works Management</p>
                <p className="text-stone-500 text-sm mt-1">Built the SR-71, U-2, and F-117 with tiny teams and impossible timelines</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-stone-300 mb-6">
              This is how high-stakes technical problems get solved. Small teams with skin in the game,
              clear objectives, and the autonomy to execute.
            </p>
            <p className="text-xl text-earth-400 font-semibold">
              No bloat. No bureaucracy. No bullshit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
