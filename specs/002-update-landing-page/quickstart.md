# Quickstart Validation Guide

**Feature**: Update Landing Page Content  
**Branch**: `002-update-landing-page`  
**Date**: 21 November 2025

## Purpose
This guide provides manual validation steps to verify that all landing page content changes have been correctly implemented and the site functions as expected.

## Prerequisites
- Development server running (`npm run dev` or `npm start`)
- Access to `http://localhost:3000`
- Browser DevTools available
- Both desktop and mobile viewport testing capability

## Validation Steps

### 1. Hero Section Verification
**Location**: Top of landing page

**Expected Changes**:
- ❌ "Daftar akaun percuma" button should NOT be visible
- ✅ Main heading and description should remain unchanged

**Steps**:
1. Navigate to `http://localhost:3000`
2. Check the hero section (top banner area)
3. Verify no "Daftar akaun percuma" button exists
4. Confirm main content is still present

**Pass Criteria**: Button removed, layout intact

---

### 2. Header Navigation Verification
**Location**: Top navigation bar

**Expected Changes**:
- ❌ "Bahan Rujukan" link should NOT be visible
- ❌ "Daftar akaun percuma" button should NOT be visible
- ✅ "GitHub" link should remain

**Steps**:
1. Look at the top-right navigation area
2. Verify only "GitHub" link is present
3. Check that no broken layouts exist

**Pass Criteria**: Both "Bahan Rujukan" and "Daftar akaun percuma" removed

---

### 3. Mobile Menu Verification
**Location**: Mobile hamburger menu

**Expected Changes**:
- ❌ "Bahan Rujukan" link should NOT be visible in mobile menu

**Steps**:
1. Resize browser to mobile width (< 768px) OR use DevTools mobile emulation
2. Open the hamburger menu
3. Verify "Bahan Rujukan" is not in the menu
4. Confirm other menu items work correctly

**Pass Criteria**: "Bahan Rujukan" removed from mobile menu

---

### 4. Features Section Verification
**Location**: "Teroka penyelesaian kami" section

**Expected Changes**:
- ✏️ Heading should read "Modul Pengiklanan TV Masjid" (not "Modul mudah dipelajari")
- ✅ Section layout and tabs should remain functional

**Steps**:
1. Scroll to the "Teroka penyelesaian kami" section
2. Find the left-side content area above the tab buttons
3. Verify heading text is "Modul Pengiklanan TV Masjid"
4. Test that tab buttons still work correctly

**Pass Criteria**: New heading text displayed correctly, tabs functional

---

### 5. Module Listing Section Verification
**Location**: Previously below features section

**Expected Changes**:
- ❌ Entire section "Modul yang terkandung di E-Masjid setakat ini" should NOT exist
- ❌ Subtitle "Semua modul dibangunkan berdasarkan permintaan popular" should NOT exist
- ❌ Module cards (E-Khairat, Tabung, etc.) should NOT be visible

**Steps**:
1. Scroll through the entire page
2. Verify no section with heading "Modul yang terkandung di E-Masjid setakat ini"
3. Confirm page flows smoothly from features to testimonials/newsletter

**Pass Criteria**: Entire module listing section removed, no gaps in layout

---

### 6. Footer Verification
**Location**: Bottom of page

**Expected Changes**:
- ❌ "Bahan Rujukan" section/link should NOT be visible in footer
- ✅ Other footer content should remain

**Steps**:
1. Scroll to page footer
2. Check all footer sections
3. Verify no "Bahan Rujukan" heading or links
4. Confirm footer layout is intact

**Pass Criteria**: "Bahan Rujukan" removed from footer

---

### 7. Responsive Design Verification

**Viewports to Test**:
- Desktop: 1920x1080, 1366x768
- Tablet: 768x1024
- Mobile: 375x667, 414x896

**Steps**:
1. Test all above checkpoints in at least 2 viewport sizes
2. Verify no layout breaks or overflow issues
3. Confirm text is readable and properly sized
4. Check that removed elements don't leave gaps

**Pass Criteria**: All viewports display correctly without layout issues

---

### 8. SEO Metadata Verification

**Expected**:
- No changes to page title
- No changes to meta description
- No changes to structured data

**Steps**:
1. View page source or inspect `<head>` in DevTools
2. Verify title is still "E-Masjid.My"
3. Verify meta description unchanged
4. Run Lighthouse audit if available

**Pass Criteria**: SEO metadata unchanged

---

### 9. Automated Test Verification

**Expected**:
- All Jest tests pass
- No console errors in browser

**Steps**:
```bash
# Run test suite
npm test

# Check for specific component tests
npm test -- hero
npm test -- features
npm test -- header
npm test -- footer
```

**Pass Criteria**: All tests pass with updated expectations

---

### 10. Build Verification

**Expected**:
- Production build succeeds
- No build warnings related to changed components

**Steps**:
```bash
# Clean build
npm run build

# Verify build output
npm run start
```

**Pass Criteria**: Build succeeds, production site works correctly

---

## Summary Checklist

- [ ] Hero section: "Daftar akaun percuma" button removed
- [ ] Header: "Bahan Rujukan" link removed
- [ ] Header: "Daftar akaun percuma" button removed
- [ ] Mobile menu: "Bahan Rujukan" link removed
- [ ] Features: Heading changed to "Modul Pengiklanan TV Masjid"
- [ ] Module listing section completely removed
- [ ] Footer: "Bahan Rujukan" section removed
- [ ] Responsive design works on all viewports
- [ ] SEO metadata unchanged
- [ ] All automated tests pass
- [ ] Production build succeeds

## Rollback Plan

If validation fails:
```bash
# Return to previous state
git checkout main
git branch -D 002-update-landing-page
```

## Success Criteria

✅ All 10 validation steps pass  
✅ All checklist items checked  
✅ No console errors  
✅ No layout breaks  
✅ Tests pass  

## Next Steps After Validation

1. Commit all changes with descriptive message
2. Push branch to remote
3. Create pull request
4. Request code review
5. Merge to main after approval
