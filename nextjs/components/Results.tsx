'use client';

import { useEffect, useRef, useState } from 'react';
import { useT } from '@/lib/i18n';
import { SectionHead } from './SectionHead';
import styles from './Results.module.css';

type Row = {
  w: 'w_0' | 'w_3' | 'w_6' | 'w_9' | 'w_12';
  t: 'tl1' | 'tl2' | 'tl3' | 'tl4' | 'tl5';
  b?: 'tl1b';
  pct: string;
  done?: boolean;
};

const rows: Row[] = [
  { w: 'w_0', t: 'tl1', b: 'tl1b', pct: '—' },
  { w: 'w_3', t: 'tl2', pct: '−28%' },
  { w: 'w_6', t: 'tl3', pct: '−54%' },
  { w: 'w_9', t: 'tl4', pct: '−78%' },
  { w: 'w_12', t: 'tl5', pct: '−93%', done: true },
];

export function Results() {
  const t = useT();
  const boxRef = useRef<HTMLDivElement>(null);
  const [clip, setClip] = useState(48);
  const draggingRef = useRef(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const setFromX = (x: number) => {
      const r = box.getBoundingClientRect();
      const pct = Math.max(4, Math.min(96, ((x - r.left) / r.width) * 100));
      setClip(pct);
    };

    const onDown = (e: MouseEvent) => {
      draggingRef.current = true;
      setFromX(e.clientX);
    };
    const onMove = (e: MouseEvent) => {
      if (draggingRef.current) setFromX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    const onTStart = (e: TouchEvent) => {
      draggingRef.current = true;
      setFromX(e.touches[0].clientX);
    };
    const onTMove = (e: TouchEvent) => {
      if (draggingRef.current) setFromX(e.touches[0].clientX);
    };
    const onTEnd = () => {
      draggingRef.current = false;
    };

    box.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    box.addEventListener('touchstart', onTStart, { passive: true });
    box.addEventListener('touchmove', onTMove, { passive: true });
    box.addEventListener('touchend', onTEnd);

    return () => {
      box.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      box.removeEventListener('touchstart', onTStart);
      box.removeEventListener('touchmove', onTMove);
      box.removeEventListener('touchend', onTEnd);
    };
  }, []);

  return (
    <section className={`sec ${styles.section}`} id="results">
      <div className="wrap">
        <SectionHead index="04" eyebrow={t('sec_res_eye')}>
          {t('sec_res_h_a')} <em>{t('sec_res_h_b')}</em>
        </SectionHead>

        <div className={styles.grid}>
          <div
            ref={boxRef}
            className={`${styles.compare} reveal`}
            style={{ ['--clip' as string]: `${clip}%` }}
            aria-label="Antes y después"
          >
            <div className={`${styles.pane} ${styles.before}`} aria-hidden />
            <div className={`${styles.pane} ${styles.after}`} aria-hidden />
            <span className={`${styles.tag} ${styles.tagA}`}>{t('before')}</span>
            <span className={`${styles.tag} ${styles.tagB}`}>{t('after')}</span>
            <div className={styles.handle} />
          </div>

          <div
            className={`${styles.side} reveal`}
            style={{ ['--d' as string]: '.1s' }}
          >
            <div className={styles.timeline}>
              {rows.map((r) => (
                <div
                  key={r.w}
                  className={`${styles.row} ${r.done ? styles.done : ''}`}
                >
                  <span className={styles.w}>{t(r.w)}</span>
                  <span className={styles.t}>
                    {t(r.t)} {r.b ? <em>{t(r.b)}</em> : null}
                  </span>
                  <span className={styles.pct}>{r.pct}</span>
                </div>
              ))}
            </div>

            <div className={styles.quote}>
              <q>{t('quote')}</q>
              <div className={styles.who}>
                <span className="av" />
                <span>{t('quote_who')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
