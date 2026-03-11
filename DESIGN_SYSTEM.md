# Design System Instructions for LLMs

When generating code for this project, you must strictly adhere to the following design system rules, specifically regarding Chakra UI components.

## Button Hierarchy and Usage

All buttons use `import { Button } from '@/components/ui/button'`.

### Variants

| Figma Name | Chakra `variant=` | Visual | Text Color |
|---|---|---|---|
| Primary | `solid` | Filled `#2266F0` | White |
| Secondary | `outline` | Border `#2266F0` | `#2266F0` |
| Link | `ghost` | Transparent | `#2266F0` |
| Danger | `danger` | Filled `#DB1C3C` | White |
| Danger Secondary | `dangerOutline` | Border `#DB1C3C` | `#DB1C3C` |
| Danger Link | `dangerGhost` | Transparent | `#DB1C3C` |

### Sizes

| Figma Size | Chakra `size=` | Height | Min Width | Padding X |
|---|---|---|---|---|
| Small | `sm` | 24px | 64px | 8px |
| Medium | `md` | 32px | 80px | 12px |
| Large | `lg` | 40px | 80px | 12px |

### States (automatic via Chakra)
- **Hover:** Subtle dark overlay `rgba(17,17,18,0.04)`
- **Pressed:** Dark overlay `rgba(17,17,18,0.10)`
- **Focus:** White inset ring + `#2266F0` focus border
- **Disabled:** `opacity: 0.40`, add `disabled` prop
- **Loading:** Spinner replaces text, add `loading` prop

### Usage Rules
- The **default** button is `variant="solid" size="md"` (Primary, Medium).
- There should generally be only **one** Primary (`solid`) button per page. If absolutely necessary, two are permissible.
- Use `outline` for secondary actions alongside a primary button.
- Use `ghost` for low-priority or tertiary actions.
- Use `danger`, `dangerOutline`, `dangerGhost` only for destructive actions (delete, remove, etc.).

## General Rules
- Always use the custom `@/components/ui/button` component (which wraps the Chakra UI button).
- Ensure that the global `2px` border radius and primary color scheme (`#2266F0`) are inherently respected by utilizing these standard variants without manually overriding colors/radii unless explicitly requested.

> [!CAUTION]
> **STRICT COLOR RULE — NO EXCEPTIONS.**
> LLMs **MUST NEVER** guess, invent, or use any color that is not defined in this design system's core palette below. If you need a yellow, use our yellow. If you need a green, use our green. **Any** arbitrary hex code (e.g. `#FFA500`, `#00FF00`, `tomato`) that does not appear in the tables below is **FORBIDDEN**.

## Core Color Palette Reference

These are the **only** colors available. Use the Chakra token syntax `{colors.<palette>.<step>}` or the shorthand `<palette>.<step>` in components. Semantic tokens like `fg.primary`, `bg.page`, etc. are **aliases** that point to these same values — always prefer semantic tokens when one exists.

### Gray (solid)
| Token | Hex |
|---|---|
| `gray.white` | `#FFFFFF` |
| `gray.black` | `#000000` |
| `gray.5` | `#F7F8FA` |
| `gray.10` | `#EBEDF0` |
| `gray.20` | `#DFE1E5` |
| `gray.30` | `#C6C9CF` |
| `gray.40` | `#AAAEB5` |
| `gray.50` | `#8C919C` |
| `gray.60` | `#6C717A` |
| `gray.70` | `#50545C` |
| `gray.80` | `#393B40` |
| `gray.90` | `#27292B` |
| `gray.95` | `#1C1D1F` |
| `gray.100` | `#111112` |

