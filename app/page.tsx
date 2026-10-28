'use client'

import { ArrowDownRight, ArrowUpRight, Search, Terminal } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { LeadForm } from '@/components/lead-form'

const SITE_CONFIG = {
  WHATSAPP_DIRECT_MESSAGE_URL: 'https://wa.me/2347031098097',
  PAYMENT_URL: '',
  PAYMENT_METHOD_LABEL: 'Direct Bank Transfer',
  COURSE_PRICE_NGN: 15000,
  COURSE_PRICE_LABEL: '₦15,000 for the first 20 students',
  COURSE_START_DATE: '13 November 2026',
  COURSE_END_DATE: '15 November 2026',
  COURSE_TIME: '7:00 PM to 9:00 PM daily',
  ENROLLMENT_DEADLINE: '',
  REFUND_TERMS: 'Full Refund with T&C',
  OPERATOR_NAME: 'Olajide Igbalaye',
  CONTACT_EMAIL: 'gigsdev007@gmail.com',
  COUNTRY: 'Nigeria',
  PRIVACY_URL: '/privacy',
  TERMS_URL: '/terms',
  YOUTUBE_URL: '', // paste your YouTube video URL here when ready e.g. 'https://www.youtube.com/watch?v=XXXXXXXXXXX'
}

function ConfiguredLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return href ? <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a> : <span className={`${className ?? ''} cursor-not-allowed opacity-60`} aria-disabled="true" title="Destination to be configured">{children}</span>
}

function ProductWindow() {
  return <div className="relative mx-auto w-full max-w-[620px] border border-white/25 bg-[#f4f4ef] shadow-[12px_14px_0_rgba(228,251,79,0.9)]">
    <div className="flex items-center gap-2 border-b border-[#17181d]/15 px-4 py-3 text-[#17181d]"><span className="size-2 rounded-full bg-[#ff6b5d]" /><span className="size-2 rounded-full bg-[#f4c542]" /><span className="size-2 rounded-full bg-[#83b968]" /><span className="ml-4 flex-1 border border-[#17181d]/15 px-3 py-1 font-mono text-[10px] text-[#65666b]">remote-finder.local</span></div>
    <div className="grid min-h-[330px] grid-cols-1 text-[#17181d] sm:grid-cols-[1fr_1.35fr]"><aside className="border-b border-[#17181d]/10 bg-[#e9c7f5]/45 p-4 sm:border-b-0 sm:border-r sm:p-5"><div className="mb-10 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"><span className="grid size-5 place-items-center bg-[#17181d] text-[#e4fb4f]">R</span> remote finder</div><p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#65666b]">Discover roles</p><div className="space-y-2 font-mono text-[10px]"><div className="border-b border-[#17181d]/20 pb-2">Design & Product</div><div className="border-b border-[#17181d]/20 pb-2">Engineering</div><div className="border-b border-[#17181d]/20 pb-2">Marketing</div></div><div className="mt-12 border-t border-[#17181d]/20 pt-3 font-mono text-[9px] uppercase text-[#65666b]">Built to solve a real problem.</div></aside><div className="bg-[#fbfbf8] p-4 sm:p-5"><div className="mb-5 flex items-center justify-between"><div><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#65666b]">Good morning, builder</p><h3 className="mt-1 text-xl font-bold tracking-tight">Find work that fits.</h3></div><div className="grid size-8 place-items-center border border-[#17181d]/15"><Search size={14} /></div></div><div className="mb-4 flex items-center gap-2 border border-[#17181d]/15 px-3 py-2 font-mono text-[10px] text-[#65666b]"><Search size={12} /> Search remote opportunities</div><div className="space-y-2">{['Product Designer · Arc', 'Frontend Developer · Loom', 'Creative Technologist · Notion'].map((role, index) => <div key={role} className="flex items-center justify-between border border-[#17181d]/10 p-3"><div><p className="text-[11px] font-semibold">{role}</p><p className="mt-1 font-mono text-[9px] text-[#65666b]">Remote · Worldwide</p></div><span className={`font-mono text-[9px] uppercase ${index === 0 ? 'text-[#668c19]' : 'text-[#65666b]'}`}>{index === 0 ? 'new' : 'view'}</span></div>)}</div></div></div>
  </div>
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const u = new URL(url)
    const id = u.searchParams.get('v') ?? u.pathname.split('/').pop()
    return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : null
  } catch {
    return null
  }
}

