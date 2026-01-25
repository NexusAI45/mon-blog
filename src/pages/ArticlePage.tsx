import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import type { Post } from '../types/post'
import type { NotionBlock } from '../services/notion'
import { fetchPostBySlug, fetchPageBlocks } from '../services/notion'
import NotionBlockRenderer from '../components/NotionBlockRenderer'
import GridBackground from '../components/GridBackground'

const tagColors: Record<string, string> = {
  'Code': 'bg-neural-cyan/20 text-neural-cyan border-neural-cyan/30',
  'IA': 'bg-neural-magenta/20 text-neural-magenta border-neural-magenta/30',
  'Auto': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [blocks, setBlocks] = useState<NotionBlock[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadArticle() {
      if (!slug) return

      try {
        const postData = await fetchPostBySlug(slug)
        if (!postData) {
          setError('Article non trouvé')
          return
        }
        setPost(postData)

        const blocksData = await fetchPageBlocks(postData.id)
        setBlocks(blocksData)
      } catch (err) {
        setError('Erreur de chargement')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadArticle()
  }, [slug])

  const formattedDate = post
    ? new Date(post.date).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''

  return (
    <div className="relative min-h-screen bg-neural-bg">
      <GridBackground />
      <main className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-neural-bg/80 backdrop-blur-md border-b border-neural-grid">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="text-neural-cyan font-mono hover:text-white transition-colors">
              <span className="text-gray-500">&lt;</span> retour
            </Link>
            <span className="font-heading text-white">NexusAi</span>
          </div>
        </nav>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 pt-24 pb-16">
          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center py-32">
              <div className="flex items-center gap-3 text-neural-cyan font-mono">
                <div className="w-4 h-4 border-2 border-neural-cyan border-t-transparent rounded-full animate-spin" />
                <span>chargement_article()...</span>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-32">
              <p className="text-neural-magenta font-mono text-xl mb-4">
                <span className="text-red-500">ERROR:</span> {error}
              </p>
              <Link to="/" className="cyber-btn inline-block">
                Retour à l'accueil
              </Link>
            </div>
          )}

          {/* Article */}
          {!loading && !error && post && (
            <>
              {/* Header */}
              <header className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <time className="text-gray-500 font-mono text-sm">
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

                <h1 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
                  {post.title}
                </h1>

                {post.excerpt && (
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}

                <div className="h-px bg-gradient-to-r from-neural-cyan via-neural-magenta to-transparent mt-8" />
              </header>

              {/* Blocks */}
              <div className="prose-cyber">
                {blocks.map((block) => (
                  <NotionBlockRenderer key={block.id} block={block} />
                ))}
              </div>

              {/* Footer */}
              <footer className="mt-16 pt-8 border-t border-neural-grid">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-neural-cyan font-mono hover:text-white transition-colors"
                >
                  <span>←</span>
                  <span>voir_tous_les_articles()</span>
                </Link>
              </footer>
            </>
          )}
        </article>
      </main>
    </div>
  )
}
