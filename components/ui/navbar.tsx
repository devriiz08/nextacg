"use client";

import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { useState } from "react";

interface Props {
  page: string;
}

const Navbar = (props: Props) => {
  const [isClick, setIsClick] = useState(false);
  const page = props.page;

  const handleClick = () => {
    if (!isClick) {
      setIsClick(true);
    } else {
      setIsClick(false);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between px-14 py-2 bg-black">
        {/* Logo dan title */}
        <div className="flex items-center gap-1">
          <Image
            src={"/images/logo.png"}
            alt="pt adiya cahaya gemilang"
            height={600}
            width={1600}
            className="w-14"
          />
          <h1 className="hidden lg:block text-md text-secondary font-bold">
            PT ADIYA CAHAYA GEMILANG
          </h1>
        </div>
        {/* Navigasi URL */}
        <ul className="lg:flex items-center hidden justify-center gap-4">
          <li>
            <Link
              href={"/"}
              className={`font-semibold hover:text-secondary transition-all duration-500 ${
                page == "beranda" ? "text-secondary" : "text-muted-foreground"
              }`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href={"/tentang-kami"}
              className={`font-semibold hover:text-secondary transition-all duration-500 ${
                page == "tentang-kami"
                  ? "text-secondary"
                  : "text-muted-foreground"
              }`}
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              href={"/galeri"}
              className={`font-semibold hover:text-secondary transition-all duration-500 ${
                page == "galeri" ? "text-secondary" : "text-muted-foreground"
              }`}
            >
              Galeri
            </Link>
          </li>
          <li>
            <Link
              href={"/#kontak"}
              className={`font-semibold hover:text-secondary transition-all duration-500 ${
                page == "kontak-kami"
                  ? "text-secondary"
                  : "text-muted-foreground"
              }`}
            >
              Kontak
            </Link>
          </li>
        </ul>
        {/* CTA ke whatsapp */}
        <Button className="text-neutral-100 font-semibold hidden lg:block">
          Hubungi Kami
        </Button>
        <Button className="lg:hidden" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </Button>
      </nav>
      <div
        className={`lg:hidden flex justify-between py-10 items-start transition-all duration-500 z-[999] flex-col absolute h-screen w-full bg-black top-0 ${
          !isClick ? "translate-x-full" : "translate-x-20"
        }`}
      >
        <Button className="ms-52" variant={"outline"} onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
        <Link
          href={"/"}
          className={`font-semibold text-neutral-100 hover:text-primary ms-5 ${
            page == "beranda" ? "text-primary" : ""
          }`}
        >
          Beranda
        </Link>
        <Link
          href={"/tentang-kami"}
          className="font-semibold ms-5 text-neutral-100 hover:text-primary"
        >
          Tentang Kami
        </Link>
        <Link
          href={"/galeri"}
          className="font-semibold ms-5 text-neutral-100 hover:text-primary"
        >
          Galeri
        </Link>
        <Link
          href={"/#kontak"}
          className="font-semibold ms-5 text-neutral-100 hover:text-primary"
        >
          Kontak
        </Link>
      </div>
    </>
  );
};

export default Navbar;
