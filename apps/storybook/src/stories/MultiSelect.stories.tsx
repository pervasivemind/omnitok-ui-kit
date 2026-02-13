import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { MultiSelect } from '@omnitok/ui';
import { Globe, Tag, Code } from 'lucide-react';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: [
          'A multi-select input that lets users choose multiple items from a dropdown, displayed as removable tags.',
          '',
          '## Retrieving selected data',
          '',
          'MultiSelect supports two data-retrieval patterns:',
          '',
          '### Controlled mode (`value` + `onChange`)',
          '',
          'Use this when you need to read or manipulate the selection from a parent component, a form library, or any external state.',
          '',
          '```tsx',
          'const [selected, setSelected] = useState<string[]>([]);',
          '',
          '<MultiSelect',
          '  options={options}',
          '  value={selected}',
          '  onChange={(values) => setSelected(values)}',
          '/>',
          '```',
          '',
          '`onChange` receives the full `string[]` of currently selected option values every time the selection changes (add or remove).',
          '',
          '### Uncontrolled mode (`defaultValue`)',
          '',
          'Use this for simple cases where you only need the value on form submission. Pair it with a ref or read from form data:',
          '',
          '```tsx',
          '<MultiSelect',
          '  defaultValue={["typescript", "python"]}',
          '  options={options}',
          '  onChange={(values) => {',
          '    // Optionally react to changes',
          '    console.log("Current selection:", values);',
          '  }}',
          '/>',
          '```',
          '',
          '### Integration with React Hook Form',
          '',
          '```tsx',
          'import { Controller, useForm } from "react-hook-form";',
          '',
          'const { control, handleSubmit } = useForm({',
          '  defaultValues: { languages: [] },',
          '});',
          '',
          '<Controller',
          '  name="languages"',
          '  control={control}',
          '  rules={{ validate: (v) => v.length > 0 || "Select at least one" }}',
          '  render={({ field, fieldState }) => (',
          '    <MultiSelect',
          '      options={options}',
          '      value={field.value}',
          '      onChange={field.onChange}',
          '      error={fieldState.error?.message}',
          '      label="Languages"',
          '    />',
          '  )}',
          '/>',
          '```',
          '',
          '### Data shape',
          '',
          '| Prop | Type | Description |',
          '|------|------|-------------|',
          '| `value` | `string[]` | Controlled array of selected option `value` strings |',
          '| `defaultValue` | `string[]` | Initial selection for uncontrolled mode |',
          '| `onChange` | `(values: string[]) => void` | Called with the full updated array on every add/remove |',
          '| `options` | `MultiSelectOption[]` | `{ value: string; label: string; disabled?: boolean; color?: MultiSelectTagColor }` |',
          '',
          '### Badge colors',
          '',
          'Use `tagColor` to set a global badge color for all selected items, or set `color` on individual options to override per item.',
          '',
          'Available colors: `default`, `primary`, `accent`, `success`, `warning`, `error`, `info`, `violet`, `rose`, `teal`.',
          '',
          '```tsx',
          '<MultiSelect',
          '  options={options}',
          '  tagColor="primary"',
          '/>',
          '```',
          '',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: 384,
          minHeight: 300,
          paddingTop: 16,
          margin: '0 auto',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    searchable: {
      control: 'boolean',
    },
    maxItems: {
      control: 'number',
    },
    tagColor: {
      control: 'select',
      options: [
        'primary',
        'accent',
        'success',
        'warning',
        'error',
        'info',
        'neutral',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const languageOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
];

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'br', label: 'Brazil' },
];

const tagOptions = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'devops', label: 'DevOps' },
  { value: 'design', label: 'Design' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'ai', label: 'AI/ML' },
  { value: 'security', label: 'Security' },
  { value: 'database', label: 'Database' },
];

export const Default: Story = {
  args: {
    options: languageOptions,
    placeholder: 'Select languages...',
  },
};

/**
 * **Controlled mode** is the recommended pattern for retrieving data from MultiSelect.
 *
 * The parent owns the selection state via `value` + `onChange`. The `onChange` callback
 * receives the full `string[]` of selected option values on every add or remove.
 * This pattern integrates naturally with form libraries (React Hook Form, Formik),
 * global state (Zustand, Redux), or any parent component that needs to read the selection.
 *
 * ```tsx
 * const [selected, setSelected] = useState<string[]>([]);
 * <MultiSelect options={options} value={selected} onChange={setSelected} />
 * // `selected` always holds the current string[] of chosen values
 * ```
 */
export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['frontend', 'backend']);

    return (
      <div className="flex flex-col gap-4 w-96">
        <MultiSelect
          label="Skills"
          options={tagOptions}
          value={selected}
          onChange={setSelected}
          placeholder="Select skills..."
          leftIcon={<Tag size={18} />}
        />
        <div className="text-sm text-neutral-500">
          Selected values:{' '}
          {selected.length > 0 ? JSON.stringify(selected) : '[]'}
        </div>
      </div>
    );
  },
};

