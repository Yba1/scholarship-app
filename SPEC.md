# ScholarMatch - Living Spec File
> This file is meant to be read by AI coders (Codex, Claude) before making any edits.
> Update this file as the project grows.

---

## Project Overview
**App Name:** ScholarMatch  
**Tagline:** Find your perfect scholarship  
**Purpose:** A scholarship matching platform built specifically for high school students. Better matching, cleaner design, and more focused than generic sites like Fastweb or Scholarships.com.  
**Status:** MVP - live on Vercel, actively being developed  
**Repo:** https://github.com/Yba1/scholarship-app  
**Live URL:** https://scholarship-app-frontend-three.vercel.app

---

## Product Vision
ScholarMatch stands out from competitors (Fastweb, Scholarships.com) by being:
- Better matching - AI-powered match score showing how well each scholarship fits the student
- Cleaner design - modern, minimal UI that doesn't feel outdated
- High school focused - built specifically for high school students grades 9-12

---

## Target Users
- High school students (grades 9-12) looking for scholarships
- Free to use - no paywall or premium tier planned

---

## File Structure
```text
scholarship-app/
|- frontend/                  # Next.js 14 app
|  \- app/
|     |- page.tsx             # Home/landing page
|     |- login/page.tsx
|     |- register/page.tsx
|     |- dashboard/page.tsx
|     |- scholarships/page.tsx
|     |- scholarships/[id]/page.tsx
|     |- profile/page.tsx
|     |- tracker/page.tsx
|     |- essay-helper/page.tsx
|     |- settings/page.tsx
|     \- seo/[slug]/page.tsx
|- backend/                   # Express REST API (Vercel runtime)
|- database/                  # DB schema/setup
|- SPEC.md                    # This file
\- README.md
```

---

