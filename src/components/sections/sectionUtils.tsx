import type { ReactNode } from 'react'

export const cx = (...classNames: Array<false | null | string | undefined>) =>
  classNames.filter(Boolean).join(' ')

export const formatSectionNumber = (index: number) => String(index + 1).padStart(2, '0')

type SectionMetaProps = {
  eyebrow?: ReactNode
  fragmentNumber?: ReactNode
  prefix: string
}

export function SectionMeta({ eyebrow, fragmentNumber, prefix }: SectionMetaProps) {
  if (!eyebrow && !fragmentNumber) {
    return null
  }

  return (
    <div className={`${prefix}__meta`}>
      {fragmentNumber && <span className={`${prefix}__number`}>{fragmentNumber}</span>}
      {eyebrow && <p className={`${prefix}__eyebrow`}>{eyebrow}</p>}
    </div>
  )
}