### Gray Alpha (light-theme overlays)
| Token | Value |
|---|---|
| `grayAlpha.5` | `rgba(17,17,18,0.04)` |
| `grayAlpha.10` | `rgba(17,17,18,0.10)` |
| `grayAlpha.20` | `rgba(17,17,18,0.20)` |
| `grayAlpha.30` | `rgba(17,17,18,0.30)` |
| `grayAlpha.40` | `rgba(17,17,18,0.40)` |
| `grayAlpha.50` | `rgba(17,17,18,0.50)` |
| `grayAlpha.60` | `rgba(17,17,18,0.60)` |
| `grayAlpha.65` | `rgba(17,17,18,0.65)` |
| `grayAlpha.70` | `rgba(17,17,18,0.70)` |
| `grayAlpha.80` | `rgba(17,17,18,0.80)` |
| `grayAlpha.90` | `rgba(17,17,18,0.90)` |
| `grayAlpha.95` | `rgba(17,17,18,0.95)` |

### White Alpha (dark-theme overlays)
| Token | Value |
|---|---|
| `whiteAlpha.5` | `rgba(255,255,255,0.05)` |
| `whiteAlpha.10` | `rgba(255,255,255,0.10)` |
| `whiteAlpha.20` | `rgba(255,255,255,0.20)` |
| `whiteAlpha.30` | `rgba(255,255,255,0.30)` |
| `whiteAlpha.40` | `rgba(255,255,255,0.40)` |
| `whiteAlpha.50` | `rgba(255,255,255,0.50)` |
| `whiteAlpha.60` | `rgba(255,255,255,0.60)` |
| `whiteAlpha.65` | `rgba(255,255,255,0.65)` |
| `whiteAlpha.70` | `rgba(255,255,255,0.70)` |
| `whiteAlpha.80` | `rgba(255,255,255,0.80)` |
| `whiteAlpha.90` | `rgba(255,255,255,0.90)` |
| `whiteAlpha.95` | `rgba(255,255,255,0.95)` |

### Blue
| Token | Hex |
|---|---|
| `blue.5` | `#F2F7FF` |
| `blue.10` | `#E8F1FF` |
| `blue.20` | `#D1E3FF` |
| `blue.30` | `#ADCBFF` |
| `blue.40` | `#82B0FF` |
| `blue.50` | `#4F8DFF` |
| `blue.60` | `#2266F0` |
| `blue.70` | `#0E48C4` |
| `blue.80` | `#103487` |
| `blue.90` | `#142757` |
| `blue.95` | `#121B36` |
| `blue.100` | `#0D121F` |

### Green
| Token | Hex |
|---|---|
| `green.5` | `#E6FCF9` |
| `green.10` | `#C8F7EF` |
| `green.20` | `#A0F0E3` |
| `green.30` | `#72DBC8` |
| `green.40` | `#49BFA9` |
| `green.50` | `#30A18A` |
| `green.60` | `#008066` |
| `green.70` | `#1C5E50` |
| `green.80` | `#164239` |
| `green.90` | `#112E27` |
| `green.95` | `#0E211D` |
| `green.100` | `#0A1714` |

### Red
| Token | Hex |
|---|---|
| `red.5` | `#FFF2F5` |
| `red.10` | `#FFE5EC` |
| `red.20` | `#FFD6E0` |
| `red.30` | `#FFB5C5` |
| `red.40` | `#FF7893` |
| `red.50` | `#FF5271` |
| `red.60` | `#DB1C3C` |
| `red.70` | `#A80F26` |
| `red.80` | `#75121F` |
| `red.90` | `#4F131A` |
| `red.95` | `#331014` |
| `red.100` | `#1F0C0D` |

### Yellow
| Token | Hex |
|---|---|
| `yellow.5` | `#FFF6E3` |
| `yellow.10` | `#FFEBC2` |
| `yellow.20` | `#FFDB99` |
| `yellow.30` | `#FFBE4F` |
| `yellow.40` | `#F2950A` |
| `yellow.50` | `#D47C00` |
| `yellow.60` | `#A65E00` |
| `yellow.70` | `#7D4604` |
| `yellow.80` | `#57330A` |
| `yellow.90` | `#3B240C` |
| `yellow.95` | `#26180B` |
| `yellow.100` | `#171008` |

