'use client';

import Image from 'next/image';
import { useT } from '@/lib/i18n';
import styles from './Blog.module.css';

type Post = {
  href: string;
  img: string;
  alt: string;
  catKey: 'cat_guide' | 'cat_science' | 'cat_ritual' | 'cat_guide2';
  readKey: 'm_read' | 'm_read2' | 'm_read3' | 'm_read4';
  dateKey: 'm_date' | 'm_date2' | 'm_date3' | 'm_date4';
  hKey: 'post1_h' | 'post2_h' | 'post3_h' | 'post4_h';
  pKey: 'post1_p' | 'post2_p' | 'post3_p' | 'post4_p';
  hero?: boolean;
  delay?: string;
};

const posts: Post[] = [
  {
    href: '#',
    img: '/assets/hero.png',
    alt: 'Rutina IPL en casa',
    catKey: 'cat_guide',
    readKey: 'm_read',
    dateKey: 'm_date',
    hKey: 'post1_h',
    pKey: 'post1_p',
    hero: true,
  },
  {
    href: '#',
    img: '/assets/producto-detalle.png',
    alt: 'IPL vs láser',
    catKey: 'cat_science',
    readKey: 'm_read2',
    dateKey: 'm_date2',
    hKey: 'post2_h',
    pKey: 'post2_p',
    delay: '.08s',
  },
  {
    href: '#',
    img: '/assets/despues.png',
    alt: 'Cuidado post-sesión',
    catKey: 'cat_ritual',
    readKey: 'm_read3',
    dateKey: 'm_date3',
    hKey: 'post3_h',
    pKey: 'post3_p',
    delay: '.16s',
  },
  {
    href: '#',
    img: '/assets/producto-34.png',
    alt: 'Zonas sensibles',
    catKey: 'cat_guide2',
    readKey: 'm_read4',
    dateKey: 'm_date4',
    hKey: 'post4_h',
    pKey: 'post4_p',
    delay: '.24s',
  },
];

export function Blog() {
  const t = useT();
  return (
    <section className={`sec ${styles.section}`} id="blog">
      <div className="wrap">
        <div className={`${styles.head} reveal`}>
          <h2 className={styles.h2}>
            {t('blog_h_a')}
            <br />
            <em>{t('blog_h_b')}</em>
          </h2>
          <a className={styles.link} href="#">
            {t('blog_all')}
            <svg width="12" height="10" viewBox="0 0 14 10" fill="none">
              <path
                d="M1 5h12M9 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </a>
        </div>

        <div className={styles.grid}>
          {posts.map((p) => (
            <a
              key={p.hKey}
              href={p.href}
              className={`${styles.post} ${p.hero ? styles.heroPost : ''} reveal`}
              style={p.delay ? { ['--d' as string]: p.delay } : undefined}
            >
              <div className={styles.cover}>
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <span className={styles.cat}>{t(p.catKey)}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span>{t(p.readKey)}</span>
                  <span>·</span>
                  <span>{t(p.dateKey)}</span>
                </div>
                <h3 className={styles.title}>{t(p.hKey)}</h3>
                <p className={styles.p}>{t(p.pKey)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
