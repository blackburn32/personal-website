# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Alex Blackburn, built with Nuxt 3 as a static site generator (SSR disabled). The site showcases projects, work experience, writing, and music.

Live site: https://www.alexblackburn.me

## Commands

**Development:**
```bash
npm install          # Install dependencies
npm run dev          # Start dev server on http://localhost:3000
```

**Deployment:**
```bash
npm run generate     # Generate static site to dist/
npm run deploy       # Deploy to GitHub Pages using gh-pages
```

## Tech Stack

- **Framework:** Nuxt 3 (SSR disabled, static generation)
- **Styling:** Tailwind CSS + DaisyUI (night theme)
- **Animations:** AOS (Animate On Scroll) + @vueuse/motion
- **TypeScript:** Configured via Nuxt's auto-generated tsconfig

## Architecture

### Component Structure

The site follows a **section-based architecture** where each major area (projects, work, writing, music) has:

1. **A Summary component** - Main section page that aggregates all items
   - Example: `components/projects/Summary.vue` lists all project components
   - Controls layout direction (flex-row vs flex-row-reverse) for alternating visual rhythm

2. **Individual item components** - One per portfolio item
   - Example: `components/projects/GoatsRUs.vue`
   - Most extend from base components (like `ProjectBase.vue`)

### ProjectBase Pattern

All project components use the `ProjectBase.vue` wrapper component which provides:
- Consistent layout with responsive flex direction
- Motion animations (slide-in for text, pop for iframe)
- DaisyUI mockup styling (mockup-window, mockup-phone, mockup-browser)
- iframe embedding with loading states via `IFrameWithLoading.vue`

**Props:**
- `projectName` - Display name
- `projectDescription` - Description text
- `projectUrl` - URL to live project
- `sourceCodeUrl` - Optional GitHub link
- `frameWidth` / `descriptionWidth` - Responsive widths (e.g., "w-1/2")
- `flexDirection` - Layout direction (flex-row or flex-row-reverse)
- `height` - iframe height class (e.g., "h-[600px]")
- `mockupType` - DaisyUI mockup class

### Page Structure

- `pages/index.vue` - Main landing page, composes all Summary components
- `pages/resume.vue` - Resume page
- **No layouts directory** - Layout is handled directly in pages
- **No app.vue** - Uses Nuxt's default

### Styling Approach

- **Pure utility classes** - No custom CSS beyond Tailwind directives in `assets/css/main.css`
- **DaisyUI components** - hero, mockup-window, link-primary, etc.
- **Night theme only** - Configured in tailwind.config.js
- **Responsive design** - Mobile-first with md: breakpoints

### Animation Strategy

1. **AOS (Animate On Scroll)** - Initialized in `pages/index.vue` onMounted
   - Disabled on mobile devices
   - One-time animations only
   - 500ms duration with ease-out-cubic easing

2. **@vueuse/motion directives** - Used in individual components
   - `v-motion-slide-visible-once-left` - Text content
   - `v-motion-pop-visible-once` - iframes and media

### Navigation

- `components/Navbar.vue` - Fixed top navigation
- Uses anchor links with scroll-margin-top classes (`scroll-mt-*`) on sections for proper offset
- Smooth scrolling to section IDs: #home, #projects, #work, #writing, #music

## Adding New Content

**To add a new project:**

1. Create `components/projects/NewProject.vue`:
```vue
<template>
  <ProjectBase
    projectName="Project Name"
    projectDescription="Description here"
    projectUrl="https://..."
    sourceCodeUrl="https://github.com/..."
    frameWidth="w-1/2"
    descriptionWidth="w-1/2"
    height="h-[600px]"
    mockupType="mockup-window"
    :flex-direction="flexDirection"
  />
</template>
<script lang="ts" setup>
import ProjectBase from '~/components/projects/ProjectBase.vue';
const props = defineProps({ flexDirection: String })
</script>
```

2. Add to `components/projects/Summary.vue`:
```vue
<ProjectsNewProject flex-direction="flex-row"/>
```

3. Alternate `flex-direction` values (flex-row / flex-row-reverse) for visual variety

**Similar patterns apply for:**
- Work experience: `components/work/`
- Writing: `components/writing/`
- Music: `components/music/`
