export default function YouTube() {
  const videos = [
    {
      id: 'dQw4w9WgXcQ', // Remplacer par tes vraies videos
      title: 'Introduction a LangChain en 2026',
      views: '12K vues',
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Automatiser son workflow avec GitHub Actions',
      views: '8.5K vues',
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Creer un agent IA de A a Z',
      views: '15K vues',
    },
  ]

  return (
    <section id="youtube" className="py-24 px-4 bg-neural-grid/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-neural-magenta font-mono text-sm">04</span>
          <h2 className="font-heading text-3xl md:text-4xl tracking-wider">YOUTUBE</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neural-magenta/50 to-transparent" />
        </div>

        {/* Channel CTA */}
        <div className="card-cyber p-8 rounded-lg mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neural-magenta/10 mb-4">
            <svg className="w-8 h-8 text-neural-magenta" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <h3 className="font-heading text-2xl mb-2">NEURAL GRID CHANNEL</h3>
          <p className="text-gray-500 mb-6">Tutoriels, demos et deep dives sur la tech</p>
          <a
            href="https://youtube.com/@TONHANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-btn border-neural-magenta text-neural-magenta hover:bg-neural-magenta hover:shadow-glow-magenta inline-flex items-center gap-2"
          >
            <span>S'abonner</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <a
              key={index}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-cyber rounded-lg overflow-hidden group block"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-neural-grid">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-neural-magenta/90 flex items-center justify-center shadow-glow-magenta">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {/* Neon border on hover */}
                <div className="absolute inset-0 border-2 border-neural-magenta/0 group-hover:border-neural-magenta/50 transition-colors" />
              </div>

              {/* Info */}
              <div className="p-4">
                <h4 className="font-mono text-sm text-white mb-1 line-clamp-2 group-hover:text-neural-magenta transition-colors">
                  {video.title}
                </h4>
                <span className="text-gray-500 text-xs">{video.views}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
