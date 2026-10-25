# Changelog: @omnitok/ui (v3 channel)

The v3 line is published on the `pkg-v3` branch with a `v3.x.y` tag per
release. The `pkg` branch (0.2.x) is unchanged and is what the other
consumer repos still follow.

## 3.1.3 (2026-10-25): one secondary grey that passes everywhere

- `neutral-500`, `muted` and `--omni-muted` move from `#667085` to `#5B6478`
  (decision D37). The old value gave 4.36:1 on the violet tint and 4.49:1 on
  `neutral-100`, under the 4.5:1 floor, so tinted surfaces needed a second
  grey; `#5B6478` gives 5.93:1 on white, 5.49:1 on canvas and 5.20:1 on the
  violet tint. `muted-on-tint` keeps its name and now has the same value.
  No API change; secondary text gets slightly darker everywhere.
- `DESIGN.md` (repo root) approved as written (D38).

## 3.1.2 (2026-10-24): tabs wrap instead of truncating

- `Tabs` (not `fullWidth`): when the tabs do not fit, they wrap onto
  another line. Before, they shrank until each label was cut to a letter
  or two ("R.", "Au..."). Wrapping instead of a horizontal scroller on
  purpose: a scroller also clips vertically, which cuts the active pill's
  shadow, the focus ring and the underline mark. `fullWidth` is unchanged
  (the tabs share one row). No prop changes; story `Narrow (wraps, never
  truncates)`. (There is no 3.1.1 release: the repo's pre-commit hook
  bumps the patch on every commit that touches `packages/core/src`.)

## 3.1.0 (2026-10-24): the approved v3 look, inside the components

The look approved on 2026-10-24 now lives in the components themselves.
A consumer that upgrades gets it without extra CSS. Any stylesheet that
restyled kit components from outside (the review layers of the BI
portal, for example) should be removed after the upgrade, not kept on top.

### Tokens (tailwind preset and `styles.css`)

- `neutral` is a cool grey scale. `neutral-500` (#667085) is the lightest
  grey allowed for text; `neutral-400` is for icons and borders only.
- `accent.DEFAULT` is `#E0156D` (white text 4.67:1). The bright identity
  pink `#FF177B` moved to `accent.light`.
- `success`, `warning`, `error` and `info` are the reference palette and
  gain a `soft` tint (badges, alerts). `violet`, `rose` and `teal` DEFAULTs
  carry white text at 4.5:1 or more.
- New: `primary.soft`, `primary.ink`, `primary.line`, `control` (input
  border), font size `2xs` (11 px, the floor for functional text),
  shadows `card`, `card-hover`, `menu` and `modal` redefined.
- New CSS variables: `--omni-selected` (selected tab and page),
  `--omni-gradient-action` and `--omni-shadow-action` (primary button),
  `--omni-focus`, `--omni-muted-on-tint`, `--omni-accent-fill`,
  `--omni-accent-ink`, `--omni-violet-soft`, `--omni-violet-ink`.
- Shell tint (a host may override these with a tenant theme that already
  passed a contrast check): `--omni-sb-bg` (may be a gradient),
  `--omni-sb-accent`, `--omni-sb-accent-ink`, `--omni-sb-badge`,
  `--omni-header-bg`.
- Base layer: focus ring, `::selection`, `accent-color`, thin scrollbars and
  `tabular-nums` on tables and `[data-kpi]`.

### Components

- **Button**: new `secondary` variant (quiet violet). `primary` is the
  pink-to-violet action gradient. Radius 12, type scale 11/12/13/14 px.
- **Input, Select, MultiSelect, Textarea**: radius 10, `border-control`,
  12 px labels, disabled fields grey instead of translucent.
- **Checkbox, Radio**: 18 px.
- **Tabs** (`default` variant): a track of bordered buttons; the selected
  one is filled with `--omni-selected` and carries a check. **Pagination**:
  the current page uses `--omni-selected`.
- **Card**: the header is white with a line under it. It used to be a
  coloured band with white text: a header that relied on white text needs
  its own colour removed.
- **Badge, Alert**: tint behind, dark tone in front. Alert's title is a
  `<p>`, no longer an `<h5>`.
- **Modal, SidePanel**: white header, Nunito Sans title. Modal radius 18.
  **ConfirmModal**: the cancel button uses `secondary`.
- **Toast**: radius 12, menu shadow; the title is a `<p>`.
- **Sidebar**: reads the shell tint variables; captions at 11 px.
- **SidebarAccount** (new): version, extra rows, language buttons, sign out
  and the person, for the foot of the sidebar; `collapsed` for the 64 px
  rail.
- **BrandHeader**: reads `--omni-header-bg`.
- **Header** (light): 56 px high (was 64).
- **LoginPage**: `split` redesigned (customer brand on the left over the
  sidebar colour, form on the right). New props `brandText`, `heroTitle`,
  `heroDescription`, `poweredBy` and `idPrefix`. The submit button uses
  `primary` (was `accent`). Field ids stay `email` and `password` unless
  `idPrefix` is set. Spanish copy: "Iniciar sesión".
- **SortableList, DraggableCard, KanbanBoard**: white surfaces with the
  card shadow, no gradient bars; dragging lifts (shadow and ring) without
  rotating. DraggableCard's header is white like Card's.
- **FileDropzone**: 1 px dashed border, `#FAF9FD` fill, radius 14, violet
  hover.
- **CodeEditor**: radius 10, `border-control`, readable line numbers and
  comments.
- **Table**: white header with 11 px uppercase captions and a line under
  it. It used to be a `primary` band with white text.

### Stories

New: Radio, Textarea, Breadcrumb, BrandHeader, SidebarAccount,
`Layout/Shell v3` TenantTint, LoginPage SplitTenantWordmark and
SplitWithError.
