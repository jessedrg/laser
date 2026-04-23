import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: 'STRIPE_SECRET_KEY not configured' }, { status: 500 });
  }

  const body = await req.json().catch(() => ({}));
  const quantity = Math.max(1, Math.min(10, Number(body.quantity) || 1));

  const stripe = new Stripe(secretKey);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Lumière 04 — Depiladora IPL',
              description:
                'Ice Cool · 5 niveles de intensidad · 999.000 flashes · Garantía 2 años',
              images: [`${appUrl}/assets/producto-frontal.png`],
            },
            unit_amount: 8900,
          },
          quantity,
        },
      ],
      phone_number_collection: { enabled: true },
      shipping_address_collection: {
        allowed_countries: [
          'ES', 'PT', 'FR', 'IT', 'DE', 'GB', 'NL', 'BE', 'AT', 'CH',
        ],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: 'eur' },
            display_name: 'Envío gratuito · 24–48h',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 1 },
              maximum: { unit: 'business_day', value: 2 },
            },
          },
        },
      ],
      success_url: `${appUrl}?checkout=success`,
      cancel_url: `${appUrl}?checkout=canceled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