### Semantic Aliases
These are higher-level tokens that reference the core palette. Prefer these when they apply:

| Semantic Token | Points To | Use For |
|---|---|---|
| `fg.primary` | `gray.100` (`#111112`) | Primary text, headings |
| `fg.secondary` | `grayAlpha.65` | Secondary text, labels |
| `fg.accent` | `blue.60` (`#2266F0`) | Selected tabs, accent text |
| `fg.success` | `green.60` (`#008066`) | Success indicators, positive trends |
| `bg.primary` | `gray.white` (`#FFFFFF`) | Card/section backgrounds |
| `bg.page` | `gray.5` (`#F7F8FA`) | Page background |
| `bg.selected` | `grayAlpha.10` | Selected nav state |
| `border.weak` | `gray.30` (`#C6C9CF`) | Subtle borders, dividers |

## Mandatory Layout Template

> [!IMPORTANT]
> **EVERY SINGLE DESIGN CREATED BY ANY LLM WITH NO EXCEPTION MUST USE THIS EXACT LAYOUT TEMPLATE.** 
> This is the most basic template and the absolute default of every app.

When constructing the main page application layout, you **MUST** strictly adhere to this flex structure:
- **Root Wrapper:** A full viewport flex container preventing body scroll (`h="100vh" w="full" overflow="hidden"`).
- **Side Navigation:** The `<Navigation />` component placed on the far left. It MUST be full height and sticky (`flexShrink={0}`). Background MUST use `bg="bg.primary"` (which is mapped to `#FFFFFF`).
- **Main Column:** A vertical flex container spanning the remainder of the width (`flex="1" direction="column" minW="0"`).
  - **Page Header:** The `<PageHeader />` component placed at the top of the column. It MUST be full width and sticky (`flexShrink={0}`). Background MUST use `bg="bg.primary"` (which is mapped to `#FFFFFF`). **When a Tab Panel is present**, remove the `tabs` prop from PageHeader — the Tab Panel owns the tabs.
  - **Tab Panel (optional):** The `<TabPanel />` component placed directly below the Page Header and above the scrollable space. Full width, no extra padding/margin. Use it for detail pages, entity pages, or any page that needs a prominent title with description, KPIs, and tabs. See the Tab Panel section below for details.
  - **Scrollable Space:** A single `Box` underneath the header (or Tab Panel) that fills the rest of the height and handles all vertical scrolling (`flex="1" overflowY="auto"`). 
    - **MANDATORY PADDING:** This specific scrollable container MUST use the explicit layout tokens: `bg="bg.page"` (which is mapped to `#F7F8FA`), `16px` padding all around (`p="16px"`), and an internal `<Flex direction="column" gap="8px" w="full">` wrapper.
    - **MANDATORY PAGE SECTION COMPONENT:** Any content or feature blocks placed inside this scrollable area **MUST** be wrapped in a `<PageSection>` component. Nothing should sit directly in the page background without being contained inside a section block first.
    - **SECTION LAYOUT RULES:**
      - A single `<PageSection>` on a row is always **full width** (it uses `flex: 1`).
      - When multiple `<PageSection>` components need to sit side-by-side, wrap them in a `<Flex direction="row" gap="8px" w="full">`. Each section will **evenly split** the available width because `<PageSection>` has `flex: 1` and `minW: 0`.
      - Rows of sections stack vertically and are separated by an **8px** gutter (the `gap="8px"` on the outer column flex).

## Custom Components

### 1. Page Section
- **Import:** `import { PageSection, type PageSectionProps } from '@/components/ui/page-section'`
- **Usage Rule:** Use as the required block wrapper for *all* content placed inside the main `App` layout scrollable space. 
- **Props:** Accepts `title` (node/string), `subtitle` (node/string), `actions` (node), and `children`.
- **Flex Behavior:** Uses `flex: 1` and `minW: 0` so that a single section fills 100% width, and multiple sections in a row split width evenly.
- **Layout Requirements:** Forces `bg.primary` (`#FFFFFF`), a specific multi-layered shadow token (`page.section`), and internal padding/gaps (`16px`) mirroring strict Figma specs. Includes an optional Header slot if `title`/`subtitle`/`actions` are passed.

