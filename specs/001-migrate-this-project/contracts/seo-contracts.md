# SEO API Contracts

## Metadata Generation Contract

```typescript
interface MetadataGenerationInput {
  pageType: 'home' | 'about' | 'features' | 'pricing' | 'contact' | 'auth';
  content?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  locale: 'en' | 'ms';
}

interface MetadataOutput {
  title: string;
  description: string;
  keywords: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
    siteName: string;
  };
  twitter: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    image: string;
  };
  canonical: string;
  alternates: {
    languages: Record<string, string>;
  };
  robots: string;
}

// Function Contract
function generateMetadata(input: MetadataGenerationInput): MetadataOutput;
```

## Structured Data Contract  

```typescript
interface StructuredDataInput {
  type: 'Organization' | 'WebSite' | 'LocalBusiness' | 'Article';
  pageUrl: string;
  locale: 'en' | 'ms';
  customData?: Record<string, any>;
}

interface StructuredDataOutput {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: any;
}

// Function Contract
function generateStructuredData(input: StructuredDataInput): StructuredDataOutput;
```

## Sitemap Generation Contract

```typescript
interface SitemapInput {
  baseUrl: string;
  pages: Array<{
    path: string;
    lastModified?: Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }>;
  locales: string[];
}

interface SitemapOutput {
  xml: string;
  robotsTxt: string;
  urls: Array<{
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: number;
    alternates: Array<{
      href: string;
      hreflang: string;
    }>;
  }>;
}

// Function Contract
function generateSitemap(input: SitemapInput): SitemapOutput;
```

## Image Optimization Contract

```typescript
interface ImageOptimizationInput {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
}

interface ImageOptimizationOutput {
  optimizedSrc: string;
  srcSet: string;
  placeholder?: string;
  blurDataURL?: string;
  width: number;
  height: number;
}

// Function Contract  
function optimizeImage(input: ImageOptimizationInput): Promise<ImageOptimizationOutput>;
```

## SEO Audit Contract

```typescript
interface SEOAuditInput {
  url: string;
  options?: {
    mobile?: boolean;
    categories?: Array<'performance' | 'accessibility' | 'best-practices' | 'seo'>;
  };
}

interface SEOAuditOutput {
  score: number;
  metrics: {
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    totalBlockingTime: number;
  };
  seoIssues: Array<{
    title: string;
    description: string;
    severity: 'error' | 'warning' | 'info';
  }>;
  opportunities: Array<{
    title: string;
    description: string;
    potentialSavings: number;
  }>;
}

// Function Contract
function auditSEO(input: SEOAuditInput): Promise<SEOAuditOutput>;
```