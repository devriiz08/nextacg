"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ListWcu from "../listwcu";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="wcu" className="py-14 px-14 flex items-center justify-center">
      <div className="flex items-center justify-center gap-5 flex-col max-w-[50%] me-6" data-aos="fade-down">
        <h1 className="text-4xl font-bold">
          Pilih Kami, Bangun Keindahan dan Kekuatan Bersama PT Adiya Cahaya
          Gemilang
        </h1>
        <p className="text-muted-foreground">
          Kami bukan sekadar penyedia GRC cetak, tapi mitra kreatif yang
          memahami setiap detail desain Anda. Dengan inovasi terdepan, layanan
          pelanggan yang unggul, dan komitmen pada kualitas, PT Adiya Cahya
          Gemilang adalah pilihan terbaik untuk mengubah setiap proyek
          arsitektur menjadi karya seni yang tak terlupakan.
        </p>
      </div>
      <ol className="list-decimal ms-5" data-aos="fade-down">
        <ListWcu
          title="Inovasi Tanpa Henti"
          desciption="PT Adiya Cahya Gemilang terus menerapkan inovasi terbaru dalam produksi GRC cetak, memberikan pelanggan akses ke solusi terkini dan paling efektif dalam desain arsitektur"
        />
        <ListWcu
          title="Kualitas Tak Terkalahkan"
          desciption="Dengan menggunakan bahan-bahan berkualitas tinggi dan proses produksi yang canggih, kami menjamin produk GRC cetak kami memiliki standar kualitas yang tak tertandingi, memberikan kekuatan dan ketahanan jangka panjang."
        />
        <ListWcu
          title="Reputasi Yang Terpercaya"
          desciption="PT Adiya Cahya Gemilang membangun reputasi sebagai penyedia terkemuka dalam industri GRC cetak, dengan sejarah pencapaian dan portofolio proyek yang menunjukkan keunggulan dan keandalan kami."
        />
        <ListWcu
          title="Hasil yang Artistik Dan Memukau"
          desciption="Setiap produk GRC cetak yang kami hasilkan bukan hanya bangunan atau elemen dekoratif, melainkan karya seni yang memukau. Kami menggabungkan estetika dan kekuatan untuk menciptakan pengalaman visual yang luar biasa."
        />
      </ol>
    </section>
  );
};

export default WhyChooseUs;
