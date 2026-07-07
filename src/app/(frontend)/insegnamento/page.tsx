import {
  ChapterGrid,
  EditorialSection,
  IndexSection,
  QuoteSection,
  SymbolSection,
} from '@/components/sections'
import Link from 'next/link'

const principleItems = [
  {
    description:
      "Il lavoro di osservazione, comprensione e dissoluzione degli aggregati psicologici che oscurano l'Essenza.",
    number: 'I',
    title: "Morte dell'ego",
  },
  {
    description:
      'La nascita di una vita interiore rigenerata, capace di dare forma cosciente alle energie piu profonde.',
    number: 'II',
    title: 'Seconda nascita',
  },
  {
    description:
      "Il servizio disinteressato: portare il lavoro oltre se stessi e orientarlo al bene dell'umanita.",
    number: 'III',
    title: "Sacrificio per l'umanita",
  },
  {
    description:
      "La capacita di vedere pensieri, emozioni e impulsi nel momento in cui sorgono, senza giustificarli.",
    number: 'IV',
    title: 'Auto-osservazione',
  },
  {
    description:
      "Il principio cosciente che puo risvegliarsi quando l'ego perde forza e l'uomo smette di vivere meccanicamente.",
    number: 'V',
    title: 'Essenza',
  },
]

const chapters = [
  {
    description: "La figura attraverso cui l'insegnamento prende forma, orientamento e trasmissione.",
    href: '#',
    number: '01',
    title: 'Il Maestro',
  },
  {
    description: "Il luogo in cui l'auto-osservazione, lo studio e la disciplina vengono sostenuti insieme.",
    href: '#',
    number: '02',
    title: 'La Scuola',
  },
  {
    description: "Una soglia per avvicinarsi all'insegnamento, chiedere informazioni o iniziare un dialogo.",
    href: '#',
    number: '03',
    title: 'Contatti',
  },
]

export default function TeachingPage() {
  return (
    <div className="teaching-page">
      <nav className="site-nav teaching-page__nav" aria-label="Navigazione principale">
        <Link className="brand-mark" href="/" aria-label="Gnosi home">
          <span>G</span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link aria-current="page" href="/insegnamento">
            L&apos;Insegnamento
          </Link>
          <a href="#">Il Maestro</a>
          <a href="#">La Scuola</a>
          <a href="#">Contatti</a>
        </div>
      </nav>

      <EditorialSection
        className="teaching-page__hero"
        eyebrow="FRAMMENTO SECONDO"
        title="Cosa sono i Tre Fattori"
        intro="Nell'insegnamento di Samael Aun Weor, i Tre Fattori sono l'asse pratico della Rivoluzione della Coscienza."
        body="Non sono idee da contemplare, ma tre direzioni da vivere: morire psicologicamente all'ego, nascere a una vita interiore rigenerata, sacrificarsi per l'umanita attraverso un servizio disinteressato."
        secondaryBody="Il primo fattore apre il lavoro: vedere e comprendere gli aggregati psicologici che agiscono in noi. Senza questa morte interiore, la conoscenza rimane teoria; con essa, l'Essenza puo iniziare a liberarsi dalla meccanicita."
      />

      <SymbolSection
        eyebrow="EGO ED ESSENZA"
        title="Cos'e l'Ego e l'Essenza"
        body="L'Ego e l'insieme degli aggregati psicologici: desideri, paure, identificazioni, orgoglio, abitudini e reazioni che parlano in noi come se fossero il nostro vero essere. L'Essenza, invece, e il principio cosciente, semplice e reale, normalmente oscurato da questa molteplicita interiore."
        symbolPosition="right"
        symbolVariant="essence"
      />

      <QuoteSection
        eyebrow="PRINCIPIO"
        quote="La trasformazione comincia quando l'uomo distingue cio che e coscienza da cio che e automatismo."
        source="Sintesi di lavoro"
        fragmentNumber="II"
      />

      <IndexSection eyebrow="PRINCIPI" title="Asse del lavoro interiore" items={principleItems} />

      <ChapterGrid
        eyebrow="CONTINUARE IL PERCORSO"
        title="Altri frammenti"
        intro="Dai Tre Fattori si aprono le altre soglie dell'insegnamento: la guida del maestro, il lavoro condiviso nella scuola e il contatto diretto con la pratica."
        chapters={chapters}
      />
    </div>
  )
}
