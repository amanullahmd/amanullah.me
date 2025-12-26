import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
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

    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}
