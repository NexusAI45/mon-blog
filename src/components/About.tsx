export default function About() {
  const stats = [
    { value: '5+', label: "Annees d'XP" },
    { value: '50+', label: 'Projets' },
    { value: '100+', label: 'Articles' },
    { value: '10K+', label: 'Lignes/jour' },
  ]

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-neural-cyan font-mono text-sm">01</span>
          <h2 className="font-heading text-3xl md:text-4xl tracking-wider">A PROPOS</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neural-cyan/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Terminal style content */}
          <div className="card-cyber p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-neural-grid">
              <div className="w-3 h-3 rounded-full bg-neural-magenta" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-gray-500 text-sm font-mono">~/about.sh</span>
            </div>

            <div className="font-mono text-sm space-y-3">
              <p className="text-gray-400">
                <span className="text-neural-cyan">$</span> whoami
              </p>
              <p className="text-white pl-4">
                Developpeur passione par la tech et l'innovation.
              </p>

              <p className="text-gray-400 mt-4">
                <span className="text-neural-cyan">$</span> cat interests.txt
              </p>
              <div className="pl-4 space-y-1">
                <p className="text-neural-cyan">→ Intelligence Artificielle</p>
                <p className="text-neural-magenta">→ Automatisation</p>
                <p className="text-neural-cyan">→ Developpement Web</p>
                <p className="text-neural-magenta">→ DevOps & Cloud</p>
              </div>

              <p className="text-gray-400 mt-4">
                <span className="text-neural-cyan">$</span> echo $MISSION
              </p>
              <p className="text-white pl-4">
                "Partager, apprendre et construire le futur numerique."
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-cyber p-6 rounded-lg text-center group"
              >
                <div className="text-4xl font-heading text-gradient-cyber mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
