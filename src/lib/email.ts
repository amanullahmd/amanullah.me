import { Resend } from 'resend'

export interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
    // Verify API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key not configured')
      return false
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    console.log('Sending email via Resend to admin:', process.env.RESEND_FROM_EMAIL)

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'contact@amanullah.me',
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (adminEmailResult.error) {
      console.error('Failed to send admin email:', adminEmailResult.error)
      return false
    }

    console.log('Admin email sent successfully:', adminEmailResult.data?.id)

    // Send confirmation email to user
    console.log('Sending confirmation email to:', data.email)
    const userEmailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: data.email,
      subject: 'Thank you for contacting me',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${data.name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>MD Amanullah</p>
      `,
    })

    if (userEmailResult.error) {
      console.error('Failed to send confirmation email:', userEmailResult.error)
      return false
    }

    console.log('Confirmation email sent successfully:', userEmailResult.data?.id)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    if (error instanceof Error) {
      console.error('Email error details:', error.message)
      console.error('Email error stack:', error.stack)
    }
    return false
  }
}
