import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ListMenu, Button, Avatar } from '@omnitok/ui';
import {
  Settings,
  User,
  LogOut,
  Edit,
  Copy,
  Trash2,
  Download,
  Share2,
  MoreVertical,
  ExternalLink,
  FileText,
  HelpCircle,
  BookOpen,
  Bug,
} from 'lucide-react';

const meta: Meta<typeof ListMenu> = {
  title: 'Components/ListMenu',
  component: ListMenu,
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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ---------- Default ----------

export const Default: Story = {
  args: {
    trigger: <Button>Actions</Button>,

    items: [
      { label: 'Edit', value: 'edit', onClick: () => console.log('Edit clicked') },
      { label: 'Duplicate', value: 'duplicate', onClick: () => console.log('Duplicate clicked') },
      { label: 'Archive', value: 'archive', onClick: () => console.log('Archive clicked') },
    ],

    onSelect: (value) => console.log('Selected:', value),
  },
};

// ---------- With Icons ----------

export const WithIcons: Story = {
  args: {
    trigger: <Button>Options</Button>,
    items: [
      { label: 'Edit', value: 'edit', icon: <Edit size={16} /> },
      { label: 'Copy', value: 'copy', icon: <Copy size={16} /> },
      { label: 'Download', value: 'download', icon: <Download size={16} /> },
      { label: 'Share', value: 'share', icon: <Share2 size={16} /> },
    ],
    onSelect: (value) => console.log('Selected:', value),
  },
};

// ---------- With Links ----------

export const WithLinks: Story = {
  args: {
    trigger: <Button>Help & Resources</Button>,
    items: [
      {
        label: 'Documentation',
        value: 'docs',
        icon: <BookOpen size={16} />,
        href: 'https://example.com/docs',
      },
      {
        label: 'API Reference',
        value: 'api',
        icon: <FileText size={16} />,
        href: 'https://example.com/api',
      },
      {
        label: 'Report a Bug',
        value: 'bug',
        icon: <Bug size={16} />,
        href: 'https://example.com/issues',
      },
      {
        label: 'Support Center',
        value: 'support',
        icon: <HelpCircle size={16} />,
        href: 'https://example.com/support',
      },
    ],
  },
};

// ---------- Mixed Actions and Links ----------

export const MixedActionsAndLinks: Story = {
  args: {
    trigger: <Button>User Menu</Button>,
    items: [
      { label: 'View Profile', value: 'profile', icon: <User size={16} />, href: '/profile' },
      { label: 'Settings', value: 'settings', icon: <Settings size={16} />, href: '/settings' },
      {
        label: 'External Docs',
        value: 'docs',
        icon: <ExternalLink size={16} />,
        href: 'https://example.com/docs',
      },
      {
        label: 'Log Out',
        value: 'logout',
        icon: <LogOut size={16} />,
        onClick: () => console.log('Logging out...'),
        dividerBefore: true,
      },
    ],
    onSelect: (value) => console.log('Selected:', value),
  },
};

// ---------- With Dividers ----------

export const WithDividers: Story = {
  args: {
    trigger: <Button>File</Button>,
    items: [
      { label: 'Edit', value: 'edit', icon: <Edit size={16} /> },
      { label: 'Copy', value: 'copy', icon: <Copy size={16} /> },
      { label: 'Download', value: 'download', icon: <Download size={16} />, dividerBefore: true },
      { label: 'Share', value: 'share', icon: <Share2 size={16} /> },
      {
        label: 'Delete',
        value: 'delete',
        icon: <Trash2 size={16} />,
        danger: true,
        dividerBefore: true,
      },
    ],
    onSelect: (value) => console.log('Selected:', value),
  },
};

// ---------- With Danger Item ----------

export const WithDangerItem: Story = {
  args: {
    trigger: <Button variant="danger">Manage</Button>,
    items: [
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
    ],
    onSelect: (value) => console.log('Selected:', value),
  },
};

// ---------- Custom Trigger ----------

export const CustomTrigger: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      {/* Icon button trigger */}
      <ListMenu
        trigger={
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-600"
          >
            <MoreVertical size={20} />
          </button>
        }
        items={[
          { label: 'Edit', value: 'edit', icon: <Edit size={16} /> },
          { label: 'Copy', value: 'copy', icon: <Copy size={16} /> },
          {
            label: 'Delete',
            value: 'delete',
            icon: <Trash2 size={16} />,
            danger: true,
            dividerBefore: true,
          },
        ]}
        onSelect={(v) => console.log('Icon menu:', v)}
      />

      {/* Avatar trigger */}
      <ListMenu
        placement="bottom-end"
        trigger={
          <Avatar
            name="John Doe"
            size="md"
            className="cursor-pointer hover:ring-2 hover:ring-primary/30 transition-shadow"
          />
        }
        items={[
          { label: 'My Profile', value: 'profile', icon: <User size={16} />, href: '/profile' },
          { label: 'Settings', value: 'settings', icon: <Settings size={16} />, href: '/settings' },
          {
            label: 'Log Out',
            value: 'logout',
            icon: <LogOut size={16} />,
            dividerBefore: true,
            onClick: () => console.log('Logout'),
          },
        ]}
      />

      {/* Text link trigger */}
      <ListMenu
        trigger={
          <span className="text-primary hover:underline cursor-pointer text-sm font-medium">
            More options...
          </span>
        }
        items={[
          { label: 'Download CSV', value: 'csv', icon: <Download size={16} /> },
          { label: 'Share Link', value: 'share', icon: <Share2 size={16} /> },
        ]}
        onSelect={(v) => console.log('Text trigger:', v)}
      />
    </div>
  ),
};

