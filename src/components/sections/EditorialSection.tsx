import type { ReactNode } from 'react'

import { cx, SectionMeta } from './sectionUtils'

export type EditorialSectionAlign = 'left' | 'center' | 'split'

export type EditorialSectionProps = {
  align?: EditorialSectionAlign
  body?: ReactNode
  children?: ReactNode
  className?: string
  eyebrow?: ReactNode
  fragmentNumber?: ReactNode
  intro?: ReactNode
  secondaryBody?: ReactNode
  title?: ReactNode
}

const renderTextBlock = (content: ReactNode, className: string) => {
  if (!content) {
    return null
  }

  return <div className={className}>{content}</div>
}

export function EditorialSection({
  align = 'split',
  body,
  children,
  className,
  eyebrow,
  fragmentNumber,
  intro,
  secondaryBody,
  title,
}: EditorialSectionProps) {
  const sectionClassName = cx('editorial-section', className)

  return (
    <section className={sectionClassName} data-align={align}>
      <div className="editorial-section__inner">
        <header className="editorial-section__header">
          <SectionMeta
            eyebrow={eyebrow}
            fragmentNumber={fragmentNumber}
            prefix="editorial-section"
          />

          {title && <h2 className="editorial-section__title">{title}</h2>}
        </header>

        <div className="editorial-section__content">
          {renderTextBlock(intro, 'editorial-section__intro')}
          {renderTextBlock(body, 'editorial-section__body')}
          {renderTextBlock(
            secondaryBody,
            'editorial-section__body editorial-section__body--secondary',
          )}
          {children && <div className="editorial-section__slot">{children}</div>}
        </div>
      </div>
    </section>
  )
}
