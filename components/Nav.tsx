'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useT } from '@/lib/i18n';
import { useCart } from '@/lib/cart';
import { LangSwitch } from './ui/LangSwitch';
import { CartDrawer } from './CartDrawer';
import styles from './Nav.module.css';

export function Nav() {
  const t = useT();
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="ipllaserstore">
            <Image
              className={styles.logo}
              src="/assets/logo.svg"
              alt="ipllaserstore"
              width={180}
              height={34}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className={styles.links}>
            <a href="#why">{t('nav_why')}</a>
            <a href="#product">{t('nav_product')}</a>
            <a href="#how">{t('nav_how')}</a>
            <a href="#results">{t('nav_results')}</a>
            <a href="#blog">{t('nav_blog')}</a>
            <LangSwitch />
            <a
              href="#product"
              className={styles.cta}
              onClick={(e) => {
                if (count > 0) { e.preventDefault(); open(); }
              }}
            >
              {t('nav_cta')}
              {count > 0 && <span className={styles.badge}>{count}</span>}
            </a>
          </div>

          {/* Mobile right side */}
          <div className={styles.mobileRight}>
            {count > 0 && (
              <button
                type="button"
                className={styles.cartIconBtn}
                onClick={open}
                aria-label="Carrito"
              >
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                  <path d="M1 1h3l2 9h10l2.5-6H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="8" cy="15.5" r="1.5" fill="currentColor" />
                  <circle cx="15" cy="15.5" r="1.5" fill="currentColor" />
                </svg>
                <span className={styles.badge}>{count}</span>
              </button>
            )}
            <button
              type="button"
              className={styles.hamburger}
              onClick={() => setMenuOpen(true)}
              aria-label="Menú"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <div className={styles.mobileOverlay} onClick={closeMenu} />
          <div className={styles.mobileMenu}>
            <div className={styles.mobileHead}>
              <Image src="/assets/logo.svg" alt="ipllaserstore" width={140} height={26} />
              <button type="button" className={styles.mobileClose} onClick={closeMenu} aria-label="Cerrar">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className={styles.mobileLinks}>
              <a href="#why" onClick={closeMenu}>{t('nav_why')}</a>
              <a href="#product" onClick={closeMenu}>{t('nav_product')}</a>
              <a href="#how" onClick={closeMenu}>{t('nav_how')}</a>
              <a href="#results" onClick={closeMenu}>{t('nav_results')}</a>
              <a href="#blog" onClick={closeMenu}>{t('nav_blog')}</a>
            </nav>
            <div className={styles.mobileFooter}>
              <LangSwitch />
              <a
                href="#product"
                className={styles.mobileCta}
                onClick={(e) => {
                  closeMenu();
                  if (count > 0) { e.preventDefault(); open(); }
                }}
              >
                {t('nav_cta')}
                {count > 0 && <span className={styles.mobileBadge}>{count}</span>}
              </a>
            </div>
          </div>
        </>
      )}

      <CartDrawer />
    </>
  );
}
