import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { MessagesByLanguage, SupportedLanguage } from './messages';
import { createTranslator } from './translator';

export interface I18nContextValue {
  language: string;
  messagesByLanguage: MessagesByLanguage;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const defaultI18n = createTranslator({ language: 'es' });

const I18nContext = createContext<I18nContextValue>(defaultI18n);

export interface I18nProviderProps {
  children: ReactNode;
  /** Current language code (controlled by the host app) */
  language: string;
  /** Optional per-language dictionaries to extend/override built-in messages */
  messages?: MessagesByLanguage;
  /** Fallback language for missing keys (defaults to 'en') */
  fallbackLanguage?: SupportedLanguage;
}

export function I18nProvider({
  children,
  language,
  messages,
  fallbackLanguage = 'es',
}: I18nProviderProps) {
  const value = useMemo(
    () => createTranslator({ language, messagesByLanguage: messages, fallbackLanguage }),
    [language, messages, fallbackLanguage]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  return useContext(I18nContext);
}
