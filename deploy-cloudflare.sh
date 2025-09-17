#!/bin/bash

# Cloudflare Pages Deployment Script for E-Masjid Landing
# This script builds and deploys the Next.js app to Cloudflare Pages

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="emasjid-landing"
BUILD_DIR="out"
NODE_VERSION="18"

echo -e "${YELLOW}🚀 Starting Cloudflare Pages deployment for ${PROJECT_NAME}...${NC}"

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo -e "${RED}❌ Wrangler CLI not found. Installing...${NC}"
    npm install -g wrangler
fi

# Check if user is authenticated with Cloudflare
echo -e "${YELLOW}🔐 Checking Cloudflare authentication...${NC}"
if ! wrangler whoami &> /dev/null; then
    echo -e "${RED}❌ Not authenticated with Cloudflare. Please run 'wrangler login' first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Authenticated with Cloudflare${NC}"

# Clean previous builds
echo -e "${YELLOW}🧹 Cleaning previous builds...${NC}"
rm -rf .next
rm -rf out
rm -rf node_modules/.cache

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm ci

# Run tests
echo -e "${YELLOW}🧪 Running tests...${NC}"
npm run test

# Build the project using Cloudflare-specific config
echo -e "${YELLOW}🏗️  Building project for static export...${NC}"
npm run build:cloudflare

# Next.js 15 with output: 'export' doesn't create 'out' directory automatically
# We need to copy the static files manually
echo -e "${YELLOW}📁 Creating output directory structure...${NC}"
rm -rf $BUILD_DIR
mkdir -p $BUILD_DIR

# Copy static HTML files from server directory
if [ -d ".next/server/app" ]; then
    cp -r .next/server/app/* $BUILD_DIR/
fi

# Copy static assets
if [ -d ".next/static" ]; then
    mkdir -p $BUILD_DIR/_next
    cp -r .next/static $BUILD_DIR/_next/
fi

# Copy public assets
if [ -d "public" ]; then
    cp -r public/* $BUILD_DIR/
fi

echo -e "${GREEN}✅ Output directory created successfully${NC}"

# Check if build was successful
if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ Build failed - output directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

# Deploy to Cloudflare Pages
echo -e "${YELLOW}🌐 Deploying to Cloudflare Pages...${NC}"

# Check if this is a production deployment (main branch) or preview
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" = "main" ]; then
    echo -e "${YELLOW}📤 Deploying to production...${NC}"
    wrangler pages deploy $BUILD_DIR --project-name=$PROJECT_NAME --commit-dirty=true
else
    echo -e "${YELLOW}📤 Deploying preview for branch: $BRANCH${NC}"
    wrangler pages deploy $BUILD_DIR --project-name=$PROJECT_NAME --branch=$BRANCH --commit-dirty=true
fi

# Get deployment URL
DEPLOYMENT_URL=$(wrangler pages deployment list --project-name=$PROJECT_NAME --format=json | jq -r '.[0].url' 2>/dev/null || echo "")

if [ ! -z "$DEPLOYMENT_URL" ]; then
    echo -e "${GREEN}🎉 Deployment successful!${NC}"
    echo -e "${GREEN}📍 URL: $DEPLOYMENT_URL${NC}"
else
    echo -e "${GREEN}🎉 Deployment completed!${NC}"
    echo -e "${YELLOW}📍 Check your Cloudflare Pages dashboard for the deployment URL${NC}"
fi

# Optional: Run post-deployment checks
echo -e "${YELLOW}🔍 Running post-deployment checks...${NC}"

# Check if deployment is live (if URL is available)
if [ ! -z "$DEPLOYMENT_URL" ]; then
    echo -e "${YELLOW}⏳ Waiting for deployment to be live...${NC}"
    sleep 10
    
    # Simple health check
    if curl -s -o /dev/null -w "%{http_code}" "$DEPLOYMENT_URL" | grep -q "200"; then
        echo -e "${GREEN}✅ Site is live and responding${NC}"
    else
        echo -e "${YELLOW}⚠️  Site deployed but may still be propagating${NC}"
    fi
fi

echo -e "${GREEN}🎊 Deployment process completed!${NC}"
echo -e "${YELLOW}💡 Tips:${NC}"
echo -e "   • Check your deployment at: https://dash.cloudflare.com/"
echo -e "   • Set up custom domain in Cloudflare Pages dashboard"
echo -e "   • Configure environment variables if needed"
echo -e "   • Set up automatic deployments via Git integration"