/**
 * **Form integration** example showing how to collect MultiSelect data on submit.
 *
 * This pattern works with any form approach. Use `onChange` to keep a local state
 * variable in sync, then read it when the form is submitted. The `onChange` callback
 * always provides the complete `string[]` of selected values -- you never need to
 * diff or merge; just store it directly.
 *
 * For React Hook Form, wrap MultiSelect in a `Controller` and pass
 * `field.value` / `field.onChange` directly (see component docs above).
 */
export const FormIntegration: Story = {
  render: () => {
    const [languages, setLanguages] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(JSON.stringify(languages));
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <MultiSelect
          label="Languages"
          options={languageOptions}
          value={languages}
          onChange={setLanguages}
          placeholder="Select languages..."
          helperText="Choose your preferred languages"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Submit
        </button>
        {submitted && (
          <div className="text-sm text-neutral-600 bg-neutral-50 rounded-md p-3">
            <span className="font-medium">Submitted data:</span> {submitted}
          </div>
        )}
      </form>
    );
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Programming Languages',
    options: languageOptions,
    placeholder: 'Select languages...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Skills',
    options: tagOptions,
    placeholder: 'Select your skills...',
    helperText: 'Choose all that apply to your profile',
  },
};

export const WithError: Story = {
  args: {
    label: 'Countries',
    options: countryOptions,
    placeholder: 'Select countries...',
    error: 'Please select at least one country',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Countries',
    options: countryOptions,
    placeholder: 'Select countries...',
    leftIcon: <Globe size={18} />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Languages',
    options: languageOptions,
    placeholder: 'Select languages...',
    defaultValue: ['typescript', 'python'],
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <MultiSelect
        size="sm"
        label="Small"
        options={languageOptions}
        placeholder="Select languages..."
        defaultValue={['typescript']}
      />
      <MultiSelect
        size="md"
        label="Medium"
        options={languageOptions}
        placeholder="Select languages..."
        defaultValue={['typescript', 'python']}
      />
      <MultiSelect
        size="lg"
        label="Large"
        options={languageOptions}
        placeholder="Select languages..."
        defaultValue={['typescript', 'python', 'rust']}
      />
    </div>
  ),
};

export const MaxItems: Story = {
  args: {
    label: 'Top 3 Languages',
    options: languageOptions,
    placeholder: 'Select up to 3...',
    maxItems: 3,
    helperText: 'You can select a maximum of 3 languages',
  },
};

export const PreSelected: Story = {
  args: {
    label: 'Tech Stack',
    options: languageOptions,
    placeholder: 'Select languages...',
    defaultValue: ['typescript', 'python', 'rust'],
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Languages',
    options: [
      { value: 'javascript', label: 'JavaScript' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'python', label: 'Python' },
      { value: 'cobol', label: 'COBOL', disabled: true },
      { value: 'fortran', label: 'Fortran', disabled: true },
      { value: 'rust', label: 'Rust' },
    ],
    placeholder: 'Select languages...',
    helperText: 'Some legacy languages are unavailable',
  },
};

export const FullWidth: Story = {
  decorators: [
    (Story) => (
      <div style={{ minHeight: 300, paddingTop: 16 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="w-[500px]">
      <MultiSelect
        label="Programming Languages"
        options={languageOptions}
        placeholder="Select languages..."
        fullWidth
        leftIcon={<Code size={18} />}
        helperText="This input stretches to fill the container"
      />
    </div>
  ),
};

/** Demonstrates the `tagColor` prop applied globally to all badges. */
export const TagColors: Story = {
  render: () => {
    const colors = [
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
    ] as const;

    return (
      <div className="flex flex-col gap-6 w-96">
        {colors.map((color) => (
          <MultiSelect
            key={color}
            label={color.charAt(0).toUpperCase() + color.slice(1)}
            options={languageOptions}
            placeholder="Select languages..."
            defaultValue={['typescript', 'python']}
            tagColor={color}
          />
        ))}
      </div>
    );
  },
};

/** Demonstrates per-option `color` overrides within a single MultiSelect. */
export const PerOptionColors: Story = {
  args: {
    label: 'Team Skills',
    options: [
      { value: 'database', label: 'Database', color: 'default' },
      { value: 'mobile', label: 'Mobile', color: 'primary' },
      { value: 'design', label: 'Design', color: 'accent' },
      { value: 'backend', label: 'Backend', color: 'success' },
      { value: 'devops', label: 'DevOps', color: 'warning' },
      { value: 'security', label: 'Security', color: 'error' },
      { value: 'frontend', label: 'Frontend', color: 'info' },
      { value: 'ai', label: 'AI/ML', color: 'violet' },
      { value: 'integration', label: 'Integration', color: 'rose' },
      { value: 'testing', label: 'Testing', color: 'teal' },
    ],
    placeholder: 'Select skills...',
    defaultValue: ['frontend', 'backend', 'devops', 'design', 'security'],
    helperText: 'Each skill has its own badge color defined per option',
  },
};
