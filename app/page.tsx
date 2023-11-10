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
        <section className="relative">
          <div className="w-full h-96 bg-gradient-to-r from-black to-slate-900"></div>
          <div className="w-full absolute top-[25%]">
            <h1 className="uppercase text-xl text-center leading-relaxed mb-8 font-semibold text-muted-foreground">
              dipercaya oleh
            </h1>
            <div className="flex items-center justify-center gap-10 w-full px-4">
              <div className="border-l-2 px-4 max-w-md border-neutral-300">
                <h1 className="text-neutral-100 text-6xl font-bold">205</h1>
                <p className="text-neutral-400 max-w-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  animi!
                </p>
              </div>
              <div className="border-l-2 px-4 max-w-md border-neutral-300">
                <h1 className="text-neutral-100 text-6xl font-bold">09</h1>
                <p className="text-neutral-400 max-w-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  animi!
                </p>
              </div>
              <div className="border-l-2 px-4 max-w-md border-neutral-300">
                <h1 className="text-neutral-100 text-6xl font-bold uppercase">15M</h1>
                <p className="text-neutral-400 max-w-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  animi!
                </p>
              </div>
              <div className="border-l-2 px-4 max-w-md border-neutral-300">
                <h1 className="text-neutral-100 text-6xl font-bold">100%</h1>
                <p className="text-neutral-400 max-w-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  animi!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
