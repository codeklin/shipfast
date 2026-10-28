'use client'

import { useRef, useState, useTransition } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { submitLead } from '@/app/actions/submit-lead'

const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/Bpv7RfbZL9YEJy3LFrl9Ex?s=cl&p=a&mlu=4&ilr=4&iam=2'

export function LeadForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const data = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await submitLead(data)
      if (result.success) {
        setSuccess(true)
        formRef.current?.reset()
      } else {
        setError(result.error)
      }
    })
  }

  if (success) {
    return (
      <div className="border border-[#e4fb4f] bg-[#e4fb4f]/10 p-6 lg:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">You are in</p>
        <p className="mt-3 text-xl font-bold">Welcome to the community.</p>
        <p className="mt-2 text-lg font-medium leading-relaxed text-white/70">
          Tap the button below to join the WhatsApp group and get updates directly.
        </p>
        <a
          href={WHATSAPP_COMMUNITY_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-3 bg-[#e4fb4f] px-5 py-4 text-sm font-bold text-[#17181d]"
        >
          Join the WhatsApp Community <ArrowUpRight size={16} />
        </a>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="lead-firstName" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
            First name
          </label>
          <input
            id="lead-firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Tunde"
            className="border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#e4fb4f] focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lead-email" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
            Email address
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="tunde@example.com"
            className="border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#e4fb4f] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lead-whatsapp" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
          Active WhatsApp number
        </label>
        <input
          id="lead-whatsapp"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          required
          placeholder="+234 800 000 0000"
          className="border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#e4fb4f] focus:outline-none"
        />
        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
          Used only to add you to the course WhatsApp group
        </p>
      </div>

      {error && (
        <p role="alert" className="border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm font-medium text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center gap-3 bg-[#e4fb4f] px-5 py-4 text-sm font-bold text-[#17181d] disabled:opacity-60 sm:w-auto"
      >
        {isPending ? 'Submitting...' : 'Get Access to the Community'}
        {!isPending && <ArrowUpRight size={16} />}
      </button>
    </form>
  )
}
