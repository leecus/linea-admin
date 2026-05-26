# Linea Admin

Linea Admin is a minimalist admin design system demo for high-frequency operational interfaces.

It is built as a static frontend page with no build step, so it can be viewed directly through GitHub Pages.

## Design Philosophy

Linea Admin treats admin products as decision surfaces, not showcase pages.

The style is intentionally quiet:

- Use lines, spacing, typography, and grayscale to create structure.
- Reserve color for status, risk, progress, and feedback.
- Avoid heavy cards, shadows, gradients, and decorative visual noise.
- Keep interaction feedback short and unobtrusive.
- Design components for scanning first, detailed reading second.

The name **Linea** comes from the system's core visual language: precise linework, stable grids, and restrained hierarchy.

## Components

The demo page includes common frontend/admin UI components:

- Foundations: color tokens, type scale, spacing rhythm
- Navigation: top nav, side nav, breadcrumbs, tabs, steps, anchors
- Actions: buttons, icon buttons, segmented controls, menus, pagination
- Forms: inputs, search, select, textarea, validation, switches, radio, checkbox, range, upload, OTP
- Data display: metrics, table, tags, progress, ring progress, charts, timeline, description list, tree, calendar
- Feedback: alerts, toast, modal, skeleton, empty state, accordion, result states
- Overlays: drawer, popover, tooltip, notification, command palette
- Enterprise patterns: transfer, kanban, permission matrix, file list, approval comments
- Layout: list/detail workspace pattern

## File Structure

```text
.
├── index.html
├── styles.css
├── app.js
└── assets/
    └── icon.svg
```

## Usage

Open `index.html` directly in a browser.

For GitHub Pages, publish the repository from:

```text
main / root
```

Then the page should be available at:

```text
https://leecus.github.io/linea-admin/
```

## Notes

This is currently a design style and component showcase, not a packaged npm component library. The markup and styles are intentionally plain HTML/CSS/JS so the visual system can be reviewed, copied, or later ported to React/Vue.
