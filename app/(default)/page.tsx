export const metadata = {
  title: "E-Masjid.My",
  description:
    "E-Masjid.My: Sistem Masjid Untuk Semua. Ihsan dari warga Github.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Teams from "@/components/teams";

export default function Home() {
  return (
    <>
      <Hero />
      <Teams />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  );
}
