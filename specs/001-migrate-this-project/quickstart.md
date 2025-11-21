# Quickstart: SEO Optimization Validation

## Prerequisites
- Node.js 18+ installed
- Chrome browser (for Lighthouse)
- Internet connection (for external validation tools)

## Quick Validation Steps

### 1. Basic SEO Meta Tags Check
```bash
# Start the development server
npm run start

# Open in browser and inspect
# Check for:
# - <title> tag with proper content
# - <meta name="description"> tag
# - Open Graph meta tags
# - Twitter Card meta tags
# - Canonical link tag
```

**Expected Results**:
- Title appears in browser tab (50-60 characters)
- Meta description visible in page source (150-160 characters)
- Open Graph tags present with proper content
- No duplicate or missing meta tags

### 2. Structured Data Validation
```bash
# Visit Google's Rich Results Test
# URL: https://search.google.com/test/rich-results
# Test URL: http://localhost:3000

# Check for:
# - Organization schema
# - Website schema  
# - Valid JSON-LD syntax
```

**Expected Results**:
- ✅ Valid JSON-LD detected
- ✅ Organization data parsed correctly
- ✅ No schema errors or warnings

### 3. Sitemap Verification
```bash
# Check sitemap exists
curl http://localhost:3000/sitemap.xml

# Check robots.txt
curl http://localhost:3000/robots.txt

# Verify structure
# - All pages included
# - Proper XML format
# - Language alternates present
```

**Expected Results**:
- XML sitemap loads without errors
- Contains all expected pages
- Includes proper lastmod dates
- Language alternates configured

### 4. Image Optimization Check
```bash
# Inspect any page with images
# Check Network tab in DevTools for:
# - WebP/AVIF format delivery
# - Proper alt text in HTML
# - Responsive srcset attributes
# - Lazy loading implementation
```

**Expected Results**:
- Images served in modern formats
- All images have descriptive alt text
- No layout shift (CLS) during loading
- Lazy loading working for below-fold images

### 5. Performance Audit
```bash
# Install Lighthouse CLI (if not installed)
npm install -g lighthouse

# Run full audit
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html

# Check specific metrics
lighthouse http://localhost:3000 --only-categories=seo --output json
```

**Expected Results**:
- SEO score ≥ 90
- Performance score ≥ 85
- Accessibility score ≥ 90
- Best Practices score ≥ 90

### 6. Social Media Preview
```bash
# Test Open Graph
# Use Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
# Test URL: http://localhost:3000

# Test Twitter Cards
# Use Twitter Card Validator: https://cards-dev.twitter.com/validator
# Test URL: http://localhost:3000
```

**Expected Results**:
- Facebook shows proper title, description, and image
- Twitter shows proper card format
- Images display correctly in previews
- No broken or missing metadata

### 7. Mobile Responsiveness
```bash
# Test mobile viewport
# Use Chrome DevTools Device Toolbar
# Test multiple device sizes

# Check:
# - Meta viewport tag present
# - Content adapts to screen size  
# - Touch targets properly sized
# - Text remains readable
```

**Expected Results**:
- Page renders correctly on mobile devices
- No horizontal scrolling required
- Touch interactions work properly
- Text size appropriate for mobile

### 8. Search Engine Crawlability
```bash
# Test robots.txt compliance
curl http://localhost:3000/robots.txt

# Check meta robots tags
# Inspect page source for:
# <meta name="robots" content="index,follow">

# Verify no crawl blocks
# Check for noindex/nofollow issues
```

**Expected Results**:
- Robots.txt allows crawling of important pages
- No unintended noindex directives
- Sitemap URL included in robots.txt
- Proper canonical URLs set

## Integration Test Scenarios

### Scenario 1: Home Page SEO
1. Navigate to http://localhost:3000
2. Verify title contains "E-Masjid.My"
3. Check meta description mentions mosque management system
4. Confirm Open Graph image displays E-Masjid branding
5. Validate structured data includes Organization type

### Scenario 2: Multi-language Support
1. Navigate to home page
2. Check for hreflang alternate tags
3. Switch language (if implemented)
4. Verify meta tags update to new language
5. Confirm URLs include proper locale indicators

### Scenario 3: Page Performance
1. Navigate to features page
2. Check Largest Contentful Paint < 2.5s
3. Verify Cumulative Layout Shift < 0.1
4. Confirm First Input Delay < 100ms
5. Test on 3G network throttling

### Scenario 4: Image Loading
1. Navigate to team page (has multiple images)
2. Verify images load progressively
3. Check for proper aspect ratios maintained
4. Confirm lazy loading for below-fold images
5. Test alt text appears when images disabled

## Success Criteria Checklist

- [ ] All pages have unique, descriptive titles
- [ ] Meta descriptions are compelling and under 160 characters
- [ ] Open Graph tags generate proper social media previews
- [ ] Structured data validates without errors
- [ ] XML sitemap includes all pages with proper metadata
- [ ] Images are optimized and have descriptive alt text
- [ ] Page load speed is under 3 seconds
- [ ] Lighthouse SEO score is 90 or higher
- [ ] Mobile responsiveness passes Google's mobile-friendly test
- [ ] No crawl errors in robots.txt or meta robots tags

## Troubleshooting Common Issues

### Issue: Missing Meta Tags
- Check metadata configuration in layout.tsx
- Verify generateMetadata function is exported
- Ensure meta tags are not overridden

### Issue: Poor Performance Scores  
- Optimize images (use next/image component)
- Enable code splitting
- Check for render-blocking resources

### Issue: Structured Data Errors
- Validate JSON-LD syntax in browser console
- Check Schema.org documentation for required fields
- Use Google's Rich Results Test tool

### Issue: Sitemap Not Generated
- Verify next-sitemap configuration
- Check build process includes sitemap generation
- Ensure all routes are discoverable