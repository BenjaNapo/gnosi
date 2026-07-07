import {
  ChapterGrid,
  EditorialSection,
  QuoteSection,
  SymbolSection,
  TimelineSection,
} from '@/components/sections'
import Link from 'next/link'

const timelineItems = [
  {
    description:
      "Le radici dell'insegnamento risalgono alle antiche scuole di conoscenza, dove la filosofia era una pratica di trasformazione. In questa linea, Pitagora rappresenta la ricerca dell'armonia, del numero e della disciplina interiore.",
    meta: 'Radici antiche',
    title: 'Gnosticismo Antico',
    year: 'I',
  },
  {
    description:
      "Samael Aun Weor riformula la Gnosi come cammino pratico per l'uomo contemporaneo, ponendo al centro il risveglio della coscienza, la morte psicologica e la trasformazione delle energie interiori.",
    meta: 'Sintesi contemporanea',
    title: 'Samael Aun Weor',
    year: 'II',
  },
  {
    description:
      "Rabolu richiama l'insegnamento alla sua essenzialita: osservazione costante, lavoro diretto su se stessi e responsabilita concreta davanti alla propria coscienza.",
    meta: 'Continuita pratica',
    title: 'Rabolu',
    year: 'III',
  },
  {
    description:
      "Riccardo Wang King incarna la trasmissione viva dell'insegnamento nel presente, orientando la pratica verso una comprensione sobria, verificabile e profondamente responsabile.",
    meta: 'Trasmissione viva',
    title: 'Riccardo Wang King',
    year: 'IV',
  },
]

const chapters = [
  {
    description: 'I principi e le direzioni fondamentali del lavoro interiore.',
    href: '/insegnamento',
    number: '01',
    title: "L'insegnamento",
  },
  {
    description:
      'Il luogo in cui il lavoro viene sostenuto attraverso disciplina, studio e condivisione.',
    href: '/scuola',
    number: '02',
    title: 'La Scuola',
  },
  {
    description: 'Una soglia per avvicinarsi, chiedere informazioni o iniziare un dialogo.',
    href: '/contatti',
    number: '03',
    title: 'Contatti',
  },
]

export default function MasterPage() {
  return (
    <div className="teaching-page">
      <nav className="site-nav teaching-page__nav" aria-label="Navigazione principale">
        <Link className="brand-mark" href="/" aria-label="Gnosi home">
          <span>G</span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/insegnamento">L&apos;Insegnamento</Link>
          <Link aria-current="page" href="/maestro">
            Il Maestro
          </Link>
          <Link href="/scuola">La Scuola</Link>
          <Link href="/contatti">Contatti</Link>
        </div>
      </nav>

      <EditorialSection
        className="teaching-page__hero"
        eyebrow="FRAMMENTO TERZO"
        title="Il Maestro"
        intro="La figura del maestro non e un oggetto di devozione, ma una soglia attraverso cui l'insegnamento prende forma, direzione e responsabilita."
        body="Nel lavoro interiore, il maestro rappresenta una presenza capace di indicare cio che l'uomo ordinariamente non vede di se: automatismi, illusioni, dispersioni e possibilita latenti."
        secondaryBody="La sua funzione non e sostituire la ricerca personale, ma orientarla. Non consegna risposte da possedere, ma strumenti per verificare, osservare e trasformare."
      />

      <SymbolSection
        eyebrow="LA GUIDA"
        title="Una direzione verticale"
        body="Il maestro indica una direzione, ma il cammino rimane dell'allievo. La trasmissione autentica non crea dipendenza: accende responsabilita, attenzione e presenza."
        symbolVariant="ascent"
      />

      <TimelineSection
        eyebrow="TRACCE"
        title="Un percorso di trasmissione"
        intro="Ogni insegnamento attraversa una storia: incontri, pratiche, scuole, silenzi e forme diverse di continuita."
        items={timelineItems}
      />

      <QuoteSection
        eyebrow="PRINCIPIO"
        fragmentNumber="III"
        quote="Il maestro non cammina al posto dell'allievo: rende visibile la direzione."
        source="Appunto di lavoro"
      />

      <ChapterGrid
        eyebrow="CONTINUARE IL PERCORSO"
        title="Altri frammenti"
        intro="La figura del maestro conduce naturalmente alla pratica, alla scuola e al contatto diretto con l'insegnamento."
        chapters={chapters}
      />
    </div>
  )
}
