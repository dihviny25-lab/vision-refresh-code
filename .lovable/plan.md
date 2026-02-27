

## Plan: Add Page Transitions with AnimatePresence

### Approach
Use `framer-motion`'s `AnimatePresence` with `useLocation` from react-router-dom to animate page content on route changes. The Layout (Header/Footer) stays static — only the `<main>` content animates.

### Steps

1. **Create `PageTransition.tsx` wrapper component** — a `motion.div` that fades in/out with a slight vertical slide, wrapping page content inside Layout's `<main>`.

2. **Update `Layout.tsx`** — wrap `{children}` with `AnimatePresence` and the new `PageTransition` component, using `useLocation` as the animation key.

3. **Update `App.tsx`** — pass `location` to `Routes` and add `useLocation` so `AnimatePresence` can detect route changes. Move Layout to wrap Routes (or keep per-page but pass location key).

### Architecture Decision
Since every page already uses `<Layout>`, the cleanest approach is to add the transition inside `Layout.tsx` so all pages get it automatically without changing each page file.

### Files to modify
- **New:** `src/components/PageTransition.tsx`
- **Edit:** `src/components/Layout.tsx`
- **Edit:** `src/App.tsx` (add `useLocation` + `AnimatePresence` at router level)

