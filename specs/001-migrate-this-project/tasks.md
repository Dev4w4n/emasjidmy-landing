# Tasks: Next.js SEO Optimization & Migration

**Input**: Design documents from `/specs/001-migrate-this-project/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → Tech stack: TypeScript 5.3, React 18.2, Next.js 15.0.3
   → Libraries: @headlessui/react, TailwindCSS, Sharp, AOS
   → Structure: Next.js App Router with TypeScript
2. Load optional design documents:
   → data-model.md: 6 entities → model tasks
   → contracts/: SEO contracts → interface tasks
   → research.md: Technology decisions → setup tasks
3. Generate tasks by category:
   → Setup: SEO tooling, testing setup, dependencies
   → Tests: Contract validation, integration tests
   → Core: TypeScript interfaces, utility functions, SEO services
   → Integration: Metadata generation, structured data, sitemap
   → Polish: Performance optimization, validation, documentation
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have interfaces?
   → All entities have TypeScript models?
   → All SEO functions implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Next.js App Router**: `app/`, `components/`, `lib/` at repository root
- **TypeScript interfaces**: `lib/types/`
- **Utilities**: `lib/utils/`
- **Tests**: `__tests__/` or `*.test.ts` files

## Phase 3.1: Setup
- [ ] T001 Install SEO dependencies: next-sitemap, @types/node for enhanced TypeScript support
- [ ] T002 [P] Configure Jest and React Testing Library for SEO component testing in jest.config.js
- [ ] T003 [P] Configure Lighthouse CI for automated SEO auditing in .lighthouserc.js
- [ ] T004 [P] Setup ESLint rules for accessibility and SEO best practices in .eslintrc.json

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [ ] T005 [P] Contract test for metadata generation function in __tests__/lib/seo/metadata.test.ts
- [ ] T006 [P] Contract test for structured data generation in __tests__/lib/seo/structured-data.test.ts
- [ ] T007 [P] Contract test for sitemap generation in __tests__/lib/seo/sitemap.test.ts
- [ ] T008 [P] Contract test for image optimization utilities in __tests__/lib/seo/image-optimization.test.ts
- [ ] T009 [P] Integration test for home page SEO metadata in __tests__/app/(default)/page.test.tsx
- [ ] T010 [P] Integration test for social media Open Graph tags in __tests__/components/social-meta.test.tsx
- [ ] T011 [P] Integration test for sitemap XML generation in __tests__/api/sitemap.test.ts

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [ ] T012 [P] Page entity TypeScript interface in lib/types/seo.ts
- [ ] T013 [P] StructuredData entity TypeScript interface in lib/types/structured-data.ts
- [ ] T014 [P] Image entity TypeScript interface in lib/types/image.ts
- [ ] T015 [P] Sitemap entity TypeScript interface in lib/types/sitemap.ts
- [ ] T016 [P] MetaConfiguration entity TypeScript interface in lib/types/meta-config.ts
- [ ] T017 [P] SEO metadata generation utility function in lib/utils/generate-metadata.ts
- [ ] T018 [P] Structured data JSON-LD utility function in lib/utils/structured-data.ts
- [ ] T019 [P] Image optimization utility functions in lib/utils/image-optimization.ts
- [ ] T020 generateMetadata function for home page in app/(default)/page.tsx
- [ ] T021 generateMetadata function for authentication pages in app/(auth)/layout.tsx
- [ ] T022 Enhanced metadata for registration page in app/(auth)/daftar/page.tsx

## Phase 3.4: Integration & SEO Services
- [ ] T023 Global SEO configuration service in lib/services/seo-config.ts
- [ ] T024 Sitemap XML generation API route in app/api/sitemap.xml/route.ts
- [ ] T025 Robots.txt generation API route in app/api/robots.txt/route.ts
- [ ] T026 Dynamic Open Graph image generation API route in app/api/og/route.tsx
- [ ] T027 JSON-LD structured data component in components/structured-data.tsx
- [ ] T028 Update root layout with enhanced global metadata in app/layout.tsx
- [ ] T029 Language-specific metadata for Bahasa Malaysia support
- [ ] T030 Canonical URL management across all pages

## Phase 3.5: Performance & Optimization
- [ ] T031 [P] Optimize existing images with next/image and proper alt text in components/
- [ ] T032 [P] Implement lazy loading for below-fold images in components/
- [ ] T033 [P] Add semantic HTML structure and heading hierarchy validation
- [ ] T034 Configure next-sitemap for automatic sitemap generation in next-sitemap.config.js
- [ ] T035 Performance monitoring setup with Core Web Vitals tracking
- [ ] T036 [P] Update package.json scripts for SEO testing and validation
- [ ] T037 [P] Create SEO validation script in scripts/validate-seo.js

## Phase 3.6: Documentation & Validation
- [ ] T038 [P] Update README.md with SEO optimization documentation
- [ ] T039 [P] Create SEO testing guide in docs/seo-testing.md
- [ ] T040 [P] Document metadata standards in docs/metadata-standards.md
- [ ] T041 Run complete SEO audit and fix any remaining issues
- [ ] T042 Validate all quickstart.md scenarios are working
- [ ] T043 Final Lighthouse audit with score verification (target: SEO >90)

## Dependencies
- Setup (T001-T004) before tests (T005-T011)
- Tests (T005-T011) before implementation (T012-T030)
- TypeScript interfaces (T012-T016) before utilities (T017-T019)
- Utilities (T017-T019) before page implementations (T020-T022)
- Core implementation (T012-T022) before integration (T023-T030)
- Integration (T023-T030) before optimization (T031-T037)
- Everything before documentation (T038-T043)

## Parallel Execution Examples

### Setup Phase (can run together):
```bash
# Install dependencies
npm install next-sitemap @types/node lighthouse
# Configure tools in parallel
Task: "Configure Jest and React Testing Library in jest.config.js"
Task: "Configure Lighthouse CI in .lighthouserc.js"
Task: "Setup ESLint rules in .eslintrc.json"
```

### Test Phase (can run together):
```bash
Task: "Contract test for metadata generation in __tests__/lib/seo/metadata.test.ts"
Task: "Contract test for structured data in __tests__/lib/seo/structured-data.test.ts"
Task: "Contract test for sitemap generation in __tests__/lib/seo/sitemap.test.ts"
Task: "Integration test for home page SEO in __tests__/app/(default)/page.test.tsx"
```

### TypeScript Interfaces (can run together):
```bash
Task: "Page entity interface in lib/types/seo.ts"
Task: "StructuredData interface in lib/types/structured-data.ts"
Task: "Image entity interface in lib/types/image.ts"
Task: "Sitemap entity interface in lib/types/sitemap.ts"
```

### Utility Functions (can run together):
```bash
Task: "SEO metadata generation utility in lib/utils/generate-metadata.ts"
Task: "Structured data utility in lib/utils/structured-data.ts"
Task: "Image optimization utilities in lib/utils/image-optimization.ts"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Use TypeScript for all new code
- Follow Next.js App Router conventions
- Commit after each task
- Test SEO improvements with Lighthouse after each major phase

