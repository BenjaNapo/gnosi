import {
  ChapterGrid,
  EditorialSection,
  ImageMosaicSection,
  QuoteSection,
  SymbolSection,
  TimelineSection,
  type ImageMosaicItem,
} from '@/components/sections'
import Link from 'next/link'

const groupImages = [
  {
    caption: 'Uno spazio per una fotografia del gruppo riunito durante una giornata di pratica.',
    meta: 'Gruppo',
    placeholderLabel: 'Incontro',
    tone: 'gold',
    variant: 'large',
  },
  {
    caption: 'Momenti condivisi, letture, preparazione delle serate o lavoro comune.',
    meta: 'Vita ordinaria',
    placeholderLabel: 'Serata',
    tone: 'teal',
    variant: 'tall',
  },
  {
    caption: 'Materiale storico, appunti, luoghi attraversati e memorie della scuola.',
    meta: 'Memoria',
    placeholderLabel: 'Archivio',
    tone: 'vermilion',
    variant: 'wide',
  },
] satisfies ImageMosaicItem[]

const locations = [
  {
    description:
      'Punto stabile per incontri introduttivi, studio e continuita del lavoro settimanale.',
    detail: 'Indirizzo e calendario da confermare',
    name: 'Sede principale',
    status: 'Attiva',
  },
  {
    description:
      'Gruppo di studio che si riunisce in forma periodica, con appuntamenti aperti su richiesta.',
    detail: 'Citta o luogo da inserire',
    name: 'Gruppo locale',
    status: 'In formazione',
  },
  {
    description:
      'Incontri dedicati a chi vive lontano dalle sedi e desidera avvicinarsi al percorso.',
    detail: 'Frequenza variabile',
    name: 'Incontri itineranti',
    status: 'Periodici',
  },
]

const continuityItems = [
  {
    description:
      'Le scuole attive custodiscono il lavoro nel presente: luoghi semplici, continuita di incontri, studio condiviso e responsabilita concreta.',
    meta: 'Presenza viva',
    title: 'Scuole di oggi',
    year: 'Ora',
  },
  {
    description:
      "Le scuole storiche non sono un elenco concluso, ma una memoria di passaggi, persone, citta e forme attraverso cui l'insegnamento ha continuato a circolare.",
    meta: 'Archivio',
    title: 'Scuole di ieri',
    year: 'Mem.',
  },
  {
    description:
      'Tra cio che e attivo e cio che appartiene alla memoria rimane un filo: la scuola cambia forma, ma resta orientata alla stessa pratica interiore.',
    meta: 'Continuita',
    title: 'Trasmissione',
    year: 'Filo',
  },
]

const eveningSteps = [
  {
    description: "Accoglienza sobria, silenzio iniziale e preparazione dell'attenzione.",
    time: '01',
    title: 'Arrivo',
  },
  {
    description: 'Lettura, esposizione o approfondimento di un tema legato al lavoro interiore.',
    time: '02',
    title: 'Studio',
  },
  {
    description: 'Domande, confronto misurato e chiarimento pratico per il lavoro quotidiano.',
    time: '03',
    title: 'Dialogo',
  },
  {
    description: 'Indicazioni operative, meditazione o esercizio da continuare fuori dalla serata.',
    time: '04',
    title: 'Pratica',
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
      "La figura attraverso cui l'insegnamento prende forma, orientamento e trasmissione.",
    href: '/maestro',
    number: '02',
    title: 'Il Maestro',
  },
  {
    description: 'Una soglia per avvicinarsi, chiedere informazioni o iniziare un dialogo.',
    href: '/contatti',
    number: '03',
    title: 'Contatti',
  },
]

