import { Link } from 'react-router-dom'
import type { Post } from '../types/post'

interface PostCardProps {
  post: Post
}

const tagColors: Record<string, string> = {
  'Code': 'bg-neural-cyan/20 text-neural-cyan border-neural-cyan/30',
  'IA': 'bg-neural-magenta/20 text-neural-magenta border-neural-magenta/30',
  'Auto': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link to={`/article/${post.slug}`}>
      <article className="card-cyber p-6 group cursor-pointer">
        {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <time className="text-sm text-gray-500 font-mono">
          <span className="text-neural-cyan">&gt;</span> {formattedDate}
        </time>
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 text-xs font-mono border rounded ${tagColors[tag] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-heading text-white mb-3 group-hover:text-neural-cyan transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {post.excerpt}
      </p>

        {/* Read more */}
        <div className="flex items-center text-neural-cyan text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          <span>lire_article()</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </article>
    </Link>
  )
}
