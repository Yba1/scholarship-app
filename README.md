# Scholarship App

https://scholarship-app-frontend-three.vercel.app/ - main website
https://scholarship-app-backend.vercel.app/ - backend just for viewing


Production-ready MVP for a scholarship matching platform with:

- Next.js 14 frontend using the imported Desktop UI direction
- Express REST API backend
- Prisma ORM + PostgreSQL
- JWT auth with bcrypt hashing
- Scholarship matching and win probability scoring
- Application tracking, deadline reminders, and essay feedback

## Monorepo Structure

- `frontend`: Next.js 14 App Router UI
- `backend`: Express API and scheduled reminder job
- `database`: Prisma schema, migrations, and seed script

## Features

- User registration, login, and `GET /auth/me`
- Student profile builder
- Scholarship search and filters
- Match generation with score and win probability
- Dashboard with deadlines and tracker summary
- Application tracking with statuses
- Essay feedback endpoint using OpenAI when configured
- Daily deadline reminder job using `node-cron` and `nodemailer`
- Dynamic SEO pages for scholarship topics and locations

## Environment Setup

1. Copy `.env.example` to `.env`
2. Update the values for your local environment
3. Make sure PostgreSQL is running and `DATABASE_URL` points to it

Required variables:

- `DATABASE_URL`
- `JWT_SECRET`
- `FRONTEND_URL`
- `NEXT_PUBLIC_API_URL`

Optional but recommended:

- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

## Install

```bash
npm install
```

## Database

Generate Prisma client:

```bash
npm run db:generate
```

Run migrations:

```bash
npm run db:migrate
```

Seed sample scholarships:

```bash
npm run db:seed
```

## Development

Run the frontend and backend together:

```bash
npm run dev
```

Default local URLs:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000`

## Production Build

```bash
npm run build
```

## API Overview

### Auth

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`

### Profile

- `GET /profile`
- `POST /profile`
- `PUT /profile`

### Scholarships

- `GET /scholarships`
- `GET /scholarships/:id`
- `POST /scholarships`

Filtering example:

```bash
GET /scholarships?state=CA&major=engineering
```

### Matching

- `POST /match/run`
- `GET /match/results`

### Applications

- `POST /applications`
- `GET /applications`
- `PUT /applications/:id`

### Essay Feedback

- `POST /essay-feedback`

## Matching Logic

- GPA match: `+30`
- Major match: `+25`
- State match: `+15`
- Financial need match: `+10`
- Demographic match: `+10`
- Extracurricular match: `+10`

Only scholarships scoring above `50` are saved as matches.

Win probability formula:

```text
base_probability = winners / applicants
adjusted_probability = base_probability * (match_score / 100)
```

## Notes

- The essay helper provides feedback only and does not generate full essays.
- Reminder emails are only sent when SMTP is configured.
- The frontend styling was adapted to use the imported Desktop UI direction you provided.
