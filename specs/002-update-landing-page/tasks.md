# Tasks: Update Landing Page Content

**Input**: Design documents from `/specs/002-update-landing-page/`
**Prerequisites**: plan.md ✅, quickstart.md ✅

## Execution Flow (main)
```
1. ✅ Loaded plan.md - simple content update feature
2. ✅ Loaded quickstart.md - manual validation scenarios
3. ✅ No data-model.md, contracts/, research.md (not needed for content changes)
4. ✅ Generated tasks: test updates → component modifications → validation
5. ✅ Applied parallel rules: All component files are independent [P]
6. ✅ Numbered tasks T001-T012
7. ✅ Validation complete: All required changes covered
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Phase 3.1: Setup
- [ ] **T001** Verify current tests pass before making changes
  - Run: `npm test`
  - Ensure clean baseline before modifications
  - Document any existing failures

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: Update tests to expect NEW content before modifying components**

- [ ] **T002 [P]** Update hero component test in `__tests__/components/hero.test.tsx`
  - Remove test assertions for "Daftar akaun percuma" button
  - Verify test expects button NOT to exist
  - Test should fail after update (button still exists in component)

- [ ] **T003 [P]** Update features component test in `__tests__/components/features.test.tsx`
  - Change expected heading from "Modul mudah dipelajari" to "Modul Pengiklanan TV Masjid"
  - Verify test checks for new heading text
  - Test should fail after update (old heading still in component)

- [ ] **T004 [P]** Update header component test in `__tests__/components/ui/header.test.tsx`
  - Remove test assertions for "Bahan Rujukan" link
  - Remove test assertions for "Daftar akaun percuma" button
  - Verify test expects both elements NOT to exist
  - Test should fail after update (elements still exist in component)

- [ ] **T005 [P]** Update footer component test in `__tests__/components/ui/footer.test.tsx`
  - Remove test assertions for "Bahan Rujukan" section/link
  - Verify test expects "Bahan Rujukan" NOT to exist
  - Test should fail after update (link still exists in component)

- [ ] **T006 [P]** Create or update mobile menu test in `__tests__/components/ui/mobile-menu.test.tsx`
  - Check if test file exists, create if needed
  - Remove/update test assertions for "Bahan Rujukan" in mobile menu
  - Verify test expects "Bahan Rujukan" NOT to exist
  - Test should fail after update (link still exists in component)

- [ ] **T007** Run tests to verify they FAIL (TDD red phase)
  - Run: `npm test`
  - Document which tests fail and why
  - Confirm failures match expected changes

## Phase 3.3: Core Implementation (ONLY after tests are failing)

- [ ] **T008 [P]** Remove "Daftar akaun percuma" button from hero in `components/hero.tsx`
  - Location: Line ~45
  - Remove the entire `<a>` tag with className "btn text-white bg-blue-600"
  - Remove containing `<div>` if it becomes empty
  - Preserve all other hero content

- [ ] **T009 [P]** Update features heading in `components/features.tsx`
  - Location: Line ~43
  - Change `<h3>` text from "Modul mudah dipelajari" to "Modul Pengiklanan TV Masjid"
  - Keep all other features section content unchanged

- [ ] **T010 [P]** Remove navigation items from header in `components/ui/header.tsx`
  - Location: Lines ~46 and ~51
  - Remove `<li>` containing "Bahan Rujukan" Link (line ~46)
  - Remove `<li>` containing "Daftar akaun percuma" button (line ~51)
  - Ensure proper list structure remains (no empty `<ul>` or broken navigation)

- [ ] **T011 [P]** Remove "Bahan Rujukan" from footer in `components/ui/footer.tsx`
  - Location: Line ~36
  - Remove the entire "Bahan Rujukan" section
  - Check if this is a heading with links below, remove entire block
  - Maintain footer grid layout structure

- [ ] **T012 [P]** Remove "Bahan Rujukan" from mobile menu in `components/ui/mobile-menu.tsx`
  - Location: Line ~91
  - Remove the menu item containing "Bahan Rujukan"
  - Ensure mobile menu still opens/closes correctly
  - Verify remaining menu items display properly

- [ ] **T013 [P]** Remove module listing section in `components/features-blocks.tsx`
  - Location: Line ~14 (section header)
  - Remove entire section including:
    - `<h2>` with "Modul yang terkandung di E-Masjid setakat ini"
    - `<p>` with "Semua modul dibangunkan berdasarkan permintaan popular"
    - All module cards (E-Khairat, Tabung, etc.)
  - Option 1: Remove entire component if it only contains this section
  - Option 2: If component has other content, remove only this section
  - Check `app/(default)/page.tsx` and remove `<FeaturesBlocks />` import if removing entire component

## Phase 3.4: Integration & Verification

- [ ] **T014** Run tests to verify they PASS (TDD green phase)
  - Run: `npm test`
  - All updated tests should now pass
  - Fix any remaining test failures
  - Document test results

- [ ] **T015** Build verification
  - Run: `npm run build`
  - Verify no build errors or warnings
  - Confirm production build succeeds

- [ ] **T016** Development server verification
  - Run: `npm run dev`
  - Open `http://localhost:3000`
  - Quick visual check for obvious issues
  - Verify page loads without console errors

