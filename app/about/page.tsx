import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

const works = [
  {
    category: 'Fullstack Development',
    title: 'JDev',
    description: 'A portfolio and developer hub showcasing fullstack projects, built with modern web tooling and deployed live.',
    url: 'https://jdev-live.vercel.app/',
    label: 'jdev-live.vercel.app',
  },
  {
    category: 'Brand Design',
    title: 'Jyde Studio',
    description: 'A brand design portfolio presenting visual identities, systems and creative direction work.',
    url: 'https://jyde.vercel.app',
    label: 'jyde.vercel.app',
  },
]

const roles = ['Fullstack Developer', 'Brand Designer', 'Content Strategist']

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#17181d] text-[#fbfbf8]">

      {/* Nav */}
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-white/15 px-5 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">The person behind Ship Fast With AI</p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[.88] tracking-[-0.075em]">
              Olajide<br />
              <span className="text-[#e4fb4f]">Igbalaye.</span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span key={role} className="border border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60">
                  {role}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-lg text-xl font-medium leading-relaxed text-white/75">
              I build useful things for the web: products, brands and content that solve real problems. Ship Fast With AI is one of them.
            </p>
            {/* Social links */}
            <div className="mt-10 flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/olajide-igbalaye/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-white/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/70 transition-colors hover:border-[#e4fb4f] hover:text-[#e4fb4f]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://twitter.com/jidelence"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-white/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/70 transition-colors hover:border-[#e4fb4f] hover:text-[#e4fb4f]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @jidelence
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex items-start">
            <div className="aspect-[4/5] w-full max-w-[480px] overflow-hidden border border-white/15 shadow-[12px_14px_0_rgba(228,251,79,0.15)]">
              <img
                src="/hero-portrait.png"
                alt="Olajide Igbalaye"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="border-b border-white/15 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">Selected work</p>
          <h2 className="mt-5 text-5xl font-bold leading-[.92] tracking-[-0.06em] sm:text-7xl">
            Things I've<br /><span className="text-[#e4fb4f]">built.</span>
          </h2>

          <div className="mt-16 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
            {works.map((work) => (
              <article key={work.title} className="group relative flex flex-col justify-between gap-10 bg-[#17181d] p-8 lg:p-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#e4fb4f]">{work.category}</p>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight">{work.title}</h3>
                  <p className="mt-4 text-lg font-medium leading-relaxed text-white/65">{work.description}</p>
                </div>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/70 transition-colors hover:border-[#e4fb4f] hover:text-[#e4fb4f] self-start"
                >
                  {work.label} <ArrowUpRight size={12} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="bg-[#fbfbf8] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              ['Fullstack Development', 'I design and build web products end-to-end, from database and API to responsive UI. Focused on shipping things that actually work.'],
              ['Brand Design', 'I create visual identities and design systems that give businesses a clear, distinct presence. Strategy-first, execution-close.'],
              ['Content Strategy', 'I shape how ideas are communicated: structure, tone, narrative, so messages land with the right audience.'],
            ].map(([title, body]) => (
              <div key={title} className="border-t-2 border-[#17181d] pt-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 text-lg font-medium leading-relaxed text-[#55565b]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e4fb4f] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Ship Fast With AI</p>
          <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-[.9] tracking-[-0.07em] sm:text-7xl">
            Want to build something too?
          </h2>
          <p className="mt-8 max-w-xl text-xl font-medium">
            The 3-day training teaches you how to take an idea from brief to deployed product with AI-assisted development.
          </p>
          <Link href="/" className="mt-10 inline-flex items-center gap-3 border border-[#17181d] px-5 py-4 text-sm font-bold">
            Back to Ship Fast With AI <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <footer className="bg-[#17181d] px-5 py-10 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="font-bold">Ship Fast <span className="text-[#e4fb4f]">With AI</span></Link>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Build useful things, one sprint at a time.</p>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/olajide-igbalaye/" target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/55 hover:text-white">LinkedIn</a>
            <a href="https://twitter.com/jidelence" target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/55 hover:text-white">@jidelence</a>
          </div>
          <p className="font-mono text-[10px] text-white/35">© 2026 Olajide Igbalaye</p>
        </div>
      </footer>
    </main>
  )
}
