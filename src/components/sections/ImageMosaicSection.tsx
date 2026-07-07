import type { CSSProperties, ReactNode } from 'react'

import { cx, SectionMeta } from './sectionUtils'

export type ImageMosaicItem = {
  alt?: string
  caption?: ReactNode
  imageSrc?: string
  meta?: ReactNode
  placeholderLabel?: ReactNode
  tone?: 'gold' | 'teal' | 'vermilion'
  variant?: 'large' | 'tall' | 'wide'
}

export type ImageMosaicSectionProps = {
  className?: string
  eyebrow?: ReactNode
  fragmentNumber?: ReactNode
  intro?: ReactNode
  items: ImageMosaicItem[]
  title?: ReactNode
}

const getImageStyle = (imageSrc: string | undefined) =>
  imageSrc
    ? ({
        backgroundImage: `url(${imageSrc})`,
      } as CSSProperties)
    : undefined

export function ImageMosaicSection({
  className,
  eyebrow,
  fragmentNumber,
  intro,
  items,
  title,
}: ImageMosaicSectionProps) {
  const sectionClassName = cx('image-mosaic-section', className)

  return (
    <section className={sectionClassName}>
      <div className="image-mosaic-section__inner">
        {(eyebrow || title || intro) && (
          <header className="image-mosaic-section__header">
            <SectionMeta
              eyebrow={eyebrow}
              fragmentNumber={fragmentNumber}
              prefix="image-mosaic-section"
            />

            {title && <h2 className="image-mosaic-section__title">{title}</h2>}
            {intro && <div className="image-mosaic-section__intro">{intro}</div>}
          </header>
        )}

        <div className="image-mosaic-section__grid">
          {items.map((item, index) => (
            <figure
              className="image-mosaic-section__item"
              data-tone={item.tone ?? 'gold'}
              data-variant={item.variant ?? 'wide'}
              key={index}
            >
              <div
                aria-label={item.alt}
                className="image-mosaic-section__image"
                role={item.alt ? 'img' : undefined}
                style={getImageStyle(item.imageSrc)}
              >
                {!item.imageSrc && (
                  <span className="image-mosaic-section__placeholder">
                    {item.placeholderLabel ?? 'Fotografia'}
                  </span>
                )}
              </div>

              {(item.meta || item.caption) && (
                <figcaption className="image-mosaic-section__caption">
                  {item.meta && (
                    <span className="image-mosaic-section__caption-meta">{item.meta}</span>
                  )}
                  {item.caption && <span>{item.caption}</span>}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
