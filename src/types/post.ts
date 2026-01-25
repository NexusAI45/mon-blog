export interface Post {
  id: string
  title: string
  slug: string
  date: string
  tags: string[]
  excerpt: string
  published: boolean
}

export interface NotionPage {
  id: string
  properties: {
    Titre: { title: Array<{ plain_text: string }> }
    Slug: { rich_text: Array<{ plain_text: string }> }
    Date: { date: { start: string } | null }
    Tags: { multi_select: Array<{ name: string }> }
    Extrait: { rich_text: Array<{ plain_text: string }> }
    "Publié": { checkbox: boolean }
  }
}
