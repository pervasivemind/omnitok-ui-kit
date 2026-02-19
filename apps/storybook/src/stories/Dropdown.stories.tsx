import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Dropdown, Button, Avatar, DropdownMenu, Input, Checkbox } from '@omnitok/ui';
import {
  Settings,
  User,
  Filter,
  MoreVertical,
  ChevronDown,
  Info,
  Trash2,
  Edit,
  Download,
  LogOut,
  Bell,
  CreditCard,
  Search,
} from 'lucide-react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 384, minHeight: 240, paddingTop: 16, margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'bottom-start',
        'bottom',
        'bottom-end',
        'top-start',
        'top',
        'top-end',
        'left-start',
        'left',
        'left-end',
        'right-start',
        'right',
        'right-end',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ---------- Default ----------

export const Default: Story = {
  args: {
    trigger: <Button rightIcon={<ChevronDown size={16} />}>Open panel</Button>,
    children: (
      <div className="p-4 w-64">
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Information</h3>
        <p className="text-sm text-neutral-500">
          This dropdown can contain any content — text, forms, images, or custom components.
        </p>
      </div>
    ),
  },
};

// ---------- Custom Content (Form) ----------

export const CustomContent: Story = {
  render: () => (
    <Dropdown
      trigger={
        <Button leftIcon={<Filter size={16} />} rightIcon={<ChevronDown size={16} />}>
          Filters
        </Button>
      }
      contentClassName="p-4 w-72"
    >
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Filters applied');
        }}
      >
        <h3 className="text-sm font-semibold text-neutral-900">Filter results</h3>

        <div className="flex flex-col gap-1">
          <label htmlFor="filter-status" className="text-xs font-medium text-neutral-600">
            Status
          </label>
          <select
            id="filter-status"
            className="w-full rounded-md border border-neutral-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="archived">Archived</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="filter-search" className="text-xs font-medium text-neutral-600">
            Search
          </label>
          <input
            id="filter-search"
            type="text"
            placeholder="Type to search..."
            className="w-full rounded-md border border-neutral-200 px-3 py-1.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex items-center gap-2">
          <input id="filter-mine" type="checkbox" className="rounded border-neutral-300" />
          <label htmlFor="filter-mine" className="text-sm text-neutral-700">
            Only show mine
          </label>
        </div>

        <div className="flex justify-end gap-2 pt-1">
          <Button size="sm" variant="neutral" ghost>
            Reset
          </Button>
          <Button size="sm" type="submit">
            Apply
          </Button>
        </div>
      </form>
    </Dropdown>
  ),
};

// ---------- DropdownMenu ----------

export const Menu: Story = {
  render: () => {
    const items = [
      { label: 'Edit', value: 'edit', icon: <Edit size={16} /> },
      { label: 'Archive', value: 'archive', icon: <Download size={16} /> },
      {
        label: 'Delete permanently',
        value: 'delete',
        icon: <Trash2 size={16} />,
        danger: true,
        dividerBefore: true,
        onClick: () => console.log('Delete!'),
      },
    ];
    return (
      <DropdownMenu
        trigger={<Button rightIcon={<ChevronDown size={16} />}>Open</Button>}
        items={items}
      />
    );
  },
};

export const MenuWithCard: Story = {
  render: () => {
    const items = [
      { label: 'Notification-1', value: 'notification-1', icon: <Bell size={16} /> },
      { label: 'Notification-2', value: 'notification-2', icon: <Bell size={16} /> },
      { label: 'Notification-3', value: 'notification-3', icon: <Bell size={16} /> },
      {
        label: 'Billing Reminder',
        value: 'billing-reminder',
        icon: <CreditCard size={16} />,
        dividerBefore: true,
      },
    ];
    return (
      <DropdownMenu
        trigger={<Button rightIcon={<ChevronDown size={16} />}>Open</Button>}
        card={
          <div className="flex flex-col gap-4 p-4">
            <Input label="Search" leftIcon={<Search size={18} />} placeholder="Type to search..." />
            <Checkbox
              label="Show only unread"
              toggle={true}
            />
          </div>
        }
        items={items}
      />
    );
  },
};

// ---------- Custom Trigger ----------

