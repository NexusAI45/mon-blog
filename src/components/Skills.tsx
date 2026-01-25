export default function Skills() {
  const skillCategories = [
    {
      title: 'LANGAGES',
      icon: '{ }',
      skills: ['TypeScript', 'Python', 'Go', 'Rust'],
      color: 'cyan',
    },
    {
      title: 'FRAMEWORKS',
      icon: '< >',
      skills: ['React', 'Next.js', 'FastAPI', 'Node.js'],
      color: 'magenta',
    },
    {
      title: 'IA & ML',
      icon: '[ ]',
      skills: ['LangChain', 'OpenAI', 'Hugging Face', 'TensorFlow'],
      color: 'cyan',
    },
    {
      title: 'DEVOPS',
      icon: '> _',
      skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS'],
      color: 'magenta',
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-neural-grid/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-neural-magenta font-mono text-sm">02</span>
          <h2 className="font-heading text-3xl md:text-4xl tracking-wider">STACK TECH</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neural-magenta/50 to-transparent" />
        </div>

        {/* Skills radar style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="card-cyber p-6 rounded-lg group">
              <div className={`text-2xl font-mono mb-4 ${category.color === 'cyan' ? 'text-neural-cyan' : 'text-neural-magenta'}`}>
                {category.icon}
              </div>
              <h3 className="font-heading text-lg mb-4 tracking-wider">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                    <span className={category.color === 'cyan' ? 'text-neural-cyan' : 'text-neural-magenta'}>→</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
