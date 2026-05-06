'use client'

import gsap from 'gsap'
import type { TouchEvent } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

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
  {
    kicker: 'Frammento quarto',
    shape: 'burst',
    text: "Nel punto che si apre, la forma non resiste piu. La luce attraversa ogni margine, rischiara la pagina e restituisce al bianco cio che era velato.",
    title: 'La Luce',
  },
] as const

const wheelThreshold = 22
const touchThreshold = 42

export default function HomePage() {
  const copyRef = useRef<HTMLDivElement | null>(null)
  const activeFragmentRef = useRef(0)
  const isAnimatingRef = useRef(false)
  const prefersReducedMotionRef = useRef(false)
  const shouldAnimateInRef = useRef(false)
  const touchStartYRef = useRef<number | null>(null)
  const transitionTweenRef = useRef<gsap.core.Tween | null>(null)
  const [activeFragment, setActiveFragment] = useState(0)
  const fragment = fragments[activeFragment]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotionPreference = () => {
      prefersReducedMotionRef.current = mediaQuery.matches
    }

    syncMotionPreference()
    mediaQuery.addEventListener('change', syncMotionPreference)

    return () => mediaQuery.removeEventListener('change', syncMotionPreference)
  }, [])

  const setFragment = useCallback((nextIndex: number) => {
    const boundedIndex = Math.max(0, Math.min(fragments.length - 1, nextIndex))

    if (boundedIndex === activeFragmentRef.current || isAnimatingRef.current) {
      return
    }

    const copy = copyRef.current
    activeFragmentRef.current = boundedIndex

    if (prefersReducedMotionRef.current || !copy) {
      setActiveFragment(boundedIndex)
      return
    }

    isAnimatingRef.current = true
    gsap.killTweensOf(copy)
    transitionTweenRef.current = gsap.to(copy, {
      autoAlpha: 0,
      duration: 0.24,
      ease: 'power2.out',
      onComplete: () => {
        shouldAnimateInRef.current = true
        setActiveFragment(boundedIndex)
      },
    })
  }, [])

  const moveFragment = useCallback(
    (direction: 1 | -1) => {
      setFragment(activeFragmentRef.current + direction)
    },
    [setFragment],
  )

  useEffect(() => {
    if (!shouldAnimateInRef.current) {
      return
    }

    const copy = copyRef.current
    shouldAnimateInRef.current = false

    if (!copy) {
      isAnimatingRef.current = false
      return
    }

    transitionTweenRef.current = gsap.fromTo(
      copy,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.36,
        ease: 'power2.out',
        onComplete: () => {
          isAnimatingRef.current = false
        },
      },
    )
  }, [activeFragment])

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()

      if (Math.abs(event.deltaY) < wheelThreshold) {
        return
      }

      moveFragment(event.deltaY > 0 ? 1 : -1)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault()
        moveFragment(1)
      }

      if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault()
        moveFragment(-1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [moveFragment])

  useEffect(() => {
    return () => {
      transitionTweenRef.current?.kill()
    }
  }, [])

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartYRef.current = event.touches[0]?.clientY ?? null
  }

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartYRef.current !== null) {
      event.preventDefault()
    }
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startY = touchStartYRef.current
    const endY = event.changedTouches[0]?.clientY
    touchStartYRef.current = null

    if (startY === null || endY === undefined) {
      return
    }

    const deltaY = startY - endY

    if (Math.abs(deltaY) < touchThreshold) {
      return
    }

    moveFragment(deltaY > 0 ? 1 : -1)
  }

  const activeShape = fragment.shape

  return (
    <div
      className="home-page"
      data-active-shape={activeShape}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
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

        <article className="hero" aria-labelledby="fragment-title">
          <div className="hero-copy" ref={copyRef} aria-live="polite">
            <p className="hero-kicker">{fragment.kicker}</p>
            <h1 id="fragment-title">{fragment.title}</h1>
            <p>{fragment.text}</p>
            <div className="hero-rule" aria-hidden="true" />
          </div>
        </article>
      </section>
    </div>
  )
}
