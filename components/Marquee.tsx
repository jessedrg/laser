'use client';

import { useT } from '@/lib/i18n';
import styles from './Marquee.module.css';

function Dot() {
  return (
    <svg width="8" height="8" viewBox="0 0 10 10">
      <circle cx="5" cy="5" r="2" fill="currentColor" />
    </svg>
  );
}

export function Marquee() {
  const t = useT();
  const items = [t('mq1'), t('mq2'), t('mq3'), t('mq4'), t('mq5')];

  const row = (
    <span>
      {items.map((it, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 48 }}>
          <span>{it}</span>
          <Dot />
        </span>
      ))}
    </span>
  );

  return (
    <div className="wrap">
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.track}>
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}
