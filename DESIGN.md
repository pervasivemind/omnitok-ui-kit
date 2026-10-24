---
name: Omnitok UI v3
description: The shared look of the Omnitok BI platform (portal, builder and console), as implemented in @omnitok/ui 3.x.
colors:
  chrome-navy: "#1A1240"
  shared-violet: "#4D4A9D"
  violet-soft: "#F0EFF8"
  violet-ink: "#3B3880"
  violet-line: "#E0DEF2"
  action-pink: "#E0156D"
  action-pink-ink: "#C8105F"
  identity-pink: "#FF177B"
  action-violet-end: "#6D2DD6"
  focus-violet: "#6251A3"
  module-green: "#0B7A5F"
  canvas: "#F5F6F9"
  surface: "#FFFFFF"
  ink: "#252139"
  body-text: "#465066"
  muted-text: "#667085"
  muted-on-tint: "#5B6478"
  icon-grey: "#98A1B3"
  control-line: "#D0D4DE"
  hairline: "#E4E5ED"
  success: "#166534"
  success-soft: "#E3F4EA"
  warning: "#8A5A16"
  warning-soft: "#FBF1DF"
  error: "#C4476A"
  error-soft: "#FDEEF2"
typography:
  display:
    fontFamily: "Nunito Sans, Inter, system-ui, sans-serif"
    fontSize: "25px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "Nunito Sans, Inter, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.8px"
    fontFeature: "tnum"
  title:
    fontFamily: "Nunito Sans, Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 800
    lineHeight: 1.6
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.54
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.33
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  badge: "7px"
  control: "10px"
  button: "12px"
  card: "14px"
  modal: "18px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.action-pink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.button}"
    padding: "8px 16px"
  button-secondary:
    backgroundColor: "{colors.violet-soft}"
    textColor: "{colors.violet-ink}"
    rounded: "{rounded.button}"
    padding: "8px 16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  modal:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.modal}"
  badge-primary:
    backgroundColor: "{colors.violet-soft}"
    textColor: "{colors.violet-ink}"
    rounded: "{rounded.badge}"
    padding: "2px 8px"
  shell-header:
    backgroundColor: "{colors.chrome-navy}"
    height: "42px"
  shell-sidebar:
    backgroundColor: "{colors.chrome-navy}"
    width: "250px"
---

# Design System: Omnitok UI v3

<!-- Derived from the code of @omnitok/ui 3.1.2 (packages/core/tailwind.preset.js,
     packages/core/src/styles/index.css and the components) on 2026-10-24.
     The North Star and the colour names are a proposal pending review. -->

## Overview

**Creative North Star: "The Calm Control Room"**

Omnitok UI is the instrument panel of a BI platform: people come to it to read numbers, decide and move on. The chrome is a single deep navy frame (header and sidebar) that holds still while the canvas, a cool off-white, carries the work. Everything on the canvas is white paper with hairline borders and a barely visible shadow, so the data is the brightest and most saturated thing on the screen.

Colour is spent sparingly and with meaning. Pink is the platform's identity and the colour of the one primary action; violet is the quiet colour of shared, secondary actions and selected options; green marks the selected tab or page of the current module. Status colours are muted and always arrive with a word or an icon, never as colour alone. The type pairing is functional: Inter for everything the user reads or operates, Nunito Sans for titles and the numbers that matter.

The density is that of an operator tool, not a marketing page: 13 px body, 11 px as the floor, compact controls, generous but not airy spacing. The system exists once, inside the components; products consume it and do not restyle it.

**Key Characteristics:**
- Navy frame, cool canvas, white surfaces with hairlines.
- One pink action per area; violet for everything shared or selected.
- Inter for the interface, Nunito Sans 800 for titles and KPI values.
- 11 px is the smallest text; muted grey never lighter than 4.5:1.
- Every state is legible without colour (text, icon, check, shape).
- The look lives inside the components (no external stylesheets).

## Colors

A restrained palette: a navy frame, cool greys on paper, one identity pink and one working violet.

### Primary
- **Action Pink** (`action-pink`): the fill of the primary action and of accent badges. It carries white text at 4.67:1. The primary button paints it as a gradient into **Action Violet End** (`action-violet-end`), a token tenants may override (D14).
- **Identity Pink** (`identity-pink`): Omnitok's bright pink. Selection marks only (the sidebar's active bar and dot, text selection); never under or as text.
- **Action Pink Ink** (`action-pink-ink`): the accent when it has to be text on white (5.68:1).

### Secondary
- **Shared Violet** (`shared-violet`): links, ghost actions, keywords, info states, the first chart series.
- **Violet Soft / Violet Ink / Violet Line** (`violet-soft`, `violet-ink`, `violet-line`): the secondary button, selected options in menus, primary badges. Text on the soft tint is always the ink.
- **Focus Violet** (`focus-violet`): the 2 px focus outline, offset 2 px, on every focusable element.

