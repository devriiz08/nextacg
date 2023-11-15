"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

const RecentAdded = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
    });
  }, []);
  return (
    <section className="px-14 py-10">
      <h1 data-aos="fade-down" className="text-center text-4xl font-bold mb-4">
        Baru Saja Ditambahkan
      </h1>
      <p
        data-aos="fade-down"
        className="text-center text-muted-foreground max-w-md mx-auto"
      >
        Jelajahi inovasi terkini dalam dunia GRC cetak yang baru saja kami
        tambahkan. Temukan produk-produk terbaru yang akan menginspirasi.
      </p>
      <div className="w-full flex justify-center items-center flex-col gap-10">
        <div className="mt-8 flex items-center justify-center flex-wrap gap-4">
          <div
            data-aos="flip-right"
            className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm"
          >
            <Image
              src={"/images/1.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">
                Lorem, ipsum dolor.
              </h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm"
          >
            <Image
              src={"/images/2.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div
              data-aos="flip-right"
              className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500"
            >
              <h1 className="text-xl font-semibold text-neutral-100">
                Lorem, ipsum dolor.
              </h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm"
          >
            <Image
              src={"/images/3.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">
                Lorem, ipsum dolor.
              </h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm"
          >
            <Image
              src={"/images/4.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">
                Lorem, ipsum dolor.
              </h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm"
          >
            <Image
              src={"/images/5.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">
                Lorem, ipsum dolor.
              </h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm"
          >
            <Image
              src={"/images/6.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">
                Lorem, ipsum dolor.
              </h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
        </div>
        <Link href={"/galeri"}>
        <Button
          data-aos="fade-down"
          className="font-semibold uppercase"
          variant={"outline"}
        >
          Lihat Galeri
        </Button>
        </Link>
      </div>
    </section>
  );
};

export default RecentAdded;
