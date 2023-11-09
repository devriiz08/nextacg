import { Button } from "../button";

const Hero = () => {
  return (
    <section
      className="bg-[url('/images/hero-img.jpg')] bg-no-repeat bg-cover h-screen flex items-start flex-col justify-center px-14"
      id="hero"
    >
      <h1 className="font-semibold text-secondary text-4xl max-w-xl">
        Mewujudkan Karya Seni Arsitektur yang Abadi Melalui Inovasi GRC Cetak
        Berkualitas Tinggi
      </h1>
      <p className="max-w-xl mt-7 mb-5 text-secondary mix-blend-screen">
        Kami adalah pionir dalam menciptakan keindahan dan kekuatan dalam GRC
        cetak. Dari desain yang inovatif hingga hasil akhir yang estetik, kami
        membantu Anda mewujudkan impian arsitektur Anda dengan sentuhan keahlian
        kami.
      </p>
      <Button className="text-secondary font-semibold">Pesan Sekarang</Button>
    </section>
  );
};

export default Hero;
