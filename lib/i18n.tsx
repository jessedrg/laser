'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
  type JSX,
} from 'react';

export type Locale = 'es' | 'en';

type Dict = Record<string, string>;

const es: Dict = {
  // Nav
  nav_why: 'Por qué IPL',
  nav_product: 'Producto',
  nav_how: 'Cómo funciona',
  nav_results: 'Resultados',
  nav_blog: 'Blog',
  nav_cta: 'Comprar',

  // Hero — chips
  ch1: 'Envío gratis 24–48h',
  ch2: 'Garantía 2 años',
  ch3: '60 días devolución',

  // Hero
  hero_meta: '★ 4,9 · 12.480 clientas · Valoración verificada',
  hero_eyebrow: 'Depilación IPL · Edición 2026',
  h1_l1: 'Piel tuya,',
  h1_l2: 'a tu ritmo',
  h1_l3: 'Sin',
  h1_l4: 'prisa.',
  lead: 'Depiladoras IPL de uso profesional, pensadas para rutinas de casa. <em>Sin citas, sin dolor, sin prisa</em> — resultados visibles desde la tercera sesión.',
  cta_primary: 'Ver dispositivos',
  cta_secondary: 'Cómo funciona',
  stat_flashes: 'Flashes',
  stat_reduction: 'Reducción',
  stat_warranty: 'Garantía',
  hero_badge: 'En vivo · 4.812 pedidos este mes',
  flo1_k: 'Ice Cool',
  flo2_k: 'Sesión',
  flo2_v: '10 min',

  // Marquee
  mq1: 'Sin dolor',
  mq2: 'Apta para pieles sensibles',
  mq3: 'Uso ilimitado en casa',
  mq4: 'Resultados permanentes',
  mq5: 'Tecnología Ice Cool',

  // Benefits
  sec_why_eye: 'Por qué IPL',
  sec_why_h_a: 'El método que la clínica',
  sec_why_h_b: 'nunca quiso compartir',
  b1_h: 'Luz pulsada <em>precisa</em>.',
  b1_p: 'Cada destello actúa sobre el folículo sin tocar la piel circundante. Rápido, dirigido, repetible.',
  b2_h: 'Ice Cool real, <em>–4 °C</em>.',
  b2_p: 'El cabezal enfría la piel en el instante del pulso. Nada de rojeces, nada de esperas con gel frío.',
  b3_h: '999.000 <em>flashes</em>.',
  b3_p: 'Una vida útil pensada para que la compres una sola vez y la compartas con quien quieras.',
  b4_h: 'Sensor <em>de piel</em>.',
  b4_p: 'Ajusta la intensidad automáticamente según tu tono. Piel clara, media u oliva: todas cuidadas.',

  // Product
  sec_prod_eye: 'Producto destacado',
  sec_prod_h_a: 'Un dispositivo,',
  sec_prod_h_b: 'pensado para durar',
  pill_new: 'Nuevo · Serie 04',
  pill_code: 'REF · LS-04 / IPL',
  prod_h_a: 'Lumière 04',
  prod_h_b: '— el modelo completo',
  prod_desc:
    'Nuestro modelo insignia. Cinco niveles de intensidad, cabezal refrigerado, cinco adaptadores incluidos para rostro, axilas, piernas, brazos y zona íntima.',
  det_tag: 'Detalle · cabezal Ice Cool',
  sp1_k: 'Energía máx.',
  sp2_k: 'Niveles',
  sp3_k: 'Flashes',
  sp4_k: 'Refrigeración',
  sp5_k: 'Adaptadores',
  sp6_k: 'Peso',
  save: '−100€',
  buy: 'Comprar ahora',
  add_to_cart: 'Añadir al carrito',
  shipping_free: 'Envío gratuito · 24–48h',

  // How
  sec_how_eye: 'Cómo funciona',
  sec_how_h_a: 'Tres gestos,',
  sec_how_h_b: 'doce semanas',
  st1_h: 'Prepara la zona',
  st1_p: 'Piel limpia, seca y rasurada. Sin cremas, sin perfume. Tres minutos y listo para empezar.',
  st1_m1: 'Tiempo <em>3 min</em>',
  st1_m2: 'Frecuencia <em>1× sem</em>',
  st2_h: 'Desliza el cabezal',
  st2_p: 'El sensor elige la intensidad por ti. Un clic, un destello. Pierna completa en diez minutos.',
  st2_m1: 'Zona <em>10 min</em>',
  st2_m2: 'Nivel <em>Auto</em>',
  st3_h: 'Repite y olvídalo',
  st3_p: 'Una sesión por semana durante doce semanas. Después, un mantenimiento mensual y ya.',
  st3_m1: 'Plan <em>12 sem</em>',
  st3_m2: 'Mant. <em>1× mes</em>',

  // Results
  sec_res_eye: 'Resultados',
  sec_res_h_a: 'La piel no miente.',
  sec_res_h_b: 'Ni la gente que la cuida.',
  before: 'Semana 0',
  after: 'Semana 12',
  w_0: 'Sem\u00a00',
  w_3: 'Sem\u00a03',
  w_6: 'Sem\u00a06',
  w_9: 'Sem\u00a09',
  w_12: 'Sem\u00a012',
  tl1: 'Primera sesión',
  tl1b: '· piel base',
  tl2: 'Vello más fino',
  tl3: 'Crecimiento lento',
  tl4: 'Zonas casi limpias',
  tl5: 'Resultado duradero',
  quote:
    'La primera vez que algo cumplía lo que prometía en la caja. A la sexta sesión ya no pensaba en ello — y ese es el punto.',
  quote_who: 'Marta, Valencia · Verificada',

  // Blog
  blog_h_a: 'Diario de piel.',
  blog_h_b: 'Rutinas, respuestas, ritual.',
  blog_all: 'Ver todos los posts',
  cat_guide: 'Guía',
  cat_science: 'Ciencia',
  cat_ritual: 'Ritual',
  cat_guide2: 'Guía',
  m_read: '8 min lectura',
  m_date: '12 abr, 2026',
  m_read2: '5 min',
  m_date2: '28 mar',
  m_read3: '4 min',
  m_date3: '19 mar',
  m_read4: '6 min',
  m_date4: '4 mar',
  post1_h: 'La guía honesta para empezar IPL en casa sin nervios.',
  post1_p:
    'Todo lo que nadie te cuenta: tipos de piel en los que funciona, cuándo verás resultados y los tres errores que arruinan las primeras sesiones.',
  post2_h: 'IPL vs láser diodo: qué cambia, qué no.',
  post2_p: 'Dos tecnologías, mucha confusión. Lo resumimos en una tabla.',
  post3_h: 'Piel después de la sesión: qué sí, qué no.',
  post3_p:
    'Ingredientes amigos, el protector solar, y por qué tu crema favorita puede esperar.',
  post4_h: 'Depilar zonas sensibles: el manual paso a paso.',
  post4_p:
    'Bozo, axilas, bikini: intensidades, ángulos y cadencia recomendada.',

  // CTA
  cta_h_a: 'Menos cuchilla,',
  cta_h_b: 'menos cera,',
  cta_h_c: 'más tiempo',
  cta_side:
    'Envío gratuito y en 24–48h. Devolución sin preguntas durante 60 días. Financiación en 3 pagos sin intereses.',
  cta_primary2: 'Elegir mi dispositivo',

  // Footer
  ft_tag:
    'Piel tuya, <em>a tu ritmo</em>. Depilación IPL de uso profesional desde casa.',
  ft_c1: 'Tienda',
  ft_c1_1: 'Lumière 04',
  ft_c1_2: 'Accesorios',
  ft_c1_3: 'Financiación',
  ft_c1_4: 'Tarjeta regalo',
  ft_c2: 'Soporte',
  ft_c2_1: 'Guía de uso',
  ft_c2_2: 'Envíos',
  ft_c2_3: 'Garantía 2 años',
  ft_c2_4: 'Contacto',
  ft_c3: 'Diario',
  ft_c3_1: 'Blog',
  ft_c3_2: 'Rituales',
  ft_c3_3: 'Testimonios',
  ft_c3_4: 'Newsletter',
  ft_made: 'Hecho con cuidado · Madrid',
};

