import type { CSSProperties, ReactNode } from 'react'

export type QuoteSectionAlign = 'left' | 'center' | 'right'

export type QuoteSectionProps = {
  align?: QuoteSectionAlign
  className?: string
  eyebrow?: ReactNode
  fragmentNumber?: ReactNode
  maxWidth?: string
  quote: ReactNode
  showLines?: boolean
  source?: ReactNode
}

export function QuoteSection({
  align = 'center',
  className,
  eyebrow,
  fragmentNumber,
  maxWidth,
  quote,
  showLines = true,
  source,
}: QuoteSectionProps) {
  const sectionClassName = ['quote-section', className].filter(Boolean).join(' ')
  const style = maxWidth ? ({ '--quote-section-max-width': maxWidth } as CSSProperties) : undefined

  return (
    <section className={sectionClassName} data-align={align} data-show-lines={showLines} style={style}>
      <div className="quote-section__inner">
        {(eyebrow || fragmentNumber) && (
          <div className="quote-section__meta">
            {fragmentNumber && <span className="quote-section__number">{fragmentNumber}</span>}
            {eyebrow && <p className="quote-section__eyebrow">{eyebrow}</p>}
          </div>
        )}

        <figure className="quote-section__figure">
          <blockquote className="quote-section__quote">{quote}</blockquote>

          {source && <figcaption className="quote-section__source">{source}</figcaption>}
        </figure>
      </div>
    </section>
  )
}
