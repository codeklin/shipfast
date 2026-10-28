'use client'

import { useRef, useState, useTransition } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { submitLead } from '@/app/actions/submit-lead'

const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/Bpv7RfbZL9YEJy3LFrl9Ex?s=cl&p=a&mlu=4&ilr=4&iam=2'

type FieldErrors = Partial<Record<'firstName' | 'email' | 'whatsapp', string>>

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p role="alert" className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-red-400">
      {message}
    </p>
  )
}

export function LeadForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState(false)
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [globalError, setGlobalError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFieldErrors({})
    setGlobalError(null)
    const data = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await submitLead(data)
      if (result.success) {
        setAlreadyRegistered(result.alreadyRegistered ?? false)
        setSuccess(true)
        formRef.current?.reset()
      } else {
        if (result.field) {
          setFieldErrors({ [result.field]: result.error })
        } else {
          setGlobalError(result.error)
        }
      }
    })
  }

  if (success) {
    return (
      <div className="border border-[#e4fb4f] bg-[#e4fb4f]/10 p-6 lg:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e4fb4f]">
          {alreadyRegistered ? 'Already registered' : 'You are in'}
        </p>
        <p className="mt-3 text-xl font-bold">
          {alreadyRegistered ? 'You signed up before.' : 'Welcome to the community.'}
        </p>
        <p className="mt-2 text-lg font-medium leading-relaxed text-white/70">
          {alreadyRegistered
            ? 'We already have your details. Here is your link to join the WhatsApp group.'
            : 'Tap the button below to join the WhatsApp group and get updates directly.'}
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

        <div className="flex flex-col gap-1">
          <label htmlFor="lead-firstName" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
            First name <span className="text-[#e4fb4f]">*</span>
          </label>
          <input
            id="lead-firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Tunde"
            aria-invalid={!!fieldErrors.firstName}
            aria-describedby={fieldErrors.firstName ? 'err-firstName' : undefined}
            className={`border bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none ${
              fieldErrors.firstName ? 'border-red-400' : 'border-white/20 focus:border-[#e4fb4f]'
            }`}
          />
          <FieldError message={fieldErrors.firstName} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="lead-email" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
            Email address <span className="text-[#e4fb4f]">*</span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="tunde@example.com"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'err-email' : undefined}
            className={`border bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none ${
              fieldErrors.email ? 'border-red-400' : 'border-white/20 focus:border-[#e4fb4f]'
            }`}
          />
          <FieldError message={fieldErrors.email} />
        </div>

      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="lead-whatsapp" className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
          Active WhatsApp number <span className="text-[#e4fb4f]">*</span>
        </label>
        <input
          id="lead-whatsapp"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          required
          placeholder="+234 800 000 0000"
          aria-invalid={!!fieldErrors.whatsapp}
          aria-describedby={fieldErrors.whatsapp ? 'err-whatsapp' : undefined}
          className={`border bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none ${
            fieldErrors.whatsapp ? 'border-red-400' : 'border-white/20 focus:border-[#e4fb4f]'
          }`}
        />
        <FieldError message={fieldErrors.whatsapp} />
        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
          Used only to add you to the course WhatsApp group
        </p>
      </div>

      {globalError && (
        <p role="alert" className="border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm font-medium text-red-300">
          {globalError}
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
