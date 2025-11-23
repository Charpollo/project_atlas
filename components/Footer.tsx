export default function Footer() {
  return (
    <footer className="py-12 bg-stone-950 border-t border-tactical-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-earth-600 to-tactical-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div className="text-lg font-bold text-stone-100">Project ATLAS</div>
                <div className="text-xs text-tactical-400">Elite Technical Teams</div>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Deploying small, elite technical teams to solve critical problems for defense,
              space, and government contractors.
            </p>
          </div>

          <div>
            <h3 className="text-stone-100 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#how-it-works" className="text-stone-400 hover:text-earth-400 transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/notes" className="text-stone-400 hover:text-earth-400 transition-colors text-sm">
                  Charles' Notes
                </a>
              </li>
              <li>
                <a href="/#engage" className="text-stone-400 hover:text-earth-400 transition-colors text-sm">
                  Deploy a Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-stone-100 font-semibold mb-4">Contact</h3>
            <p className="text-stone-400 text-sm mb-2">Ready to deploy?</p>
            <a
              href="mailto:deploy@projectatlas.io"
              className="text-earth-400 hover:text-earth-300 transition-colors text-sm font-semibold"
            >
              deploy@projectatlas.io
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-tactical-900/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-sm">
              &copy; {new Date().getFullYear()} Project ATLAS. All rights reserved.
            </p>
            <p className="text-stone-500 text-xs">
              Small teams. Big problems. Fast results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
