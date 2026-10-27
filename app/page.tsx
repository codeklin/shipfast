'use client'

import { ArrowDownRight, ArrowUpRight, Code2, Menu, Search, Terminal, X } from 'lucide-react'
import { useState } from 'react'

const SITE_CONFIG = {
  WHATSAPP_COMMUNITY_URL: '',
  WHATSAPP_DIRECT_MESSAGE_URL: '',
  PAYMENT_URL: '',
  COURSE_PRICE_NGN: 15000,
  COURSE_START_DATE: 'November 2026',
  COURSE_END_DATE: '',
  ENROLLMENT_DEADLINE: '',
}

function ConfiguredLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const configured = Boolean(href)
  return configured ? (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <span className={`${className ?? ''} cursor-not-allowed opacity-60`} aria-disabled="true" title="Destination to be configured">
      {children}
    </span>
  )
}

function ProductWindow() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] rotate-[1.5deg] border border-white/20 bg-[#f4f4ef] shadow-[18px_22px_0_rgba(228,251,79,0.9)] transition-transform duration-500 hover:rotate-0">
      <div className="flex items-center gap-2 border-b border-[#17181d]/15 px-4 py-3 text-[#17181d]">
        <span className="size-2 rounded-full bg-[#ff6b5d]" />
        <span className="size-2 rounded-full bg-[#f4c542]" />
        <span className="size-2 rounded-full bg-[#83b968]" />
        <span className="ml-4 flex-1 border border-[#17181d]/15 px-3 py-1 font-mono text-[10px] text-[#65666b]">remote-finder.local</span>
      </div>
      <div className="grid min-h-[330px] grid-cols-[1fr_1.35fr] text-[#17181d]">
        <aside className="border-r border-[#17181d]/10 bg-[#e9c7f5]/45 p-5">
          <div className="mb-10 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"><span className="grid size-5 place-items-center bg-[#17181d] text-[#e4fb4f]">R</span> remote finder</div>
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#65666b]">Discover roles</p>
          <div className="space-y-2 font-mono text-[10px]"><div className="border-b border-[#17181d]/20 pb-2">Design & Product</div><div className="border-b border-[#17181d]/20 pb-2">Engineering</div><div className="border-b border-[#17181d]/20 pb-2">Marketing</div></div>
          <div className="mt-12 border-t border-[#17181d]/20 pt-3 font-mono text-[9px] uppercase text-[#65666b]">Built to solve a real problem.</div>
        </aside>
        <div className="bg-[#fbfbf8] p-5">
          <div className="mb-5 flex items-center justify-between"><div><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#65666b]">Good morning, builder</p><h3 className="mt-1 text-xl font-bold tracking-tight">Find work that fits.</h3></div><div className="grid size-8 place-items-center border border-[#17181d]/15"><Search size={14} /></div></div>
          <div className="mb-4 flex items-center gap-2 border border-[#17181d]/15 px-3 py-2 font-mono text-[10px] text-[#65666b]"><Search size={12} /> Search remote opportunities</div>
          <div className="space-y-2">{['Product Designer · Arc', 'Frontend Developer · Loom', 'Creative Technologist · Notion'].map((role, index) => <div key={role} className="flex items-center justify-between border border-[#17181d]/10 p-3"><div><p className="text-[11px] font-semibold">{role}</p><p className="mt-1 font-mono text-[9px] text-[#65666b]">Remote · Worldwide</p></div><span className={`font-mono text-[9px] uppercase ${index === 0 ? 'text-[#668c19]' : 'text-[#65666b]'}`}>{index === 0 ? 'new' : 'view'}</span></div>)}</div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#17181d] text-[#fbfbf8] selection:bg-[#e4fb4f] selection:text-[#17181d]">
      <header className="relative z-20 border-b border-white/15 bg-[#17181d]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-sm font-bold tracking-tight"><span className="grid size-7 place-items-center bg-[#e4fb4f] text-[#17181d]">SF</span><span>SHIP FAST <span className="text-[#e4fb4f]">WITH AI</span></span></a>
          <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.14em] text-white/65 md:flex"><a href="#story" className="transition-colors hover:text-[#e4fb4f]">The story</a><a href="#sprint" className="transition-colors hover:text-[#e4fb4f]">The sprint</a><a href="#details" className="transition-colors hover:text-[#e4fb4f]">Details</a><ConfiguredLink href={SITE_CONFIG.WHATSAPP_COMMUNITY_URL} className="border border-[#e4fb4f] px-4 py-2 text-[#e4fb4f] transition-colors hover:bg-[#e4fb4f] hover:text-[#17181d]">Join community ↗</ConfiguredLink></nav>
          <button className="md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/15 px-5 py-6 font-mono text-xs uppercase tracking-[0.14em] md:hidden"><a href="#story" onClick={() => setMenuOpen(false)}>The story</a><a href="#sprint" onClick={() => setMenuOpen(false)}>The sprint</a><a href="#details" onClick={() => setMenuOpen(false)}>Details</a></nav>}
      </header>

      <section id="top" className="relative border-b border-white/15 bg-[#17181d] px-5 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div><div className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]"><span className="h-px w-8 bg-[#e4fb4f]" /> Independent builders / {SITE_CONFIG.COURSE_START_DATE}</div><h1 className="max-w-2xl text-[clamp(3.5rem,8vw,7.8rem)] font-bold leading-[.88] tracking-[-0.075em]">Stop just using AI.<br /><span className="text-[#e4fb4f]">Start building</span><br />with it.</h1><p className="mt-8 max-w-lg text-lg leading-relaxed text-white/65">Learn to turn real problems into working websites and web apps with AI-assisted development. Build a project, understand how it works, and learn how to ship it.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><ConfiguredLink href={SITE_CONFIG.WHATSAPP_COMMUNITY_URL} className="inline-flex items-center justify-center gap-3 bg-[#e4fb4f] px-5 py-4 text-sm font-bold text-[#17181d] transition-transform hover:-translate-y-1">Join the WhatsApp Community <ArrowUpRight size={16} /></ConfiguredLink><a href="#sprint" className="inline-flex items-center justify-center gap-3 border border-white/25 px-5 py-4 text-sm font-bold transition-colors hover:border-[#e4fb4f] hover:text-[#e4fb4f]">Explore the 3-Day Build Sprint <ArrowDownRight size={16} /></a></div><p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">3-day practical training · November 2026 · Beginner-friendly, with hands-on work</p></div>
          <div className="pt-4 lg:pt-14"><ProductWindow /><div className="mt-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/40"><span>Illustrative product mockup</span><a href="#story" className="text-[#e4fb4f] hover:underline">The story behind the build ↓</a></div></div>
        </div>
      </section>

      <section id="story" className="bg-[#fbfbf8] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d6e72]">The problem that started it</p><div className="mt-10 aspect-[4/5] border border-[#17181d]/20 bg-[#e9c7f5] p-5"><div className="flex h-full flex-col justify-between border border-[#17181d]/20 p-5"><span className="font-mono text-[10px] uppercase">Founder photo / replace later</span><Code2 size={34} strokeWidth={1.2} /><span className="font-mono text-[10px] uppercase">A real person. A real problem.</span></div></div></div><div className="max-w-3xl"><h2 className="max-w-2xl text-5xl font-bold leading-[.95] tracking-[-0.06em] sm:text-7xl">I wanted a remote job.<br /><span className="text-[#7c57a0]">So I built an app.</span></h2><div className="mt-10 space-y-6 text-lg leading-relaxed text-[#55565b]"><p>I wanted remote contracts, freelance opportunities and the chance to work with international teams. Searching for opportunities was frustrating, so I started building a tool to help me discover remote jobs.</p><p>That project changed how I thought about AI.</p><p>Instead of treating it only as a tool for writing content or generating images, I began using it to help build useful software.</p><p>Ship Fast With AI exists to help more people explore that same shift: from consuming AI outputs to building practical solutions.</p></div><div className="mt-14 flex items-center gap-4 border-t border-[#17181d]/15 pt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6d6e72]"><Terminal size={15} /> No guaranteed outcomes. Just a practical process.</div></div></div></section>

      <section id="sprint" className="border-b border-white/15 bg-[#17181d] px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">The shift / prompts to products</p><h2 className="mt-5 max-w-3xl text-5xl font-bold leading-[.92] tracking-[-0.06em] sm:text-7xl">Three days.<br /><span className="text-[#e4fb4f]">One practical</span> building sprint.</h2></div><p className="max-w-sm text-white/60">A focused path from a useful problem to a working, shareable project. The depth depends on your idea, scope and starting point.</p></div><div className="mt-20 grid gap-0 border-y border-white/15 lg:grid-cols-3">{[['01','Find the problem','Start with something you need, something your business needs, or something you believe could be useful to others.'],['02','Build the solution','Use AI-assisted development to create an interface, connect application logic and work through problems as they appear.'],['03','Ship the product','Test the result, deploy it, share it and identify how it could be improved or used.']].map(([number,title,copy]) => <article key={number} className="border-b border-white/15 py-8 lg:border-b-0 lg:border-r lg:p-8 lg:first:pl-0 lg:last:border-r-0"><span className="font-mono text-xs text-[#e4fb4f]">{number} /</span><h3 className="mt-10 text-2xl font-bold">{title}</h3><p className="mt-4 max-w-xs leading-relaxed text-white/55">{copy}</p><div className="mt-12 h-px w-16 bg-[#e4fb4f]" /></article>)}</div></div></section>

      <section id="details" className="bg-[#fbfbf8] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d6e72]">Curriculum / what you will learn</p><h2 className="mt-6 max-w-md text-5xl font-bold leading-[.93] tracking-[-0.06em] sm:text-6xl">Build a foundation you can keep using.</h2><p className="mt-7 max-w-md leading-relaxed text-[#65666b]">Each day ends with a meaningful milestone. Not a promise of mastery — a practical starting point for continued practice.</p></div><div className="divide-y divide-[#17181d]/15 border-y border-[#17181d]/15">{[['DAY 01','PLAN & BUILD','Turn an idea into a brief, build a responsive interface and learn to inspect generated code.','Functioning first version'],['DAY 02','CONNECT & TEST','Understand frontend and backend responsibilities, connect data and practise debugging and validation.','Working meaningful feature'],['DAY 03','DEPLOY & SHOWCASE','Prepare for deployment, explore eligible free tiers, learn PWA basics and present the result.','Deployed project or clear MVP']].map(([day,title,copy,milestone]) => <article key={day} className="grid gap-4 py-7 sm:grid-cols-[110px_1fr]"><span className="font-mono text-[10px] tracking-[0.16em] text-[#7c57a0]">{day}</span><div><h3 className="text-2xl font-bold tracking-tight">{title}</h3><p className="mt-3 max-w-xl leading-relaxed text-[#65666b]">{copy}</p><p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#668c19]">Milestone: {milestone}</p></div></article>)}</div></div><div className="mt-20 grid gap-12 border-t border-[#17181d]/15 pt-10 lg:grid-cols-[1fr_1.4fr]"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d6e72]">Course details</p><p className="mt-5 text-3xl font-bold">₦{SITE_CONFIG.COURSE_PRICE_NGN.toLocaleString()}</p><p className="mt-2 text-sm text-[#65666b]">Founding price · {SITE_CONFIG.COURSE_START_DATE}</p></div><div className="grid gap-3 sm:grid-cols-2"><ConfiguredLink href={SITE_CONFIG.WHATSAPP_COMMUNITY_URL} className="flex items-center justify-between bg-[#17181d] px-5 py-4 text-sm font-bold text-[#e4fb4f]">Join the WhatsApp Community <ArrowUpRight size={16} /></ConfiguredLink><ConfiguredLink href={SITE_CONFIG.PAYMENT_URL} className="flex items-center justify-between border border-[#17181d]/25 px-5 py-4 text-sm font-bold">Enroll for the November Cohort <ArrowUpRight size={16} /></ConfiguredLink></div></div></div></section>

      <section className="border-b border-white/15 bg-[#e4fb4f] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><p className="font-mono text-[10px] uppercase tracking-[0.18em]">A practical invitation</p><h2 className="mt-6 max-w-4xl text-5xl font-bold leading-[.9] tracking-[-0.07em] sm:text-8xl">Your idea is still an idea.<br />Let&apos;s change that.</h2><p className="mt-8 text-xl">Bring a problem. Learn a process. Build something real.</p><a href="#details" className="mt-10 inline-flex items-center gap-3 border border-[#17181d] px-5 py-4 text-sm font-bold transition-colors hover:bg-[#17181d] hover:text-[#e4fb4f]">Review the curriculum <ArrowDownRight size={16} /></a></div></section>

      <footer className="bg-[#17181d] px-5 py-10 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"><div><a href="#top" className="font-bold">Ship Fast <span className="text-[#e4fb4f]">With AI</span></a><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Build useful things, one sprint at a time.</p></div><nav className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55"><a href="#story" className="hover:text-[#e4fb4f]">About</a><a href="#sprint" className="hover:text-[#e4fb4f]">Curriculum</a><a href="#details" className="hover:text-[#e4fb4f]">Contact</a></nav><p className="font-mono text-[10px] text-white/35">© 2026 Ship Fast With AI</p></div></footer>
    </main>
  )
}
