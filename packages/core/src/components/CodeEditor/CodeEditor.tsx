import {
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
  type HTMLAttributes,
} from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Module types for the lazily-loaded editor dependencies. Kept loose so the
 * heavy `prismjs` / `react-simple-code-editor` types never enter the main bundle.
 */
type PrismModule = {
  languages: Record<string, unknown>;
  highlight: (code: string, grammar: unknown, language: string) => string;
};
type EditorComponent = React.ComponentType<{
  value: string;
  onValueChange: (code: string) => void;
  highlight: (code: string) => string;
  padding?: number | { top?: number; right?: number; bottom?: number; left?: number };
  tabSize?: number;
  insertSpaces?: boolean;
  textareaId?: string;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  textareaClassName?: string;
  preClassName?: string;
}>;
type EditorMods = { Editor: EditorComponent; Prism: PrismModule };

/**
 * Lazy, memoized loader for the editor libraries. Because the package barrel
 * re-exports this component, a static top-level `import 'prismjs'` would pull
 * Prism + react-simple-code-editor into every consumer's bundle. Loading them
 * via dynamic `import()` lets the bundler emit a separate async chunk that only
 * downloads when a `CodeEditor` actually mounts.
 */
let modsPromise: Promise<EditorMods> | null = null;
function loadEditorMods(): Promise<EditorMods> {
  if (!modsPromise) {
    modsPromise = Promise.all([
      import('react-simple-code-editor'),
      // prismjs core ships markup/css/clike/javascript — no grammars eagerly imported
      import('prismjs'),
    ]).then(([ed, prism]) => ({
      Editor: (ed.default ?? ed) as unknown as EditorComponent,
      Prism: ((prism as { default?: PrismModule }).default ?? prism) as PrismModule,
    }));
  }
  return modsPromise;
}

/**
 * Curated map of non-core Prism grammars. Each entry is a static-literal dynamic
 * import so the bundler emits one async chunk per grammar and only the requested
 * language's chunk is fetched. Add an entry here to support more languages.
 * (Core languages — markup/html/xml/svg, css, clike, javascript/js — are already
 * in prismjs core and are intentionally absent.)
 */
const GRAMMAR_LOADERS: Record<string, () => Promise<unknown>> = {
  json: () => import('prismjs/components/prism-json'),
  bash: () => import('prismjs/components/prism-bash'),
  yaml: () => import('prismjs/components/prism-yaml'),
  markdown: () => import('prismjs/components/prism-markdown'),
  jsx: () => import('prismjs/components/prism-jsx'),
  typescript: () => import('prismjs/components/prism-typescript'),
  // tsx depends on both jsx and typescript being registered first
  tsx: async () => {
    await import('prismjs/components/prism-jsx');
    await import('prismjs/components/prism-typescript');
    await import('prismjs/components/prism-tsx');
  },
};

/** Memoize each grammar load so multiple editors share a single chunk fetch. */
const grammarPromises = new Map<string, Promise<unknown>>();
function ensureGrammar(prism: PrismModule, language: string): Promise<unknown> {
  if (prism.languages[language]) return Promise.resolve();
  const loader = GRAMMAR_LOADERS[language];
  if (!loader) return Promise.resolve();
  let p = grammarPromises.get(language);
  if (!p) {
    p = loader();
    grammarPromises.set(language, p);
  }
  return p;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const MONO_STYLE: React.CSSProperties = {
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: 13,
  lineHeight: 1.5,
};

export interface CodeEditorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Label text */
  label?: string;
  /** Helper text shown below the editor */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Full width editor */
  fullWidth?: boolean;
  /** Current code value (controlled) */
  value: string;
  /** Called with the new code on edit */
  onValueChange?: (code: string) => void;
  /** Prism language id (e.g. 'javascript', 'json', 'tsx'). Non-core grammars are lazy-loaded. */
  language?: string;
  /** Placeholder shown when empty */
  placeholder?: string;
  /** Number of spaces per indent level */
  tabSize?: number;
  /** Insert spaces instead of a tab character */
  insertSpaces?: boolean;
  /** Minimum height of the editing area */
  minHeight?: number | string;
  /** Render highlighted, read-only content with no textarea */
  displayOnly?: boolean;
  /** Show a line-number gutter */
  showLineNumbers?: boolean;
  /** Show a line/character count footer */
  showCount?: boolean;
  /** Show a copy-to-clipboard button */
  showCopyButton?: boolean;
  /** Disable editing */
  disabled?: boolean;
}

