import type { VercelRequest, VercelResponse } from '@vercel/node'

const NOTION_TOKEN = process.env.VITE_NOTION_TOKEN

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { id } = req.query

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Block ID is required' })
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/blocks/${id}/children?page_size=100`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.status}`)
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching blocks:', error)
    res.status(500).json({ error: 'Failed to fetch blocks' })
  }
}
