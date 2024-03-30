import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Teams from "@/components/teams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Masjid.My",
  description:
    "E-Masjid.My: Sistem Masjid Untuk Semua. Ihsan dari warga Github.",
  openGraph: {
    images: {
      url: "https://images.unsplash.com/photo-1682687982183-c2937a74257c?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  twitter: {
    images: {
      url: "https://images.unsplash.com/photo-1682687982183-c2937a74257c?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
};

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
