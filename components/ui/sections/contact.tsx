"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="kontak" className="py-6 px-14" data-aos="fade-down">
      <h1 className="text-2xl lg:text-4xl text-center font-bold">Kontak kami</h1>
      <p className="text-muted-foreground text-center mt-4 max-w-md mx-auto">
        Hubungi kami untuk informasi lebih lanjut dan layanan pelanggan yang
        responsif.
      </p>
      <div className="flex items-center flex-col lg:flex-row justify-center gap-10 py-10">
        <div className="flex items-start lg:items-center flex-col lg:w-[50%]">
          <div className="flex items-center gap-1" data-aos="fade-down">
            <Image
              src={"/images/email.png"}
              alt="email pt adiya cahaya gemilang"
              width={48}
              height={48}
              className="w-9"
            />
            <h1>adiyacahayagemilanggrc@gmail.com</h1>
          </div>
          <div className="flex items-center gap-1" data-aos="fade-down">
            <Image
              src={"/images/phone.png"}
              alt="email pt adiya cahaya gemilang"
              width={48}
              height={48}
              className="w-9 lg:w-11"
            />
            <h1>+6281383533007</h1>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126857.94297851539!2d106.75430127629876!3d-6.482276274984876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1e7cdd2e8d3%3A0x401576d14fed590!2sCibinong%2C%20Kec.%20Cibinong%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1699852927145!5m2!1sid!2sid"
          width="600"
          height="450"
          loading="lazy"
          className="w-[90%] h-[90%] lg:h-full lg:w-[50%]"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
