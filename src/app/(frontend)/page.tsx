'use client'

import { useEffect, useRef, useState } from 'react'

const navItems = ['Home', 'Gnosi', 'Le Sedi', 'Contatti']

const fragments = [
  {
    kicker: 'Frammento primo',
    shape: 'square',
    text: "La conoscenza non si conquista: si ricorda. Nel silenzio della forma, il punto interiore si accende e orienta l'ascesa dalla materia allo spirito.",
    title: "L'Essenza",
  },
  {
    kicker: 'Frammento secondo',
    shape: 'triangle',
    text: "La forma custodisce il movimento. Ogni lato apre una direzione, ogni vertice raccoglie cio che era disperso e lo conduce verso un centro piu sottile.",
    title: 'La Forma',
  },
  {
    kicker: 'Frammento terzo',
    shape: 'circle',
    text: "Quando il percorso si compie, il segno torna intero. Il cerchio non chiude: contiene, protegge e lascia risuonare cio che e stato riconosciuto.",
    title: 'Il Cerchio',
  },
] as const

export default function HomePage() {
  const panelRefs = useRef<Array<HTMLElement | null>>([])
  const [activeFragment, setActiveFragment] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const strongestEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!strongestEntry) {
          return
        }

        const nextIndex = Number((strongestEntry.target as HTMLElement).dataset.fragmentIndex)

        if (Number.isFinite(nextIndex)) {
          setActiveFragment(nextIndex)
        }
      },
      {
        rootMargin: '-24% 0px -34%',
        threshold: [0.35, 0.5, 0.65, 0.8],
      },
    )

    panelRefs.current.forEach((panel) => {
      if (panel) {
        observer.observe(panel)
      }
    })

    return () => observer.disconnect()
  }, [])

  const activeShape = fragments[activeFragment].shape

  return (
    <div className="home-page" data-active-shape={activeShape}>
      <nav className="site-nav" aria-label="Navigazione principale">
        <a className="brand-mark" href="#" aria-label="Gnosi home">
          <span>G</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a aria-current={item === 'Home' ? 'page' : undefined} href="#" key={item}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section className="story" aria-label="Percorso gnostico">
        <div className="sigil-column" aria-hidden="true">
          <div className="sigil-stage">
            <div className="essence-sigil">
              <span className="sigil-circle" />
              <span className="sigil-triangle" />
              <span className="sigil-square" />
              <span className="sigil-core" />
            </div>
          </div>
        </div>

        <div className="story-copy-stack">
          {fragments.map((fragment, index) => {
            const titleId = `fragment-title-${index}`
            const TitleTag = index === 0 ? 'h1' : 'h2'

            return (
              <article
                className="hero"
                data-active={index === activeFragment ? 'true' : undefined}
                data-fragment-index={index}
                key={fragment.title}
                ref={(node) => {
                  panelRefs.current[index] = node
                }}
                aria-labelledby={titleId}
              >
                <div className="hero-copy">
                  <p className="hero-kicker">{fragment.kicker}</p>
                  <TitleTag id={titleId}>{fragment.title}</TitleTag>
                  <p>{fragment.text}</p>
                  <div className="hero-rule" aria-hidden="true" />
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
