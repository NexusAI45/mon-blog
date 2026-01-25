import { useState, useEffect } from 'react'
import type { Post } from '../types/post'
import { fetchPosts } from '../services/notion'
import PostCard from './PostCard'

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchPosts()
        setPosts(data)
      } catch (err) {
        setError('Erreur de chargement des articles')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            <span className="text-neural-cyan">//</span> Articles
          </h2>
          <p className="text-gray-400 font-mono">
            &lt;dernières_publications /&gt;
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="flex items-center gap-3 text-neural-cyan font-mono">
              <div className="w-4 h-4 border-2 border-neural-cyan border-t-transparent rounded-full animate-spin" />
              <span>chargement_articles()...</span>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-12">
            <p className="text-neural-magenta font-mono">
              <span className="text-red-500">ERROR:</span> {error}
            </p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 font-mono">
              // Aucun article publié pour le moment
            </p>
          </div>
        )}

        {/* Posts grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
