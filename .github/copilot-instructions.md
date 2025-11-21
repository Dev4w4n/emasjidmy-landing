# E-Masjid Landing Page Development Guidelines

Auto-generated from feature plans. Last updated: 21 November 2025

## Active Technologies

**Language/Version**: TypeScript 5.3, React 18.2, Next.js 15.0.3  
**Primary Dependencies**: @headlessui/react, TailwindCSS 3.3.6, AOS animation  
**Testing**: Jest with React Testing Library  
**Target Platform**: Web application (Next.js App Router)  

## Project Structure

```
app/                          # Next.js App Router
├── layout.tsx               # Root layout
├── (auth)/                  # Auth routes
│   └── daftar/
├── (default)/               # Default layout routes
│   └── page.tsx            # Home page
└── css/                     # Global styles

components/                  # React components
├── hero.tsx
├── features.tsx
├── features-blocks.tsx
├── testimonials.tsx
├── newsletter.tsx
├── pricing.tsx
├── teams.tsx
├── banner.tsx
├── modal-video.tsx
├── ui/                     # UI components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── logo.tsx
│   └── mobile-menu.tsx
└── utils/                  # Utility components
    ├── accordion.tsx
    └── dropdown.tsx

__tests__/                   # Jest test files
├── components/
└── api/

specs/                       # Feature specifications
└── [###-feature-name]/
    ├── spec.md
    ├── plan.md
    ├── quickstart.md
    └── tasks.md
```

## Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm test             # Run Jest tests
npm run lint         # Run ESLint
```

### Testing
```bash
npm test                    # Run all tests
npm test -- --watch        # Watch mode
npm test -- <filename>     # Test specific file
```

## Code Style

### TypeScript/React
- Use functional components with TypeScript
- Use Next.js App Router conventions
- Use Tailwind CSS for styling
- Use 'use client' directive for client-side components
- Follow React hooks best practices
- Use proper TypeScript types (avoid `any`)

### Component Structure
```tsx
'use client' // If client-side features needed

import { useState } from 'react'

export default function ComponentName() {
  // State and hooks
  
  // Handlers
  
  return (
    <section className="relative">
      {/* Component content */}
    </section>
  )
}
```

### Testing
- Use React Testing Library
- Test user interactions and component rendering
- Follow AAA pattern (Arrange, Act, Assert)

## Recent Changes

### Feature 002: Update Landing Page Content (2025-11-21)
- Removed "Bahan Rujukan" navigation links from header, footer, and mobile menu
- Removed "Daftar akaun percuma" buttons from hero and header
- Changed "Modul mudah dipelajari" to "Modul Pengiklanan TV Masjid" in features section
- Removed entire "Modul yang terkandung di E-Masjid setakat ini" section
- Updated affected component tests

**Modified Files**:
- `components/hero.tsx`
- `components/features.tsx`
- `components/features-blocks.tsx`
- `components/ui/header.tsx`
- `components/ui/footer.tsx`
- `components/ui/mobile-menu.tsx`

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
