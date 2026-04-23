import type { Metadata } from 'next';
import Script from 'next/script';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { I18nProvider } from '@/lib/i18n';
import { CartProvider } from '@/lib/cart';
import { WhatsAppBubble } from '@/components/WhatsAppBubble';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ipllaserstore — Depilación IPL en casa',
  description:
    'Depiladoras IPL de uso profesional, pensadas para rutinas de casa. Sin citas, sin dolor, sin prisa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <I18nProvider>
          <CartProvider>{children}</CartProvider>
        </I18nProvider>
        <WhatsAppBubble />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16741652529"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16741652529');
          `}
        </Script>
      </body>
    </html>
  );
}
