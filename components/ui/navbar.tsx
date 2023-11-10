import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

interface Props {
  page: string;
}

const Navbar = (props: Props) => {
  const page = props.page;

  return (
    <nav className="flex items-center justify-between px-14 bg-[url('/images/hero-img.jpg')]">
      {/* Logo dan title */}
      <div className="flex items-center gap-1">
        <Image
          src={"/images/logo.png"}
          alt="pt adiya cahya gemilang"
          height={600}
          width={1600}
          className="w-14"
        />
        <h1 className="text-md text-secondary font-bold">
          PT ADIYA CAHYA GEMILANG
        </h1>
      </div>
      {/* Navigasi URL */}
      <ul className="flex items-center justify-center gap-4">
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
            href={"/"}
            className={`font-semibold hover:text-secondary transition-all duration-500 ${
              page == "galeri" ? "text-secondary" : "text-muted-foreground"
            }`}
          >
            Galeri
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
            href={"/"}
            className={`font-semibold hover:text-secondary transition-all duration-500 ${
              page == "kontak-kami" ? "text-secondary" : "text-muted-foreground"
            }`}
          >
            Kontak
          </Link>
        </li>
      </ul>
      {/* CTA ke whatsapp */}
      <Button className="text-neutral-100 font-semibold">Hubungi Kami</Button>
    </nav>
  );
};

export default Navbar;
