'use client';

import type { ReactNode } from 'react';
import { RichText, useT } from '@/lib/i18n';
import { SectionHead } from './SectionHead';
import styles from './Benefits.module.css';

function G1() {
  return (
    <svg width="26" height="26" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="3" fill="currentColor" />
      <path
        d="M17 2v6M17 26v6M2 17h6M26 17h6M6 6l4 4M24 24l4 4M28 6l-4 4M6 28l4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
function G2() {
  return (
    <svg width="26" height="26" viewBox="0 0 34 34" fill="none">
      <path
        d="M17 4c6 6 10 10 10 15a10 10 0 01-20 0c0-5 4-9 10-15z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12 20c0 3 2 5 5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
function G3() {
  return (
    <svg width="26" height="26" viewBox="0 0 34 34" fill="none">
      <rect x="6" y="6" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 13h22M13 6v22" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function G4() {
  return (
    <svg width="26" height="26" viewBox="0 0 34 34" fill="none">
      <path
        d="M8 17c3-5 7-7 9-7s6 2 9 7c-3 5-7 7-9 7s-6-2-9-7z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

type Item = {
  ix: string;
  glyph: ReactNode;
  hKey: 'b1_h' | 'b2_h' | 'b3_h' | 'b4_h';
  pKey: 'b1_p' | 'b2_p' | 'b3_p' | 'b4_p';
  delay: string;
};

const items: Item[] = [
  { ix: '01', glyph: <G1 />, hKey: 'b1_h', pKey: 'b1_p', delay: '0s' },
  { ix: '02', glyph: <G2 />, hKey: 'b2_h', pKey: 'b2_p', delay: '.08s' },
  { ix: '03', glyph: <G3 />, hKey: 'b3_h', pKey: 'b3_p', delay: '.16s' },
  { ix: '04', glyph: <G4 />, hKey: 'b4_h', pKey: 'b4_p', delay: '.24s' },
];

export function Benefits() {
  const t = useT();
  return (
    <section className="sec" id="why">
      <div className="wrap">
        <SectionHead index="01" eyebrow={t('sec_why_eye')}>
          {t('sec_why_h_a')} <em>{t('sec_why_h_b')}</em>
          <span className="ink-ac">.</span>
        </SectionHead>

        <div className={styles.grid}>
          {items.map((it) => (
            <div
              key={it.ix}
              className={`${styles.card} reveal`}
              style={{ ['--d' as string]: it.delay }}
            >
              <div className={styles.glyph}>{it.glyph}</div>
              <span className={styles.ix}>{it.ix}</span>
              <RichText k={it.hKey} as="h3" className={styles.h3} />
              <RichText k={it.pKey} as="p" className={styles.p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
