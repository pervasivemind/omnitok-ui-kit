import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Badge, Pagination } from '@omnitok/ui';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'accent',
        'success',
        'warning',
        'error',
        'info',
        'violet',
        'rose',
        'teal',
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

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        currentPage={page}
        totalPages={10}
        onChange={setPage}
      />
    );
  },
};

export const WithInfo: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        currentPage={page}
        totalPages={10}
        onChange={setPage}
        showInfo
        totalItems={100}
        itemsPerPage={10}
      />
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(25);
    return (
      <Pagination
        currentPage={page}
        totalPages={50}
        onChange={setPage}
      />
    );
  },
};

export const FewPages: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        currentPage={page}
        totalPages={3}
        onChange={setPage}
      />
    );
  },
};

export const WithoutFirstLast: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <Pagination
        currentPage={page}
        totalPages={10}
        onChange={setPage}
        showFirstLast={false}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <div className="flex flex-col gap-4">
        <Pagination
          currentPage={page}
          totalPages={10}
          onChange={setPage}
          size="sm"
        />
        <Pagination
          currentPage={page}
          totalPages={10}
          onChange={setPage}
          size="md"
        />
        <Pagination
          currentPage={page}
          totalPages={10}
          onChange={setPage}
          size="lg"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    onChange: () => {},
    disabled: true,
  },
};

export const CustomSiblingCount: Story = {
  render: () => {
    const [page, setPage] = useState(10);
    return (
      <Pagination
        currentPage={page}
        totalPages={20}
        onChange={setPage}
        siblingCount={2}
      />
    );
  },
};

const variants = [
  'primary',
  'accent',
  'neutral',
  'success',
  'warning',
  'error',
  'info',
  'violet',
  'rose',
  'teal',
] as const;

export const Variants: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <div className="flex flex-col gap-4">
        {variants.map((variant) => (
          <div key={variant} className="flex items-center gap-4">
            <Pagination
              currentPage={page}
              totalPages={10}
              onChange={setPage}
              variant={variant}
            />
            <Badge variant={variant}>{variant}</Badge>
          </div>
        ))}
      </div>
    );
  },
};
