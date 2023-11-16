"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

interface Props {
  title: string;
  thumbnail: string;
}

const CardGallery = (props: Props) => {
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
        src={props.thumbnail}
        alt={props.title}
        height={600}
        width={1600}
        className="w-full h-80 rounded-sm"
      />
      <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
        <h1 className="text-md text-center mx-auto font-semibold text-neutral-100">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default CardGallery;
