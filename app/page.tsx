import dynamic from 'next/dynamic';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Benefits } from '@/components/Benefits';

const Product = dynamic(() =>
  import('@/components/Product').then((m) => ({ default: m.Product }))
);
const HowItWorks = dynamic(() =>
  import('@/components/HowItWorks').then((m) => ({ default: m.HowItWorks }))
);
const Results = dynamic(() =>
  import('@/components/Results').then((m) => ({ default: m.Results }))
);
const Blog = dynamic(() =>
  import('@/components/Blog').then((m) => ({ default: m.Blog }))
);
const CTA = dynamic(() =>
  import('@/components/CTA').then((m) => ({ default: m.CTA }))
);
const Footer = dynamic(() =>
  import('@/components/Footer').then((m) => ({ default: m.Footer }))
);

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
