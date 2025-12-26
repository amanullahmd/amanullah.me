# MD Amanullah - Professional Portfolio Website

A modern, professional portfolio website built with **Next.js 16.1**, **React 19**, and **TypeScript**.

## 🚀 Features

- ✨ Modern, responsive design with Tailwind CSS
- 🌙 Dark mode support with theme persistence
- ⚡ Fast performance with Next.js optimization
- 📱 Mobile-first responsive design
- 🎨 Smooth animations with Framer Motion
- 📧 Contact form with email integration
- 📊 Google Analytics integration
- 🔍 SEO optimized with meta tags
- 🚀 Deployed on Vercel with CI/CD

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── projects/
│   │   │   ├── page.tsx        # Projects showcase
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Project detail
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # Contact API
│   ├── components/
│   │   ├── Navigation.tsx      # Header navigation
│   │   ├── Footer.tsx          # Footer
│   │   ├── ProjectCard.tsx     # Project card
│   │   └── sections/           # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Testimonials.tsx
│   │       └── Contact.tsx
│   ├── lib/                    # Utilities & data
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── testimonials.ts
│   │   └── email.ts
│   └── styles/
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── .env.local                  # Environment variables
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 16.1, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Nodemailer
- **Theme**: next-themes
- **Hosting**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` with your configuration:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EMAIL_USER=contact@amanullah.me
EMAIL_PASSWORD=your_app_password
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

## 📧 Email Configuration

### Gmail Setup

1. Enable 2-factor authentication
2. Generate app password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use app password in `.env.local`

## 🎨 Customization

### Update Your Information

1. **Projects** - Edit `src/lib/projects.ts`
2. **Skills** - Edit `src/lib/skills.ts`
3. **Testimonials** - Edit `src/lib/testimonials.ts`
4. **Contact Info** - Edit `src/components/Footer.tsx`

### Add Your CV

Place your CV PDF in `public/resume.pdf`

### Change Colors

Edit `tailwind.config.ts`:
- Primary: #0033CC
- Secondary: #FF6B35

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2024 MD Amanullah. All rights reserved.
