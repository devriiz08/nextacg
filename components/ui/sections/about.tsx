import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="flex items-center justify-between px-14 gap-10 py-10 bg-slate-900">
      <Image
        alt="tentang pt adiya cahya gemilang"
        src={"/images/p.png"}
        height={1000}
        width={1000}
        className="w-1/2"
      />
      <div className="w-1/2">
        <h2 className="text-neutral-300 uppercase font-bold text-xs">
          tentang kami
        </h2>
        <h1 className="mt-2 font-semibold text-neutral-100 text-4xl mb-6">
          Kami adalah nama paling terpercaya dalam bidang interior dan exterior
        </h1>
        <p className="text-neutral-300 mb-4">
          Kami, PT Adiya Cahya Gemilang, adalah kelompok ahli dalam GRC cetak.
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
