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
- High school focused - built specifically for high school students

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
- Update SPEC.md after completing tasks

---

## Immediate Task - Landing Page Redesign
**File:** `frontend/app/page.tsx`  
**Priority:** HIGH

### Status: Completed ✅ (March 15, 2026)

Implemented all required sections and constraints:

1. Section 1 - Hero
- Headline: `Find Scholarships Made for You`
- Subheadline: `ScholarMatch helps high school students discover and apply for scholarships that actually match their profile - for free.`
- CTAs: `Get Started` (blue filled) and `Browse Scholarships` (white outlined)

2. Section 2 - How It Works
- Section title: `How It Works`
- 3 step cards with icon, number, and description:
  - `Create Your Profile` - Add your GPA, interests, state, and background
  - `Get Matched` - We find scholarships that fit you best
  - `Apply & Win` - Track applications and submit with confidence

3. Section 3 - Stats Bar
- `500+ Scholarships` - and growing
- `Free Forever` - no hidden fees
- `Built for High Schoolers` - grades 9-12

4. Section 4 - CTA Footer Banner
- Blue background (#3B82F6)
- Headline: `Ready to find your scholarship?`
- Button: `Create Free Account` linking to `/register`

### Additional constraints met
- Public landing page includes top navbar only (logo + Login + Sign Up)
- No sidebar on public landing page
- Responsive across mobile and desktop
- Light/dark mode compatible styling
- Login/Register pages were not modified

---

## Pages & Status

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Home | `/` | ✅ Live | Landing page redesigned |
| Login | `/login` | ✅ Live | |
| Register | `/register` | ✅ Live | |
| Dashboard | `/dashboard` | ✅ Live | |
| Browse Scholarships | `/scholarships` | ✅ Live | |
| Scholarship Detail | `/scholarships/[id]` | ✅ Live | |
| Profile Builder | `/profile` | ✅ Fixed | |
| Tracker | `/tracker` | ✅ Live | |
| Essay Helper | `/essay-helper` | 🔧 Planned | |
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
- [x] Landing page redesign (hero, how-it-works, stats, CTA banner)

---

## Instructions for AI Coders (Codex/Claude)
- Always read SPEC.md fully before making any edits
- Check IMMEDIATE TASK section first
- Do not change sidebar layout unless specifically asked
- Do not remove existing functionality
- Use TypeScript (.tsx) for all new frontend files
- Keep blue primary color (#3B82F6) unless told otherwise
- Update SPEC.md after completing tasks - mark done with ✅
