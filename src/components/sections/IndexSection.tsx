'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'

export type IndexSectionItem = {
  description?: ReactNode
  href?: string
  meta?: ReactNode
  number?: ReactNode
  symbol?: ReactNode
  title: ReactNode
}

export type IndexSectionProps = {
  activeIndex?: number
  className?: string
  eyebrow?: ReactNode
  items: IndexSectionItem[]
  onItemHover?: (index: number, item: IndexSectionItem) => void
  title?: ReactNode
}

const getBoundedIndex = (index: number | undefined, itemCount: number) => {
  if (!itemCount) {
    return -1
  }

  if (typeof index !== 'number') {
    return 0
  }

  return Math.max(0, Math.min(itemCount - 1, index))
}

const getItemClassName = (isActive: boolean) =>
  ['index-section__item', isActive && 'index-section__item--active'].filter(Boolean).join(' ')

export function IndexSection({
  activeIndex,
  className,
  eyebrow,
  items,
  onItemHover,
  title,
}: IndexSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const isControlled = typeof activeIndex === 'number'
  const currentIndex = getBoundedIndex(isControlled ? activeIndex : hoveredIndex, items.length)
  const activeItem = currentIndex >= 0 ? items[currentIndex] : undefined
  const sectionClassName = ['index-section', className].filter(Boolean).join(' ')

  const activateItem = (index: number) => {
    if (!isControlled) {
      setHoveredIndex(index)
    }

    onItemHover?.(index, items[index])
  }

  return (
    <section className={sectionClassName}>
      <div className="index-section__inner">
        <header className="index-section__header">
          {eyebrow && <p className="index-section__eyebrow">{eyebrow}</p>}
          {title && <h2 className="index-section__title">{title}</h2>}
        </header>

        <div className="index-section__body">
          <ol className="index-section__list">
            {items.map((item, index) => {
              const isActive = index === currentIndex
              const itemNumber = item.number ?? String(index + 1).padStart(2, '0')
              const commonProps = {
                'aria-current': isActive ? ('true' as const) : undefined,
                className: getItemClassName(isActive),
                onFocus: () => activateItem(index),
                onMouseEnter: () => activateItem(index),
              }

              const content = (
                <>
                  <span className="index-section__item-number">{itemNumber}</span>
                  <span className="index-section__item-copy">
                    <span className="index-section__item-title">{item.title}</span>
                    {item.description && (
                      <span className="index-section__item-description">{item.description}</span>
                    )}
                  </span>
                  {item.meta && <span className="index-section__item-meta">{item.meta}</span>}
                </>
              )

              return (
                <li className="index-section__list-row" key={index}>
                  {item.href ? (
                    <a {...commonProps} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <button {...commonProps} type="button">
                      {content}
                    </button>
                  )}
                </li>
              )
            })}
          </ol>

          {activeItem && (
            <aside className="index-section__aside">
              <div className="index-section__symbol" aria-hidden="true">
                {activeItem.symbol ?? activeItem.number ?? String(currentIndex + 1).padStart(2, '0')}
              </div>
              <div className="index-section__aside-copy">
                {activeItem.meta && <p className="index-section__aside-meta">{activeItem.meta}</p>}
                <h3 className="index-section__aside-title">{activeItem.title}</h3>
                {activeItem.description && (
                  <p className="index-section__aside-description">{activeItem.description}</p>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}
