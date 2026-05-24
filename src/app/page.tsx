import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedShowcase from "@/components/FeaturedShowcase";
import Services from "@/components/Services";
import WorkGallery from "@/components/WorkGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/effects/SiteEffects";
import JsonLd from "@/components/JsonLd";
import SkipLink from "@/components/SkipLink";

export default function Home() {
  return (
    <>
      <JsonLd />
      <SkipLink />
      <SiteEffects />
      <main id="main-content" className="relative min-h-screen bg-sky-100">
        <Navbar />
        <Hero />
        <FeaturedShowcase />
        <Services />
        <WorkGallery />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
