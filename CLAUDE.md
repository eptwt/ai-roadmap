# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Architecture

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4

**Key Files:**
- `src/app/page.tsx` - Main page with banner, legend, and roadmap container
- `src/components/RoadmapSVG.tsx` - Client component with all SVG nodes and connections
- `src/app/globals.css` - Custom styles including CSS-based hover states for each node color
- `src/app/layout.tsx` - Root layout with metadata and Simple Analytics script

**RoadmapNode Component** (`RoadmapSVG.tsx`):
```typescript
interface NodeProps {
  id: string;      // Unique identifier
  title: string;   // Display text
  desc: string;    // Not currently rendered, for reference
  video?: string;  // YouTube URL - opens in new tab on click
  link?: string;   // External URL (without https://) - opens in new tab
  x: number;       // SVG x position
  y: number;       // SVG y position
  width: number;   // Node width (height is fixed at 46.3)
  fill: string;    // Background color
  textFill?: string; // Text color (default: black)
}
```

**Category Colors:**

| Category | Main Node | Sub-node | Text |
|----------|-----------|----------|------|
| Foundation | `#feff00` | `#feff99` | black |
| Coding | `#ff6b6b` | `#ffb5b5` | white/black |
| Creative | `#9b59b6` | `#cdacdb` | white/black |
| Automation | `#3498db` | `#9acced` | white/black |
| Monetization | `#2ecc71` | - | white |

## Adding New Nodes

1. Add `<RoadmapNode>` in `RoadmapSVG.tsx` with appropriate props
2. Add connecting `<path>` elements with `strokeDasharray="6, 4"` for dotted lines
3. If adding a new color, add hover state in `globals.css`:
   ```css
   #editor-roadmap svg .clickable-group:hover > rect[fill="#NEWCOLOR"] { fill: #DARKERCOLOR; }
   ```

## Deployment

Deployed on Vercel with GitHub integration. Push to `main` triggers automatic deployment.
