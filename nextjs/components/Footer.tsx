'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RichText, useT } from '@/lib/i18n';
import styles from './Footer.module.css';

export function Footer() {
  const t = useT();
  return (
    <footer className={styles.ft}>
      <div className="wrap">
        <div className={styles.top}>
          <div>
            <Link href="/" className={styles.brand} aria-label="ipllaserstore">
              <Image
                className={styles.logo}
                src="/assets/logo.svg"
                alt="ipllaserstore"
                width={220}
                height={44}
              />
            </Link>
            <RichText k="ft_tag" as="div" className={styles.tag} />
          </div>
          <div className={styles.col}>
            <h4>{t('ft_c1')}</h4>
            <ul>
              <li><a href="#">{t('ft_c1_1')}</a></li>
              <li><a href="#">{t('ft_c1_2')}</a></li>
              <li><a href="#">{t('ft_c1_3')}</a></li>
              <li><a href="#">{t('ft_c1_4')}</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>{t('ft_c2')}</h4>
            <ul>
              <li><a href="#">{t('ft_c2_1')}</a></li>
              <li><a href="#">{t('ft_c2_2')}</a></li>
              <li><a href="#">{t('ft_c2_3')}</a></li>
              <li><a href="#">{t('ft_c2_4')}</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>{t('ft_c3')}</h4>
            <ul>
              <li><a href="#">{t('ft_c3_1')}</a></li>
              <li><a href="#">{t('ft_c3_2')}</a></li>
              <li><a href="#">{t('ft_c3_3')}</a></li>
              <li><a href="#">{t('ft_c3_4')}</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bot}>
          <span>© 2026 ipllaserstore</span>
          <span>{t('ft_made')}</span>
        </div>
      </div>
    </footer>
  );
}
