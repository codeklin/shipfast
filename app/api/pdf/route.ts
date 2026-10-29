import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

// This route is intentionally not linked anywhere publicly.
// It is only called programmatically after a successful form submission.
// The PDF file must be placed at: public/downloads/50-ai-ideas.pdf

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'downloads', '1_50-Ways-to-Make-Money-with-AI-Part-1-of-4.pdf')
    const fileBuffer = await readFile(filePath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="50-AI-Ideas-Part-1.pdf"',
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return new NextResponse('PDF not yet available.', { status: 404 })
  }
}
