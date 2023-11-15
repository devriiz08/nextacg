"use client"

import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";

const Faqs = () => {

  useEffect(() => {
  AOS.init()
  }, [])
  return (
    <section data-aos="fade-up" className="px-14 py-6 flex items-center flex-col lg:w-10/12 mx-auto">
      <h1 className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-0 lg:text-center max-w-xl">
        Jawaban atas pertanyaan kami yang paling sering diajukan
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-start">Apa itu GRC cetak?</AccordionTrigger>
          <AccordionContent>
            GRC cetak adalah produk inovatif kami yang dibuat dengan
            mencampurkan pasir, semen air, additive, dan serat kaca sebagai
            tulangan. Hasilnya adalah mortar homogen yang membentuk GRC cetak,
            sebuah solusi handal untuk desain eksterior dan interior dengan
            kekuatan dan keindahan yang luar biasa.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-start">
            Bagaimana GRC cetak membantu desain bangunan?
          </AccordionTrigger>
          <AccordionContent>
            GRC cetak memberikan kebebasan desain yang luar biasa kepada
            arsitek. Dengan berbagai corak dan bentuk, GRC cetak menciptakan
            elemen antik dan unik, memungkinkan para desainer untuk menghasilkan
            bangunan yang memukau dan unik sesuai preferensi.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-start">
            Apa keunggulan GRC cetak dibandingkan bahan konvensional?
          </AccordionTrigger>
          <AccordionContent>
            GRC cetak memiliki keunggulan berupa ringan, tahan cuaca, dan mudah
            dibentuk sesuai desain. Dibandingkan bahan konvensional, GRC cetak
            memberikan kebebasan lebih besar dalam desain dengan kekuatan yang
            tetap terjaga.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-start">
            Bagaimana proses pemesanan dan pengiriman produk GRC cetak?
          </AccordionTrigger>
          <AccordionContent>
            Untuk memesan produk GRC cetak kami, Anda dapat menghubungi tim
            layanan pelanggan kami. Kami menyediakan pengiriman tepat waktu dan
            dapat memberikan informasi rinci terkait biaya dan waktu produksi.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-start">
            Apakah produk GRC cetak dapat diaplikasikan baik untuk proyek
            eksterior maupun interior?
          </AccordionTrigger>
          <AccordionContent>
            Ya, GRC cetak dirancang untuk digunakan di kedua lingkungan
            tersebut. Dengan kekuatan dan ketahanan terhadap cuaca, GRC cetak
            adalah pilihan yang ideal untuk menghadirkan sentuhan artistik pada
            proyek eksterior dan interior.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-start">
            Apakah PT Adiya Cahya Gemilang menyediakan layanan desain kustom
            untuk GRC cetak?
          </AccordionTrigger>
          <AccordionContent>
            Tentu, kami menyediakan layanan desain kustom yang memungkinkan
            klien kami menyesuaikan GRC cetak sesuai dengan preferensi dan
            kebutuhan mereka. Tim desain kami siap membantu Anda mewujudkan
            konsep unik Anda.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-start">
            Bagaimana cara pemeliharaan GRC cetak untuk memastikan keawetan
            produk?
          </AccordionTrigger>
          <AccordionContent>
            Pemeliharaan GRC cetak sangat mudah. Membersihkan permukaan dengan
            air bersih secara berkala sudah cukup untuk menjaga kebersihan dan
            keindahan GRC cetak. Kami juga menyediakan layanan pemeliharaan dan
            perbaikan jika diperlukan.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faqs;
