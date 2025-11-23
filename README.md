# Project ATLAS - Website

Elite technical teams for critical problems. Fixed-price SOW engagements.

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Project_Atlas/
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   └── globals.css             # Global styles
├── components/
│   ├── Navigation.tsx          # Fixed navigation bar
│   ├── Hero.tsx                # Landing section
│   ├── Problem.tsx             # Problem statement
│   ├── Approach.tsx            # Fixed-price SOW approach
│   ├── HowItWorks.tsx          # Process steps
│   ├── TeamModel.tsx           # Team retention models
│   ├── WhyItWorks.tsx          # Core principles
│   ├── Contact.tsx             # Contact form
│   └── Footer.tsx              # Site footer
└── tailwind.config.ts          # Tailwind with tactical colors
```

## Features

- **Tactical Design**: Earth green color palette, clean lines, operational aesthetic
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Functional Contact Form**: API endpoint ready for email/CRM integration
- **Fast Performance**: Next.js 15 with optimized builds
- **SEO Optimized**: Proper meta tags and semantic HTML

## Customization

### Colors

The tactical color palette is defined in `tailwind.config.ts`:
- `tactical.*` - Primary tactical greens
- `earth.*` - Earth tone greens
- `steel.*` - Steel grays for accents

### Contact Form Integration

The contact form currently logs to console. To integrate with email/CRM:

1. Edit `app/api/contact/route.ts`
2. Add your email service (SendGrid, AWS SES, etc.)
3. Or integrate with your CRM (Salesforce, HubSpot, etc.)

Example with email service:

```typescript
// In app/api/contact/route.ts
import { sendEmail } from '@/lib/email';

await sendEmail({
  to: 'deploy@projectatlas.io',
  subject: `New Deployment Request from ${organization}`,
  body: // ... email content
});
```

### Content Changes

All content is in the component files in `components/`. Each section is self-contained and easy to modify.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static version:

```bash
npm run build
```

Deploy the `.next` folder and `public` folder to your hosting platform.

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React 18** - UI library

## License

All rights reserved - Project ATLAS
