import type { VercelRequest, VercelResponse } from '@vercel/node'

const NOTION_TOKEN = process.env.VITE_NOTION_TOKEN
const DATABASE_ID = process.env.VITE_NOTION_DATABASE_ID

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: {
          property: 'Publié',
          checkbox: { equals: true },
        },
        sorts: [
          { property: 'Date', direction: 'descending' },
        ],
      }),
    })

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.status}`)
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching posts:', error)
    res.status(500).json({ error: 'Failed to fetch posts' })
  }
}
