import type { CSSProperties, ReactNode } from 'react'

export type ChapterGridChapter = {
  description?: ReactNode
  disabled?: boolean
  href?: string
  meta?: ReactNode
  number?: ReactNode
  title: ReactNode
}

export type ChapterGridProps = {
  chapters: ChapterGridChapter[]
  className?: string
  columns?: 2 | 3 | 4
  eyebrow?: ReactNode
  intro?: ReactNode
  title?: ReactNode
}

type ChapterGridStyle = CSSProperties & {
  '--chapter-grid-columns'?: number
}

export function ChapterGrid({
  chapters,
  className,
  columns = 3,
  eyebrow,
  intro,
  title,
}: ChapterGridProps) {
  const sectionClassName = ['chapter-grid', className].filter(Boolean).join(' ')
  const gridStyle: ChapterGridStyle = {
    '--chapter-grid-columns': columns,
  }

  return (
    <section className={sectionClassName}>
      <div className="chapter-grid__inner">
        {(eyebrow || title || intro) && (
          <header className="chapter-grid__header">
            {eyebrow && <p className="chapter-grid__eyebrow">{eyebrow}</p>}
            {title && <h2 className="chapter-grid__title">{title}</h2>}
            {intro && <div className="chapter-grid__intro">{intro}</div>}
          </header>
        )}

        <div className="chapter-grid__list" style={gridStyle}>
          {chapters.map((chapter, index) => {
            const isDisabled = chapter.disabled || !chapter.href
            const chapterClassName = [
              'chapter-grid__item',
              isDisabled && 'chapter-grid__item--disabled',
            ]
              .filter(Boolean)
              .join(' ')
            const content = (
              <>
                <div className="chapter-grid__item-head">
                  {chapter.number && (
                    <span className="chapter-grid__number">{chapter.number}</span>
                  )}
                  {chapter.meta && <span className="chapter-grid__meta">{chapter.meta}</span>}
                </div>

                <h3 className="chapter-grid__chapter-title">{chapter.title}</h3>

                {chapter.description && (
                  <div className="chapter-grid__description">{chapter.description}</div>
                )}
              </>
            )

            if (isDisabled) {
              return (
                <div
                  aria-disabled={chapter.disabled ? true : undefined}
                  className={chapterClassName}
                  key={index}
                >
                  {content}
                </div>
              )
            }

            return (
              <a className={chapterClassName} href={chapter.href} key={index}>
                {content}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
