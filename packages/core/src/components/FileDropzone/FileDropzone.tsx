import { useCallback, useState } from 'react';
import { useDropzone, Accept, FileRejection } from 'react-dropzone';
import { Upload, X, FileText, Image, Video, Music, File } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface FileDropzoneProps {
  onFilesAccepted: (files: File[]) => void;
  onFilesRejected?: (rejections: FileRejection[]) => void;
  accept?: Accept;
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
  showPreview?: boolean;
}

const getFileIcon = (type: string) => {
  if (type.startsWith('image/')) return Image;
  if (type.startsWith('video/')) return Video;
  if (type.startsWith('audio/')) return Music;
  if (type.includes('pdf') || type.includes('document')) return FileText;
  return File;
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export function FileDropzone({
  onFilesAccepted,
  onFilesRejected,
  accept = { 'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'] },
  maxFiles = 5,
  maxSize = 5 * 1024 * 1024, // 5MB
  multiple = true,
  disabled = false,
  className,
  showPreview = true,
}: FileDropzoneProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<{ file: File; url: string }[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles.length > 0) {
        const newFiles = multiple ? [...files, ...acceptedFiles] : acceptedFiles;
        setFiles(newFiles);
        onFilesAccepted(newFiles);

        // Generar previews para imágenes
        if (showPreview) {
          const newPreviews = acceptedFiles
            .filter((file) => file.type.startsWith('image/'))
            .map((file) => ({
              file,
              url: URL.createObjectURL(file),
            }));
          setPreviews((prev) => (multiple ? [...prev, ...newPreviews] : newPreviews));
        }
      }

      if (rejectedFiles.length > 0 && onFilesRejected) {
        onFilesRejected(rejectedFiles);
      }
    },
    [files, multiple, onFilesAccepted, onFilesRejected, showPreview]
  );

  const removeFile = (fileToRemove: File) => {
    const newFiles = files.filter((f) => f !== fileToRemove);
    setFiles(newFiles);
    onFilesAccepted(newFiles);

    // Limpiar preview
    const previewToRemove = previews.find((p) => p.file === fileToRemove);
    if (previewToRemove) {
      URL.revokeObjectURL(previewToRemove.url);
      setPreviews((prev) => prev.filter((p) => p.file !== fileToRemove));
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize,
    multiple,
    disabled,
  });

  return (
    <div className={cn('space-y-4', className)}>
      {/* Zona de drop */}
      <div
        {...getRootProps()}
        className={cn(
          'flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer',
          'transition-all duration-200 ease-out',
          'bg-gradient-to-b from-neutral-50 to-white',
          'border-primary/60 hover:border-primary',
          isDragActive && !isDragReject && 'border-primary bg-gradient-to-b from-primary/5 to-accent/5 scale-[1.01]',
          isDragReject && 'border-red-400 bg-red-50',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <input {...getInputProps()} />

        <div
          className={cn(
            'w-16 h-16 mb-4 rounded-2xl flex items-center justify-center',
            'bg-gradient-to-br from-primary/10 to-accent/10',
            'transition-transform duration-200',
            isDragActive && 'scale-110'
          )}
        >
          <Upload
            className={cn(
              'w-8 h-8 text-primary',
              isDragActive && 'animate-bounce'
            )}
          />
        </div>

        <p className="text-lg font-medium text-neutral-700 mb-1">
          {isDragActive
            ? isDragReject
              ? 'Archivo no permitido'
              : 'Suelta los archivos aquí'
            : 'Arrastra archivos aquí'}
        </p>

        <p className="text-sm text-neutral-500 mb-3">
          o haz clic para seleccionar
        </p>

        <p className="text-xs text-neutral-400">
          PNG, JPG hasta {formatFileSize(maxSize)}
        </p>
      </div>

      {/* Lista de archivos */}
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-neutral-700">
            Archivos seleccionados ({files.length})
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {files.map((file, index) => {
              const FileIcon = getFileIcon(file.type);
              const preview = previews.find((p) => p.file === file);

              return (
                <div
                  key={`${file.name}-${index}`}
                  className={cn(
                    'group flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-xl',
                    'transition-all duration-200',
                    'hover:shadow-md hover:border-primary/30'
                  )}
                >
                  {/* Preview o icono */}
                  {preview ? (
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                      <img
                        src={preview.url}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={cn(
                        'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0',
                        'bg-gradient-to-br from-primary/10 to-accent/10'
                      )}
                    >
                      <FileIcon className="w-6 h-6 text-primary" />
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-800 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>

                  {/* Botón eliminar */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(file);
                    }}
                    className={cn(
                      'p-1.5 rounded-lg opacity-0 group-hover:opacity-100',
                      'text-neutral-400 hover:text-red-500 hover:bg-red-50',
                      'transition-all duration-200'
                    )}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
