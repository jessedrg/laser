'use client';

import { useT } from '@/lib/i18n';
import { Button } from './ui/Button';
import styles from './CTA.module.css';

export function CTA() {
  const t = useT();
  return (
    <div className="wrap">
      <section className={`${styles.cta} reveal`}>
        <div className={styles.sw} />
        <div className={styles.inner}>
          <h2 className={styles.h2}>
            <span>{t('cta_h_a')}</span>
            <br />
            <em>{t('cta_h_b')}</em>
            <br />
            <span>{t('cta_h_c')}</span>
            <span className={styles.ac}>.</span>
          </h2>
          <div className={styles.side}>
            <p>{t('cta_side')}</p>
            <div>
              <Button href="#product" variant="onDark" withArrow>
                {t('cta_primary2')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
