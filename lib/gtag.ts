/* eslint-disable @typescript-eslint/no-explicit-any */
export function reportPurchaseConversion(value: number) {
  if (typeof window === 'undefined') return;
  const gtagFn = (window as any).gtag;
  if (typeof gtagFn !== 'function') return;
  gtagFn('event', 'conversion', {
    send_to: 'AW-16741652529/1FboCI692IgcELGwha8-',
    value,
    currency: 'EUR',
    transaction_id: '',
  });
}
