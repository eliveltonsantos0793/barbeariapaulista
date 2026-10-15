import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Clock, MapPin, Instagram, Scissors, Star, Check, Plus, Menu, X } from 'lucide-react'
import {
  site,
  services,
  testimonials,
  whatsappLink,
  formatPrice,
  img,
  type Service,
} from '../data/site'

export const Route = createFileRoute('/')({ component: Home })

function WhatsIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.45 9.43m8.04-17.47A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.3 11.3 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.04-1.18-5.89-3.33-8.03" />
    </svg>
  )
}

function WhatsButton({
  message,
  children,
  variant = 'solid',
  className = '',
}: {
  message?: string
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass'
  const styles =
    variant === 'solid'
      ? 'bg-brass text-ink hover:bg-brass-2'
      : 'border border-cream/30 text-cream hover:border-brass hover:text-brass-2'
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <WhatsIcon className="h-4 w-4" />
      {children}
    </a>
  )
}

const nav = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#casa', label: 'A casa' },
  { href: '#depoimentos', label: 'Clientes' },
  { href: '#visite', label: 'Visite' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-cream/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#topo" className="flex items-center gap-3">
          <span className="pole block h-8 w-2.5 rounded-full" aria-hidden="true" />
          <span className="font-display text-2xl leading-none">{site.name}</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-cream/75 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-brass-2">
              {n.label}
            </a>
          ))}
          <WhatsButton className="!px-5 !py-2.5">Agendar</WhatsButton>
        </nav>
        <button
          className="rounded-full p-2 text-cream md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-cream/10 bg-ink px-5 pb-6 pt-2 md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-2xl text-cream/90"
            >
              {n.label}
            </a>
          ))}
          <WhatsButton className="mt-3">Agendar pelo WhatsApp</WhatsButton>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="topo" className="grain relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={img('hero.png', 1800)}
        srcSet={`${img('hero.png', 900)} 900w, ${img('hero.png', 1400)} 1400w, ${img('hero.png', 2000)} 2000w`}
        sizes="100vw"
        alt="Interior da barbearia Dom Navalha com cadeiras clássicas e espelhos dourados"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:pb-28">
        <p className="rise mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-brass">
          {site.tagline} · desde 2012
        </p>
        <h1
          className="rise max-w-3xl font-display text-5xl leading-[0.95] sm:text-7xl md:text-8xl"
          style={{ animationDelay: '80ms' }}
        >
          Corte na tesoura.
          <br />
          <em className="text-brass-2">Acabamento</em> na navalha.
        </h1>
        <p
          className="rise mt-6 max-w-xl text-lg text-cream/80"
          style={{ animationDelay: '160ms' }}
        >
          Barbeiros experientes, toalha quente e um café passado na hora. Escolha o serviço e
          agende em segundos pelo WhatsApp.
        </p>
        <div
          className="rise mt-9 flex flex-wrap gap-3"
          style={{ animationDelay: '240ms' }}
        >
          <WhatsButton>Agendar pelo WhatsApp</WhatsButton>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold tracking-wide text-cream transition hover:border-brass hover:text-brass-2"
          >
            Ver serviços e preços
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  selected,
  onToggle,
}: {
  service: Service
  selected: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border p-6 transition ${
        selected
          ? 'border-brass bg-moss-2/60'
          : service.featured
            ? 'border-brass/40 bg-moss/70'
            : 'border-cream/10 bg-ink-2 hover:border-cream/25'
      }`}
    >
      {service.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-brass px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
          Mais pedido
        </span>
      )}
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl">{service.name}</h3>
        <span className="whitespace-nowrap font-display text-2xl text-brass-2">
          {formatPrice(service.price)}
        </span>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/65">{service.description}</p>
      <p className="mt-4 flex items-center gap-1.5 text-xs uppercase tracking-widest text-cream/45">
        <Clock className="h-3.5 w-3.5" /> {service.duration}
      </p>
      <div className="mt-5 flex gap-2">
        <WhatsButton
          variant="outline"
          className="flex-1 !px-4 !py-2.5"
          message={`Olá, ${site.name}! Gostaria de agendar: ${service.name} (${formatPrice(service.price)}).`}
        >
          Agendar
        </WhatsButton>
        <button
          onClick={onToggle}
          aria-pressed={selected}
          aria-label={selected ? `Remover ${service.name} do pacote` : `Adicionar ${service.name} ao pacote`}
          className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border transition ${
            selected
              ? 'border-brass bg-brass text-ink'
              : 'border-cream/30 text-cream hover:border-brass hover:text-brass-2'
          }`}
        >
          {selected ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </button>
      </div>
    </div>
  )
}