export const CustomTrigger: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      {/* Icon button trigger */}
      <Dropdown
        trigger={
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-600"
          >
            <MoreVertical size={20} />
          </button>
        }
      >
        <div className="p-3 w-48">
          <p className="text-sm text-neutral-700">Quick actions panel</p>
        </div>
      </Dropdown>

      {/* Avatar trigger */}
      <DropdownMenu
        trigger={
          <Avatar
            alt="John Doe"
            size="md"
            className="cursor-pointer rounded-full hover:ring-2 hover:ring-primary/30 transition-shadow"
          />
        }
        card={
          <div className="px-4 py-2 flex items-center gap-4">
            <Avatar alt="John Doe" size="xl" />
            <div className="flex flex-col gap-1">
              <span className="text-md font-medium text-neutral-900">John Doe</span>
              <span className="text-sm text-neutral-500">john@example.com</span>
            </div>
          </div>
        }
        items={[
          { label: 'Profile', value: 'profile', icon: <User size={16} /> },
          { label: 'Settings', value: 'settings', icon: <Settings size={16} /> },
          { label: 'Logout', value: 'logout', icon: <LogOut size={16} />, dividerBefore: true },
        ]}
      />

      {/* Text link trigger */}
      <Dropdown
        trigger={
          <span className="text-primary hover:underline cursor-pointer text-sm font-medium">
            Details...
          </span>
        }
        contentClassName="p-3 w-52"
      >
        <p className="text-xs text-neutral-500">Extra detail shown on demand.</p>
      </Dropdown>
    </div>
  ),
};

// ---------- All Placements ----------

export const AllPlacements: Story = {
  render: () => {
    const placements = [
      'bottom-start',
      'bottom',
      'bottom-end',
      'top-start',
      'top',
      'top-end',
      'left-start',
      'left',
      'left-end',
      'right-start',
      'right',
      'right-end',
    ] as const;

    return (
      <div className="grid grid-cols-3 gap-4">
        {placements.map((placement) => (
          <Dropdown
            triggerClassName="w-full"
            key={placement}
            placement={placement}
            trigger={
              <Button variant="outline" size="sm" fullWidth>
                {placement}
              </Button>
            }
            contentClassName="p-3"
          >
            <p className="text-xs text-neutral-600 whitespace-nowrap flex items-center gap-2">
              <Info size={16} />
              <span className="inline-flex gap-1">
                Placed at <strong>{placement}</strong>
              </span>
            </p>
          </Dropdown>
        ))}
      </div>
    );
  },
};

// ---------- Disabled ----------

export const Disabled: Story = {
  args: {
    trigger: <Button>Disabled Dropdown</Button>,
    disabled: true,
    children: (
      <div className="p-4">
        <p className="text-sm text-neutral-700">This should never appear.</p>
      </div>
    ),
  },
};

// ---------- Controlled ----------

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
            Open externally
          </Button>
          <Button size="sm" variant="neutral" ghost onClick={() => setOpen(false)}>
            Close externally
          </Button>
        </div>

        <Dropdown
          trigger={
            <Button rightIcon={<ChevronDown size={16} />}>{open ? 'Open' : 'Closed'}</Button>
          }
          open={open}
          onOpenChange={setOpen}
          contentClassName="p-4 w-64"
        >
          <p className="text-sm text-neutral-700 mb-2">This dropdown is controlled externally.</p>
          <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
            Close from inside
          </Button>
        </Dropdown>
      </div>
    );
  },
};

// ---------- With Offset ----------

export const WithOffset: Story = {
  render: () => (
    <div className="flex items-start gap-6">
      <Dropdown trigger={<Button size="sm">offset=0</Button>} offset={0} contentClassName="p-3">
        <p className="text-xs text-neutral-600">No gap</p>
      </Dropdown>

      <Dropdown trigger={<Button size="sm">offset=4</Button>} offset={4} contentClassName="p-3">
        <p className="text-xs text-neutral-600">Default gap (4px)</p>
      </Dropdown>

      <Dropdown trigger={<Button size="sm">offset=12</Button>} offset={12} contentClassName="p-3">
        <p className="text-xs text-neutral-600">Larger gap (12px)</p>
      </Dropdown>

      <Dropdown trigger={<Button size="sm">offset=24</Button>} offset={24} contentClassName="p-3">
        <p className="text-xs text-neutral-600">Wide gap (24px)</p>
      </Dropdown>
    </div>
  ),
};
