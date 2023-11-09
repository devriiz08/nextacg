import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import About from "@/components/ui/sections/about";
import Hero from "@/components/ui/sections/hero";
import RecentAdded from "@/components/ui/sections/recentadd";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header page="beranda" />
      <main>
        <Hero />
        <About />
        <RecentAdded />
      </main>
    </>
  );
}
