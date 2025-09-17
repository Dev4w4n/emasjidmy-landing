# Cloudflare Pages Deployment Guide

This guide explains how to deploy the E-Masjid Landing project to Cloudflare Pages.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI**: Install globally with `npm install -g wrangler`
3. **Authentication**: Run `wrangler login` to authenticate with Cloudflare

## Quick Deployment

### Option 1: Using the deployment script (Recommended)
```bash
./deploy-cloudflare.sh
```

### Option 2: Using npm scripts
```bash
npm run deploy:cloudflare
```

### Option 3: Manual deployment
```bash
# Build for static export
npm run build:cloudflare

# Deploy to Cloudflare Pages
wrangler pages deploy out --project-name=emasjid-landing
```

## Configuration

### 1. Update wrangler.toml
Edit `wrangler.toml` and add your Cloudflare account details:
```toml
[env.production]
account_id = "your-account-id-here"
zone_id = "your-zone-id-here"  # Only if using custom domain
```

### 2. Environment Variables
Set environment variables in Cloudflare Pages dashboard if needed:
- Go to Cloudflare Pages dashboard
- Select your project
- Navigate to Settings > Environment variables

## Features

The deployment script includes:
- ✅ Automatic dependency installation
- ✅ Test execution before deployment
- ✅ Static build optimization for Cloudflare
- ✅ Branch-based deployments (production vs preview)
- ✅ Post-deployment health checks
- ✅ Colored output for better visibility

## Branch Deployments

- **main branch**: Deploys to production
- **other branches**: Creates preview deployments

## Custom Domain

To use a custom domain:
1. Add your domain in Cloudflare Pages dashboard
2. Update DNS records as instructed
3. Update `wrangler.toml` with your domain configuration

## Troubleshooting

### Common Issues

1. **Authentication Error**
   ```bash
   wrangler login
   ```

2. **Build Fails**
   - Check that all dependencies are installed: `npm ci`
   - Verify tests pass: `npm test`
   - Try local build: `npm run build:cloudflare`

3. **Static Export Issues**
   - Ensure no server-side features are used in components
   - Check that `next.config.cloudflare.js` is properly configured

### Getting Help

- Cloudflare Pages Documentation: https://developers.cloudflare.com/pages/
- Wrangler CLI Documentation: https://developers.cloudflare.com/workers/wrangler/

## Advanced Configuration

### Custom Headers
Edit `wrangler.toml` to add security headers:
```toml
[[headers]]
for = "/*"
[headers.values]
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
```

### Redirects
Add URL redirects in `wrangler.toml`:
```toml
[[redirects]]
from = "/old-path"
to = "/new-path"
status = 301
```