### Tertiary
- **Module Green** (`module-green`): the selected tab or page of the current module (Disponibilidad by default), 5.30:1 under white text. A module or tenant may override it (`--omni-selected`).

### Neutral
- **Chrome Navy** (`chrome-navy`): header, sidebar and the login hero. Also the darkest step of the neutral scale.
- **Canvas** (`canvas`): the page background behind every surface.
- **Surface** (`surface`): cards, panels, menus, modals, inputs.
- **Ink** (`ink`): headings and KPI values.
- **Body Text** (`body-text`): running text.
- **Muted Text** (`muted-text`): captions and hints; 4.97:1 on white, 4.60:1 on canvas. The lightest grey allowed for text.
- **Muted on Tint** (`muted-on-tint`): captions on tinted surfaces, where muted text would fall under 4.5:1.
- **Icon Grey** (`icon-grey`): icons and decorative borders only (2.6:1).
- **Control Line** (`control-line`): the border of inputs, selects and textareas.
- **Hairline** (`hairline`): card borders, dividers, table rules.

### Status
- **Success / Warning / Error** (`success`, `warning`, `error`, each with a `-soft` tint): fills carry white text at 4.5:1 or more; on the soft tint the text uses the dark shade of the same hue.

### Named Rules
**The One Pink Action Rule.** An area has at most one primary (pink) action; everything else is secondary violet, outline or ghost.

**The Never By Colour Alone Rule.** Every status, delta and selection is also told by a word, an icon, a check or a shape (the owner of the product is red-green colour-blind).

**The Muted Floor Rule.** No text lighter than `muted-text` on white or `muted-on-tint` on a tint; `icon-grey` is never text.

## Typography

**Display Font:** Nunito Sans (with Inter, system-ui)
**Body Font:** Inter (with system-ui)
**Code Font:** Open Sans in the code editor, otherwise the platform's monospace

**Character:** Inter does the work: controls, tables, prose, all at small sizes where its open shapes stay legible. Nunito Sans at 800 gives titles and key figures a rounded, confident weight that reads as "this is the answer".

### Hierarchy
- **Display** (Nunito Sans 800, 25 px, 1.25, -0.5 px): the page title of operator pages and reports (`PageHeader`, `ReportHeader`).
- **Headline** (Nunito Sans 800, 30 px, 1.2, -0.8 px, tabular figures): KPI values. Shrinks with a narrow card instead of being cut.
- **Title** (Nunito Sans 800, 15 to 17 px): card, panel and modal titles.
- **Body** (Inter 400, 13 px, 20 px line): running text and control text. Page subtitles keep to a 672 px column (`max-w-2xl`).
- **Label** (Inter 600, 12 px): field labels, table headers, button text at small sizes.
- **Caption** (Inter 400, 11 px): hints, footnotes, metadata. 11 px is the floor (D9); the menu uses 12 px.

### Named Rules
**The 11 px Floor Rule.** Nothing functional is smaller than 11 px.

**The Whole Number Rule.** A KPI value is never truncated with an ellipsis; it scales down with its card and breaks only between words, never inside a number.

## Layout

The shell is a 42 px navy brand header across the top, a framed navy sidebar on the left (250 px wide, or a 64 px icon rail when collapsed) and the canvas. Below 1024 px the sidebar becomes a drawer opened from the header's menu button; below 768 px the right panel (help, chat) replaces the content instead of squeezing it.

Operator pages sit in one centred column of 1152 px (`max-w-6xl`) with 32 px side gutters (16 px on phones); reading pages (guides) use a narrower column. Reports use a 12-column grid of 40 px rows. Spacing follows a 4 px base: 8 px inside controls, 16 px between related blocks, 24 px between sections. Headers, action rows and tab lists wrap on narrow screens rather than overflow.

## Elevation & Depth

Flat by default. Depth comes from the canvas to surface contrast and the hairline border; shadows are low, cool (tinted with the navy) and mostly ambient. Elevation rises only for things that float above the page.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 2px 4px #21183F04, 0 6px 18px #21183F09`): every card and section at rest.
- **Card hover** (`box-shadow: 0 4px 10px #21183F0A, 0 10px 26px #21183F12`): a hoverable card under the pointer; elevated cards.
- **Menu** (`box-shadow: 0 10px 30px #1A124022`): dropdowns, popovers, selects.
- **Modal** (`box-shadow: 0 25px 80px #1A124030`): modals and the confirm dialog.
- **Action glow** (`box-shadow: 0 5px 15px #FF177B20`): only under the primary button.

