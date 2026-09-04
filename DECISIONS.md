# DECISIONS.md – decision log

Append-only. One entry per decision the spec did not make for you. Newest at the bottom. Never edit or remove earlier entries; if a decision is reversed, add a new entry that says so.

Format:

```
## YYYY-MM-DD – Batch N – <short title>
Decision: <what was chosen>
Rejected: <the alternative(s) and why not>
Spec: <section this relates to, e.g. SPEC.md § 6.3>
```

Pre-filled decisions made by the spec author (not by the build agent):

## 2026-09-04 – Spec – Existing modules first in the navigation
Decision: The five existing modules keep the platform's order at the left; the five new modules follow after a divider. The app opens on Command Center.
Rejected: New modules first – would break the "same product, grown" story the nav is meant to tell.
Spec: SPEC.md § 2.1

## 2026-09-04 – Spec – Decorative nav icons are not buttons
Decision: The chat, headset and book icons in the nav are non-focusable spans with titles, so the "no dead buttons" rule holds without inventing behaviour for existing features.
Rejected: Buttons opening "outside scope" popovers – adds clicks that lead nowhere.
Spec: DESIGN.md § 3

## 2026-09-04 – Spec – Fixed demo clock that advances per action
Decision: The clock is fixed at 14:40 and advances one minute per state-changing action, so timestamps in the log stay readable and the demo is deterministic.
Rejected: Wall-clock time – makes screenshots and rehearsals non-reproducible.
Spec: SPEC.md § 0, § 4

## 2026-09-04 – Spec – English UI, Swedish data values, English date words
Decision: All labels English; people, places, hospitals and teams Swedish as given; dates rendered in English ("Friday 4 September") rather than the platform's Swedish locale strings.
Rejected: Mirroring the platform's mixed locale – would require a locale layer the prototype does not need.
Spec: SPEC.md § 5, DESIGN.md § 2

## 2026-09-04 – Spec – OpenStreetMap tiles instead of Mapbox
Decision: Leaflet with OpenStreetMap standard tiles; no API key.
Rejected: Mapbox as in the platform – needs a token and an account; visual difference is acceptable for a prototype.
Spec: DESIGN.md § 4

## 2026-09-04 – Batch 1 – shadcn/ui components vendored from the shadcn repository instead of the CLI
Decision: `npx shadcn init` could not reach `ui.shadcn.com` from the build environment (network policy), so the component files for button, dialog, sheet, dropdown-menu, select, tabs, table, input, textarea, checkbox, switch, tooltip, popover, progress and sonner were fetched from the shadcn/ui repository's `new-york-v4` registry (the same files the CLI would copy) into `src/components/ui/`, with their runtime dependencies `radix-ui`, `class-variance-authority`, `clsx`, `tailwind-merge`, `sonner` and the dev dependency `tw-animate-css`. Tailwind CSS v4 (the version the current CLI installs) with `@tailwindcss/vite`. The files were then restyled to DESIGN.md (sizes, radii, borders, focus ring) and `next-themes` was dropped from the toaster.
Rejected: Writing the components from scratch – would diverge from shadcn's accessibility behaviour; waiting for network access – nobody will grant it.
Spec: SPEC.md § 1

## 2026-09-04 – Batch 1 – Toolchain versions
Decision: Vite 7, TypeScript 5.9, React 18.3, react-router-dom 6, zustand 5, react-leaflet 4 with leaflet 1.9, vitest 3. Toasts use sonner (the shadcn-recommended option). `npm run typecheck` runs `tsc --noEmit` on both the app and node projects.
Rejected: React 19 / Vite 8 as scaffolded by `create-vite` – SPEC.md § 1 names React 18 and react-leaflet 4 does not support React 19.
Spec: SPEC.md § 1

## 2026-09-04 – Batch 1 – Nav sized to fit 1280 px
Decision: With ten module tabs, the scope selector and the full right cluster, DESIGN.md's 16/500 tabs with a 32 px gap need about 1 530 px. The tabs are rendered 15/500 with a 12 px gap; the scope name is capped at 200 px with an ellipsis (full name in the title); the three decorative icons and the user's name beside the avatar are shown only from 1440 px (the avatar carries the name as its title). Everything else in DESIGN.md § 3 is unchanged.
Rejected: A horizontally scrolling nav or wrapping tabs – both break the platform look; a smaller tab font – harder to read for the audience.
Spec: DESIGN.md § 3, CLAUDE.md § Hard constraints (1280 px)

## 2026-09-04 – Batch 1 – Clock and staleness arithmetic
Decision: The clock is stored as minutes since 00:00. "Older than 30 minutes" means strictly more than 30 minutes between the figure's time and the clock, so Ekhaga vårdhubb (14:10) becomes Delayed at 14:41 and Fältsjukhus Alfa (13:55) is Delayed from 14:40, as SPEC.md § 5.2 describes.
Rejected: "30 minutes or more" – would make Ekhaga Delayed already at 14:40, contradicting § 5.2.
Spec: SPEC.md § 5.2, § 7.1

## 2026-09-04 – Batch 1 – Extra node fields for the Command Center cards
Decision: `CareNode` gains two optional prototype fields: `emergencyDepartment` (slots 40, in use 31 as a Figure from EHR 14:38) and `staffBreakdown` (38 doctors, 112 nurses, 96 assistant nurses, 7 other), both only on Vikby sjukhus. Transport vehicles carry an optional `seats` number. The CT queue (9 waiting, median 95 min) is a constant `CT_QUEUE` in mock.ts and the five Vikby sources are `VIKBY_SOURCES`.
Rejected: Hard-coding these numbers in the card components – SPEC.md § 7.5 forbids hard-coded numbers in components.
Spec: SPEC.md § 3, § 6.1.1

## 2026-09-04 – Batch 1 – Patient generation choices
Decision: Six Critical patients but only two Ambulance and two Intensive care transport slots exist, so the four Ambulance/Intensive care transport needs go to Critical patients and the remaining two Critical patients need a Stretcher. Equipment items (10 + 8 + 6 = 24) over 22 equipped patients: two Critical patients carry Monitoring and Oxygen, every other equipped patient carries one item. Given names cycle through the list offset by 17 positions from the family names so that the pairs do not alliterate; every name in both lists is used exactly once. Seed 20260904; script in `scripts/generate-patients.mjs`.
Rejected: Giving Stretcher to no Critical patient – impossible with the exact transport counts.
Spec: SPEC.md § 5.7

## 2026-09-04 – Batch 1 – Audit entries for the EHR outage are attributed to System
Decision: Toggling the outage (demo switch or IT outage playbook) writes "EHR connection lost, switched to operational mirror" and "EHR connection restored" with actor System, object EHR, detail Vikby sjukhus, because the outage is an automatic effect rather than something Eva Lind does to the hospital.
Rejected: Attributing them to Eva Lind – the demo switch stands in for an external event.
Spec: SPEC.md § 4, § 7.2

## 2026-09-04 – Batch 1 – Close incident from the banner
Decision: The banner's "Close incident" opens the § 6.2.5 dialog from the shell (Layout) so the banner is wired to state in Batch 1; the confirm button is disabled until the Incident module lands in Batch 3.
Rejected: Navigating to /incident first – the spec says the banner link opens the dialog directly.
Spec: SPEC.md § 2.5

## 2026-09-04 – Batch 1 – Unknown routes
Decision: Any unknown hash route redirects to /command-center, the same as `/`.
Rejected: A "not found" page – the spec defines no such page and there are no links to unknown routes.
Spec: SPEC.md § 2.1
