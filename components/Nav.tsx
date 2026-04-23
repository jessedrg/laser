'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { useCart } from '@/lib/cart';
import { LangSwitch } from './ui/LangSwitch';
import styles from './Nav.module.css';

export function Nav() {
  const t = useT();
  const { count } = useCart();
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="ipllaserstore">
          <Image
            className={styles.logo}
            src="/assets/logo.svg"
            alt="ipllaserstore"
            width={180}
            height={34}
            priority
          />
        </Link>
        <div className={styles.links}>
          <a href="#why">{t('nav_why')}</a>
          <a href="#product">{t('nav_product')}</a>
          <a href="#how">{t('nav_how')}</a>
          <a href="#results">{t('nav_results')}</a>
          <a href="#blog">{t('nav_blog')}</a>
          <LangSwitch />
          <a href="#product" className={styles.cta}>
            {t('nav_cta')}
            {count > 0 && (
              <span className={styles.badge}>{count}</span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
}
