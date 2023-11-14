import About1 from "@/components/ui/about/about1";
import Hero from "@/components/ui/about/hero";
import Vm from "@/components/ui/about/vn";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Page() {
  return (
    <>
      <Header page="tentang-kami" />
      <main>
        <Hero />
        <About1 />
        <Vm />
      </main>
      <Footer />
    </>
  );
}
