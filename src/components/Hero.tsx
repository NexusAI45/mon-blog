export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Terminal badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-neural-cyan/30 rounded-full text-sm text-neural-cyan/70">
          <span className="w-2 h-2 bg-neural-cyan rounded-full animate-pulse" />
          <span className="font-mono">system.online</span>
        </div>

        {/* Titre principal */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wider">
          <span className="text-gradient-cyber">NexusAi</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 font-mono">
          <span className="text-neural-cyan">&gt;</span> Code
          <span className="text-neural-magenta mx-3">|</span> IA
          <span className="text-neural-magenta mx-3">|</span> Automatisation
        </p>

        {/* Description */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Exploration des technologies de demain. Articles, tutoriels et projets
          autour du developpement, de l'intelligence artificielle et de l'automatisation.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#portfolio" className="cyber-btn">
            Voir mes projets
          </a>
          <a href="#youtube" className="cyber-btn border-neural-magenta text-neural-magenta hover:bg-neural-magenta hover:shadow-glow-magenta">
            Videos YouTube
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-neural-cyan/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-neural-cyan rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
