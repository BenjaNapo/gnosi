'use client'

import { useId, useState } from 'react'
import type { ReactNode } from 'react'

import { cx, SectionMeta } from './sectionUtils'

export type TimelineSectionItem = {
  description?: ReactNode
  meta?: ReactNode
  title: ReactNode
  year: ReactNode
}

export type TimelineSectionProps = {
  className?: string
  eyebrow?: ReactNode
  intro?: ReactNode
  items: TimelineSectionItem[]
  title?: ReactNode
}

export function TimelineSection({
  className,
  eyebrow,
  intro,
  items,
  title,
}: TimelineSectionProps) {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionId = useId()
  const sectionClassName = cx('timeline-section', className)
  const activeIndex = hoveredIndex ?? focusedIndex ?? clickedIndex

  return (
    <section className={sectionClassName}>
      <div className="timeline-section__inner">
        {(eyebrow || title || intro) && (
          <header className="timeline-section__header">
            <SectionMeta eyebrow={eyebrow} prefix="timeline-section" />
            {title && <h2 className="timeline-section__title">{title}</h2>}
            {intro && <div className="timeline-section__intro">{intro}</div>}
          </header>
        )}

        <ol className="timeline-section__list">
          {items.map((item, index) => {
            const isActive = activeIndex === index
            const descriptionId = `${sectionId}-timeline-description-${index}`

            return (
              <li
                className="timeline-section__item"
                data-active={isActive ? 'true' : undefined}
                key={index}
                onBlur={() => setFocusedIndex(null)}
                onClick={() =>
                  setClickedIndex((currentIndex) => (currentIndex === index ? null : index))
                }
                onFocus={() => setFocusedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="timeline-section__marker">
                  <span className="timeline-section__year">{item.year}</span>
                </div>

                <div className="timeline-section__copy">
                  {item.meta && <p className="timeline-section__item-meta">{item.meta}</p>}
                  <h3 className="timeline-section__item-title">
                    <button
                      aria-controls={item.description ? descriptionId : undefined}
                      aria-expanded={item.description ? isActive : undefined}
                      className="timeline-section__trigger"
                      type="button"
                    >
                      {item.title}
                    </button>
                  </h3>
                  {item.description && (
                    <div
                      aria-hidden={!isActive}
                      className="timeline-section__description"
                      id={descriptionId}
                    >
                      {item.description}
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
