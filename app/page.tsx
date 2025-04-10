import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { PropertyShowcase } from "./_components/PropertyShowcase";
import { Stats } from "./_components/Stats";
import { Testimonials } from "./_components/Testimonials";
// import { Partners } from "./_components/Partners";
import { MobileApp } from "./_components/MobileApp";
import { FAQ } from "./_components/FAQ";
import { CTASection } from "./_components/CTASection";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <PropertyShowcase />
      {/* <Partners /> */}
      <Stats />
      <MobileApp />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
