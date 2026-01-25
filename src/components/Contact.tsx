import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simule l'envoi
    setTimeout(() => setStatus('sent'), 1500)
  }

  const socials = [
    { name: 'GitHub', url: 'https://github.com/TONHANDLE', icon: 'GH' },
    { name: 'Twitter', url: 'https://twitter.com/TONHANDLE', icon: 'TW' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/TONHANDLE', icon: 'LI' },
    { name: 'Discord', url: 'https://discord.gg/TONSERVER', icon: 'DC' },
  ]

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-neural-cyan font-mono text-sm">05</span>
          <h2 className="font-heading text-3xl md:text-4xl tracking-wider">CONTACT</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neural-cyan/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="card-cyber p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-neural-grid">
              <div className="w-3 h-3 rounded-full bg-neural-cyan animate-pulse" />
              <span className="text-gray-500 text-sm font-mono">message.new()</span>
            </div>

            {status === 'sent' ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✓</div>
                <p className="text-neural-cyan font-mono">Message transmis avec succes</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-mono">
                    <span className="text-neural-cyan">const</span> name =
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-neural-bg border border-neural-grid rounded px-4 py-3 text-white font-mono focus:border-neural-cyan focus:outline-none focus:shadow-glow-cyan transition-all"
                    placeholder="'Votre nom'"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-mono">
                    <span className="text-neural-cyan">const</span> email =
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-neural-bg border border-neural-grid rounded px-4 py-3 text-white font-mono focus:border-neural-cyan focus:outline-none focus:shadow-glow-cyan transition-all"
                    placeholder="'votre@email.com'"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-mono">
                    <span className="text-neural-cyan">const</span> message =
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-neural-bg border border-neural-grid rounded px-4 py-3 text-white font-mono focus:border-neural-cyan focus:outline-none focus:shadow-glow-cyan transition-all resize-none"
                    placeholder="`Votre message...`"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="cyber-btn w-full disabled:opacity-50"
                >
                  {status === 'sending' ? 'Transmission...' : 'send()'}
                </button>
              </form>
            )}
          </div>

          {/* Socials */}
          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-xl mb-8 text-gray-400">
              <span className="text-neural-magenta">//</span> CONNEXIONS
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-cyber p-6 rounded-lg text-center group hover:border-neural-magenta/50 hover:shadow-glow-magenta transition-all"
                >
                  <div className="text-2xl font-heading text-neural-magenta mb-2 group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <div className="text-gray-400 text-sm font-mono">{social.name}</div>
                </a>
              ))}
            </div>

            {/* Email direct */}
            <div className="mt-8 p-4 border border-dashed border-neural-grid rounded text-center">
              <span className="text-gray-500 font-mono text-sm">
                <span className="text-neural-cyan">→</span> contact@tondomaine.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
