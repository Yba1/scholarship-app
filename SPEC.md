# ScholarMatch - Living Spec File
> This file is meant to be read by AI coders (Codex, Claude) before making any edits.
> Update this file as the project grows.

---

## Project Overview
**App Name:** ScholarMatch  
**Tagline:** Find your perfect scholarship  
**Purpose:** A scholarship matching platform that helps high school students discover, track, and apply for scholarships.  
**Status:** MVP - live on Vercel, actively being developed  
**Repo:** https://github.com/Yba1/scholarship-app  
**Live URL:** https://scholarship-app-frontend-three.vercel.app

---

## Target Users
- High school students looking for scholarships
- Free to use - no paywall or premium tier planned at this time

---

## File Structure
```text
scholarship-app/
|- frontend/                  # Next.js 14 app
|  \- app/
|     |- page.tsx             # Home/landing page
|     |- login/page.tsx       # Login page
|     |- register/page.tsx    # Register/signup page
|     |- dashboard/page.tsx   # Main dashboard
|     |- scholarships/
|     |  |- page.tsx          # Browse scholarships list
|     |  \- [id]/page.tsx     # Individual scholarship detail
|     |- profile/page.tsx     # Student profile builder
|     |- tracker/page.tsx     # Application tracker
|     |- essay-helper/page.tsx # Essay helper tool
|     |- settings/page.tsx    # Settings page (dark mode toggle)
|     \- seo/[slug]/page.tsx  # Dynamic SEO pages
|- backend/                   # Express REST API (Vercel runtime)
|- database/                  # DB schema/setup
|- .env.example               # Environment variable template
|- SPEC.md                    # This file
|- package.json
\- README.md
```

---

## Design & UI
**Framework:** Next.js 14 with TypeScript (.tsx)  
**Current Style:** Clean, minimal - blue (#3B82F6) as primary accent  
**Supports:** Light mode and dark mode (toggle in Settings)  
**Sidebar Nav items:** Dashboard, Browse Scholarships, Applications, Profile, Essay Helper, Settings

### Design Rules for AI Coders
- Keep the existing blue primary color unless told otherwise
- Sidebar should have active state only on the CURRENT page - never highlight multiple items
- Do not change the sidebar layout unless specifically asked
- Do not remove existing functionality when adding new features
- All pages should be responsive
- Use TypeScript (.tsx) for all new frontend files
- After making changes, update the relevant section of SPEC.md

---

## Dark/Light Mode - How It Works
- Theme preference is saved in **localStorage** under key `theme`
- Theme is applied globally on page load in `frontend/app/layout.tsx`
- Theme only changes when user clicks the toggle button in `frontend/app/settings/page.tsx`
- Opening the Settings page does not auto-switch theme
- Toggle label:
  - `Switch to Dark` when in light mode
  - `Switch to Light` when in dark mode
- Default theme when nothing is set in localStorage: `light`

---

## Immediate Tasks (Completed March 15, 2026)
Read all tasks before starting. Complete them in order.

### Task 1 - Fix dark mode auto-switching bug ✅
- Switched theme storage key to `theme`
- Removed auto theme selection from system preference on Settings load
- Applied theme globally from localStorage on page load in root layout
- Theme now changes only when the Settings toggle is clicked

### Task 2 - Fix Profile page GPA field ✅
- Removed hardcoded default `3.5`
- GPA is now empty by default
- Updated placeholder to `GPA (e.g. 3.5)`

### Task 3 - Fix Profile page Country field ✅
- Replaced plain text country input with a searchable combobox-style dropdown
- Added common countries first:
  - United States, Canada, United Kingdom, Australia, India, Mexico, Germany, France, China, Japan, Brazil, South Korea, Nigeria, Philippines, Pakistan
- Added all remaining countries alphabetically below
- Selecting a country fills the field
- Placeholder shows `Country` when empty
- Implemented with vanilla React state only

---

## Pages & Status

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Home | `/` | ✅ Live | Landing page |
| Login | `/login` | ✅ Live | Auth working |
| Register | `/register` | ✅ Live | |
| Dashboard | `/dashboard` | ✅ Live | |
| Browse Scholarships | `/scholarships` | ✅ Live | Has search, state, major filters |
| Scholarship Detail | `/scholarships/[id]` | ✅ Live | |
| Profile Builder | `/profile` | ✅ Fixed | Auth check fixed, GPA default fixed, country combobox added |
| Tracker | `/tracker` | ✅ Live | |
| Essay Helper | `/essay-helper` | 🔧 Planned | Empty - may add Grammarly-style AI writing helpers later |
| Settings | `/settings` | ✅ Fixed | Dark mode now only toggles on click |
| SEO Pages | `/seo/[slug]` | ✅ Live | Dynamic |

---

## Backend
**Framework:** Express.js  
**Deployment:** Vercel (serverless runtime)  
**Database:** TBD - not yet confirmed  
**Auth:** Working (login/register/logout functional)

---

## Scholarship Data
**Current data:** Not yet confirmed - may be dummy/placeholder data  
**Scholarships visible on browse page:**
- First Generation Achievers Grant - $3,500 - Mar 25, 2026
- Future Engineers Merit Scholarship - $5,000 - Apr 5, 2026
- California Computer Science Scholars - $8,000 - Apr 14, 2026

---

## Planned Features
- [ ] AI scholarship matching based on student profile
- [ ] Email deadline reminders
- [ ] Essay Helper - Grammarly-style AI writing assistance
- [ ] Better filtering (GPA, ethnicity, major, state)
- [ ] Saved scholarships list

## Completed Features
- [x] Removed duplicate top navbar
- [x] Fixed sidebar active highlight bug
- [x] Settings page - dark/light mode toggle + under construction message
- [x] Profile page - fixed auth check so logged-in users see profile form
- [x] Dark mode no longer auto-switches when visiting Settings
- [x] Profile GPA default value fixed
- [x] Profile country searchable dropdown added

---

## Known Bugs
- No known open bugs from the current immediate task list.

---

## Instructions for AI Coders (Codex/Claude)
- Always read SPEC.md fully before making any edits
- Check the IMMEDIATE TASKS section first - do those before anything else
- Check the file structure before creating new files
- Do not change the sidebar layout unless specifically asked
- Do not remove existing functionality when adding new features
- Use TypeScript (.tsx) for all new frontend files
- Keep the blue primary color (#3B82F6) unless told otherwise
- Update SPEC.md after completing each task - mark it done with ✅
