'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { RichText, useT } from '@/lib/i18n';
import { useReveal } from '@/lib/useReveal';
import { Button } from './ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  const t = useT();
  const photoRef = useRef<HTMLImageElement>(null);

  // IntersectionObserver for .reveal elements on the whole page
  useReveal();

  // Parallax on hero photo
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = photoRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const pct = (rect.top - vh) / vh;
      el.style.transform = `scale(1.08) translateY(${pct * -20}px)`;
    };
    onScroll();
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={styles.hero}>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />

      <div className="wrap">
        <div className={styles.top}>
          <div className={styles.chips}>
            <span className={styles.chip}>
              <span className={styles.tick} />
              <span>{t('ch1')}</span>
            </span>
            <span className={styles.chip}>
              <span className={styles.tick} />
              <span>{t('ch2')}</span>
            </span>
            <span className={styles.chip}>
              <span className={styles.tick} />
              <span>{t('ch3')}</span>
            </span>
          </div>
          <div className={styles.meta}>{t('hero_meta')}</div>
        </div>

        <div className={styles.stage}>
          <div className={styles.left}>
            <span className="eyebrow">{t('hero_eyebrow')}</span>

            <h1 className={styles.h1}>
              <span className={`${styles.word} ${styles.w1}`}>
                {t('h1_l1')}
              </span>
              <br />
              <span className={`${styles.word} ${styles.w2}`}>
                {t('h1_l2')}
              </span>
              <span className={styles.dot}>.</span>
              <br />
              <span className={`${styles.word} ${styles.w3}`}>
                {t('h1_l3')}
              </span>{' '}
              <span className={`${styles.word} ${styles.w4}`}>
                {t('h1_l4')}
              </span>
            </h1>

            <div className={styles.sub}>
              <div>
                <RichText k="lead" as="p" className={styles.lead} />
                <div className={styles.ctas}>
                  <Button href="#product" variant="primary" withArrow>
                    {t('cta_primary')}
                  </Button>
                  <Button href="#how" variant="ghost">
                    {t('cta_secondary')}
                  </Button>
                </div>
              </div>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.n}>999K</div>
                  <div className={styles.l}>{t('stat_flashes')}</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.n}>
                    93<sup>%</sup>
                  </div>
                  <div className={styles.l}>{t('stat_reduction')}</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.n}>
                    2<span className={styles.yr}>y</span>
                  </div>
                  <div className={styles.l}>{t('stat_warranty')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <Image
              ref={photoRef}
              className={styles.photo}
              src="/assets/hero.png"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              priority
            />
            <div className={styles.photoOverlay} />

            <div className={styles.live}>
              <span className={styles.liveDot} />
              <span>{t('hero_badge')}</span>
            </div>

            <div className={`${styles.floater} ${styles.f1}`}>
              <span className={styles.k}>{t('flo1_k')}</span>
              <span className={styles.v}>–4 °C</span>
            </div>
            <div className={`${styles.floater} ${styles.f2}`}>
              <span className={styles.k}>{t('flo2_k')}</span>
              <span className={styles.v}>{t('flo2_v')}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
