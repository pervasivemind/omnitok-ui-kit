import { forwardRef, type HTMLAttributes, type ReactNode, useState } from 'react';
import { AlertCircle, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { cn } from '../../utils/cn';
import { createTranslator, useI18n, type SupportedLanguage } from '../../i18n';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import { PoweredByMark } from '../Header/PoweredByMark';

/**
 * Omnitok UI v3 — sign-in page.
 *
 * `split` (the v3 default for products, D26): the customer's brand on the
 * left over the sidebar colour (so a tenant tint reaches it), the form on
 * the right on white. Below `lg` the hero folds away and the brand sits
 * above the form. `centered` and `gradient` keep the form in a card.
 *
 * The brand is the customer's: a logo node or, without one, its name as a
 * wordmark (`brandText`). The platform keeps the "powered by" mark.
 */
export interface LoginPageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  /** Language for built-in strings. Overrides I18nProvider language if set. */
  language?: SupportedLanguage;
  /** Logo element (square logo recommended) */
  logo?: ReactNode;
  /** Logo for wide/horizontal display */
  logoWide?: ReactNode;
  /** Logo for the split hero panel (drawn on the dark side) */
  splitLogo?: ReactNode;
  /** Customer name as a wordmark when there is no logo. */
  brandText?: string;
  /** Split hero title. Defaults to the kit's welcome string. */
  heroTitle?: ReactNode;
  /** Split hero description. */
  heroDescription?: ReactNode;
  /** Show "powered by omnitok" in the split hero. Default true. */
  poweredBy?: boolean;
  /** Submit handler */
  onLoginSubmit?: (email: string, password: string) => void;
  /** Loading state */
  loading?: boolean;
  /** Error message */
  error?: string;
  /** Forgot password handler */
  onForgotPassword?: () => void;
  /** Remember me option */
  showRememberMe?: boolean;
  /** Show forgot password option */
  showForgotPassword?: boolean;
  /** Footer content */
  footer?: ReactNode;
  /** Background variant */
  variant?: 'gradient' | 'split' | 'centered';
  /**
   * Prefix for the field ids. Default: none, so the fields keep the stable
   * ids `email` and `password` that hosts and tests rely on. Set it when two
   * login forms share a page.
   */
  idPrefix?: string;
}

