import type { ReactNode } from 'react';
import styles from './SectionHead.module.css';

export function SectionHead({
  index,
  eyebrow,
  children,
}: {
  index: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div className={`${styles.head} reveal`}>
      <div className={styles.label}>
        <span className={styles.ix}>{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className={styles.h2}>{children}</h2>
    </div>
  );
}
