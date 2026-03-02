import type { MessagesByLanguage, SupportedLanguage } from './messages';
import { defaultMessages } from './messages';

export interface CreateTranslatorOptions {
  language: string;
  /** Per-language message dictionaries (merged on top of defaults) */
  messagesByLanguage?: MessagesByLanguage;
  /** Fallback language if key is missing for current language */
  fallbackLanguage?: SupportedLanguage;
}

const templateVarRegex = /\{(\w+)\}/g;

function mergeMessages(
  base: MessagesByLanguage,
  override?: MessagesByLanguage
): MessagesByLanguage {
  if (!override) return base;
  const merged: MessagesByLanguage = { ...base };
  for (const [lang, dict] of Object.entries(override)) {
    merged[lang] = { ...(merged[lang] ?? {}), ...dict };
  }
  return merged;
}

export function createTranslator({
  language,
  messagesByLanguage,
  fallbackLanguage = 'en',
}: CreateTranslatorOptions) {
  const mergedMessagesByLanguage = mergeMessages(defaultMessages, messagesByLanguage);

  const t = (key: string, vars?: Record<string, string | number>) => {
    const dict = mergedMessagesByLanguage[language] ?? {};
    const fallbackDict = mergedMessagesByLanguage[fallbackLanguage] ?? {};

    const template = dict[key] ?? fallbackDict[key] ?? key;

    if (!vars) return template;

    return template.replace(templateVarRegex, (match, rawName) => {
      const name = String(rawName);
      const value = vars[name];
      return value === undefined || value === null ? match : String(value);
    });
  };

  return {
    language,
    messagesByLanguage: mergedMessagesByLanguage,
    t,
  };
}
