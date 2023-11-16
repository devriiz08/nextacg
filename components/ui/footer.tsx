import Link from "next/link";
import { Separator } from "./separator";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href={"/"} className="flex items-center">
              <Image
                src={"/images/logo.png"}
                className="h-8 w-8 me-3"
                alt="acg Logo"
                height={600}
                width={1600}
              />
              <span className="self-center text-xl lg:text-2xl font-semibold whitespace-nowrap text-neutral-100">
                PT Adiya Cahaya Gemilang
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-neutral-100 uppercase">
                Layanan
              </h2>
              <ul className="text-muted-foreground dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#layanan" className="hover:underline">
                    Konsultasi Profesional
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="hover:underline">
                    Desain Kustom
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-neutral-100 uppercase">
                Tentang Kami
              </h2>
              <ul className="text-muted-foreground dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href={"/tentang-kami"}
                    className="hover:underline "
                  >
                    Visi Misi
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/tentang-kami"}
                    className="hover:underline"
                  >
                    Goals Kami
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-neutral-100 uppercase">
                Legal
              </h2>
              <ul className="text-muted-foreground dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-muted-foreground sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              PT ACG
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
