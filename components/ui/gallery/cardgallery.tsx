"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const CardGallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
    });
  }, []);
  return (
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
  );
};

export default CardGallery