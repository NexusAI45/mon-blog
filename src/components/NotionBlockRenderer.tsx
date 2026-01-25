import type { NotionBlock } from '../services/notion'
import type { JSX } from 'react'

interface RichText {
  plain_text: string
  annotations?: {
    bold?: boolean
    italic?: boolean
    strikethrough?: boolean
    underline?: boolean
    code?: boolean
  }
  href?: string | null
}

function renderRichText(richTexts: RichText[] = []): JSX.Element[] {
  return richTexts.map((text, i) => {
    let content: JSX.Element | string = text.plain_text
    const ann = text.annotations || {}

    if (ann.code) {
      content = <code key={i} className="px-1.5 py-0.5 bg-neural-grid rounded text-neural-cyan font-mono text-sm">{content}</code>
    }
    if (ann.bold) {
      content = <strong key={i} className="text-white">{content}</strong>
    }
    if (ann.italic) {
      content = <em key={i}>{content}</em>
    }
    if (ann.strikethrough) {
      content = <del key={i}>{content}</del>
    }
    if (ann.underline) {
      content = <u key={i}>{content}</u>
    }
    if (text.href) {
      content = <a key={i} href={text.href} target="_blank" rel="noopener noreferrer" className="text-neural-cyan hover:underline">{content}</a>
    }

    return <span key={i}>{content}</span>
  })
}

interface BlockRendererProps {
  block: NotionBlock
}

export default function NotionBlockRenderer({ block }: BlockRendererProps) {
  const { type } = block
  const value = block[type] as Record<string, unknown>

  switch (type) {
    case 'paragraph':
      return (
        <p className="text-gray-300 leading-relaxed mb-4">
          {renderRichText(value?.rich_text as RichText[])}
        </p>
      )

    case 'heading_1':
      return (
        <h1 className="font-heading text-3xl text-white mt-8 mb-4">
          {renderRichText(value?.rich_text as RichText[])}
        </h1>
      )

    case 'heading_2':
      return (
        <h2 className="font-heading text-2xl text-white mt-6 mb-3">
          <span className="text-neural-cyan">#</span> {renderRichText(value?.rich_text as RichText[])}
        </h2>
      )

    case 'heading_3':
      return (
        <h3 className="font-heading text-xl text-white mt-4 mb-2">
          <span className="text-neural-magenta">##</span> {renderRichText(value?.rich_text as RichText[])}
        </h3>
      )

    case 'bulleted_list_item':
      return (
        <li className="text-gray-300 ml-6 mb-2 list-disc">
          {renderRichText(value?.rich_text as RichText[])}
        </li>
      )

    case 'numbered_list_item':
      return (
        <li className="text-gray-300 ml-6 mb-2 list-decimal">
          {renderRichText(value?.rich_text as RichText[])}
        </li>
      )

    case 'quote':
      return (
        <blockquote className="border-l-4 border-neural-cyan pl-4 my-4 text-gray-400 italic">
          {renderRichText(value?.rich_text as RichText[])}
        </blockquote>
      )

    case 'code':
      return (
        <pre className="bg-neural-grid border border-neural-grid rounded-lg p-4 my-4 overflow-x-auto">
          <code className="text-neural-cyan font-mono text-sm">
            {(value?.rich_text as RichText[])?.map((t) => t.plain_text).join('')}
          </code>
        </pre>
      )

    case 'divider':
      return <hr className="border-neural-grid my-8" />

    case 'callout':
      return (
        <div className="bg-neural-grid/50 border border-neural-cyan/30 rounded-lg p-4 my-4 flex gap-3">
          <span className="text-2xl">{(value?.icon as { emoji?: string })?.emoji || '💡'}</span>
          <div className="text-gray-300">
            {renderRichText(value?.rich_text as RichText[])}
          </div>
        </div>
      )

    case 'image':
      const imageUrl = (value?.type === 'external'
        ? (value?.external as { url: string })?.url
        : (value?.file as { url: string })?.url) || ''
      const caption = (value?.caption as RichText[])?.map((t) => t.plain_text).join('') || ''
      return (
        <figure className="my-6">
          <img
            src={imageUrl}
            alt={caption}
            className="rounded-lg border border-neural-grid max-w-full"
          />
          {caption && (
            <figcaption className="text-gray-500 text-sm mt-2 text-center">
              {caption}
            </figcaption>
          )}
        </figure>
      )

    case 'toggle':
      return (
        <details className="my-4 bg-neural-grid/30 rounded-lg border border-neural-grid">
          <summary className="cursor-pointer p-4 text-white hover:text-neural-cyan">
            {renderRichText(value?.rich_text as RichText[])}
          </summary>
        </details>
      )

    default:
      return null
  }
}
