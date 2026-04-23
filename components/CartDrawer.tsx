'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { useT } from '@/lib/i18n';
import { reportPurchaseConversion } from '@/lib/gtag';
import styles from './CartDrawer.module.css';

export function CartDrawer() {
  const { count, close, isOpen } = useCart();
  const t = useT();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    reportPurchaseConversion(count * 89);
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: count }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  const total = count * 89;

  return (
    <>
      <div className={styles.overlay} onClick={close} />
      <div
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-label={t('cart_title')}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{t('cart_title')}</h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={close}
            aria-label="Cerrar"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.body}>
          {count === 0 ? (
            <p className={styles.empty}>{t('cart_empty')}</p>
          ) : (
            <div className={styles.item}>
              <div className={styles.itemImg}>
                <Image
                  src="/assets/producto-frontal.png"
                  alt="Lumière 04"
                  fill
                  sizes="80px"
                />
              </div>
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Lumière 04</p>
                <p className={styles.itemMeta}>Ice Cool · IPL</p>
                <p className={styles.itemQty}>{count} × 89€</p>
              </div>
              <p className={styles.itemTotal}>{total}€</p>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.totalRow}>
            <span>{t('cart_total')}</span>
            <span className={styles.totalPrice}>{total}€</span>
          </div>
          <p className={styles.shippingNote}>{t('shipping_free')}</p>
          <button
            type="button"
            className={styles.checkoutBtn}
            onClick={handleCheckout}
            disabled={loading || count === 0}
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
    </>
  );
}