export default function SchoolPage() {
  return (
    <div className="teaching-page school-page">
      <nav className="site-nav teaching-page__nav" aria-label="Navigazione principale">
        <Link className="brand-mark" href="/" aria-label="Gnosi home">
          <span>G</span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/insegnamento">L&apos;Insegnamento</Link>
          <Link href="/maestro">Il Maestro</Link>
          <Link aria-current="page" href="/scuola">
            La Scuola
          </Link>
          <Link href="/contatti">Contatti</Link>
        </div>
      </nav>

      <EditorialSection
        className="teaching-page__hero school-page__hero"
        eyebrow="FRAMMENTO QUARTO"
        title="La scuola"
        intro="La scuola e il luogo in cui il lavoro interiore smette di essere un'idea privata e diventa ritmo condiviso."
        body="Non e un'istituzione da osservare dall'esterno, ne una somma di profili personali. E una comunita di persone che si ritrovano per studiare, praticare e sostenere una direzione comune."
        secondaryBody="Ognuno porta la propria misura, la propria domanda e la propria responsabilita. Il gruppo non sostituisce il cammino individuale: gli da continuita, attrito, memoria e presenza."
      />

      <ImageMosaicSection
        eyebrow="COMUNITA"
        fragmentNumber="IV"
        title="Un gruppo vivo"
        intro="La vita della scuola accade nei volti, nei gesti preparati con cura, nelle domande che ritornano e nei momenti in cui il lavoro diventa concreto."
        items={groupImages}
      />

      <QuoteSection
        align="left"
        eyebrow="APPARTENENZA"
        maxWidth="1320px"
        quote="La scuola non chiede appartenenza formale: chiede presenza, continuita e lavoro reale."
        showLines={false}
        source="Appunto per la pagina"
      />

      <SymbolSection
        className="school-page__places"
        eyebrow="SEDI"
        title="Luoghi che custodiscono il lavoro"
        body="La scuola si ritrova in sedi, gruppi locali e incontri periodici. Ogni luogo mantiene la stessa direzione, ma prende forma secondo le persone, i tempi e le possibilita concrete del territorio."
        symbolPosition="right"
        symbolVariant="empty"
      >
        <div className="school-constellation">
          <span className="school-constellation__axis" />
          <span className="school-constellation__point school-constellation__point--primary" />
          <span className="school-constellation__point school-constellation__point--secondary" />
          <span className="school-constellation__point school-constellation__point--tertiary" />
          <span className="school-constellation__label school-constellation__label--primary">
            Sede
          </span>
          <span className="school-constellation__label school-constellation__label--secondary">
            Gruppo
          </span>
          <span className="school-constellation__label school-constellation__label--tertiary">
            Incontri
          </span>
        </div>
      </SymbolSection>

      <section className="school-locations" aria-labelledby="school-locations-title">
        <div className="school-locations__inner">
          <header className="school-locations__header">
            <p className="school-locations__eyebrow">GEOGRAFIA</p>
            <h2 className="school-locations__title" id="school-locations-title">
              Le sedi
            </h2>
          </header>

          <ol className="school-locations__list">
            {locations.map((location, index) => (
              <li className="school-locations__item" key={location.name}>
                <span className="school-locations__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="school-locations__copy">
                  <p className="school-locations__status">{location.status}</p>
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                </div>
                <p className="school-locations__detail">{location.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TimelineSection
        className="school-page__continuity"
        eyebrow="OGGI E IERI"
        title="Continuita nel tempo"
        intro="La scuola vive nel presente, ma non nasce senza memoria. Ogni sede attiva conserva tracce di cio che l'ha preceduta."
        items={continuityItems}
      />

      <section className="school-pathway" aria-labelledby="school-pathway-title">
        <div className="school-pathway__inner">
          <header className="school-pathway__header">
            <p className="school-pathway__eyebrow">PERCORSO</p>
            <h2 className="school-pathway__title" id="school-pathway-title">
              Come e strutturata
            </h2>
            <p>
              Il cammino e presentato in due fasi distinte. La prima apre il linguaggio e la
              disciplina di base; la seconda chiede maggiore continuita, verifica personale e
              responsabilita nel gruppo.
            </p>
          </header>

          <div className="school-pathway__diagram" aria-label="Passaggio dalla Fase A alla Fase B">
            <article className="school-pathway__phase">
              <span className="school-pathway__phase-number">A</span>
              <p className="school-pathway__phase-meta">Fondazione</p>
              <h3>Fase A</h3>
              <p>
                Introduce i principi essenziali dell&apos;insegnamento, l&apos;auto-osservazione, la
                meditazione e un primo ordine di lavoro quotidiano.
              </p>
            </article>

            <div className="school-pathway__passage" aria-hidden="true">
              <span />
            </div>

            <article className="school-pathway__phase school-pathway__phase--advanced">
              <span className="school-pathway__phase-number">B</span>
              <p className="school-pathway__phase-meta">Approfondimento</p>
              <h3>Fase B</h3>
              <p>
                Consolida la pratica, amplia lo studio e accompagna l&apos;allievo verso una
                partecipazione piu consapevole alla vita della scuola.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="school-evening" aria-labelledby="school-evening-title">
        <div className="school-evening__inner">
          <div className="school-evening__copy">
            <p className="school-evening__eyebrow">SERATE E CORSI</p>
            <h2 className="school-evening__title" id="school-evening-title">
              Il ritmo degli incontri
            </h2>
            <p>
              Le serate sono il punto piu concreto della scuola: un appuntamento regolare, preparato
              con sobrieta, in cui studio e pratica restano uniti.
            </p>
            <p>
              I corsi introduttivi aprono l&apos;accesso al percorso; gli incontri successivi
              sostengono la continuita della Fase A e della Fase B.
            </p>
          </div>

          <ol className="school-evening__sequence">
            {eveningSteps.map((step) => (
              <li className="school-evening__step" key={step.title}>
                <span className="school-evening__step-time">{step.time}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ChapterGrid
        eyebrow="CONTINUARE IL PERCORSO"
        title="Altri frammenti"
        intro="Dalla vita della scuola si torna ai principi, alla figura del maestro e alla possibilita di un primo contatto."
        chapters={chapters}
      />
    </div>
  )
}
