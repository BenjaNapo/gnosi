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
      "La capacita di dirigere lo sguardo verso cio che accade, senza fuggire nell'automatismo.",
    number: 'I',
    title: 'Attenzione',
  },
  {
    description:
      "Una qualita diversa dell'essere, in cui corpo, pensiero ed emozione vengono percepiti insieme.",
    number: 'II',
    title: 'Presenza',
  },
  {
    description:
      "L'atto interiore attraverso cui l'uomo non osserva soltanto il mondo, ma ricorda di essere presente mentre osserva.",
    number: 'III',
    title: 'Ricordo di se',
  },
  {
    description:
      'Uno sforzo intenzionale, non meccanico, orientato alla trasformazione della propria qualita di attenzione.',
    number: 'IV',
    title: 'Lavoro cosciente',
  },
  {
    description:
      'Il passaggio da una vita reattiva e dispersa a una forma piu integra e consapevole di esistenza.',
    number: 'V',
    title: 'Trasformazione',
  },
]

const chapters = [
  {
    description: "La figura attraverso cui l'insegnamento prende forma e viene trasmesso.",
    href: '#',
    number: '01',
    title: 'Il Maestro',
  },
  {
    description: 'Il luogo del lavoro condiviso, della disciplina e della trasmissione.',
    href: '#',
    number: '02',
    title: 'La Scuola',
  },
  {
    description: 'Una soglia per avvicinarsi, chiedere informazioni o iniziare un dialogo.',
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
        title="L'insegnamento"
        intro="Un percorso di conoscenza interiore fondato sull'attenzione, sulla presenza e sul lavoro cosciente su di se."
        body="L'insegnamento non si presenta come una teoria da accumulare, ma come una pratica da verificare nell'esperienza diretta. Ogni idea diventa reale solo quando viene osservata nella vita quotidiana, nel corpo, nelle emozioni e nel pensiero."
        secondaryBody="Il lavoro interiore comincia dal riconoscere la propria frammentazione: automatismi, identificazioni, reazioni meccaniche. Da questa osservazione puo nascere una forma diversa di presenza."
      />

      <SymbolSection
        eyebrow="IL METODO"
        title="Osservare, ricordare, trasformare"
        body="Il metodo non chiede di credere, ma di osservare. Attraverso l'attenzione intenzionale, il ricordo di se e il confronto con la propria meccanicita, l'uomo puo iniziare a distinguere cio che in lui e automatico da cio che e realmente cosciente."
        symbolPosition="right"
        symbolVariant="threshold"
      />

      <QuoteSection
        eyebrow="PRINCIPIO"
        quote="Non si tratta di diventare altro, ma di vedere cio che gia agisce in noi."
        source="Appunto di lavoro"
        fragmentNumber="II"
      />

      <IndexSection eyebrow="PRINCIPI" title="Indice del lavoro" items={principleItems} />

      <ChapterGrid
        eyebrow="CONTINUARE IL PERCORSO"
        title="Altri frammenti"
        intro="L'insegnamento puo essere avvicinato da piu soglie: la figura del maestro, la pratica, la scuola e il contatto diretto con il lavoro."
        chapters={chapters}
      />
    </div>
  )
}
