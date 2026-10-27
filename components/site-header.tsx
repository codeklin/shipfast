'use client'

import { ArrowUpRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/Bpv7RfbZL9YEJy3LFrl9Ex?s=cl&p=a&mlu=4&ilr=4&iam=2'

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#17181d]/95 backdrop-blur-md">
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-sm font-bold tracking-tight">
          <img src="/favicon_io/android-chrome-192x192.png" alt="" className="size-7 rounded-sm" />
          <span>SHIP FAST <span className="text-[#e4fb4f]">WITH AI</span></span>
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.14em] text-white/65 md:flex">
          <Link href="/#story">The story</Link>
          <Link href="/#sprint">The sprint</Link>
          <Link href="/#details">Details</Link>
          <Link href="/about">About</Link>
          <a href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noreferrer" className="border border-[#e4fb4f] px-4 py-2 text-[#e4fb4f]">Join community ↗</a>
        </nav>
        <button
          type="button"
          className={`${menuOpen ? 'invisible' : 'visible'} relative z-20 flex size-10 flex-col items-end justify-center gap-1.5 text-[#e4fb4f] md:hidden`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className="h-0.5 w-7 bg-current" />
          <span className="h-0.5 w-4 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <nav className="fixed inset-0 z-[60] flex min-h-screen flex-col justify-center overflow-hidden bg-[#e4fb4f] px-8 pb-16 pt-24 text-[#17181d] md:hidden">
          <button
            type="button"
            className="absolute right-5 top-5 z-[70] grid size-12 place-items-center bg-[#17181d] text-[#e4fb4f] shadow-[0_0_0_3px_rgba(228,251,79,0.9)]"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={30} strokeWidth={2.4} />
          </button>
          <div className="absolute inset-x-8 top-5 flex items-center gap-3">
            <img src="/favicon_io/android-chrome-192x192.png" alt="" className="size-8 rounded-sm" />
            <span className="text-sm font-bold tracking-tight">SHIP FAST <span className="text-[#7c57a0]">WITH AI</span></span>
          </div>
          <div className="pointer-events-none absolute bottom-8 left-8 font-mono text-[10px] uppercase tracking-[0.2em] opacity-50">Navigate / build / ship</div>
          <div className="relative flex flex-col">
            <Link href="/#story" onClick={() => setMenuOpen(false)} className="group border-t border-[#17181d]/25 py-5 text-5xl font-bold leading-none tracking-[-0.07em] transition-all hover:pl-4 sm:text-7xl">
              <span className="mr-3 align-top font-mono text-xs tracking-normal opacity-50">01</span>The story <ArrowUpRight className="inline-block size-8 opacity-0 transition-opacity group-hover:opacity-100 sm:size-12" />
            </Link>
            <Link href="/#sprint" onClick={() => setMenuOpen(false)} className="group border-t border-[#17181d]/25 py-5 text-5xl font-bold leading-none tracking-[-0.07em] transition-all hover:pl-4 sm:text-7xl">
              <span className="mr-3 align-top font-mono text-xs tracking-normal opacity-50">02</span>The sprint <ArrowUpRight className="inline-block size-8 opacity-0 transition-opacity group-hover:opacity-100 sm:size-12" />
            </Link>
            <Link href="/#details" onClick={() => setMenuOpen(false)} className="group border-t border-[#17181d]/25 py-5 text-5xl font-bold leading-none tracking-[-0.07em] transition-all hover:pl-4 sm:text-7xl">
              <span className="mr-3 align-top font-mono text-xs tracking-normal opacity-50">03</span>Details <ArrowUpRight className="inline-block size-8 opacity-0 transition-opacity group-hover:opacity-100 sm:size-12" />
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="group border-y border-[#17181d]/25 py-5 text-5xl font-bold leading-none tracking-[-0.07em] transition-all hover:pl-4 sm:text-7xl">
              <span className="mr-3 align-top font-mono text-xs tracking-normal opacity-50">04</span>About <ArrowUpRight className="inline-block size-8 opacity-0 transition-opacity group-hover:opacity-100 sm:size-12" />
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a href="https://www.linkedin.com/in/olajide-igbalaye/" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-[#17181d] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#17181d]">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://twitter.com/jidelence" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-[#17181d] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#17181d]">
              <XIcon /> @jidelence
            </a>
          </div>
          <a href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noreferrer" className="relative mt-5 inline-flex w-fit items-center gap-3 border-2 border-[#17181d] px-5 py-4 font-mono text-xs font-bold uppercase tracking-[0.12em]">
            Join community <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  )
}
