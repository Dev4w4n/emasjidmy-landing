# Research: Next.js SEO Optimization

## SEO Meta Tags Implementation

**Decision**: Use Next.js 15 built-in Metadata API with generateMetadata for dynamic pages  
**Rationale**: 
- Native Next.js support ensures optimal performance and SSR compatibility
- Cleaner developer experience compared to react-helmet
- Better TypeScript support and validation
- Follows Next.js best practices for App Router

**Alternatives considered**:
- react-helmet-async: More complex setup, requires additional configuration
- Manual meta tag injection: Error-prone and harder to maintain

## Structured Data (JSON-LD)

**Decision**: Implement JSON-LD structured data using next/head component and custom hooks  
**Rationale**:
- JSON-LD is Google's preferred format for structured data
- Easier to validate and debug than microdata
- Can be dynamically generated based on page content
- Better separation of concerns

**Alternatives considered**:
- Microdata markup: More complex to implement and maintain
- RDFa: Less widely supported and more verbose

## Sitemap Generation

**Decision**: Use next-sitemap library for automatic XML sitemap generation  
**Rationale**:
- Automatic generation during build process
- Supports dynamic routes and internationalization
- Integrates well with Next.js build pipeline
- Handles robots.txt generation

**Alternatives considered**:
- Manual sitemap creation: Time-consuming and error-prone
- Custom build script: Requires maintenance and testing

## Image Optimization

**Decision**: Leverage Next.js Image component with Sharp (already configured)  
**Rationale**:
- Automatic WebP/AVIF conversion for better performance
- Lazy loading built-in
- Responsive images with srcset generation
- Already configured in next.config.js

**Alternatives considered**:
- Manual image optimization: Too time-consuming
- Third-party CDN: Adds complexity and cost

## Performance Monitoring

**Decision**: Implement Lighthouse CI and Web Vitals tracking  
**Rationale**:
- Lighthouse provides comprehensive SEO auditing
- Web Vitals are core ranking factors
- Can be automated in CI/CD pipeline
- Provides actionable improvement suggestions

**Alternatives considered**:
- GTMetrix/Pingdom: Less comprehensive for SEO-specific metrics
- Manual testing: Not scalable or consistent

## Internationalization (i18n)

**Decision**: Use Next.js built-in i18n support with hreflang meta tags  
**Rationale**:
- Native Next.js feature for English/Bahasa Malaysia support
- Automatic URL generation for different locales
- Proper hreflang implementation for search engines
- SEO-friendly URL structure

**Alternatives considered**:
- react-i18next: Requires additional configuration for SEO
- Manual language switching: Poor SEO implementation

## Social Media Optimization

**Decision**: Implement comprehensive Open Graph and Twitter Card meta tags  
**Rationale**:
- Essential for social media sharing
- Improves click-through rates from social platforms
- Can be dynamically generated per page
- Supports rich media previews

**Alternatives considered**:
- Basic meta tags only: Misses social media optimization opportunities
- Third-party social plugins: Adds unnecessary complexity

## SEO Testing Strategy

**Decision**: Automated testing with Lighthouse CI + manual Google Search Console validation  
**Rationale**:
- Lighthouse provides consistent, automated SEO scoring
- Search Console offers real-world performance data
- Can catch SEO regressions early in development
- Provides baseline for improvement measurement

**Alternatives considered**:
- Manual testing only: Not scalable or consistent
- Paid SEO tools: Overkill for this project scope