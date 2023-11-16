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
      <h1 className="text-2xl lg:text-4xl text-center font-bold">
        Kontak kami
      </h1>
      <p className="text-muted-foreground text-center mt-4 max-w-md mx-auto">
        Hubungi kami untuk informasi lebih lanjut dan layanan pelanggan yang
        responsif.
      </p>
      <div className="flex items-center flex-col lg:flex-row justify-center gap-10 py-10">
        <div className="flex items-start gap-1 lg:items-center flex-col lg:w-[50%]">
          <div className="flex items-center gap-1" data-aos="fade-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 bg-primary rounded-sm p-1 h-6"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>

            <h1 className="font-semibold">adiyacahayagemilanggrc@gmail.com</h1>
          </div>
          <div className="flex items-center gap-1" data-aos="fade-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 bg-primary rounded-sm p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <h1 className="font-semibold">+6281383533007</h1>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.002527732555!2d106.852421!3d-6.458074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebbd20db41a1%3A0x2c90c21a04082839!2sPT.Adiya%20Cahaya%20Gemilang%20GRC!5e0!3m2!1sid!2sid!4v1700104890262!5m2!1sid!2sid"
          loading="lazy"
          className="w-[90%] h-[90%] lg:h-full lg:w-[50%]"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
