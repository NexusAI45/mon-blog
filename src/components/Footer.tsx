export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-neural-grid">
      <div className="max-w-6xl mx-auto">
        {/* System status style */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="font-heading text-xl mb-4">
              <span className="text-white">NEURAL</span>
              <span className="text-neural-cyan">GRID</span>
            </div>
            <p className="text-gray-500 text-sm font-mono">
              Exploration des technologies de demain
            </p>
          </div>

          <div>
            <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li><a href="#about" className="text-gray-500 hover:text-neural-cyan transition-colors">→ A propos</a></li>
              <li><a href="#skills" className="text-gray-500 hover:text-neural-cyan transition-colors">→ Stack</a></li>
              <li><a href="#portfolio" className="text-gray-500 hover:text-neural-cyan transition-colors">→ Portfolio</a></li>
              <li><a href="#youtube" className="text-gray-500 hover:text-neural-cyan transition-colors">→ YouTube</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-4">System Status</h4>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-500">All systems operational</span>
              </div>
              <div className="text-gray-600 text-xs">
                Last deploy: {new Date().toLocaleDateString('fr-FR')}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neural-grid/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm font-mono">
            &copy; {currentYear} Neural Grid. All rights reserved.
          </div>

          <div className="text-gray-600 text-xs font-mono flex items-center gap-2">
            <span>Built with</span>
            <span className="text-neural-cyan">&lt;React/&gt;</span>
            <span>+</span>
            <span className="text-neural-magenta">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