const en: Dict = {
  nav_why: 'Why IPL',
  nav_product: 'Device',
  nav_how: 'How it works',
  nav_results: 'Results',
  nav_blog: 'Journal',
  nav_cta: 'Shop',

  ch1: 'Free 24–48h shipping',
  ch2: '2-year warranty',
  ch3: '60-day returns',

  hero_meta: '★ 4.9 · 12,480 customers · Verified reviews',
  hero_eyebrow: 'Home IPL · 2026 Edition',
  h1_l1: 'Your skin,',
  h1_l2: 'on your time',
  h1_l3: 'No',
  h1_l4: 'rush.',
  lead: 'Professional-grade IPL devices, designed for home routines. <em>No appointments, no pain, no rush</em> — visible results from the third session.',
  cta_primary: 'See devices',
  cta_secondary: 'How it works',
  stat_flashes: 'Flashes',
  stat_reduction: 'Reduction',
  stat_warranty: 'Warranty',
  hero_badge: 'Live · 4,812 orders this month',
  flo1_k: 'Ice Cool',
  flo2_k: 'Session',
  flo2_v: '10 min',

  mq1: 'Painless',
  mq2: 'Safe on sensitive skin',
  mq3: 'Unlimited home use',
  mq4: 'Lasting results',
  mq5: 'Ice Cool technology',

  sec_why_eye: 'Why IPL',
  sec_why_h_a: 'The method the clinic',
  sec_why_h_b: 'never wanted to share',
  b1_h: 'Precise <em>pulsed light</em>.',
  b1_p: 'Each flash targets the follicle without touching the surrounding skin. Fast, focused, repeatable.',
  b2_h: 'Real Ice Cool, <em>−4 °C</em>.',
  b2_p: 'The head chills the skin at the very moment of the pulse. No redness, no waiting around with cold gel.',
  b3_h: '999,000 <em>flashes</em>.',
  b3_p: 'A lifespan designed so you buy once — and share it with whoever you like.',
  b4_h: 'Skin <em>sensor</em>.',
  b4_p: 'Automatically adjusts intensity to your tone. Fair, medium or olive — all taken care of.',

  sec_prod_eye: 'Featured device',
  sec_prod_h_a: 'One device,',
  sec_prod_h_b: 'built to last',
  pill_new: 'New · Series 04',
  pill_code: 'REF · LS-04 / IPL',
  prod_h_a: 'Lumière 04',
  prod_h_b: '— the complete model',
  prod_desc:
    'Our flagship. Five intensity levels, cooled head, and five adapters included for face, underarms, legs, arms and intimate area.',
  det_tag: 'Detail · Ice Cool head',
  sp1_k: 'Max energy',
  sp2_k: 'Levels',
  sp3_k: 'Flashes',
  sp4_k: 'Cooling',
  sp5_k: 'Adapters',
  sp6_k: 'Weight',
  save: '−€100',
  buy: 'Buy now',
  add_to_cart: 'Add to cart',
  shipping_free: 'Free shipping · 24–48h',

  sec_how_eye: 'How it works',
  sec_how_h_a: 'Three gestures,',
  sec_how_h_b: 'twelve weeks',
  st1_h: 'Prep the area',
  st1_p: "Clean, dry, shaved skin. No creams, no perfume. Three minutes and you're ready.",
  st1_m1: 'Time <em>3 min</em>',
  st1_m2: 'Cadence <em>1× wk</em>',
  st2_h: 'Glide the head',
  st2_p: 'The sensor picks the intensity for you. One click, one flash. A full leg in ten minutes.',
  st2_m1: 'Zone <em>10 min</em>',
  st2_m2: 'Level <em>Auto</em>',
  st3_h: 'Repeat, then forget',
  st3_p: "One session a week for twelve weeks. After that, a monthly touch-up and you're done.",
  st3_m1: 'Plan <em>12 wk</em>',
  st3_m2: 'Maint. <em>1× mo</em>',

  sec_res_eye: 'Results',
  sec_res_h_a: "Skin doesn't lie.",
  sec_res_h_b: 'Neither do the people who care for it.',
  before: 'Week 0',
  after: 'Week 12',
  w_0: 'Wk\u00a00',
  w_3: 'Wk\u00a03',
  w_6: 'Wk\u00a06',
  w_9: 'Wk\u00a09',
  w_12: 'Wk\u00a012',
  tl1: 'First session',
  tl1b: '· baseline skin',
  tl2: 'Hair growing finer',
  tl3: 'Slower regrowth',
  tl4: 'Areas nearly clear',
  tl5: 'Lasting result',
  quote:
    "First time something actually delivered what was printed on the box. By the sixth session I just wasn't thinking about it anymore — which is the whole point.",
  quote_who: 'Marta, Valencia · Verified',

  blog_h_a: 'Skin journal.',
  blog_h_b: 'Routines, answers, ritual.',
  blog_all: 'See all posts',
  cat_guide: 'Guide',
  cat_science: 'Science',
  cat_ritual: 'Ritual',
  cat_guide2: 'Guide',
  m_read: '8 min read',
  m_date: 'Apr 12, 2026',
  m_read2: '5 min',
  m_date2: 'Mar 28',
  m_read3: '4 min',
  m_date3: 'Mar 19',
  m_read4: '6 min',
  m_date4: 'Mar 4',
  post1_h: 'The honest guide to starting IPL at home without the jitters.',
  post1_p:
    "All the things no one tells you: skin types it works on, when you'll see results, and the three mistakes that ruin early sessions.",
  post2_h: 'IPL vs diode laser: what changes, what doesn\u2019t.',
  post2_p: 'Two technologies, lots of confusion. Summed up in one table.',
  post3_h: "Skin after a session: do's and don'ts.",
  post3_p: 'Friendly ingredients, SPF, and why your favorite cream can wait.',
  post4_h: 'Treating sensitive areas: a step-by-step manual.',
  post4_p: 'Upper lip, underarms, bikini: intensities, angles and recommended cadence.',

  cta_h_a: 'Less razor,',
  cta_h_b: 'less wax,',
  cta_h_c: 'more time',
  cta_side:
    'Free 24–48h shipping. 60-day no-questions returns. 3 interest-free payments available.',
  cta_primary2: 'Pick my device',

  ft_tag:
    'Your skin, <em>on your time</em>. Professional-grade IPL from home.',
  ft_c1: 'Shop',
  ft_c1_1: 'Lumière 04',
  ft_c1_2: 'Accessories',
  ft_c1_3: 'Financing',
  ft_c1_4: 'Gift card',
  ft_c2: 'Support',
  ft_c2_1: 'How-to guide',
  ft_c2_2: 'Shipping',
  ft_c2_3: '2-year warranty',
  ft_c2_4: 'Contact',
  ft_c3: 'Journal',
  ft_c3_1: 'Blog',
  ft_c3_2: 'Rituals',
  ft_c3_3: 'Testimonials',
  ft_c3_4: 'Newsletter',
  ft_made: 'Made with care · Madrid',
};

const DICTS: Record<Locale, Dict> = { es, en };

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof typeof es) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({
  children,
  defaultLocale = 'es',
}: {
  children: ReactNode;
  defaultLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const t = useCallback(
    (key: keyof typeof es) => DICTS[locale][key] ?? DICTS.es[key] ?? String(key),
    [locale],
  );
  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}

export function useT() {
  return useI18n().t;
}

/**
 * Renders HTML-containing copy safely (only used for strings we control in the
 * dictionaries above — <em> tags for emphasis).
 */
export function RichText({
  k,
  as: Tag = 'span',
  className,
}: {
  k: keyof typeof es;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  const t = useT();
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: t(k) }}
    />
  );
}
