import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'MD Amanullah - Java Full-Stack Developer | Spring Boot · React · AI/ML',
  description: 'Java Full-Stack Developer specializing in Spring Boot, Next.js, React, and AI/ML. Building scalable backend systems, intelligent web applications, and production-ready solutions. Computer Science student and entrepreneur.',
  keywords: ['Java Developer', 'Spring Boot', 'Full-Stack Developer', 'React', 'Next.js', 'AI', 'Machine Learning', 'Deep Learning', 'PyTorch', 'PostgreSQL', 'REST API', 'Microservices'],
  openGraph: {
    title: 'MD Amanullah - Java Full-Stack Developer | Spring Boot · React · AI/ML',
    description: 'Java Full-Stack Developer building scalable systems with Spring Boot, React, and AI/ML',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
