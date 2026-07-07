import type { CSSProperties, ReactNode } from 'react'

import { cx, SectionMeta } from './sectionUtils'

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
  const sectionClassName = cx('quote-section', className)
  const style = maxWidth ? ({ '--quote-section-max-width': maxWidth } as CSSProperties) : undefined

  return (
    <section className={sectionClassName} data-align={align} data-show-lines={showLines} style={style}>
      <div className="quote-section__inner">
        <SectionMeta eyebrow={eyebrow} fragmentNumber={fragmentNumber} prefix="quote-section" />

        <figure className="quote-section__figure">
          <blockquote className="quote-section__quote">{quote}</blockquote>

          {source && <figcaption className="quote-section__source">{source}</figcaption>}
        </figure>
      </div>
    </section>
  )
}
