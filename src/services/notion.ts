import type { Post, NotionPage } from '../types/post'

const DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID
const IS_DEV = import.meta.env.DEV

function parseNotionPage(page: NotionPage): Post {
  const props = page.properties
  return {
    id: page.id,
    title: props.Titre?.title?.[0]?.plain_text || 'Sans titre',
    slug: props.Slug?.rich_text?.[0]?.plain_text || page.id,
    date: props.Date?.date?.start || new Date().toISOString().split('T')[0],
    tags: props.Tags?.multi_select?.map((t) => t.name) || [],
    excerpt: props.Extrait?.rich_text?.[0]?.plain_text || '',
    published: props['Publié']?.checkbox || false,
  }
}

export async function fetchPosts(): Promise<Post[]> {
  try {
    let response: Response

    if (IS_DEV) {
      // Dev: utilise le proxy Vite
      response = await fetch(`/api/notion/v1/databases/${DATABASE_ID}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filter: { property: 'Publié', checkbox: { equals: true } },
          sorts: [{ property: 'Date', direction: 'descending' }],
        }),
      })
    } else {
      // Prod: utilise l'API route Vercel
      response = await fetch('/api/notion/posts')
    }

    if (!response.ok) throw new Error(`Notion API error: ${response.status}`)
    const data = await response.json()
    return data.results.map(parseNotionPage)
  } catch (error) {
    console.error('Erreur fetch Notion:', error)
    return []
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  try {
    let response: Response

    if (IS_DEV) {
      response = await fetch(`/api/notion/v1/databases/${DATABASE_ID}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filter: { property: 'Slug', rich_text: { equals: slug } },
        }),
      })
    } else {
      response = await fetch(`/api/notion/post?slug=${encodeURIComponent(slug)}`)
    }

    if (!response.ok) throw new Error(`Notion API error: ${response.status}`)
    const data = await response.json()
    if (data.results.length === 0) return null
    return parseNotionPage(data.results[0])
  } catch (error) {
    console.error('Erreur fetch post:', error)
    return null
  }
}

export interface NotionBlock {
  id: string
  type: string
  [key: string]: unknown
}

async function fetchBlockChildren(blockId: string): Promise<NotionBlock[]> {
  let response: Response

  if (IS_DEV) {
    response = await fetch(`/api/notion/v1/blocks/${blockId}/children?page_size=100`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
  } else {
    response = await fetch(`/api/notion/blocks?id=${encodeURIComponent(blockId)}`)
  }

  if (!response.ok) return []
  const data = await response.json()
  return data.results || []
}

export async function fetchPageBlocks(pageId: string): Promise<NotionBlock[]> {
  try {
    const blocks = await fetchBlockChildren(pageId)
    const expandedBlocks: NotionBlock[] = []

    for (const block of blocks) {
      if (block.type === 'synced_block') {
        const syncedBlock = block.synced_block as { synced_from: { block_id: string } | null }
        const sourceId = syncedBlock?.synced_from?.block_id || block.id
        const children = await fetchBlockChildren(sourceId)
        expandedBlocks.push(...children)
      } else if (block.has_children && ['toggle', 'callout', 'quote'].includes(block.type)) {
        expandedBlocks.push(block)
        const children = await fetchBlockChildren(block.id)
        expandedBlocks.push(...children)
      } else {
        expandedBlocks.push(block)
      }
    }

    return expandedBlocks
  } catch (error) {
    console.error('Erreur fetch blocks:', error)
    return []
  }
}
