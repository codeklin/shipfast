'use client'

import { useRef, useState, useTransition } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { submitLead } from '@/app/actions/submit-lead'

const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/Bpv7RfbZL9YEJy3LFrl9Ex?s=cl&p=a&mlu=4&ilr=4&iam=2'

type FieldErrors = Partial<Record<'firstName' | 'email' | 'whatsapp', string>>

function FieldError({ message, variant }: { message?: string; variant: 'dark' | 'light' }) {
  if (!message) return null
  return (
    <p role="alert" className={`mt-1 font-mono text-[10px] uppercase tracking-[0.1em] ${variant === 'light' ? 'text-red-600' : 'text-red-400'}`}>
      {message}
    </p>
  )
}

interface LeadFormProps {
  submitLabel?: string
  whatsappHint?: string
  /** 'dark' = form sits on a dark background (default). 'light' = form sits on a light background. */
  variant?: 'dark' | 'light'
}

export function LeadForm({
  submitLabel = 'Get Access to the Community',
  whatsappHint = 'Used only to add you to the course WhatsApp group',
  variant = 'dark',
}: LeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState(false)
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [globalError, setGlobalError] = useState<string | null>(null)

  const isLight = variant === 'light'

  // Token sets per variant
  const t = {
    label:       isLight ? 'text-[#6d6e72]'                        : 'text-white/55',
    input:       isLight ? 'border-[#17181d]/20 bg-white text-[#17181d] placeholder:text-[#17181d]/30 focus:border-[#17181d]'
                         : 'border-white/20 bg-transparent text-white placeholder:text-white/30 focus:border-[#e4fb4f]',
    inputError:  isLight ? 'border-red-500'                        : 'border-red-400',
    hint:        isLight ? 'text-[#6d6e72]/70'                     : 'text-white/35',
    globalError: isLight ? 'border-red-400/50 bg-red-50 text-red-600' : 'border-red-400/40 bg-red-400/10 text-red-300',
    button:      isLight ? 'bg-[#17181d] text-[#e4fb4f]'           : 'bg-[#e4fb4f] text-[#17181d]',
    successBorder: isLight ? 'border-[#17181d] bg-[#17181d]/5'     : 'border-[#e4fb4f] bg-[#e4fb4f]/10',
    successLabel:  isLight ? 'text-[#17181d]'                      : 'text-[#e4fb4f]',
    successBody:   isLight ? 'text-[#55565b]'                      : 'text-white/70',
    successPrimary: isLight ? 'bg-[#17181d] text-[#e4fb4f]'        : 'bg-[#e4fb4f] text-[#17181d]',
    successSecondary: isLight ? 'border-[#17181d] text-[#17181d]'  : 'border-[#e4fb4f] text-[#e4fb4f]',
  }

  function triggerPdfDownload() {
    const a = document.createElement('a')
    a.href = '/api/pdf'
    a.download = '50-AI-Ideas-Part-1.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

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
        triggerPdfDownload()
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
      <div className={`border p-6 lg:p-8 ${t.successBorder}`}>
        <p className={`font-mono text-[10px] uppercase tracking-[0.18em] ${t.successLabel}`}>
          {alreadyRegistered ? 'Already registered' : 'You are in'}
        </p>
        <p className="mt-3 text-xl font-bold">
          {alreadyRegistered ? 'You registered before.' : 'Registration confirmed.'}
        </p>
        <p className={`mt-2 text-lg font-medium leading-relaxed ${t.successBody}`}>
          {alreadyRegistered
            ? 'We already have your details. Your PDF is downloading and your WhatsApp link is below.'
            : 'Your PDF is downloading now. Join the WhatsApp community below to stay updated.'}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-3 px-5 py-4 text-sm font-bold ${t.successPrimary}`}
          >
            Join the WhatsApp Community <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            onClick={triggerPdfDownload}
            className={`inline-flex items-center gap-3 border px-5 py-4 text-sm font-bold ${t.successSecondary}`}
          >
            Download PDF again <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate autoComplete="off" className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">

        <div className="flex flex-col gap-1">
          <label htmlFor="lead-firstName" className={`font-mono text-[10px] uppercase tracking-[0.14em] ${t.label}`}>
            First name <span className="text-[#e4fb4f]" style={isLight ? { color: '#7c57a0' } : {}}>*</span>
          </label>
          <input
            id="lead-firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Tunde"
            aria-invalid={!!fieldErrors.firstName}
            className={`border px-4 py-3 text-sm focus:outline-none ${t.input} ${fieldErrors.firstName ? t.inputError : ''}`}
          />
          <FieldError message={fieldErrors.firstName} variant={variant} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="lead-email" className={`font-mono text-[10px] uppercase tracking-[0.14em] ${t.label}`}>
            Email address <span style={isLight ? { color: '#7c57a0' } : { color: '#e4fb4f' }}>*</span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="tunde@example.com"
            aria-invalid={!!fieldErrors.email}
            className={`border px-4 py-3 text-sm focus:outline-none ${t.input} ${fieldErrors.email ? t.inputError : ''}`}
          />
          <FieldError message={fieldErrors.email} variant={variant} />
        </div>

      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="lead-whatsapp" className={`font-mono text-[10px] uppercase tracking-[0.14em] ${t.label}`}>
          Active WhatsApp number <span style={isLight ? { color: '#7c57a0' } : { color: '#e4fb4f' }}>*</span>
        </label>
        <input
          id="lead-whatsapp"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          required
          placeholder="+234 800 000 0000"
          aria-invalid={!!fieldErrors.whatsapp}
          className={`border px-4 py-3 text-sm focus:outline-none ${t.input} ${fieldErrors.whatsapp ? t.inputError : ''}`}
        />
        <FieldError message={fieldErrors.whatsapp} variant={variant} />
        <p className={`font-mono text-[9px] uppercase tracking-[0.12em] ${t.hint}`}>{whatsappHint}</p>
      </div>

      {globalError && (
        <p role="alert" className={`border px-4 py-3 text-sm font-medium ${t.globalError}`}>
          {globalError}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className={`inline-flex w-full items-center justify-center gap-3 px-5 py-4 text-sm font-bold disabled:opacity-60 sm:w-auto ${t.button}`}
      >
        {isPending ? 'Submitting...' : submitLabel}
        {!isPending && <ArrowUpRight size={16} />}
      </button>
    </form>
  )
}
