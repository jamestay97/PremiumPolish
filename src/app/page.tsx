import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HorizontalGallery from "@/components/effects/HorizontalGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/effects/SiteEffects";

export default function Home() {
  return (
    <>
      <SiteEffects />
      <main className="relative min-h-screen bg-[#050508]">
        <Navbar />
        <Hero />
        <Services />
        <HorizontalGallery />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