const projects = [
  ['YOUR PORTFOLIO', 'A personal website to present your skills, projects and work to potential clients or employers.', 'A clear home for your proof.'],
  ['YOUR BUSINESS WEBSITE', 'A responsive website with a clear offer, contact form and useful business information.', 'A sharper way to be found.'],
  ['YOUR FIRST WEB APP', 'A scoped application with frontend, database-backed functionality and a live deployment.', 'A useful idea, made tangible.'],
]
const faqs = [
  ['Do I need coding experience?', 'No. Beginners can participate, but you will need curiosity, a laptop and a willingness to practise between sessions.'],
  ['What will I build during the three days?', 'You will choose one scoped project path: a portfolio, business website or first web app. The depth depends on your idea and progress.'],
  ['Which tools will I need?', 'A laptop, a modern browser and access to the AI-assisted development tools introduced during the training.'],
  ['Do I need a laptop?', 'Yes. This is hands-on training, so a laptop is required for building and testing your project.'],
  ['Will I learn frontend and backend development?', 'You will learn the difference and connect the pieces at a practical introductory level, not master every part of full-stack development in three days.'],
  ['Will I learn how to deploy my project?', 'Yes. Day three covers deployment preparation, eligible free-tier options and sharing your result.'],
  ['Will my project be hosted for free?', 'We will explore eligible free tiers, but providers have limits and their terms can change.'],
  ['Can this help me offer services to clients?', 'It can help you build a foundation and examples of your work. It does not guarantee clients or income.'],
  ['Does the training guarantee income or a remote job?', 'No. There are no guarantees of employment, freelance clients, revenue or income.'],
  ['What are the dates and enrollment terms?', `The cohort is planned for ${SITE_CONFIG.COURSE_START_DATE}. Exact dates, deadline, payment and refund terms will be confirmed before enrollment.`],
]

