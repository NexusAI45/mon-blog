export default function Portfolio() {
  const projects = [
    {
      title: 'AI Assistant',
      description: 'Assistant IA conversationnel avec LangChain et GPT-4',
      tags: ['Python', 'LangChain', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      link: '#',
    },
    {
      title: 'AutoFlow',
      description: 'Pipeline d\'automatisation CI/CD avec monitoring',
      tags: ['Go', 'Docker', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      link: '#',
    },
    {
      title: 'Neural Dashboard',
      description: 'Dashboard analytics temps reel avec React et D3',
      tags: ['React', 'TypeScript', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      link: '#',
    },
    {
      title: 'CodeGen API',
      description: 'API de generation de code avec modeles ML',
      tags: ['FastAPI', 'Transformers', 'Redis'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      link: '#',
    },
    {
      title: 'Bot Trading',
      description: 'Bot de trading algorithmique avec backtesting',
      tags: ['Python', 'Pandas', 'TA-Lib'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      link: '#',
    },
    {
      title: 'Smart Home Hub',
      description: 'Hub domotique avec integrations IA vocales',
      tags: ['Node.js', 'MQTT', 'Whisper'],
      image: 'https://images.unsplash.com/photo-1558002038-bb4237b50b11?w=600&h=400&fit=crop',
      link: '#',
    },
  ]

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-neural-cyan font-mono text-sm">03</span>
          <h2 className="font-heading text-3xl md:text-4xl tracking-wider">PORTFOLIO</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neural-cyan/50 to-transparent" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="card-cyber rounded-lg overflow-hidden group block"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden scanline">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neural-bg via-transparent to-transparent" />
                <div className="absolute inset-0 bg-neural-cyan/0 group-hover:bg-neural-cyan/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2 text-white group-hover:text-neural-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono border border-neural-magenta/30 text-neural-magenta/70 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
