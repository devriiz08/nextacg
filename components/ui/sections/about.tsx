"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200
    });
  }, []);

  return (
    <section
      className="flex items-center justify-between px-14 gap-10 py-10 bg-black"
    >
      <div className="w-1/2">
        <Image
          alt="tentang pt adiya cahaya gemilang"
          src={"/images/p.png"}
          height={1000}
          width={1000}
          className="w-[70%]"
          data-aos="fade-down"
        />
      </div>
      <div className="w-1/2" data-aos="fade-down">
        <h2 className="text-neutral-300 uppercase font-bold text-xs">
          tentang kami
        </h2>
        <h1 className="mt-2 font-semibold text-neutral-100 text-4xl mb-6">
          Kami adalah nama paling terpercaya dalam bidang interior dan exterior
        </h1>
        <p className="text-neutral-300 mb-4">
          Kami, PT Adiya Cahaya Gemilang, adalah kelompok ahli dalam GRC cetak.
          Dengan pengalaman lebih dari 10 tahun dalam industri ini, kami
          memadukan seni dan teknologi untuk menciptakan solusi GRC cetak yang
          kuat dan estetik. Melalui kolaborasi yang berfokus pada pelanggan,
          kami berkomitmen untuk mengubah setiap visi arsitektur menjadi
          kenyataan yang memukau.
        </p>
        <Button className="uppercase text-neutral-100 font-semibold">
          Lebih Mengenal Kami
        </Button>
      </div>
    </section>
  );
};

export default About;
