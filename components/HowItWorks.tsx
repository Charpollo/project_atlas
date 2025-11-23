export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      duration: "1-2 Days",
      description: "Deep dive into your problem. We don't just take your word for what needs fixing—we investigate, ask hard questions, and identify the real technical challenges.",
      deliverable: "Clear problem definition"
    },
    {
      number: "02",
      title: "SOW Proposal",
      duration: "24-48 Hours",
      description: "Fixed-price Statement of Work with concrete deliverables, timeline, and success criteria. No ambiguity, no hourly rates, no surprises.",
      deliverable: "Fixed price & timeline"
    },
    {
      number: "03",
      title: "Execute the Engagement",
      duration: "2-6 Weeks (Typical)",
      description: "Elite team deploys. Daily progress, rapid iteration, direct communication. We move fast because efficiency is how we profit.",
      deliverable: "Working solution"
    },
    {
      number: "04",
      title: "Deliver & Extract",
      duration: "1-3 Days",
      description: "Hand off the completed solution, documentation, and knowledge transfer. Your team can maintain it. We extract. Mission complete.",
      deliverable: "Full ownership transfer"
    },
    {
      number: "05",
      title: "Re-engage as Needed",
      duration: "On Demand",
      description: "New problem? New SOW. We're here when you need us, not lingering when you don't. Deploy when problems arise, stand down when they're solved.",
      deliverable: "Long-term partnership"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-stone-950 border-t border-tactical-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm text-earth-500 font-semibold tracking-wider uppercase">The Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-100 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Assess. Execute. Extract. Simple, repeatable, effective.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-16 bg-gradient-to-b from-tactical-600 to-transparent hidden sm:block" />
              )}

              <div className="flex flex-col sm:flex-row gap-6 p-6 bg-tactical-950/20 border border-tactical-900/50 rounded-lg hover:border-tactical-700/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-earth-900/50 border border-earth-700/50 flex items-center justify-center">
                    <span className="text-2xl font-bold text-earth-400">{step.number}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-stone-100">{step.title}</h3>
                    <span className="text-sm text-tactical-400 font-semibold mt-2 sm:mt-0">{step.duration}</span>
                  </div>
                  <p className="text-stone-300 mb-4 leading-relaxed">{step.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-earth-950/50 border border-earth-800/50 rounded-md">
                    <svg className="w-4 h-4 text-earth-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-stone-400">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-earth-950/50 to-tactical-950/50 border border-earth-700/50 rounded-lg">
            <p className="text-lg text-stone-300 mb-4">
              Typical engagement: <strong className="text-earth-400">4-8 weeks total</strong> from first contact to mission complete.
            </p>
            <p className="text-stone-400">
              Compare that to traditional contracting timelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
