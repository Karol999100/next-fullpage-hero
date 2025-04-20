'use client';
import dynamic from 'next/dynamic';
const HeroFullpage = dynamic(() => import('./components/HeroFullpage'), { ssr: false });

export default function HomePage() {
  return <HeroFullpage />;
}
