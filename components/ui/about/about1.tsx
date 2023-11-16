import Image from "next/image";

const About1 = () => {
  return (
    <section
      id="tentang"
      className="py-10 px-14 flex items-center lg:flex-row flex-col justify-between"
    >
      <Image
        src={"/images/bg-about1.jpg"}
        height={600}
        width={1600}
        alt="tentang pt adiya cahaya gemilang"
        className="lg:w-[50%] "
      />
      <div>
        <h3 className="text-sm font-semibold uppercase mb-2">
          Tentang PT Adiya Cahaya Gemilang
        </h3>
        <h1 className="text-2xl lg:text-4xl font-bold">
          Menyatukan Kekuatan dan Keindahan dalam Setiap Detail Bersama PT Adiya
          Cahaya Gemilang
        </h1>
        <p className="text-sm text-muted-foreground mt-3 mb-3 lg:mb-1">
          PT Adiya Cahaya Gemilang adalah perusahaan yang mengkhususkan diri
          dalam produksi GRC cetak, sebuah inovasi yang menggabungkan kekuatan
          dan estetika dalam dunia arsitektur. Dengan bahan berkualitas tinggi
          seperti pasir, semen air, additive, dan serat kaca sebagai tulangan,
          kami menciptakan mortar homogen yang menjadi pondasi dari GRC cetak,
          produk terkemuka untuk desain eksterior dan interior.{" "}
        </p>

        <p className="text-sm text-muted-foreground">
          Sebagai pelopor di industri ini, kami menawarkan desain kustom,
          kualitas tak tertandingi, dan layanan pelanggan yang responsif.
          Komitmen kami pada inovasi, keberlanjutan lingkungan, dan hasil akhir
          yang artistik menjadikan PT Adiya Cahaya Gemilang sebagai mitra
          terpercaya dalam mewujudkan setiap visi arsitektur menjadi karya seni
          yang tak terlupakan.
        </p>
      </div>
    </section>
  );
};
export default About1;
