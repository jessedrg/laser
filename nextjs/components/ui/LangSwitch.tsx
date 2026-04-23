'use client';

import { useI18n } from '@/lib/i18n';
import styles from './LangSwitch.module.css';

export function LangSwitch() {
  const { locale, setLocale } = useI18n();
  const cur = locale.toUpperCase();
  const alt = locale === 'es' ? 'EN' : 'ES';

  return (
    <button
      type="button"
      className={styles.lang}
      onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
      aria-label="Cambiar idioma / switch language"
    >
      <b className={styles.cur}>{cur}</b>
      <span className={styles.sep}>/</span>
      <span>{alt}</span>
    </button>
  );
}