## Design & UI
**Framework:** Next.js 14 with TypeScript (.tsx)  
**Style:** Clean, minimal - blue (#3B82F6) as primary accent  
**Supports:** Light and dark mode

### Design Rules for AI Coders
- Keep blue primary color (#3B82F6) unless told otherwise
- Sidebar active state only on CURRENT page
- Do not break sidebar or existing layout
- All pages must be responsive
- Use TypeScript (.tsx) for all new files
- Cards always use separate grid layout - never stack multiple items in one shared box
- 3-column grid: `grid grid-cols-1 md:grid-cols-3 gap-6`
- Each card must be its own separate box with its own border/shadow
- Sections on landing page should be close together - use `py-8` not `py-24` between sections
- ALL text must be visible in both light AND dark mode
- Update SPEC.md after completing tasks

---

## Dark/Light Mode Rules
- Theme saved in localStorage under key `theme`
- Applied globally on every page load by adding/removing `dark` class on `<html>` element
- Only changes on button click in Settings
- Default: `light`

### Dark Mode Text Rules - CRITICAL
Every piece of text must be readable in both modes:
- Body text: `text-gray-900 dark:text-gray-100`
- Subtext: `text-gray-600 dark:text-gray-400`
- Headings: `text-gray-900 dark:text-white`
- Card backgrounds: `bg-white dark:bg-gray-800`
- Page backgrounds: `bg-gray-50 dark:bg-gray-900`
- Borders: `border-gray-200 dark:border-gray-700`
- NEVER use hardcoded colors without a `dark:` counterpart

---

## Immediate Tasks - Completed (March 15, 2026)

### Task 1 - Fix Dark Mode Text Visibility (ALL PAGES) ✅
Dark mode visibility classes were added/updated across:
- `frontend/app/page.tsx`
- `frontend/app/dashboard/page.tsx`
- `frontend/app/scholarships/page.tsx`
- `frontend/app/scholarships/[id]/page.tsx`
- `frontend/app/profile/page.tsx`
- `frontend/app/tracker/page.tsx`
- `frontend/app/essay-helper/page.tsx`
- `frontend/app/settings/page.tsx`
- `frontend/app/login/page.tsx`
- `frontend/app/register/page.tsx`
- Shared components: `AppShell`, `ScholarshipCard`, `DashboardStats`, `DeadlineWidget`
- Root layout theme-aware body text/background defaults

### Task 2 - Fix Landing Page Section Spacing ✅
- Reduced landing page section spacing in `frontend/app/page.tsx`
- Updated large section gaps to tighter spacing (`py-8`, `py-10`, `py-12` where needed)
- How It Works and Stats now feel visually cohesive

---

## Landing Page Sections (Final Structure)

### Section 1 - Top Navbar (public, no sidebar)
- ScholarMatch logo (left)
- Login + Sign Up buttons (right)

### Section 2 - Hero
- Large bold headline: "Find Scholarships Made for You"
- Subheadline about ScholarMatch being free and for high schoolers
- Two CTA buttons: "Get Started" (blue filled) + "Browse Scholarships" (outlined)

### Section 3 - How It Works
- Title: "How It Works"
- 3 separate cards in a row (grid-cols-3):
  - Card 1: 01 - Create Your Profile
  - Card 2: 02 - Get Matched
  - Card 3: 03 - Apply & Win

### Section 4 - Stats
- 3 separate cards in a row (grid-cols-3):
  - Card 1: 500+ Scholarships - and growing
  - Card 2: Free Forever - no hidden fees
  - Card 3: Built for High Schoolers - grades 9-12

### Section 5 - CTA Footer Banner
- Blue background
- "Ready to find your scholarship?"
- "Create Free Account" white button -> /register

---

## Pages & Status

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Home | `/` | ✅ Live | Spacing fixed + dark mode text updated |
| Login | `/login` | ✅ Live | Dark mode text updated |
| Register | `/register` | ✅ Live | Dark mode text updated |
| Dashboard | `/dashboard` | ✅ Live | Dark mode text updated |
| Browse Scholarships | `/scholarships` | ✅ Live | Dark mode text updated |
| Scholarship Detail | `/scholarships/[id]` | ✅ Live | Dark mode text updated |
| Profile Builder | `/profile` | ✅ Fixed | Dark mode text updated |
| Tracker | `/tracker` | ✅ Live | Dark mode text updated |
| Essay Helper | `/essay-helper` | 🔧 Planned | Dark mode text updated |
| Settings | `/settings` | ✅ Live | Dark mode toggle |
| SEO Pages | `/seo/[slug]` | ✅ Live | |

---

## Completed Features
- [x] Removed duplicate top navbar
- [x] Fixed sidebar active highlight bug
- [x] Settings page - dark/light mode toggle
- [x] Profile page - fixed auth check
- [x] Profile GPA - removed hardcoded value
- [x] Profile Country - searchable dropdown
- [x] Dark mode - persists via localStorage
- [x] Landing page - hero, how it works, stats, CTA banner
- [x] Landing page - 3 separate cards side by side in grid layout
- [x] Dark mode visibility pass across core pages/components
- [x] Landing page section spacing tightened

---

## Planned Features (Next Session with Partner)
- [ ] Match score % on scholarship cards
- [ ] Students can suggest scholarships
- [ ] Real scholarship API integration
- [ ] Application tracker: Essay in Progress stage
- [ ] Grade level filter
- [ ] Essay Helper - AI writing assistance
- [ ] Mobile app
- [ ] Admin dashboard
- [ ] Counselor portal
- [ ] Email deadline reminders

---

## Instructions for AI Coders (Codex/Claude)
- Always read SPEC.md fully before making any edits
- Check IMMEDIATE TASKS first - do them in order
- NEVER put multiple items in one shared box - always separate cards in a grid
- ALWAYS add dark: counterpart for every text, background, and border class
- Keep sections tight - use py-8 not py-24 for section spacing
- Do not change sidebar layout unless specifically asked
- Do not remove existing functionality
- Use TypeScript (.tsx) for all new frontend files
- Keep blue primary color (#3B82F6) unless told otherwise
- Update SPEC.md after completing tasks - mark done with ✅
