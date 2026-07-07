import type { ReactNode } from 'react'

import { cx, SectionMeta } from './sectionUtils'

export type SymbolSectionVariant = 'ascent' | 'empty' | 'essence' | 'threshold'
export type SymbolSectionPosition = 'left' | 'right'

export type SymbolSectionProps = {
  body?: ReactNode
  children?: ReactNode
  className?: string
  eyebrow?: ReactNode
  fragmentNumber?: ReactNode
  symbolPosition?: SymbolSectionPosition
  symbolVariant?: SymbolSectionVariant
  title?: ReactNode
}

const renderSymbol = (variant: SymbolSectionVariant) => {
  if (variant === 'empty') {
    return null
  }

  return (
    <div className="symbol-section__diagram" data-symbol-variant={variant}>
      {variant === 'essence' && (
        <>
          <span className="symbol-section__square" />
          <span className="symbol-section__point" />
        </>
      )}

      {variant === 'ascent' && (
        <>
          <span className="symbol-section__axis" />
          <span className="symbol-section__ascent-base" />
          <span className="symbol-section__ascent-diamond" />
          <span className="symbol-section__ascent-orb" />
          <span className="symbol-section__point" />
        </>
      )}

      {variant === 'threshold' && (
        <>
          <span className="symbol-section__frame symbol-section__frame--outer" />
          <span className="symbol-section__frame symbol-section__frame--inner" />
          <span className="symbol-section__threshold-line symbol-section__threshold-line--horizontal" />
          <span className="symbol-section__threshold-line symbol-section__threshold-line--vertical" />
          <span className="symbol-section__point" />
        </>
      )}
    </div>
  )
}

export function SymbolSection({
  body,
  children,
  className,
  eyebrow,
  fragmentNumber,
  symbolPosition = 'right',
  symbolVariant = 'essence',
  title,
}: SymbolSectionProps) {
  const sectionClassName = cx('symbol-section', className)
  const defaultSymbol = renderSymbol(symbolVariant)
  const hasSymbol = Boolean(defaultSymbol || children)

  return (
    <section
      className={sectionClassName}
      data-symbol-position={symbolPosition}
      data-symbol-variant={symbolVariant}
    >
      <div className="symbol-section__inner">
        <article className="symbol-section__copy">
          <SectionMeta eyebrow={eyebrow} fragmentNumber={fragmentNumber} prefix="symbol-section" />

          {title && <h2 className="symbol-section__title">{title}</h2>}
          {body && <div className="symbol-section__body">{body}</div>}
        </article>

        {hasSymbol && (
          <div className="symbol-section__symbol" aria-hidden={children ? undefined : true}>
            <div className="symbol-section__stage">
              {defaultSymbol}
              {children && <div className="symbol-section__custom">{children}</div>}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
