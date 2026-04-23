'use client';

import Image from 'next/image';
import { useState } from 'react';
import { RichText, useT } from '@/lib/i18n';
import { useCart } from '@/lib/cart';
import { SectionHead } from './SectionHead';
import styles from './Product.module.css';

export function Product() {
  const t = useT();
  const { count, add } = useCart();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: count > 0 ? count : 1 }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } finally {
      setLoading(false);
    }
  }

  const specs: Array<{ k: Parameters<ReturnType<typeof useT>>[0]; v: string }> = [
    { k: 'sp1_k', v: '22 J/cm²' },
    { k: 'sp2_k', v: '5' },
    { k: 'sp3_k', v: '999K' },
    { k: 'sp4_k', v: '–4 °C' },
    { k: 'sp5_k', v: '5' },
    { k: 'sp6_k', v: '340 g' },
  ];

  return (
    <section className={`sec ${styles.section}`} id="product">
      <div className="wrap">
        <SectionHead index="02" eyebrow={t('sec_prod_eye')}>
          {t('sec_prod_h_a')} <em>{t('sec_prod_h_b')}</em>.
        </SectionHead>

        <div className={styles.grid}>
          <div className={`${styles.duo} reveal`}>
            <div className={styles.stage}>
              <div className={styles.rotator} />
              <Image
                className={styles.deviceImg}
                src="/assets/producto-frontal.png"
                alt="Lumière 04 — vista frontal"
                width={600}
                height={630}
              />
            </div>
            <div className={styles.detail}>
              <Image
                src="/assets/producto-detalle.png"
                alt="Detalle del cabezal y pantalla"
                fill
                sizes="(max-width: 900px) 100vw, 35vw"
              />
              <span className={styles.detailTag}>{t('det_tag')}</span>
            </div>
          </div>

          <div
            className={`${styles.info} reveal`}
            style={{ ['--d' as string]: '.1s' }}
          >
            <div className={styles.kicker}>
              <span className={styles.pill}>{t('pill_new')}</span>
              <span className="eyebrow">{t('pill_code')}</span>
            </div>

            <h3 className={styles.name}>
              {t('prod_h_a')} <em>{t('prod_h_b')}</em>
            </h3>
            <RichText k="prod_desc" as="p" className={styles.desc} />

            <div className={styles.specs}>
              {specs.map((s) => (
                <div key={s.k} className={styles.spec}>
                  <span className="k">{t(s.k)}</span>
                  <span className="v">{s.v}</span>
                </div>
              ))}
            </div>

            <div className={styles.buyRow}>
              <div className={styles.price}>
                <span className={styles.now}>89€</span>
                <span className={styles.shipping}>{t('shipping_free')}</span>
              </div>
              <div className={styles.btns}>
                <button
                  type="button"
                  className={styles.addBtn}
                  onClick={add}
                >
                  {t('add_to_cart')}
                  {count > 0 && (
                    <span className={styles.cartBadge}>{count}</span>
                  )}
                </button>
                <button
                  type="button"
                  className={styles.buyBtn}
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  <span>{loading ? '...' : t('buy')}</span>
                  {!loading && (
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path
                        d="M1 5h12M9 1l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
