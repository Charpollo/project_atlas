export default function Approach() {
  return (
    <section className="py-24 tactical-gradient border-t border-tactical-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-sm text-earth-500 font-semibold tracking-wider uppercase">Our Method</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-stone-100">
            Fixed-Price SOW Engagements
          </h2>

          <p className="text-xl text-stone-300 mb-12 leading-relaxed">
            We don't bill by the hour. We agree on scope, price, and timeline up front.
            Then we execute. Simple as that.
          </p>

          <div className="space-y-8">
            <div className="p-6 bg-stone-950/50 border border-tactical-800/50 rounded-lg">
              <h3 className="text-2xl font-bold text-earth-400 mb-3">Assess & Scope</h3>
              <p className="text-stone-300 leading-relaxed">
                We take 1-2 days to deeply understand your problem. No surface-level BS.
                We dig in, identify the real issues, and determine exactly what needs to be done.
              </p>
            </div>

            <div className="p-6 bg-stone-950/50 border border-tactical-800/50 rounded-lg">
              <h3 className="text-2xl font-bold text-earth-400 mb-3">Fixed Proposal</h3>
              <p className="text-stone-300 leading-relaxed">
                You get a Statement of Work with a fixed price and timeline. No hourly rates,
                no "we'll see how it goes." We commit to delivering specific outcomes for a specific price.
              </p>
            </div>

            <div className="p-6 bg-stone-950/50 border border-tactical-800/50 rounded-lg">
              <h3 className="text-2xl font-bold text-earth-400 mb-3">Execute</h3>
              <p className="text-stone-300 leading-relaxed">
                Our team deploys and gets to work. Small, elite, focused. We move fast because
                we profit from efficiency, not from dragging things out.
              </p>
            </div>

            <div className="p-6 bg-stone-950/50 border border-tactical-800/50 rounded-lg">
              <h3 className="text-2xl font-bold text-earth-400 mb-3">Deliver & Extract</h3>
              <p className="text-stone-300 leading-relaxed">
                We deliver the working solution, hand off documentation, ensure your team can maintain it.
                Then we extract. Mission complete.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-earth-950/30 border-2 border-earth-700/50 rounded-lg">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-earth-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h4 className="text-xl font-bold text-stone-100 mb-2">The ATLAS Guarantee</h4>
                <p className="text-stone-300 leading-relaxed">
                  If we finish early because we're good? That's our reward for efficiency. If it takes longer
                  because we mis-scoped? We eat that cost. Strict SOW adherence. Your scope doesn't creep
                  unless you want it to—and that's a new SOW with a new price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
