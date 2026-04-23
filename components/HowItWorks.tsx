'use client';

import { RichText, useT } from '@/lib/i18n';
import { SectionHead } from './SectionHead';
import styles from './HowItWorks.module.css';

const steps = [
  { n: '01', h: 'st1_h', p: 'st1_p', m1: 'st1_m1', m2: 'st1_m2', d: '0s' },
  { n: '02', h: 'st2_h', p: 'st2_p', m1: 'st2_m1', m2: 'st2_m2', d: '.1s' },
  { n: '03', h: 'st3_h', p: 'st3_p', m1: 'st3_m1', m2: 'st3_m2', d: '.2s' },
] as const;

export function HowItWorks() {
  const t = useT();
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <SectionHead index="03" eyebrow={t('sec_how_eye')}>
          {t('sec_how_h_a')} <em>{t('sec_how_h_b')}</em>.
        </SectionHead>

        <div className={styles.steps}>
          {steps.map((s) => (
            <div
              key={s.n}
              className={`${styles.step} reveal`}
              style={{ ['--d' as string]: s.d }}
            >
              <span className={styles.num}>
                <em>{s.n}</em>
              </span>
              <h4 className={styles.h4}>{t(s.h)}</h4>
              <p className={styles.p}>{t(s.p)}</p>
              <div className={styles.meta}>
                <RichText k={s.m1} as="span" />
                <RichText k={s.m2} as="span" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