### 1. Side Navigation
- **Import:** `import { Navigation, type NavLink } from '@/components/ui/navigation'`
- **Usage Rule:** Use for the top-level application navigation container placed on the far left edge of the viewport. Supports configuring a React Element (`logo`), primary navigation array (`links`), and secondary anchor navigation array (`footerLinks`). If a `logo` prop is omitted, the Side Navigation will default to displaying the C3 AI brand logo which acts as an interactive "home" button (`href="/"`).
- **Layout Requirements:** Should be wrapped in a main horizontal flex row serving as the root container. The navigation is fixed at `68px` wide, while the neighboring page content should fill the remaining `flex: 1` width and handle its own vertical scrolling (`overflowY="auto"`).
- **Design:** Conforms strictly to the C3 AI node requirements spanning the full height of the viewport with a `1px` subtle right border.

### 2. Page Header
- **Import:** `import { PageHeader, type PageHeaderProps } from '@/components/ui/page-header'`
- **Usage Rule:** Use for the top header of a main page content area. Placed directly below or alongside the main application layout wrappers.
- **Props:** Accepts `title` (text or node), `tabs` (string array), `activeTab` (string matching a tab), `onTabChange` (callback function), and `actions` (a node for placing buttons or icons on the right).
- **Layout Requirements:** Sits at the top of the scrolling page view (`h="40px"`), creating a visual hierarchy above grids, forms, or data displays. It MUST have a `1px` bottom border using the `border.weak` token (`#C6C9CF`). Handles its own padding and alignment.
- **Important:** When a `<TabPanel />` is rendered on the same page, **remove the `tabs` prop** from the Page Header. The Tab Panel takes over as the tab owner.

### 3. Tab Panel
- **Import:** `import { TabPanel, type TabPanelProps, type TabPanelParagraph } from '@/components/ui/tab-panel'`
- **When to Use:** This is up to the LLM's best judgement based on the user's prompt, but a **very common pattern** is to use the Tab Panel for:
  - **Detail pages** (e.g., viewing a specific entity like an asset, sensor, case)
  - Any page requiring a **prominent title and description** along with **KPIs** and **tabs**
  - Generally, if a page has tabs, they should live in the Tab Panel instead of the Page Header
- **Position:** Rendered directly between the `<PageHeader />` and the scrollable `<Box>`, full width, no outer padding. It is **sticky** (`flexShrink={0}`) and does not scroll with the page content.
- **Corner Radius Exception:** The Tab Panel uses `borderRadius="0"` — this is an intentional exception to the design system's standard 2px radius.
- **Bottom Border:** Has a `1px` bottom border using `border.weak` (`#C6C9CF`), separating it from the scrollable area.
- **Props:**
  - `title` (string/node) — 20px Medium, `fg.primary`
  - `subtitle` (string, optional) — 14px Regular, `fg.secondary`
  - `description` (string, optional) — 12px Regular, `fg.primary`, max 3 lines
  - `paragraphs` (array of `{ label, value }`, optional) — key/value metadata fields
  - `actions` (ReactNode, optional) — action buttons (use existing `<Button />` variants)
  - `headerExtra` (ReactNode, optional) — icon buttons next to the title
  - `tabs` (string[], optional) — tab labels
  - `activeTab` (string, optional) — currently selected tab
  - `onTabChange` (callback, optional) — tab click handler
  - `children` (ReactNode, optional) — right-side content area (e.g., KPI tiles, charts)
- **Tab Colors:** Selected tabs use `fg.accent` (`#2266F0`) for both text and 2px bottom border. Unselected tabs use `fg.secondary`.
- **Design System Integration:** Uses `bg.primary`, `page.section` shadow, and all semantic foreground tokens so that changing a token in `provider.tsx` updates this component automatically.
