export default function Problem() {
  return (
    <section className="py-24 bg-stone-950 border-t border-tactical-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-sm text-earth-500 font-semibold tracking-wider uppercase">The Reality</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-stone-100">
            Traditional Contracting is <span className="text-gradient">Broken</span>
          </h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-stone-300 mb-6 leading-relaxed">
              Let's be honest: most contractors are mediocre at best. The industry runs on billable hours,
              which means the incentive is to drag projects out, not finish them efficiently.
            </p>

            <div className="my-12 p-8 bg-tactical-950/30 border border-tactical-900/50 rounded-lg">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-bold text-red-500/80 mb-2">1 in 8</div>
                  <p className="text-stone-400">Contractors are actually good at what they do</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-red-500/80 mb-2">7 in 8</div>
                  <p className="text-stone-400">Complain, half-ass it, and bill by the hour</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-lg text-stone-300">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500/60 mt-3 flex-shrink-0" />
                <div>
                  <strong className="text-stone-200">Misaligned Incentives:</strong> When you're paid by the hour,
                  finishing fast is literally leaving money on the table. Why would anyone optimize for speed?
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500/60 mt-3 flex-shrink-0" />
                <div>
                  <strong className="text-stone-200">Mediocre Talent Pool:</strong> The best engineers don't want to
                  work in bureaucratic environments with endless meetings and procurement red tape. They leave.
                  You get what's left.
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500/60 mt-3 flex-shrink-0" />
                <div>
                  <strong className="text-stone-200">Projects That Never End:</strong> Scope creep, endless revisions,
                  feature bloat. Because why finish when you can keep billing?
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500/60 mt-3 flex-shrink-0" />
                <div>
                  <strong className="text-stone-200">Risk on Your Side:</strong> You pay regardless of results.
                  The contractor gets paid whether it works or not. Where's their skin in the game?
                </div>
              </div>
            </div>

            <p className="text-xl text-stone-300 mt-8 leading-relaxed">
              You deserve better. You deserve teams that profit from solving problems quickly and correctly,
              not from stretching timelines and padding invoices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
