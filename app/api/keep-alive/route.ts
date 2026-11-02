import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Called by Vercel Cron every 3 days to prevent Supabase free tier from pausing.
// Configured in vercel.json.
export async function GET(request: Request) {
  // Verify the request is from Vercel Cron, not a random visitor
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!supabase) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
  }

  // Run the lightest possible query — just count one row
  const { error } = await supabase.from('leads').select('id').limit(1)

  if (error) {
    console.error('Keep-alive ping failed:', error.message)
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  console.log('Supabase keep-alive ping succeeded:', new Date().toISOString())
  return NextResponse.json({ ok: true, pinged: new Date().toISOString() })
}
