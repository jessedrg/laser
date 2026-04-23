import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Benefits } from '@/components/Benefits';
import { Product } from '@/components/Product';
import { HowItWorks } from '@/components/HowItWorks';
import { Results } from '@/components/Results';
import { Blog } from '@/components/Blog';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Benefits />
      <Product />
      <HowItWorks />
      <Results />
      <Blog />
      <CTA />
      <Footer />
    </>
  );
}
