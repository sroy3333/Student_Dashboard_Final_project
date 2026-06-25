# 🎓 Student Dashboard

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

---

## 📖 Project Description

**Student Dashboard** is a modern, responsive, full-stack web application built with **Next.js 16** and **React 19** that provides students with a centralised interface to track their learning progress, browse enrolled courses, monitor activity, and manage their academic journey — all backed by **Supabase** as the cloud database.

The application features a polished, animated UI built with **Tailwind CSS v4** and **Framer Motion**, offering skeleton loading states, smooth page transitions, and a clean sidebar navigation experience. Designed as a final capstone project, it demonstrates production-level frontend architecture with server-side data fetching, reusable component design, and type-safe TypeScript throughout.

---

## ✨ Features

- 🏠 **Personalised Hero Dashboard** — A welcoming hero tile displaying the student's name, progress overview, and quick stats at a glance
- 📚 **Course Browser** — Dynamically rendered course cards fetched from Supabase, each displaying course title, category, progress, and relevant icon
- 📊 **Progress Tracking** — Visual progress bars per course showing completion percentages in real time
- 🏃 **Activity Feed** — Activity tiles surfacing recent student actions such as lessons completed, assignments submitted, and badges earned
- 💀 **Skeleton Loading States** — Full skeleton screens (`DashboardSkeleton`, `SkeletonCard`) that display while data loads, preventing layout shift
- 🧭 **Sidebar Navigation** — Collapsible sidebar with icon-based `NavItem` components for intuitive, accessible routing
- ⚡ **Animated Transitions** — Framer Motion variants power entrance animations, staggered card reveals, and route transitions
- 🗂️ **Icon Mapping System** — A utility `iconMap` dynamically assigns Lucide React icons to course categories without hardcoding
- 🔴 **Error Boundary** — Graceful `error.tsx` page for handling data fetch failures with user-friendly messaging
- ☁️ **Supabase Integration** — Real-time cloud database for course and student data with typed queries via `@supabase/ssr`

---

## 🛠️ Tech Stack

### Programming Languages

| Language | Usage |
|---|---|
| TypeScript | Primary language — all components, utilities, and types are fully typed |
| CSS | Global styles via `globals.css` and Tailwind utility classes |
| HTML | Semantic structure via JSX/TSX templates |

### Libraries / Frameworks

| Library / Framework | Version | Purpose |
|---|---|---|
| Next.js | 16.2.9 | React framework with App Router, SSR, and file-based routing |
| React | 19.2.4 | UI component library |
| Tailwind CSS | v4 | Utility-first CSS framework via PostCSS |
| Framer Motion | 12.40.0 | Declarative animation library for UI transitions |
| Lucide React | 1.21.0 | Icon library used in sidebar navigation and course cards |
| clsx | 2.1.1 | Conditional className utility |
| ESLint | 9 | Code linting with Next.js and TypeScript rulesets |

### Backend & Data

| Technology | Version | Purpose |
|---|---|---|
| Supabase JS | 2.108.2 | PostgreSQL cloud database client |
| @supabase/ssr | 0.12.0 | Server-side Supabase client for Next.js App Router |

---

## 📁 Project Structure

