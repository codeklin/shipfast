'use server'

import { supabase } from '@/lib/supabase'

export type LeadResult =
  | { success: true }
  | { success: false; error: string }

export async function submitLead(formData: FormData): Promise<LeadResult> {
  const firstName = (formData.get('firstName') as string | null)?.trim()
  const email = (formData.get('email') as string | null)?.trim().toLowerCase()
  const whatsapp = (formData.get('whatsapp') as string | null)?.trim()

  if (!firstName || !email || !whatsapp) {
    return { success: false, error: 'All fields are required.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Enter a valid email address.' }
  }

  if (!/^\+?[0-9\s\-()]{7,20}$/.test(whatsapp)) {
    return { success: false, error: 'Enter a valid WhatsApp number.' }
  }

  if (!supabase) {
    console.error('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local')
    return { success: false, error: 'Service is not configured yet. Please try again later.' }
  }

  const { error } = await supabase.from('leads').insert({
    first_name: firstName,
    email,
    whatsapp,
  })

  if (error) {
    // Duplicate email: still treat as success so the user gets the link
    if (error.code === '23505') return { success: true }
    console.error('Supabase lead insert error:', error.message)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  return { success: true }
}
