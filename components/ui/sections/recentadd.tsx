import Image from "next/image";
import { Button } from "../button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";

const RecentAdded = () => {
  return (
    <section className="px-14 py-10">
      <h1 className="text-center text-4xl font-bold mb-4">
        Baru Saja Ditambahkan
      </h1>
      <p className="text-center text-muted-foreground max-w-md mx-auto">
        Jelajahi inovasi terkini dalam dunia GRC cetak yang baru saja kami
        tambahkan. Temukan produk-produk terbaru yang akan menginspirasi.
      </p>
      <div className="w-full flex justify-center items-center flex-col gap-10">
        <div className="mt-8 flex items-center justify-center flex-wrap gap-4">
          {/* <Card className="w-72 transition-all duration-500 origin-center hover:-translate-y-5 hover:origin-top cursor-pointer">
            <CardHeader className="mb-2">
              <Image
                src={"/images/2.jpg"}
                alt="masjid"
                height={600}
                width={1600}
                className="w-full rounded-sm"
              />
              <CardTitle>Lorem ipsum</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                exercitationem sed nam minima ullam optio expedita iusto
                voluptatibus, porro error!
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <p>Lorem ipsum dolor sit amet.</p>
            </CardFooter>
          </Card> */}
          <div className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm">
            <Image
              src={"/images/1.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">Lorem, ipsum dolor.</h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
          <div className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm">
            <Image
              src={"/images/2.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">Lorem, ipsum dolor.</h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
          <div className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm">
            <Image
              src={"/images/1.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">Lorem, ipsum dolor.</h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
          <div className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm">
            <Image
              src={"/images/2.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">Lorem, ipsum dolor.</h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
          <div className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm">
            <Image
              src={"/images/2.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">Lorem, ipsum dolor.</h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
          <div className="w-72 relative overflow-hidden cursor-pointer border-secondary border p-1 rounded-sm">
            <Image
              src={"/images/1.jpg"}
              alt="masjid nabawiyah"
              height={600}
              width={1600}
              className="w-full h-80 rounded-sm"
            />
            <div className="absolute top-0 rounded-sm flex items-start flex-col justify-center bg-slate-900 h-full w-full gap-3 px-2 hover:opacity-100 opacity-0 transition-all duration-500">
              <h1 className="text-xl font-semibold text-neutral-100">Lorem, ipsum dolor.</h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                consequuntur eligendi dolore est accusamus possimus?
              </p>
            </div>
          </div>
        </div>
        <Button className="font-semibold uppercase" variant={"outline"}>
          Lihat Galeri
        </Button>
      </div>
    </section>
  );
};

export default RecentAdded;