```
Student_Dashboard_Final_project/
│
├── public/                         # Static assets served at root
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/
│   ├── app/                        # Next.js App Router pages and layouts
│   │   ├── layout.tsx              # Root layout with global font and metadata
│   │   ├── page.tsx                # Home page — renders Dashboard component
│   │   ├── loading.tsx             # Streaming loading UI (shown during Suspense)
│   │   ├── error.tsx               # Error boundary page for fetch/render failures
│   │   ├── globals.css             # Global Tailwind and base CSS styles
│   │   └── favicon.ico             # App favicon
│   │
│   ├── components/
│   │   ├── animations/
│   │   │   └── motionVariants.ts   # Reusable Framer Motion animation variants
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Dashboard.tsx       # Root dashboard layout and data orchestrator
│   │   │   ├── DashboardSkeleton.tsx   # Full-page skeleton loading state
│   │   │   ├── HeroTile.tsx        # Welcome banner with student summary
│   │   │   ├── ActivityTile.tsx    # Individual recent-activity event tile
│   │   │   ├── CourseCard.tsx      # Individual course card with progress
│   │   │   ├── coursesSection.tsx  # Grid of CourseCard components
│   │   │   ├── ProgressBar.tsx     # Animated progress bar component
│   │   │   └── SkeletonCard.tsx    # Placeholder card during data loading
│   │   │
│   │   └── navigation/
│   │       ├── Sidebar.tsx         # Collapsible sidebar navigation shell
│   │       └── NavItem.tsx         # Individual icon + label navigation item
│   │
│   ├── lib/
│   │   ├── supabase.ts             # Supabase client initialisation (SSR-safe)
│   │   └── getCourses.ts           # Server-side data fetching from Supabase
│   │
│   ├── types/
│   │   └── course.ts               # TypeScript type definitions for Course model
│   │
│   └── utils/
│       └── iconMap.ts              # Maps course category strings to Lucide icons
│
├── AGENTS.md                       # AI agent coding rules for this repo
├── CLAUDE.md                       # Claude AI configuration reference
├── eslint.config.mjs               # ESLint flat config (Next.js + TypeScript)
├── next.config.ts                  # Next.js configuration
├── postcss.config.mjs              # PostCSS config for Tailwind v4
├── tailwind.config.ts              # Tailwind theme and plugin configuration
├── tsconfig.json                   # TypeScript compiler options
└── package.json                    # Project metadata and dependencies
```

---

## ⚙️ Installation Steps

### Prerequisites

Ensure the following are installed on your machine:

- [Node.js](https://nodejs.org/) v18.17 or higher
- [npm](https://www.npmjs.com/) v9+ (or `yarn` / `pnpm` / `bun`)
- A [Supabase](https://supabase.com/) project with your student and course data

### 1. Clone the Repository

```bash
git clone https://github.com/sroy3333/Student_Dashboard_Final_project.git
cd Student_Dashboard_Final_project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
touch .env.local
```

Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> You can find these values in your Supabase project under **Settings → API**.

---

## ▶️ How to Run the Project Locally

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-reloads whenever you edit any file under `src/`.

### Production Build

```bash
npm run dev
```

### Lint Check

```bash
npm run lint
```

---

## 🗄️ Supabase Database Setup

The dashboard pulls live course data from Supabase. Set up the following table in your Supabase project's SQL editor:

```sql
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  category text not null,
  progress integer default 0 check (progress >= 0 and progress <= 100),
  description text,
  created_at timestamp with time zone default now()
);

-- Optional: seed with sample data
insert into courses (title, category, progress, description) values
  ('Introduction to Python', 'Programming', 72, 'Learn Python from scratch.'),
  ('Web Design Fundamentals', 'Design', 45, 'HTML, CSS, and responsive layouts.'),
  ('Data Structures & Algorithms', 'Computer Science', 30, 'Core CS concepts and problem solving.');
```

---

## 🚀 Deployment

This project is optimised for one-click deployment on **Vercel**.

1. Push the project to your GitHub account
2. Visit [vercel.com/new](https://vercel.com/new) and import the repository
3. Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**
4. Click **Deploy**

The app will be live at `https://your-project.vercel.app`.

---

## 🎯 Key Design Decisions

**App Router Architecture** — Uses Next.js 16's App Router with `layout.tsx`, `loading.tsx`, and `error.tsx` colocated per route for fine-grained streaming and error handling.

**Server-Side Data Fetching** — `getCourses.ts` fetches course data server-side via `@supabase/ssr`, keeping API keys off the client and enabling fast initial renders.

**Skeleton-First Loading** — `DashboardSkeleton` and `SkeletonCard` are rendered via `loading.tsx` during Suspense boundaries, providing a seamless perceived-performance experience.

**Motion Variants Pattern** — All animations are centralised in `motionVariants.ts` and composed into components, making them easy to tune, reuse, and keep consistent across the dashboard.

**Icon Mapping Utility** — `iconMap.ts` decouples icon selection from component logic, allowing new course categories to be supported by a single config change rather than scattered conditionals.

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 sroy3333

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

---
<div>
    <a href="https://github.com/sroy3333/Student_Dashboard_Final_project/issues">Report a Bug</a> ·
    <a href="https://github.com/sroy3333/Student_Dashboard_Final_project/issues">Request a Feature</a> ·
    <a href="https://github.com/sroy3333/Student_Dashboard_Final_project">View Repository</a>
</div>