export default function Page() {
  const pageRef = useRef<HTMLElement>(null)
  const [project, setProject] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    if (!pageRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.scroll-reveal').forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 24 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true },
        })
      })
    }, pageRef)

    return () => context.revert()
  }, [])

  return <main ref={pageRef} className="min-h-screen overflow-x-clip bg-[#17181d] text-[#fbfbf8] selection:bg-[#e4fb4f] selection:text-[#17181d]">
    <SiteHeader />
    <section id="top" className="relative border-b border-white/15 bg-[#17181d] px-5 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-24"><div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-20"><div><div className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]"><span className="h-px w-8 bg-[#e4fb4f]" /> Independent builders / {SITE_CONFIG.COURSE_START_DATE}</div><h1 className="max-w-2xl text-[clamp(3.5rem,8vw,7.8rem)] font-bold leading-[.88] tracking-[-0.075em]">Stop just using AI.<br /><span className="text-[#e4fb4f]">Start building</span><br />with it.</h1><p className="mt-8 max-w-lg text-xl font-medium leading-relaxed text-white/75">You have a business idea, a side hustle, or a problem you keep explaining in WhatsApp chats. Learn how to turn it into a working website or web app, even if you are starting from zero.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#community" className="inline-flex items-center justify-center gap-3 bg-[#e4fb4f] px-5 py-4 text-sm font-bold text-[#17181d]">Join the WhatsApp Community <ArrowUpRight size={16} /></a><a href="#sprint" className="inline-flex items-center justify-center gap-3 border border-white/25 px-5 py-4 text-sm font-bold">Explore the 3-Day Build Sprint <ArrowDownRight size={16} /></a></div><p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55"><span className="text-[#e4fb4f]">{SITE_CONFIG.COURSE_PRICE_LABEL}</span><span aria-hidden="true">·</span><span>3-day practical training · {SITE_CONFIG.COURSE_TIME} · Beginner-friendly</span></p></div><div className="pt-4 lg:pt-14"><ProductWindow /><div className="mt-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/40"><span>Illustrative product mockup</span><a href="#story" className="text-[#e4fb4f]">The story behind the build ↓</a></div></div></div></section>
    <section id="community" className="border-b border-white/15 bg-[#17181d] px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">Join the community</p><h2 className="mt-5 text-4xl font-bold leading-[.93] tracking-[-0.06em] sm:text-5xl">Get updates before enrollment opens.</h2><p className="mt-6 text-lg font-medium leading-relaxed text-white/65">Drop your details and we will send you the WhatsApp group link right away. No spam, just course updates and the enrollment link when it goes live.</p><ul className="mt-8 space-y-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/50"><li className="flex items-center gap-3"><span className="text-[#e4fb4f]">+</span> Early enrollment access</li><li className="flex items-center gap-3"><span className="text-[#e4fb4f]">+</span> Course date confirmations</li><li className="flex items-center gap-3"><span className="text-[#e4fb4f]">+</span> Direct line to the instructor</li></ul></div><div><LeadForm /></div></div></div></section>
    <section id="story" className="scroll-reveal bg-[#fbfbf8] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d6e72]">The problem that started it</p><div className="mt-10 aspect-[4/5] border border-[#17181d]/20 overflow-hidden"><img src="/hero-portrait.png" alt="Olajide Igbalaye, founder of Ship Fast With AI" className="h-full w-full object-cover object-top" /></div></div><div className="max-w-3xl"><h2 className="max-w-2xl text-5xl font-bold leading-[.95] tracking-[-0.06em] sm:text-7xl">I wanted a remote job.<br /><span className="text-[#7c57a0]">So I built an app.</span></h2><div className="mt-10 space-y-6 text-xl font-medium leading-relaxed text-[#3a3b40]"><p>I wanted remote contracts, freelance opportunities and the chance to work with international teams. Finding credible remote opportunities was frustrating, especially when every application felt like a dead end. So I started building a tool to help people discover better opportunities.</p><p>That project changed how I thought about AI.</p><p>Instead of treating it only as a tool for writing content or generating images, I began using it to help build useful software.</p><p>Ship Fast With AI exists to help more people explore that same shift: from consuming AI outputs to building practical solutions.</p></div><div className="mt-14 flex items-center gap-4 border-t border-[#17181d]/15 pt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6d6e72]"><Terminal size={15} /> No guaranteed outcomes. Just a practical process.</div></div></div></section>
    {SITE_CONFIG.YOUTUBE_URL && getYouTubeEmbedUrl(SITE_CONFIG.YOUTUBE_URL) && (
      <section className="scroll-reveal border-b border-white/15 bg-[#17181d] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">Watch / hear it from me directly</p>
          <h2 className="mt-5 text-4xl font-bold leading-[.93] tracking-[-0.06em] sm:text-5xl">A 3-minute look at what this sprint is about.</h2>
          <div className="mt-10 aspect-video w-full border border-white/15">
            <iframe
              src={getYouTubeEmbedUrl(SITE_CONFIG.YOUTUBE_URL)!}
              title="Ship Fast With AI - Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    )}
    <section id="sprint" className="scroll-reveal border-b border-white/15 bg-[#17181d] px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">The shift / prompts to products</p><h2 className="mt-5 max-w-3xl text-5xl font-bold leading-[.92] tracking-[-0.06em] sm:text-7xl">Three days.<br /><span className="text-[#e4fb4f]">One practical</span> building sprint.</h2><div className="mt-20 border-y border-white/15">{[['01','Name the pressure','Start with the problem that keeps costing you time, customers, or confidence. It could be a business process, a community need, or an idea you have carried for too long.'],['02','Make it useful','Use AI-assisted development to create a clear first version, then learn enough about the structure to make sensible decisions.'],['03','Put it in people’s hands','Test it with real people, deploy what works, and leave with a better answer than another unfinished idea.']].map(([n,t,c]) => <article key={n} className="grid gap-5 border-b border-white/15 py-8 last:border-b-0 sm:grid-cols-[110px_1fr] sm:items-start"><span className="font-mono text-xs text-[#e4fb4f]">{n} /</span><div className="grid gap-4 sm:grid-cols-[.7fr_1fr]"><h3 className="text-2xl font-bold tracking-tight">{t}</h3><p className="max-w-xl text-lg font-medium leading-relaxed text-white/70">{c}</p></div></article>)}</div></div></section>
    <section id="details" className="scroll-reveal bg-[#fbfbf8] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d6e72]">Curriculum / what you will learn</p><h2 className="mt-6 max-w-md text-5xl font-bold leading-[.93] tracking-[-0.06em] sm:text-6xl">Build a foundation you can keep using.</h2><p className="mt-7 max-w-md text-lg font-medium leading-relaxed text-[#55565b]">Each day ends with a meaningful milestone. The depth depends on your starting level, chosen scope and progress.</p></div><div className="divide-y divide-[#17181d]/15 border-y border-[#17181d]/15">{[['DAY 01','PLAN & BUILD','Turn an idea into a brief, build a responsive interface and inspect generated code.','Functioning first version'],['DAY 02','CONNECT & TEST','Understand frontend and backend responsibilities, connect data and practise debugging and validation.','Working meaningful feature'],['DAY 03','DEPLOY & SHOWCASE','Prepare for deployment, explore eligible free tiers, learn PWA basics and present the result.','Deployed project or clear MVP']].map(([d,t,c,m]) => <article key={d} className="grid gap-4 py-7 sm:grid-cols-[110px_1fr]"><span className="font-mono text-[10px] tracking-[0.16em] text-[#7c57a0]">{d}</span><div><h3 className="text-2xl font-bold tracking-tight">{t}</h3><p className="mt-3 max-w-xl text-lg font-medium leading-relaxed text-[#55565b]">{c}</p><p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#668c19]">Milestone: {m}</p></div></article>)}</div></div><div className="mt-24 border-t border-[#17181d]/15 pt-10"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d6e72]">What could you build?</p><div className="mt-6 flex flex-wrap gap-2">{projects.map(([title], i) => <button type="button" key={title} onClick={() => setProject(i)} aria-pressed={i === project} className={`border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] ${i === project ? 'border-[#17181d] bg-[#17181d] text-[#e4fb4f]' : 'border-[#17181d]/20'}`}>{title}</button>)}</div><div className="mt-8 grid gap-8 border border-[#17181d]/15 p-6 lg:grid-cols-[1fr_1.2fr] lg:p-10"><div><p className="font-mono text-[10px] text-[#7c57a0]">PROJECT 0{project + 1}</p><h3 className="mt-4 text-4xl font-bold tracking-tight">{projects[project][0]}</h3><p className="mt-5 max-w-md text-lg font-medium leading-relaxed text-[#55565b]">{projects[project][1]}</p><p className="mt-8 font-mono text-[10px] uppercase tracking-[0.12em] text-[#668c19]">{projects[project][2]}</p></div><div className="min-h-52 border border-[#17181d]/15 bg-[#e9c7f5]/60 p-5"><div className="flex h-full min-h-40 flex-col justify-between border border-[#17181d]/15 bg-[#fbfbf8] p-5"><span className="font-mono text-[10px]">LIVE PROJECT PATH / ILLUSTRATIVE</span><div className="h-px w-1/2 bg-[#17181d]/20" /><span className="text-2xl font-bold">Make useful things.</span></div></div></div></div></div></section>
    <section className="border-y border-white/15 bg-[#17181d] px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">Clear-eyed, by design</p><h2 className="mt-6 text-5xl font-bold leading-[.93] tracking-[-0.06em] sm:text-6xl">This is for builders, not overnight promises.</h2></div><div className="grid gap-6 sm:grid-cols-2"><div className="border-t border-[#e4fb4f] pt-5"><h3 className="font-bold">This training is</h3><p className="mt-4 text-lg font-medium leading-relaxed text-white/70">A practical way to learn by building, explore AI-assisted development, understand app structure and deploy a project.</p></div><div className="border-t border-white/25 pt-5"><h3 className="font-bold">This training is not</h3><p className="mt-4 text-lg font-medium leading-relaxed text-white/70">A promise of wealth, a remote job, clients, automatic security or tools that stay free forever.</p></div></div></div></section>
    <section className="bg-[#fbfbf8] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d6e72]">Enrollment / {SITE_CONFIG.COURSE_START_DATE}</p><h2 className="mt-6 text-5xl font-bold leading-[.93] tracking-[-0.06em] sm:text-6xl">A small, practical start.</h2><p className="mt-7 text-lg font-medium leading-relaxed text-[#55565b]">Three days of guided building, with <strong className="text-[#17181d]">{SITE_CONFIG.COURSE_PRICE_LABEL}</strong>. Dates, payment terms and support details will be confirmed before enrollment.</p><ConfiguredLink href={SITE_CONFIG.PAYMENT_URL} className="mt-8 inline-flex items-center gap-3 bg-[#17181d] px-5 py-4 text-sm font-bold text-[#e4fb4f]">Enroll for the {SITE_CONFIG.COURSE_START_DATE} Cohort <ArrowUpRight size={16} /></ConfiguredLink><a href={SITE_CONFIG.WHATSAPP_DIRECT_MESSAGE_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-3 border border-[#17181d]/30 px-5 py-4 text-sm font-bold text-[#17181d]">Book a one-on-one session <ArrowUpRight size={16} /></a></div><div className="border-y border-[#17181d]/15"><div className="grid gap-5 border-b border-[#17181d]/15 py-6 sm:grid-cols-2"><div><p className="font-mono text-[10px] uppercase text-[#6d6e72]">Format</p><p className="mt-2 font-bold">3-day practical training</p></div><div><p className="font-mono text-[10px] uppercase text-[#6d6e72]">Schedule</p><p className="mt-2 font-bold">{SITE_CONFIG.COURSE_START_DATE} to {SITE_CONFIG.COURSE_END_DATE}</p><p className="mt-1 text-sm text-[#65666b]">{SITE_CONFIG.COURSE_TIME}</p></div></div><div className="py-6"><p className="font-mono text-[10px] uppercase text-[#6d6e72]">Enrollment terms</p><p className="mt-3 text-lg font-medium leading-relaxed text-[#55565b]">{SITE_CONFIG.ENROLLMENT_DEADLINE ? `Enroll by ${SITE_CONFIG.ENROLLMENT_DEADLINE}. ` : ''}{SITE_CONFIG.REFUND_TERMS || 'Refund terms to be confirmed before enrollment.'}</p></div></div></div></div></section>
    <section className="bg-[#e9c7f5] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32"><div className="mx-auto max-w-4xl"><p className="font-mono text-[10px] uppercase tracking-[0.18em]">Questions, answered plainly</p><h2 className="mt-6 text-5xl font-bold tracking-[-0.06em] sm:text-7xl">Before you bring your idea.</h2><div className="mt-12 divide-y divide-[#17181d]/20 border-y border-[#17181d]/20">{faqs.map(([q,a], i) => <div key={q}><button type="button" className="flex w-full items-center justify-between gap-6 py-5 text-left font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17181d]" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-controls={`faq-answer-${i}`} id={`faq-question-${i}`}><span>{q}</span><span className="font-mono text-xl">{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <p id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} className="max-w-2xl pb-5 text-lg font-medium leading-relaxed text-[#3a3b40]">{a}</p>}</div>)}</div><div className="mt-12 flex flex-col items-start gap-4 border-t border-[#17181d]/20 pt-10 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold">Still have a question?</p><p className="mt-1 text-lg font-medium text-[#55565b]">Talk to me directly on WhatsApp before you decide.</p></div><a href={SITE_CONFIG.WHATSAPP_DIRECT_MESSAGE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#17181d] px-5 py-4 text-sm font-bold text-[#e4fb4f] whitespace-nowrap">Book a one-on-one session <ArrowUpRight size={16} /></a></div></div></section>
    <section className="border-b border-white/15 bg-[#e4fb4f] px-5 py-24 text-[#17181d] lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><p className="font-mono text-[10px] uppercase tracking-[0.18em]">A practical invitation</p><h2 className="mt-6 max-w-4xl text-5xl font-bold leading-[.9] tracking-[-0.07em] sm:text-8xl">Your idea is still an idea.<br />Let&apos;s change that.</h2><p className="mt-8 text-2xl font-medium">Bring a problem. Learn a process. Build something real.</p><a href="#community" className="mt-10 inline-flex items-center gap-3 border border-[#17181d] px-5 py-4 text-sm font-bold">Join Ship Fast With AI <ArrowUpRight size={16} /></a></div></section>
    <footer className="bg-[#17181d] px-5 py-10 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"><div><a href="#top" className="font-bold">Ship Fast <span className="text-[#e4fb4f]">With AI</span></a><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Build useful things, one sprint at a time.</p></div><nav className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55"><a href="#story">About</a><a href="#details">Curriculum</a><a href="#details">Contact</a><a href={SITE_CONFIG.PRIVACY_URL}>Privacy</a><a href={SITE_CONFIG.TERMS_URL}>Terms</a></nav><p className="font-mono text-[10px] text-white/35">© 2026 Ship Fast With AI</p></div></footer>
  </main>
}