## Phase 3.5: Manual Validation

- [ ] **T017** Execute manual validation from `quickstart.md`
  - Follow all 10 validation steps in quickstart.md
  - Test on desktop viewport (1920x1080 and 1366x768)
  - Test on tablet viewport (768x1024)
  - Test on mobile viewports (375x667 and 414x896)
  - Document any issues found

- [ ] **T018** SEO and metadata verification
  - Verify page title unchanged: "E-Masjid.My"
  - Verify meta description unchanged
  - Run Lighthouse audit if available
  - Confirm no SEO regressions

- [ ] **T019** Final review and commit
  - Review all file changes using git diff
  - Verify only intended files modified
  - Stage all changes: `git add -A`
  - Commit with message: "feat: update landing page content - remove Bahan Rujukan and Daftar links, update features heading, remove module listing section"
  - Push branch: `git push origin 002-update-landing-page`

## Dependencies

**Sequential flow**:
1. T001 (baseline) → T002-T006 (test updates)
2. T002-T006 → T007 (verify tests fail)
3. T007 → T008-T013 (component modifications)
4. T008-T013 → T014 (verify tests pass)
5. T014 → T015-T016 (build & dev verification)
6. T016 → T017-T018 (manual validation)
7. T018 → T019 (commit)

**Parallel opportunities**:
- T002-T006: All test files can be updated simultaneously [P]
- T008-T013: All component files can be modified simultaneously [P]

## Parallel Execution Examples

### Parallel Test Updates (T002-T006)
```bash
# Can be executed together (different files):
Task T002: "Update hero test to remove Daftar button assertion"
Task T003: "Update features test to expect new heading"
Task T004: "Update header test to remove navigation assertions"
Task T005: "Update footer test to remove Bahan Rujukan assertion"
Task T006: "Create/update mobile menu test"
```

### Parallel Component Modifications (T008-T013)
```bash
# Can be executed together (different files):
Task T008: "Remove Daftar button from components/hero.tsx"
Task T009: "Update heading in components/features.tsx"
Task T010: "Remove nav items from components/ui/header.tsx"
Task T011: "Remove Bahan Rujukan from components/ui/footer.tsx"
Task T012: "Remove Bahan Rujukan from components/ui/mobile-menu.tsx"
Task T013: "Remove module listing from components/features-blocks.tsx"
```

## Notes

- ✅ All tasks specify exact file paths
- ✅ Tests updated before implementation (TDD)
- ✅ Parallel tasks target different files
- ✅ No architectural changes needed
- ✅ SEO metadata preserved
- ✅ Responsive design maintained
- ⚠️ CRITICAL: Run T001 first to ensure clean baseline
- ⚠️ CRITICAL: Do NOT skip test updates (T002-T006)
- 💡 Commit after completing each phase for easy rollback

## Validation Checklist
*GATE: Checked before marking complete*

- [x] All affected components have corresponding test tasks
- [x] All tests come before implementation (T002-T006 → T008-T013)
- [x] Parallel tasks are truly independent (different files)
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task
- [x] Manual validation included (quickstart.md)
- [x] Build and development verification included
- [x] Git commit workflow included

## Summary

**Total Tasks**: 19
- Setup: 1 task
- Test Updates: 6 tasks (5 parallel)
- Component Changes: 6 tasks (6 parallel)
- Verification: 4 tasks
- Validation: 2 tasks

**Estimated Time**: 2-3 hours
- Test updates: 30-45 min
- Component changes: 30-45 min
- Testing & validation: 60-90 min

**Risk Level**: LOW
- Simple content changes
- No logic modifications
- No new dependencies
- Clear rollback path
