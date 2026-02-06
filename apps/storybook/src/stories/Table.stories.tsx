import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table, Badge, Avatar, Button } from '@omnitok/ui';
import { Edit, Trash2 } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  avatar?: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'pending' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Viewer', status: 'active' },
];

const meta: Meta<typeof Table<User>> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const statusColors = {
  active: 'success',
  inactive: 'error',
  pending: 'warning',
} as const;

export const Default: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', accessor: 'name' },
      { key: 'email', header: 'Email', accessor: 'email' },
      { key: 'role', header: 'Role', accessor: 'role' },
    ],
    data: users,
    rowKey: 'id',
  },
};

export const WithCustomRender: Story = {
  args: {
    columns: [
      {
        key: 'user',
        header: 'User',
        render: (row: User) => (
          <div className="flex items-center gap-3">
            <Avatar initials={row.name} size="sm" />
            <div>
              <div className="font-medium">{row.name}</div>
              <div className="text-sm text-neutral-500">{row.email}</div>
            </div>
          </div>
        ),
      },
      { key: 'role', header: 'Role', accessor: 'role' },
      {
        key: 'status',
        header: 'Status',
        render: (row: User) => (
          <Badge variant={statusColors[row.status]} pill>
            {row.status}
          </Badge>
        ),
      },
      {
        key: 'actions',
        header: 'Actions',
        align: 'right',
        render: () => (
          <div className="flex items-center justify-end gap-2">
            <Button variant="ghost" size="sm">
              <Edit size={14} />
            </Button>
            <Button variant="ghost" size="sm">
              <Trash2 size={14} />
            </Button>
          </div>
        ),
      },
    ],
    data: users,
    rowKey: 'id',
  },
};

export const Sortable: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', accessor: 'name', sortable: true },
      { key: 'email', header: 'Email', accessor: 'email', sortable: true },
      { key: 'role', header: 'Role', accessor: 'role', sortable: true },
    ],
    data: users,
    rowKey: 'id',
    sortColumn: 'name',
    sortDirection: 'asc',
    onSort: (column, direction) => console.log('Sort:', column, direction),
  },
};

export const Striped: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', accessor: 'name' },
      { key: 'email', header: 'Email', accessor: 'email' },
      { key: 'role', header: 'Role', accessor: 'role' },
    ],
    data: users,
    rowKey: 'id',
    striped: true,
  },
};

export const Compact: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', accessor: 'name' },
      { key: 'email', header: 'Email', accessor: 'email' },
      { key: 'role', header: 'Role', accessor: 'role' },
    ],
    data: users,
    rowKey: 'id',
    compact: true,
  },
};

export const Loading: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', accessor: 'name' },
      { key: 'email', header: 'Email', accessor: 'email' },
      { key: 'role', header: 'Role', accessor: 'role' },
    ],
    data: [],
    rowKey: 'id',
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', accessor: 'name' },
      { key: 'email', header: 'Email', accessor: 'email' },
      { key: 'role', header: 'Role', accessor: 'role' },
    ],
    data: [],
    rowKey: 'id',
    emptyMessage: 'No users found. Try adjusting your filters.',
  },
};

export const ClickableRows: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', accessor: 'name' },
      { key: 'email', header: 'Email', accessor: 'email' },
      { key: 'role', header: 'Role', accessor: 'role' },
    ],
    data: users,
    rowKey: 'id',
    onRowClick: (row) => alert(`Clicked: ${row.name}`),
  },
};
