import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import About from "@/components/ui/sections/about";
import Contact from "@/components/ui/sections/contact";
import Faqs from "@/components/ui/sections/faqs";
import Hero from "@/components/ui/sections/hero";
import RecentAdded from "@/components/ui/sections/recentadd";
import WhyChooseUs from "@/components/ui/sections/whychooseus";

export default function Home() {
  return (
    <>
      <Header page="beranda" />
      <main>
        <Hero />
        <About />
        <RecentAdded />
        <WhyChooseUs />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}