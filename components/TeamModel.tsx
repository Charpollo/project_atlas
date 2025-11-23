export default function TeamModel() {
  const models = [
    {
      title: "Retainer + Engagement",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Monthly retainer for priority access, plus bonuses per successful engagement. Best for organizations with recurring technical challenges.",
      benefits: [
        "Guaranteed availability",
        "Priority deployment queue",
        "Reduced engagement rates",
        "Continuous relationship"
      ]
    },
    {
      title: "Per-Engagement",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      description: "Pay per deployment. No ongoing commitment, no retainer. Deploy when you have a problem, pay for that engagement only.",
      benefits: [
        "Zero ongoing costs",
        "Pay only for results",
        "No long-term commitment",
        "Flexible as needed"
      ]
    },
    {
      title: "Full Salary Model",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Our operators get paid even between deployments. This lets us retain elite talent who know they're covered during downtime. You benefit from consistent, familiar teams.",
      benefits: [
        "Same team, multiple engagements",
        "Deep organizational knowledge",
        "Premium tier access",
        "Strategic partnership"
      ]
    }
  ];

  return (
    <section className="py-24 tactical-gradient border-t border-tactical-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm text-earth-500 font-semibold tracking-wider uppercase">Elite Operators</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-100 mb-6">
            The Team Model
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            We don't just hire contractors. We build elite operator teams on deployment cycles—
            intense focused work periods followed by paid downtime. This is how we retain the best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {models.map((model, index) => (
            <div key={index} className="p-8 bg-stone-950/50 border border-tactical-800/50 rounded-lg hover:border-tactical-600/50 transition-all">
              <div className="w-16 h-16 rounded-lg bg-earth-900/50 border border-earth-700/50 flex items-center justify-center text-earth-400 mb-6">
                {model.icon}
              </div>

              <h3 className="text-2xl font-bold text-stone-100 mb-4">{model.title}</h3>
              <p className="text-stone-300 mb-6 leading-relaxed">{model.description}</p>

              <ul className="space-y-3">
                {model.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-stone-400">
                    <svg className="w-5 h-5 text-earth-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-earth-950/30 border-2 border-earth-700/50 rounded-lg">
            <h3 className="text-2xl font-bold text-stone-100 mb-4">Why the Deployment Model Works</h3>
            <div className="space-y-4 text-stone-300">
              <p className="leading-relaxed">
                Traditional consulting burns people out. They're either over-utilized (working 80-hour weeks on billable projects)
                or under-utilized (benched, stressing about utilization rates, looking for their next gig).
              </p>
              <p className="leading-relaxed">
                We run deployment cycles instead. Our operators go <strong className="text-earth-400">hard on engagements</strong>—intense,
                focused work periods where they solve critical problems. Then they <strong className="text-earth-400">stand down</strong> and
                recharge while still getting paid. This rhythm keeps elite talent engaged, sharp, and loyal.
              </p>
              <p className="leading-relaxed">
                You get teams that actually want to finish fast, because finishing means rest. Not teams trying to pad hours
                because their bonus depends on utilization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
