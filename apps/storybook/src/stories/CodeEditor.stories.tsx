import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { CodeEditor } from '@omnitok/ui';

const meta: Meta<typeof CodeEditor> = {
  title: 'Components/CodeEditor',
  component: CodeEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: 'select',
      options: ['javascript', 'json', 'tsx', 'typescript', 'bash', 'yaml', 'markdown', 'css'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const JS_SAMPLE = `function greet(name) {
  // Say hello
  const message = \`Hello, \${name}!\`;
  console.log(message);
  return message;
}

greet('Omnitok');`;

const JSON_SAMPLE = `{
  "name": "@omnitok/ui",
  "version": "0.2.9",
  "private": false,
  "keywords": ["react", "components", "ui"]
}`;

/** Controlled wrapper so the editor is editable in stories. */
function Controlled({ initial, ...props }: { initial: string } & Omit<React.ComponentProps<typeof CodeEditor>, 'value' | 'onValueChange'>) {
  const [code, setCode] = React.useState(initial);
  return (
    <div className="w-[480px]">
      <CodeEditor value={code} onValueChange={setCode} {...props} />
    </div>
  );
}

export const Default: Story = {
  render: () => <Controlled initial={JS_SAMPLE} />,
};

export const WithLabel: Story = {
  render: () => (
    <Controlled initial={JS_SAMPLE} label="Script" language="javascript" />
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Controlled
      initial={JSON_SAMPLE}
      label="Config"
      language="json"
      helperText="Edit the package manifest"
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <Controlled
      initial={'{ "broken": }'}
      label="Config"
      language="json"
      error="Invalid JSON syntax"
    />
  ),
};

export const DisplayOnly: Story = {
  render: () => (
    <div className="w-[480px]">
      <CodeEditor
        label="Read-only snippet"
        language="javascript"
        displayOnly
        value={JS_SAMPLE}
      />
    </div>
  ),
};

export const WithLineNumbers: Story = {
  render: () => (
    <Controlled initial={JS_SAMPLE} label="Script" showLineNumbers showCount />
  ),
};

export const WithCopyButton: Story = {
  render: () => (
    <div className="w-[480px]">
      <CodeEditor
        label="Copy me"
        language="json"
        displayOnly
        showCopyButton
        showLineNumbers
        value={JSON_SAMPLE}
      />
    </div>
  ),
};

export const Languages: Story = {
  render: () => (
    <div className="flex w-[480px] flex-col gap-4">
      <CodeEditor label="JSON" language="json" displayOnly value={JSON_SAMPLE} />
      <CodeEditor
        label="TSX"
        language="tsx"
        displayOnly
        value={'export const App = () => <div className="x">Hi {name}</div>;'}
      />
      <CodeEditor
        label="Bash"
        language="bash"
        displayOnly
        value={'#!/usr/bin/env bash\nset -euo pipefail\necho "deploying $APP"'}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Controlled initial={JS_SAMPLE} label="Disabled editor" disabled />
  ),
};
