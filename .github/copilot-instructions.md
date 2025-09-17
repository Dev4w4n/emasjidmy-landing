# E-Masjid Landing Development Guidelines

Auto-generated from feature plan 001-migrate-this-project. Last updated: 18 September 2025

## Active Technologies
- **Language/Version**: TypeScript 5.3, React 18.2, Next.js 15.0.3
- **Primary Dependencies**: @headlessui/react, AOS animation, TailwindCSS 3.3.6, Sharp image optimization
- **Testing**: Jest with React Testing Library, Lighthouse for SEO auditing
- **Target Platform**: Web application (browser + search engines), deployed as standalone

## Project Structure
```
app/                     # Next.js App Router
├── layout.tsx          # Root layout with metadata
├── (auth)/             # Auth route group
├── (default)/          # Default route group
├── api/                # API routes
└── css/                # Global styles

components/             # React components
├── ui/                # UI components
└── utils/             # Utility components

specs/001-migrate-this-project/  # Current feature documentation
├── plan.md            # Implementation plan
├── research.md        # Technology research
├── data-model.md      # SEO data models
├── quickstart.md      # Validation guide
└── contracts/         # API contracts
```

## SEO Optimization Commands
```bash
# Development
npm run start          # Start dev server
npm run build         # Production build
npm run lint          # ESLint check

# SEO Testing
lighthouse http://localhost:3000 --output html
npx next-sitemap      # Generate sitemap
```

## Code Style - TypeScript/React
- Use Next.js App Router with TypeScript
- Implement SEO metadata using generateMetadata() function
- Use next/image for optimized images with alt text
- Follow component composition patterns
- Use TailwindCSS for styling
- Implement proper semantic HTML structure

## Recent Changes
- **001-migrate-this-project**: Added comprehensive SEO optimization including metadata management, structured data, sitemap generation, and performance optimization

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->