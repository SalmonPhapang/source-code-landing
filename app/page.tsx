
import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Source Code Development | We Build Software That Powers Real Businesses",
  description: "From concept to launch, we combine a product-owner mindset with battle-tested development expertise to create custom websites, mobile apps, and web applications.",
};

export default function Home() {
  return <LandingPage />;
}
