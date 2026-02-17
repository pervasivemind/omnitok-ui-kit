# @omnitok/ui

A React component library built with TypeScript and Tailwind CSS.

## Installation

Install directly from GitHub:

```bash
# Using npm (SSH)
npm install git+ssh://git@github.com:pervasivemind/omnitok-ui-kit.git#pkg

# Using npm (HTTPS)
npm install git+https://github.com/pervasivemind/omnitok-ui-kit.git#pkg
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@omnitok/ui": "git+ssh://git@github.com:pervasivemind/omnitok-ui-kit.git#pkg"
  }
}
```

## Prerequisites

If your project uses Tailwind CSS, see the [Tailwind Preset](#tailwind-preset) section to configure the Omnitok design tokens.

## Usage

Import the styles in your application entry point:

```typescript
import '@omnitok/ui/styles.css';
```

Then import and use components:

```typescript
import { Button, Card, Input, Modal } from '@omnitok/ui';

function App() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## Tailwind Preset

`@omnitok/ui` ships a **Tailwind CSS preset** that gives your project the same design tokens (colors, typography, spacing, shadows, animations, etc.) used by the component library. This is useful when you want to build custom UI that stays visually consistent with the kit.

### 1. Install Tailwind CSS

If your project doesn't have Tailwind CSS yet, install it along with its peer dependencies:

```bash
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```

Then create a `postcss.config.js` (or `.mjs`) in your project root:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

### 2. Import the preset

In your `tailwind.config.ts` (or `.js`), import the preset and add it to the `presets` array:

```ts
import type { Config } from 'tailwindcss';
import omnitokPreset from '@omnitok/ui/tailwind-preset';

const config: Config = {
  presets: [omnitokPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};

export default config;
```

This merges the Omnitok design tokens into your Tailwind build so you can use classes like `bg-primary`, `text-accent`, `font-sans` (Nunito Sans), `shadow-card`, `animate-fade-in`, etc. alongside the default Tailwind utilities.

### 3. Import the component styles

Don't forget to also import the compiled CSS for the UI components themselves:

```ts
// In your entry point (e.g. main.tsx or App.tsx)
import '@omnitok/ui/styles.css';
```

> **Note:** The preset provides the theme tokens only. The `styles.css` import is still required for the pre-built component styles.

## Available Components

### Basic Components
- `Button` - Customizable button with variants and sizes
- `Input` - Text input field
- `Select` - Dropdown select component
- `Textarea` - Multi-line text input
- `Checkbox` - Checkbox input
- `Radio` - Radio button input

### Display Components
- `Card` - Container card component
- `Badge` - Status badge/tag
- `Avatar` - User avatar display
- `Alert` - Alert/notification messages

### Layout Components
- `Sidebar` - Navigation sidebar
- `Header` - Page header
- `Layout` - Page layout wrapper
- `Breadcrumb` - Breadcrumb navigation

### Data Components
- `Table` - Data table with sorting/pagination
- `Tabs` - Tabbed content navigation
- `Pagination` - Page navigation

### Feedback Components
- `Modal` - Modal dialog
- `Toast` - Toast notifications

### Page Components
- `LoginPage` - Pre-built login page

### Drag and Drop Components
- `SortableList` - Sortable list with drag-and-drop
- `FileDropzone` - File upload dropzone
- `KanbanBoard` - Kanban board layout
- `DraggableCard` - Draggable card component

## Peer Dependencies

This library requires the following peer dependencies:

- `react` >= 18.0.0
- `react-dom` >= 18.0.0