export const CodeEditor = forwardRef<HTMLDivElement, CodeEditorProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = false,
      value,
      onValueChange,
      language = 'javascript',
      placeholder,
      tabSize = 2,
      insertSpaces = true,
      minHeight = 120,
      displayOnly = false,
      showLineNumbers = false,
      showCount = false,
      showCopyButton = false,
      disabled = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const editorId = id || `code-editor-${generatedId}`;
    const hasError = !!error;

    const [mods, setMods] = useState<EditorMods | null>(null);
    const [readyLang, setReadyLang] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Load editor libs once, then the grammar for the active language.
    useEffect(() => {
      let active = true;
      void (async () => {
        const m = await loadEditorMods();
        if (!active) return;
        setMods(m);
        await ensureGrammar(m.Prism, language);
        if (active) setReadyLang(language);
      })();
      return () => {
        active = false;
      };
    }, [language]);

    useEffect(
      () => () => {
        if (copyTimeout.current) clearTimeout(copyTimeout.current);
      },
      []
    );

    const prism = mods?.Prism;
    const grammarReady = !!prism && readyLang === language;

    const highlight = (code: string): string => {
      if (prism && grammarReady) {
        const grammar = prism.languages[language] ?? prism.languages.javascript;
        if (grammar) return prism.highlight(code, grammar, language);
      }
      // Until Prism + grammar resolve, render escaped plain text (no tokens).
      return escapeHtml(code);
    };

    const handleCopy = () => {
      void navigator.clipboard?.writeText(value);
      setCopied(true);
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2000);
    };

    const lineCount = Math.max(1, value.split('\n').length);
    const describedBy = hasError
      ? `${editorId}-error`
      : helperText
        ? `${editorId}-helper`
        : undefined;

    const code =
      displayOnly || !mods ? (
        // Display-only, or fallback before the editor lib resolves.
        displayOnly ? (
          <pre
            className="m-0 overflow-auto px-4 py-3"
            style={{ ...MONO_STYLE, minHeight }}
          >
            <code dangerouslySetInnerHTML={{ __html: highlight(value) }} />
          </pre>
        ) : (
          // Editable fallback: a plain textarea so there is no layout shift.
          <textarea
            id={editorId}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            spellCheck={false}
            onChange={(e) => onValueChange?.(e.target.value)}
            className="m-0 w-full resize-none border-0 bg-transparent px-4 py-3 focus:outline-none"
            style={{ ...MONO_STYLE, minHeight }}
          />
        )
      ) : (
        <mods.Editor
          value={value}
          onValueChange={(code) => onValueChange?.(code)}
          highlight={highlight}
          padding={{ top: 12, right: 16, bottom: 12, left: 16 }}
          tabSize={tabSize}
          insertSpaces={insertSpaces}
          textareaId={editorId}
          disabled={disabled}
          placeholder={placeholder}
          style={{ ...MONO_STYLE, minHeight }}
          textareaClassName="focus:outline-none"
        />
      );

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={editorId}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {showCopyButton && (
            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? 'Copied' : 'Copy code'}
              className={cn(
                'absolute right-2 top-2 z-10 rounded-md p-1.5',
                'bg-white/80 text-neutral-500 backdrop-blur',
                'transition-colors hover:bg-neutral-100 hover:text-neutral-700',
                'focus:outline-none focus:ring-2 focus:ring-primary'
              )}
            >
              {copied ? (
                <Check size={16} className="text-success" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          )}
          <div
            ref={ref}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            className={cn(
              'omnitok-code-editor',
              'overflow-hidden rounded-md border bg-white',
              'transition-colors duration-200',
              !displayOnly &&
                !disabled &&
                'focus-within:border-primary focus-within:ring-2 focus-within:ring-primary',
              hasError
                ? 'border-error focus-within:border-error focus-within:ring-error'
                : 'border-neutral-300',
              disabled && 'cursor-not-allowed bg-neutral-100 opacity-60',
              className
            )}
            {...props}
          >
            <div className="flex">
              {showLineNumbers && (
                <div
                  aria-hidden="true"
                  className="select-none border-r border-neutral-200 bg-neutral-50 py-3 pl-4 pr-3 text-right text-neutral-400"
                  style={MONO_STYLE}
                >
                  {Array.from({ length: lineCount }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
              )}
              <div className="min-w-0 flex-1">{code}</div>
            </div>
          </div>
        </div>
        {(hasError || helperText || (showCount && !displayOnly)) && (
          <div className="flex justify-between">
            <div>
              {hasError && (
                <p id={`${editorId}-error`} className="text-sm text-error">
                  {error}
                </p>
              )}
              {!hasError && helperText && (
                <p id={`${editorId}-helper`} className="text-sm text-neutral-500">
                  {helperText}
                </p>
              )}
            </div>
            {showCount && !displayOnly && (
              <span className="text-sm text-neutral-500">
                {lineCount} {lineCount === 1 ? 'line' : 'lines'} · {value.length} chars
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

CodeEditor.displayName = 'CodeEditor';
