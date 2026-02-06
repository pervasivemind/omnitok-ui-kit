import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileDropzone } from '@omnitok/ui';

const meta: Meta<typeof FileDropzone> = {
  title: 'Drag and Drop/FileDropzone',
  component: FileDropzone,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileDropzone>;

export const Default: Story = {
  args: {
    onFilesAccepted: (files) => console.log('Archivos aceptados:', files),
    onFilesRejected: (rejections) => console.log('Archivos rechazados:', rejections),
  },
  render: (args) => (
    <div className="max-w-md">
      <FileDropzone {...args} />
    </div>
  ),
};

export const ImagesOnly: Story = {
  args: {
    onFilesAccepted: (files) => console.log('Imágenes aceptadas:', files),
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'] },
    maxFiles: 10,
    maxSize: 10 * 1024 * 1024, // 10MB
  },
  render: (args) => (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-4">Solo Imágenes (hasta 10MB)</h3>
      <FileDropzone {...args} />
    </div>
  ),
};

export const DocumentsOnly: Story = {
  args: {
    onFilesAccepted: (files) => console.log('Documentos aceptados:', files),
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 5,
    showPreview: false,
  },
  render: (args) => (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-4">Solo Documentos (PDF, DOC, DOCX)</h3>
      <FileDropzone {...args} />
    </div>
  ),
};

export const SingleFile: Story = {
  args: {
    onFilesAccepted: (files) => console.log('Archivo aceptado:', files),
    multiple: false,
    maxFiles: 1,
  },
  render: (args) => (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-4">Un Solo Archivo</h3>
      <FileDropzone {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    onFilesAccepted: (files) => console.log('Archivos:', files),
    disabled: true,
  },
  render: (args) => (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-4">Deshabilitado</h3>
      <FileDropzone {...args} />
    </div>
  ),
};

export const WithValidation: Story = {
  args: {
    onFilesAccepted: (files) => {
      console.log('Archivos válidos:', files);
      alert(`${files.length} archivo(s) aceptado(s)`);
    },
    onFilesRejected: (rejections) => {
      console.log('Archivos rechazados:', rejections);
      const errors = rejections.map((r) => `${r.file.name}: ${r.errors.map((e) => e.message).join(', ')}`);
      alert(`Archivos rechazados:\n${errors.join('\n')}`);
    },
    maxSize: 1 * 1024 * 1024, // 1MB
    maxFiles: 3,
  },
  render: (args) => (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-4">Con Validación (máx 1MB, máx 3 archivos)</h3>
      <FileDropzone {...args} />
    </div>
  ),
};
