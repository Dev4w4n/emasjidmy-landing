# Data Model: SEO Entities

## Page Entity

**Purpose**: Represents a page in the application with its SEO metadata

**Attributes**:
- `title`: string - HTML title tag content (required, 50-60 characters optimal)
- `description`: string - Meta description content (required, 150-160 characters optimal)  
- `keywords`: string[] - SEO keywords relevant to page content
- `canonicalUrl`: string - Canonical URL to prevent duplicate content
- `ogTitle`: string - Open Graph title (optional, defaults to title)
- `ogDescription`: string - Open Graph description (optional, defaults to description)
- `ogImage`: string - Open Graph image URL (required for social sharing)
- `ogType`: string - Open Graph type (article, website, etc.)
- `twitterCard`: string - Twitter card type (summary, summary_large_image)
- `language`: string - Page language code (en, ms)
- `lastModified`: Date - Last modification date for sitemap
- `priority`: number - Sitemap priority (0.0-1.0)
- `changeFrequency`: string - Sitemap change frequency (daily, weekly, monthly)

**Validation Rules**:
- Title length: 50-60 characters (warn if outside range)
- Description length: 150-160 characters (warn if outside range)
- OG image: Must be valid URL with proper dimensions (1200x630 recommended)
- Language: Must be valid locale code (en, ms)
- Priority: Must be between 0.0 and 1.0

**Relationships**:
- One-to-many with StructuredData entities
- One-to-many with Image entities

## StructuredData Entity

**Purpose**: Represents JSON-LD structured data markup for search engines

**Attributes**:
- `type`: string - Schema.org type (Organization, WebSite, Article, etc.)
- `data`: object - JSON-LD data object
- `pageUrl`: string - Associated page URL
- `priority`: number - Loading priority for multiple schemas on same page

**Validation Rules**:
- Type: Must be valid Schema.org type
- Data: Must conform to Schema.org specification
- Must validate against Google's structured data testing tool

**Common Types**:
- **Organization**: Company/organization information
- **WebSite**: Website metadata and search action
- **LocalBusiness**: For mosque/local business information  
- **Article**: For blog posts or news content
- **BreadcrumbList**: For navigation breadcrumbs

## Image Entity

**Purpose**: Represents optimized images with SEO metadata

**Attributes**:
- `src`: string - Image source URL
- `alt`: string - Alt text for accessibility and SEO (required)
- `title`: string - Image title attribute (optional)
- `width`: number - Image width in pixels
- `height`: number - Image height in pixels
- `format`: string - Image format (webp, avif, jpg, png)
- `sizes`: string - Responsive image sizes attribute
- `loading`: string - Loading strategy (lazy, eager)
- `priority`: boolean - Loading priority for LCP images

**Validation Rules**:
- Alt text: Required for all images, descriptive (not filename)
- Dimensions: Required for layout stability (CLS prevention)
- Format: Prefer modern formats (WebP, AVIF) for performance
- Priority: Only one image per page should have priority=true

**Relationships**:
- Many-to-one with Page entity
- Used in Open Graph image metadata

## Sitemap Entity

**Purpose**: Represents XML sitemap structure and configuration

**Attributes**:
- `urls`: PageSitemapEntry[] - Array of page entries
- `lastGenerated`: Date - Sitemap generation timestamp
- `changeFrequency`: string - Default change frequency
- `priority`: number - Default priority

**PageSitemapEntry**:
- `loc`: string - Page URL
- `lastmod`: Date - Last modification date
- `changefreq`: string - Change frequency
- `priority`: number - Page priority
- `alternateLanguages`: AlternateLanguage[] - Language alternates

**AlternateLanguage**:
- `href`: string - Alternate language URL
- `hreflang`: string - Language code

## MetaConfiguration Entity

**Purpose**: Global SEO configuration and default values

**Attributes**:
- `siteName`: string - Global site name
- `defaultTitle`: string - Default title template
- `defaultDescription`: string - Default meta description
- `defaultOgImage`: string - Default Open Graph image
- `twitterHandle`: string - Twitter username for site
- `googleSiteVerification`: string - Google Search Console verification
- `robotsPolicy`: string - Default robots meta policy
- `canonicalBaseUrl`: string - Base URL for canonical URLs

**Validation Rules**:
- All URLs must be absolute and valid
- Twitter handle must start with @
- Site verification codes must be valid format

## State Transitions

**Page SEO State**:
1. **Draft** → **Review** (when meta tags added)
2. **Review** → **Optimized** (when SEO audit passes)
3. **Optimized** → **Published** (when live and indexed)

**Image Optimization State**:
1. **Raw** → **Processing** (during optimization)
2. **Processing** → **Optimized** (when formats generated)
3. **Optimized** → **Deployed** (when served via CDN)

**Sitemap State**:
1. **Stale** → **Generating** (during build process)
2. **Generating** → **Fresh** (when generation complete)
3. **Fresh** → **Stale** (when content changes detected)