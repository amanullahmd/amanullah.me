import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    console.log('Contact API: Received request')
    
    const body = await request.json()
    console.log('Contact API: Parsed body')
    
    const validatedData = contactSchema.parse(body)
    console.log('Contact API: Validated data')

    // Add timeout to email sending
    const emailPromise = sendContactEmail(validatedData)
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Email sending timeout')), 30000)
    )

    const emailSent = await Promise.race([emailPromise, timeoutPromise])

    if (emailSent) {
      console.log('Contact API: Email sent successfully')
      return NextResponse.json({ success: true }, { status: 200 })
    } else {
      console.log('Contact API: Email sending failed')
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Contact API: Validation error', error)
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 })
    }

    console.error('Contact API error:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