function Services() {
  const [selected, setSelected] = useState<string[]>([])
  const picked = services.filter((s) => selected.includes(s.id))
  const total = picked.reduce((sum, s) => sum + s.price, 0)
  const toggle = (id: string) =>
    setSelected((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]))

  const message = `Olá, ${site.name}! Gostaria de agendar:\n${picked
    .map((s) => `• ${s.name} — ${formatPrice(s.price)}`)
    .join('\n')}\nTotal: ${formatPrice(total)}`

  return (
    <section id="servicos" className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:py-32">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brass">Serviços</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Cardápio da casa</h2>
        </div>
        <p className="max-w-sm text-cream/65">
          Agende um serviço direto ou toque em <Plus className="inline h-4 w-4 text-brass" /> para
          montar seu pacote e enviar tudo de uma vez.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard
            key={s.id}
            service={s}
            selected={selected.includes(s.id)}
            onToggle={() => toggle(s.id)}
          />
        ))}
      </div>

      <div
        className={`sticky bottom-4 z-30 mr-16 mt-8 transition-all xl:mr-0 duration-300 ${
          picked.length ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        aria-live="polite"
      >
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-brass/50 bg-ink/95 p-5 shadow-2xl shadow-black/60 backdrop-blur sm:flex-row sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/50">
              Seu pacote · {picked.length} {picked.length === 1 ? 'serviço' : 'serviços'}
            </p>
            <p className="mt-1 text-sm text-cream/80">
              {picked.map((s) => s.name).join(' + ')}
            </p>
          </div>
          <div className="flex w-full items-center gap-4 sm:w-auto">
            <span className="font-display text-3xl text-brass-2">{formatPrice(total)}</span>
            <WhatsButton message={message} className="flex-1 sm:flex-none">
              Enviar no WhatsApp
            </WhatsButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function House() {
  return (
    <section id="casa" className="scroll-mt-20 bg-moss/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        <div className="grid grid-cols-5 grid-rows-6 gap-4 [height:520px]">
          <img
            src={img('corte.png', 700)}
            alt="Barbeiro fazendo degradê com máquina"
            loading="lazy"
            className="col-span-3 row-span-4 h-full w-full rounded-2xl object-cover"
          />
          <img
            src={img('ambiente.png', 500)}
            alt="Navalhas, tesouras e pentes sobre balcão de madeira"
            loading="lazy"
            className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover"
          />
          <img
            src={img('barba.png', 800)}
            alt="Barba feita na navalha com toalha quente"
            loading="lazy"
            className="col-span-2 col-start-4 row-span-3 h-full w-full rounded-2xl object-cover object-[35%_center]"
          />
          <div className="col-span-3 row-span-2 flex items-center gap-4 rounded-2xl border border-cream/10 bg-ink-2 p-5">
            <Scissors className="h-8 w-8 shrink-0 text-brass" />
            <p className="text-sm text-cream/75">
              <span className="font-display text-3xl text-cream">+12 mil</span>
              <br />
              cortes feitos com capricho
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brass">A casa</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Tradição de barbearia antiga, técnica de hoje.
          </h2>
          <p className="mt-6 text-cream/70">
            Na {site.name} cada atendimento tem hora marcada e tempo de sobra. Nada de fila, nada de
            pressa: você senta, toma um café ou uma cerveja gelada e sai do jeito que pediu.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              'Navalha descartável e ferramentas esterilizadas a cada cliente',
              'Produtos profissionais para cabelo e barba',
              'Café, água e cerveja por conta da casa',
              'Wi-Fi e ar-condicionado',
            ].map((t) => (
              <li key={t} className="flex gap-3 text-cream/85">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                {t}
              </li>
            ))}
          </ul>
          <WhatsButton className="mt-10" message={`Olá, ${site.name}! Quero conhecer a casa e marcar um horário.`}>
            Marcar meu horário
          </WhatsButton>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brass">Clientes</p>
      <h2 className="mt-3 font-display text-4xl md:text-6xl">Quem senta, volta.</h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-cream/10 bg-ink-2 p-7">
            <div className="flex gap-1 text-brass" aria-label="5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 font-display text-xl leading-snug text-cream/90">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-cream/50">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function Visit() {
  return (
    <section id="visite" className="grain relative scroll-mt-20 overflow-hidden border-t border-cream/10">
      <img
        src={img('ambiente.png', 1600)}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1.3fr_1fr] md:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brass">Visite</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] md:text-7xl">
            Sua cadeira
            <br />
            <em className="text-brass-2">está esperando.</em>
          </h2>
          <p className="mt-6 max-w-md text-cream/70">
            Atendimento com hora marcada. Mande uma mensagem com o serviço e o melhor dia — a gente
            responde rapidinho.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsButton>Chamar no WhatsApp</WhatsButton>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold tracking-wide text-cream transition hover:border-brass hover:text-brass-2"
            >
              <MapPin className="h-4 w-4" /> Como chegar
            </a>
          </div>
        </div>
        <div className="space-y-8 rounded-2xl border border-cream/10 bg-ink/70 p-8 backdrop-blur">
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brass">
              <Clock className="h-4 w-4" /> Horários
            </h3>
            <dl className="mt-4 space-y-3">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 border-b border-cream/10 pb-3">
                  <dt className="text-cream/70">{h.days}</dt>
                  <dd className={h.time === 'Fechado' ? 'text-cream/40' : 'font-semibold'}>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brass">
              <MapPin className="h-4 w-4" /> Endereço
            </h3>
            <p className="mt-3 text-cream/80">{site.address}</p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brass">
              <WhatsIcon className="h-4 w-4" /> WhatsApp
            </h3>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block font-display text-2xl hover:text-brass-2"
            >
              {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-cream/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-cream/50 sm:flex-row">
        <p className="flex items-center gap-3">
          <span className="pole block h-5 w-1.5 rounded-full" aria-hidden="true" />
          © {new Date().getFullYear()} {site.name} · {site.tagline}
        </p>
        <a
          href={`https://instagram.com/${site.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-brass-2"
        >
          <Instagram className="h-4 w-4" /> @{site.instagram}
        </a>
      </div>
    </footer>
  )
}

function FloatingWhats() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a barbearia no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whats text-white shadow-xl shadow-black/50 transition hover:scale-105"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whats opacity-20 motion-reduce:hidden" />
      <WhatsIcon className="relative h-7 w-7" />
    </a>
  )
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <House />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
      <FloatingWhats />
    </>
  )
}