## Task Generation Rules Applied

1. **From SEO Contracts**:
   - Metadata generation contract → T005, T017, T020-T022
   - Structured data contract → T006, T018, T027
   - Sitemap contract → T007, T024-T025
   - Image optimization contract → T008, T019, T031-T032

2. **From Data Model Entities**:
   - Page entity → T012
   - StructuredData entity → T013
   - Image entity → T014
   - Sitemap entity → T015
   - MetaConfiguration entity → T016

3. **From Quickstart Scenarios**:
   - Basic SEO meta tags check → T009, T020-T022
   - Structured data validation → T027
   - Sitemap verification → T024-T025
   - Performance audit → T035, T043

4. **From Research Decisions**:
   - Next.js Metadata API → T020-T022, T028
   - JSON-LD structured data → T018, T027
   - next-sitemap library → T034
   - Lighthouse CI → T003, T043

## Validation Checklist

- [x] All SEO contracts have corresponding tests (T005-T008)
- [x] All entities have TypeScript interface tasks (T012-T016)
- [x] All tests come before implementation (T005-T011 before T012+)
- [x] Parallel tasks are truly independent (different files)
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task
- [x] SEO-specific requirements addressed (metadata, structured data, sitemap)
- [x] Performance and validation tasks included
- [x] Documentation and testing guidance provided