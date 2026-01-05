# Architecture

This app follows a lightweight MVC-style separation within the Next.js App Router.

## Controller (Routes)
- Location: `src/app/**/page.tsx`
- Responsibility: orchestrate model calls and pass data into views.
- Rule: keep UI logic thin and avoid data shaping in route files.

## Model (Data)
- Location: `src/models/`
- Responsibility: fetch, filter, and transform data for features (e.g., `posts.ts`, `works.ts`).
- Rule: only models touch Contentlayer exports directly.

## View (UI)
- Location: `src/components/views/`
- Responsibility: render UI for each page with props from controllers.
- Rule: no data fetching; purely presentational or client-state concerns.
