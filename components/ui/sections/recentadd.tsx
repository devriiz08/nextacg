"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import { Button } from "../button";
import { dataRecentAdd } from "@/lib/data";
import CardGallery from "../gallery/cardgallery";
import Link from "next/link";

const RecentAdded = () => {
  const data = dataRecentAdd;

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
          {data != undefined ? (
            data.map((recent: any, i: any) => (
              <div key={i}>
                <CardGallery
                  title={recent.title}
                  thumbnail={recent.thumbnail}
                />
              </div>
            ))
          ) : (
            <div>Ups data not found...</div>
          )}
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
