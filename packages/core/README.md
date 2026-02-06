# @omnitok/ui

A React component library built with TypeScript and Tailwind CSS.

## Installation

Install directly from GitHub:

```bash
# Using npm (SSH)
npm install git+ssh://git@github.com:pervasivemind/omnitok-ui-kit.git#pkg

# Using npm (HTTPS)
npm install git+https://github.com/pervasivemind/omnitok-ui-kit.git#pkg

# Using yarn
yarn add git+ssh://git@github.com:pervasivemind/omnitok-ui-kit.git#pkg

# Using pnpm
pnpm add git+ssh://git@github.com:pervasivemind/omnitok-ui-kit.git#pkg
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@omnitok/ui": "git+ssh://git@github.com:pervasivemind/omnitok-ui-kit.git#pkg"
  }
}
```

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