export const LoginPage = forwardRef<HTMLDivElement, LoginPageProps>(
  (
    {
      language,
      logo,
      logoWide,
      splitLogo,
      brandText,
      heroTitle,
      heroDescription,
      poweredBy = true,
      onLoginSubmit,
      loading = false,
      error,
      onForgotPassword,
      showRememberMe = true,
      showForgotPassword = true,
      footer,
      variant = 'gradient',
      idPrefix,
      className,
      ...props
    },
    ref
  ) => {
    const i18n = useI18n();
    const { t } = language
      ? createTranslator({
          language,
          messagesByLanguage: i18n.messagesByLanguage,
        })
      : i18n;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const fieldId = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name);
    const isSplit = variant === 'split';

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onLoginSubmit?.(email, password);
    };

    // Brand above the form: always outside `split`, and in `split` only while
    // the hero is folded away (below lg).
    const lightLogo = logoWide || logo;
    const lightBrand = lightLogo ? (
      <>
        <div className="md:hidden">{logo ?? logoWide}</div>
        <div className="hidden md:block">{lightLogo}</div>
      </>
    ) : brandText ? (
      <span className="font-display text-[22px] font-extrabold tracking-[-.02em] text-[var(--omni-ink)]">{brandText}</span>
    ) : null;

    const formContent = (
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className={cn(isSplit ? 'text-left' : 'text-center')}>
          {lightBrand && (
            <div
              className={cn(
                'mb-7 flex [&_img]:max-h-10 [&_img]:w-auto',
                isSplit ? 'justify-start lg:hidden' : 'justify-center'
              )}
            >
              {lightBrand}
            </div>
          )}
          <h1 className="font-display text-[26px] font-extrabold leading-8 tracking-[-.02em] text-[var(--omni-ink)]">
            {t('login.title')}
          </h1>
          <p className="mt-1.5 text-[13px] leading-5 text-neutral-500">{t('login.subtitle')}</p>
        </div>

        {error && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-xl border border-error/30 bg-error-soft px-3.5 py-3 text-[13px] leading-5 text-error-dark"
          >
            <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <Input
          id={fieldId('email')}
          label={t('login.emailLabel')}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('login.emailPlaceholder')}
          leftIcon={<Mail aria-hidden="true" className="h-4 w-4" />}
          size="lg"
          required
          disabled={loading}
        />

        <Input
          id={fieldId('password')}
          label={t('login.passwordLabel')}
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t('login.passwordPlaceholder')}
          leftIcon={<Lock aria-hidden="true" className="h-4 w-4" />}
          size="lg"
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? t('login.hidePassword') : t('login.showPassword')}
              aria-pressed={showPassword}
              className="grid h-7 w-7 place-items-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800"
            >
              {showPassword ? <EyeOff aria-hidden="true" className="h-4 w-4" /> : <Eye aria-hidden="true" className="h-4 w-4" />}
            </button>
          }
          required
          disabled={loading}
        />

        {(showRememberMe || (showForgotPassword && onForgotPassword)) && (
          <div className="-mt-1 flex items-center justify-between gap-3">
            {showRememberMe ? (
              <Checkbox
                label={t('login.rememberMe')}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            ) : (
              <span />
            )}
            {showForgotPassword && onForgotPassword && (
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-xs font-semibold text-primary-ink underline-offset-2 hover:underline"
              >
                {t('login.forgotPassword')}
              </button>
            )}
          </div>
        )}

        <Button type="submit" variant="primary" size="lg" fullWidth loading={loading} className="mt-1">
          {t('login.submit')}
        </Button>

        {footer && <div className="text-center text-xs text-neutral-500">{footer}</div>}
      </form>
    );

    if (isSplit) {
      const darkBrand =
        splitLogo ||
        logoWide ||
        logo ||
        (brandText ? (
          <span className="font-display text-[26px] font-extrabold tracking-[-.02em] text-white">{brandText}</span>
        ) : null);
      return (
        <div ref={ref} data-omni-login="split" className={cn('flex min-h-screen bg-white font-sans', className)} {...props}>
          <aside className="relative hidden w-[44%] max-w-[640px] flex-col justify-between overflow-hidden p-10 text-white [background:var(--omni-sb-bg)] lg:flex xl:p-14">
            <div className="flex min-h-10 items-center [&_img]:max-h-14 [&_img]:w-auto">{darkBrand}</div>
            <div className="max-w-[440px]">
              <span aria-hidden="true" className="mb-6 block h-1 w-12 rounded-full bg-[var(--omni-sb-accent)]" />
              <h2 className="font-display text-[34px] font-extrabold leading-[1.15] tracking-[-.02em] text-white">
                {heroTitle ?? t('login.split.heroTitle')}
              </h2>
              <p className="mt-4 text-[15px] leading-6 text-[#C9C4E6]">{heroDescription ?? t('login.split.heroDescription')}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-2xs text-[var(--omni-sb-muted)]">
                {t('login.split.copyright', { year: new Date().getFullYear() })}
              </span>
              {poweredBy && <PoweredByMark caption={t('header.poweredBy')} />}
            </div>
          </aside>
          <main className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10">
            <div className="w-full max-w-[380px]">{formContent}</div>
          </main>
        </div>
      );
    }

    const card = (
      <div className="w-full max-w-[420px] rounded-[18px] border border-neutral-200 bg-white p-8 shadow-card-hover sm:p-10">
        {formContent}
      </div>
    );

    if (variant === 'centered') {
      return (
        <div
          ref={ref}
          data-omni-login="centered"
          className={cn('flex min-h-screen items-center justify-center bg-[var(--omni-canvas)] p-4 font-sans', className)}
          {...props}
        >
          {card}
        </div>
      );
    }

    // Default: gradient (the sidebar colour behind a card).
    return (
      <div
        ref={ref}
        data-omni-login="gradient"
        className={cn('flex min-h-screen items-center justify-center p-4 font-sans [background:var(--omni-sb-bg)]', className)}
        {...props}
      >
        {card}
      </div>
    );
  }
);

LoginPage.displayName = 'LoginPage';
