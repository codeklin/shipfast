import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import Link from 'next/link'

const WHATSAPP_1ON1_URL = 'https://wa.me/2347031098097'

const benefits = [
  {
    number: '01',
    title: 'Clarity on your idea',
    body: 'We work through exactly what you want to build, what problem it solves, and what a realistic first version looks like. No more spinning in your head.',
  },
  {
    number: '02',
    title: 'A personalised learning path',
    body: 'Depending on where you are starting from, we map out the tools, stack and sequence that make the most sense for you, not a generic curriculum.',
  },
  {
    number: '03',
    title: 'Live problem-solving',
    body: 'Stuck on a bug, a concept, or a decision? We work through it together in real time. No waiting for a reply thread.',
  },
  {
    number: '04',
    title: 'Honest feedback on your project',
    body: 'Bring what you have built so far. I will tell you what is working, what is not, and what to focus on next.',
  },
  {
    number: '05',
    title: 'Direct access to the instructor',
    body: 'You speak directly with Olajide, not a teaching assistant or a bot. The same person who built Remote Finder and runs Ship Fast With AI.',
  },
  {
    number: '06',
    title: 'No pressure, no script',
    body: 'This is a conversation, not a sales call. If the group sprint is a better fit for you, I will say so.',
  },
]

const suits = [
  'You have an idea but do not know where to start',
  'You tried learning online and kept getting stuck',
  'You want to build something specific and need a guide',
  'You are not sure if the 3-day sprint is right for you',
  'You have already started building and need a second pair of eyes',
]

export default function OneOnOnePage() {
  return (
    <main className="min-h-screen bg-[#17181d] text-[#fbfbf8]">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-white/15 px-5 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">One-on-one session</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[.88] tracking-[-0.075em]">
            Build faster with<br />
            <span className="text-[#e4fb4f]">direct guidance.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl font-medium leading-relaxed text-white/75">
            A focused session with Olajide over WhatsApp. Bring your idea, your project, or your confusion. Leave with a clear next step.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_1ON1_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#e4fb4f] px-6 py-4 text-sm font-bold text-[#17181d]"
            >
              Book a session on WhatsApp <ArrowUpRight size={16} />
            </a>
            <Link href="/#community" className="inline-flex items-center justify-center gap-3 border border-white/25 px-6 py-4 text-sm font-bold">
              Or join the group sprint
            </Link>
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
            Via WhatsApp · No booking form · Just message directly
          </p>
        </div>
      </section>

      {/* Who it suits */}
      <section className="border-b border-white/15 bg-[#fbfbf8] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d6e72]">Is this for you?</p>
              <h2 className="mt-6 text-5xl font-bold leading-[.93] tracking-[-0.06em] sm:text-6xl">
                This session is a good fit if:
              </h2>
            </div>
            <ul className="divide-y divide-[#17181d]/15 border-y border-[#17181d]/15">
              {suits.map((item, i) => (
                <li key={i} className="flex items-start gap-5 py-5">
                  <span className="mt-0.5 font-mono text-[10px] text-[#7c57a0]">0{i + 1}</span>
                  <p className="text-lg font-medium leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-white/15 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">What you get</p>
          <h2 className="mt-5 max-w-2xl text-5xl font-bold leading-[.92] tracking-[-0.06em] sm:text-7xl">
            One session.<br /><span className="text-[#e4fb4f]">Real progress.</span>
          </h2>
          <div className="mt-16 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <article key={b.number} className="flex flex-col gap-5 bg-[#17181d] p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">{b.number}</span>
                <h3 className="text-xl font-bold tracking-tight">{b.title}</h3>
                <p className="text-lg font-medium leading-relaxed text-white/65">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-white/15 bg-[#fbfbf8] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d6e72]">How it works</p>
          <h2 className="mt-5 text-5xl font-bold leading-[.92] tracking-[-0.06em] sm:text-6xl">Simple and direct.</h2>
          <div className="mt-16 border-y border-[#17181d]/15">
            {[
              ['Message me on WhatsApp', 'Send a message to +234 703 109 8097 with a short description of what you want to work on.'],
              ['We agree on a time', 'I will respond and we pick a time that works for both of us, usually within 24 to 48 hours.'],
              ['We get to work', 'The session runs over WhatsApp voice or video. No software to install, no meeting links to chase.'],
              ['You leave with a clear next step', 'Every session ends with something concrete: a decision made, a bug fixed, a plan written, a direction confirmed.'],
            ].map(([title, body], i) => (
              <article key={i} className="grid gap-5 border-b border-[#17181d]/15 py-8 last:border-b-0 sm:grid-cols-[110px_1fr] sm:items-start">
                <span className="font-mono text-xs text-[#7c57a0]">0{i + 1} /</span>
                <div className="grid gap-3 sm:grid-cols-[.8fr_1fr]">
                  <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                  <p className="text-lg font-medium leading-relaxed text-[#55565b]">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e4fb4f] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Ready to talk?</p>
          <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-[.9] tracking-[-0.07em] sm:text-7xl">
            One conversation can change the whole direction.
          </h2>
          <p className="mt-8 max-w-xl text-xl font-medium">
            No form. No waiting room. Just message me directly on WhatsApp and we will take it from there.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_1ON1_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#17181d] px-6 py-4 text-sm font-bold text-[#e4fb4f]"
            >
              Message Olajide on WhatsApp <ArrowUpRight size={16} />
            </a>
            <Link href="/" className="inline-flex items-center gap-3 border border-[#17181d] px-6 py-4 text-sm font-bold">
              Back to Ship Fast With AI
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#17181d] px-5 py-10 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="font-bold">Ship Fast <span className="text-[#e4fb4f]">With AI</span></Link>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Build useful things, one sprint at a time.</p>
          </div>
          <p className="font-mono text-[10px] text-white/35">© 2026 Olajide Igbalaye</p>
        </div>
      </footer>
    </main>
  )
}
