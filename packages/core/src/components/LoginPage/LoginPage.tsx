import { forwardRef, type HTMLAttributes, type ReactNode, useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { cn } from '../../utils/cn';
import { createTranslator, useI18n, type SupportedLanguage } from '../../i18n';
import { Button } from '../Button';
import { Input } from '../Input';

export interface LoginPageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  /** Language for built-in strings. Overrides I18nProvider language if set. */
  language?: SupportedLanguage;
  /** Logo element (square logo recommended) */
  logo?: ReactNode;
  /** Logo for wide/horizontal display */
  logoWide?: ReactNode;
  /** Logo for the split hero panel */
  splitLogo?: ReactNode;
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
  /** Footer content */
  footer?: ReactNode;
  /** Background variant */
  variant?: 'gradient' | 'split' | 'centered';
}

export const LoginPage = forwardRef<HTMLDivElement, LoginPageProps>(
  (
    {
      language,
      logo,
      logoWide,
      splitLogo,
      onLoginSubmit,
      loading = false,
      error,
      onForgotPassword,
      showRememberMe = true,
      footer,
      variant = 'gradient',
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

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onLoginSubmit?.(email, password);
    };

    const formContent = (
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          {(logo || logoWide) && (
            <div className="flex justify-center mb-6">
              <div className="md:hidden">{logo}</div>
              <div className="hidden md:block">{logoWide || logo}</div>
            </div>
          )}
          <h1 className="text-2xl font-bold text-neutral-900">{t('login.title')}</h1>
          <p className="mt-2 text-neutral-500">{t('login.subtitle')}</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm">
            {error}
          </div>
        )}

        {/* Email field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            {t('login.emailLabel')}
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('login.emailPlaceholder')}
            leftIcon={<Mail className="w-5 h-5" />}
            required
            disabled={loading}
          />
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
            {t('login.passwordLabel')}
          </label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('login.passwordPlaceholder')}
            leftIcon={<Lock className="w-5 h-5" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-neutral-400 hover:text-neutral-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            }
            required
            disabled={loading}
          />
        </div>

        {/* Remember me & Forgot password */}
        <div className="flex items-center justify-between">
          {showRememberMe && (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-neutral-600">{t('login.rememberMe')}</span>
            </label>
          )}
          {onForgotPassword && (
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-primary hover:text-primary-dark font-medium"
            >
              {t('login.forgotPassword')}
            </button>
          )}
        </div>

        {/* Submit button */}
        <Button type="submit" variant="accent" fullWidth loading={loading} className="py-3">
          {t('login.submit')}
        </Button>

        {/* Footer */}
        {footer && <div className="text-center">{footer}</div>}
      </form>
    );

    if (variant === 'split') {
      return (
        <div ref={ref} className={cn('min-h-screen flex', className)} {...props}>
          {/* Left side - Branding */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sidebar via-primary to-accent p-12 flex-col justify-between">
            <div>
              {(splitLogo || logoWide || logo) && (
                <div className="mb-8">{splitLogo || logoWide || logo}</div>
              )}
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">{t('login.split.heroTitle')}</h2>
              <p className="text-white/80 text-lg">{t('login.split.heroDescription')}</p>
            </div>
            <div className="text-white/50 text-sm">
              {t('login.split.copyright', { year: new Date().getFullYear() })}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
            <div className="w-full max-w-md">{formContent}</div>
          </div>
        </div>
      );
    }

    if (variant === 'centered') {
      return (
        <div
          ref={ref}
          className={cn(
            'min-h-screen flex items-center justify-center p-4 bg-neutral-100',
            className
          )}
          {...props}
        >
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">{formContent}</div>
        </div>
      );
    }

    // Default: gradient
    return (
      <div
        ref={ref}
        className={cn(
          'min-h-screen flex items-center justify-center p-4',
          'bg-gradient-to-br from-sidebar via-primary to-accent',
          className
        )}
        {...props}
      >
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">{formContent}</div>
      </div>
    );
  }
);

LoginPage.displayName = 'LoginPage';