// ---------- Disabled ----------

export const Disabled: Story = {
  args: {
    trigger: <Button>Disabled Menu</Button>,
    disabled: true,
    items: [
      { label: 'Edit', value: 'edit' },
      { label: 'Copy', value: 'copy' },
    ],
  },
};

// ---------- Disabled Items ----------

export const DisabledItems: Story = {
  args: {
    trigger: <Button>Some Disabled</Button>,
    items: [
      { label: 'Edit', value: 'edit', icon: <Edit size={16} /> },
      { label: 'Copy', value: 'copy', icon: <Copy size={16} />, disabled: true },
      { label: 'Download', value: 'download', icon: <Download size={16} /> },
      { label: 'Share', value: 'share', icon: <Share2 size={16} />, disabled: true },
      {
        label: 'Delete',
        value: 'delete',
        icon: <Trash2 size={16} />,
        danger: true,
        dividerBefore: true,
      },
    ],
    onSelect: (value) => console.log('Selected:', value),
  },
};

// ---------- Sizes ----------

export const Sizes: Story = {
  render: () => (
    <div className="flex items-start gap-6">
      <ListMenu
        size="sm"
        trigger={<Button size="sm">Small</Button>}
        items={[
          { label: 'Edit', value: 'edit', icon: <Edit size={14} /> },
          { label: 'Copy', value: 'copy', icon: <Copy size={14} /> },
          { label: 'Delete', value: 'delete', icon: <Trash2 size={14} />, danger: true },
        ]}
      />
      <ListMenu
        size="md"
        trigger={<Button size="md">Medium</Button>}
        items={[
          { label: 'Edit', value: 'edit', icon: <Edit size={16} /> },
          { label: 'Copy', value: 'copy', icon: <Copy size={16} /> },
          { label: 'Delete', value: 'delete', icon: <Trash2 size={16} />, danger: true },
        ]}
      />
      <ListMenu
        size="lg"
        trigger={<Button size="lg">Large</Button>}
        items={[
          { label: 'Edit', value: 'edit', icon: <Edit size={20} /> },
          { label: 'Copy', value: 'copy', icon: <Copy size={20} /> },
          { label: 'Delete', value: 'delete', icon: <Trash2 size={20} />, danger: true },
        ]}
      />
    </div>
  ),
};

// ---------- All Placements ----------

export const AllPlacements: Story = {
  render: () => {
    const items = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ];

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
      <div className="grid grid-cols-3 gap-12 p-16">
        {placements.map((placement) => (
          <ListMenu
            key={placement}
            placement={placement}
            trigger={
              <Button variant="outline" size="sm" fullWidth>
                {placement}
              </Button>
            }
            items={items}
            onSelect={(v) => console.log(placement, v)}
          />
        ))}
      </div>
    );
  },
};
