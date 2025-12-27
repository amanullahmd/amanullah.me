import nodemailer from 'nodemailer'

let transporter: any = null

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_PORT === '465',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,
      socketTimeout: 10000,
      pool: {
        maxConnections: 1,
        maxMessages: 100,
        rateDelta: 1000,
        rateLimit: 5,
      },
    })
  }
  return transporter
}

export interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
    // Verify environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email credentials not configured')
      return false
    }

    const transporter = getTransporter()

    // Send email to admin
    console.log('Sending email to admin:', process.env.EMAIL_USER)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
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
    console.log('Admin email sent successfully')

    // Send confirmation email to user
    console.log('Sending confirmation email to:', data.email)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Thank you for contacting me',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${data.name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>MD Amanullah</p>
      `,
    })
    console.log('Confirmation email sent successfully')

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
