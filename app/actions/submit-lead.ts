'use server'

import { supabase } from '@/lib/supabase'

export type LeadResult =
  | { success: true; alreadyRegistered?: boolean }
  | { success: false; error: string; field?: 'firstName' | 'email' | 'whatsapp' }

export async function submitLead(formData: FormData): Promise<LeadResult> {
  const firstName = (formData.get('firstName') as string | null)?.trim()
  const email = (formData.get('email') as string | null)?.trim().toLowerCase()
  const whatsapp = (formData.get('whatsapp') as string | null)?.trim()

  // Field-level validation
  if (!firstName) {
    return { success: false, error: 'First name is required.', field: 'firstName' }
  }
  if (firstName.length < 2) {
    return { success: false, error: 'Enter your full first name.', field: 'firstName' }
  }
  if (!email) {
    return { success: false, error: 'Email address is required.', field: 'email' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Enter a valid email address.', field: 'email' }
  }
  if (!whatsapp) {
    return { success: false, error: 'WhatsApp number is required.', field: 'whatsapp' }
  }
  if (!/^\+?[0-9\s\-()]{7,20}$/.test(whatsapp)) {
    return { success: false, error: 'Enter a valid WhatsApp number (digits only).', field: 'whatsapp' }
  }

  if (!supabase) {
    console.error('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local')
    return { success: false, error: 'Service unavailable. Please try again later.' }
  }

  const { error } = await supabase.from('leads').insert({
    first_name: firstName,
    email,
    whatsapp,
  })

  if (error) {
    // Unique constraint on email — already registered, still give them the link
    if (error.code === '23505') {
      return { success: true, alreadyRegistered: true }
    }
    console.error('Supabase lead insert error:', error.message)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  return { success: true, alreadyRegistered: false }
}