### Named Rules
**The Flat Until It Floats Rule.** A surface on the page gets the card shadow at most; stronger shadows are reserved for menus and modals.

## Shapes

Gently rounded and consistent by role: badges 7 px, inputs and selects 10 px, buttons 12 px, cards and panels 14 px, modals 18 px, pills and avatars fully round. Borders are 1 px hairlines; the only 2 px lines are the focus outline, the active underline of tabs and the outline button. The right panel docks with its left corners rounded (18 px). The older CSS variables `--omni-radius-control/card/panel` (8 / 12 / 14 px) predate these values and are not what the components draw.

## Components

### Buttons
Confident, compact and few per area.
- **Shape:** gently rounded (12 px).
- **Primary:** the pink-to-violet action gradient with white text and the action glow; 8 px by 16 px at the default size (13 px semibold text).
- **Hover / Focus:** a 1 px lift and a soft navy shadow on hover (no lift with reduced motion); 2 px focus ring offset 2 px.
- **Secondary:** violet soft fill, violet ink text, violet line border. **Outline:** white with a 2 px violet border that fills on hover. **Ghost:** transparent with a tinted hover. Danger, success and info variants exist for confirmation dialogs only.
- **Sizes:** xs 11 px, sm 12 px, md 13 px, lg 14 px text.

### Chips and Badges
- **Style:** a soft tint of the status hue with its dark shade as text, 7 px radius or a full pill; a dot variant for live states.
- **State:** a status chip always carries its word (and, in admin-ui, an icon), never colour alone.

### Cards / Containers
- **Corner Style:** 14 px.
- **Background:** surface (white) on the canvas.
- **Shadow Strategy:** the card shadow (see Elevation); hoverable cards rise to card hover and tint their border violet.
- **Border:** 1 px hairline.
- **Header and footer:** white header with a hairline under it and a display-font title; footer on `#FAFAFC` with a hairline above.

### Inputs / Fields
- **Style:** white field, 1 px control line, 10 px radius, 13 px text at the default size (8 px by 14 px padding); labels 12 px semibold above, helpers 11 px below.
- **Focus:** 2 px violet ring and violet border.
- **Error / Disabled:** error border and ring with the message under the field in 12 px error text; disabled fields turn neutral-100 with muted text.

### Navigation
- **Sidebar:** navy frame; items in 13 px Inter with 16 px icons; groups as small uppercase captions with a guide line; the active item has a pink bar, a pink dot and a lighter fill; the collapsed rail keeps icons and shows labels as tooltips. A project selector card sits at the top when the product has projects.
- **Account block:** at the foot of the sidebar: version, extra rows, the languages as visible buttons (ES, EN, PT), sign out, and the person; collapsed it is the avatar alone.
- **Brand header:** 42 px navy bar with the menu toggle, the brand (logo or wordmark), a label in 11 px uppercase ("Proyecto · Reporte", or the product name in the builder and the console) and the "powered by omnitok" mark for customer brands.
- **Tabs:** default tabs fill the selected one with the module green and a check; pills use the action gradient; underline tabs mark the selected one with a 2 px pink line. Tabs that do not fit wrap to another line (3.1.2), never cut to a letter.

### Data Table
White surface, hairline rules, a white header row with 12 px semibold labels and 13 px cells with tabular figures; a column can align right (use it for numbers).

### Login
Split screen (D26): the brand hero on the sidebar's navy at 44 % width (logo or wordmark, accent bar, display title, description, powered-by mark) and the form straight on white at a 380 px column. Below 1024 px only the form shows.

## Do's and Don'ts

### Do:
- **Do** read colours, radii and shadows from the kit (preset classes or `--omni-*` variables); tenants retint through `--omni-sb-*`, `--omni-gradient-action` and `--omni-selected` only.
- **Do** keep one primary (pink) action per header or dialog, at most one secondary next to it.
- **Do** pair every status colour with a word or an icon, and every selection with a check, a bar or a weight change.
- **Do** use Nunito Sans 800 for titles and KPI values and Inter for everything else.
- **Do** let headers, action rows and tab lists wrap on narrow screens.
- **Do** keep the focus outline visible (2 px focus violet, offset 2 px) on every interactive element.

### Don't:
- **Don't** restyle a kit component from an external stylesheet; change the component (D12).
- **Don't** set text in `icon-grey` or anything lighter than `muted-text`; don't go under 11 px.
- **Don't** put white or pink text on `identity-pink`; it is a mark colour.
- **Don't** truncate a number with an ellipsis, in a KPI, a chip or a caption.
- **Don't** add shadows stronger than the card shadow to things that sit on the page.
- **Don't** use a dark gradient band as a page or panel header; headers are white with a hairline (the navy belongs to the chrome).
