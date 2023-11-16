import Image from "next/image"

const Vm = () => {
    return (
        <section className="py-10 px-14 flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2">
          <h1 className="font-bold text-2xl">
            Visi PT Adiya Cahaya Gemilang
          </h1>
          <p className="text-muted-foreground max-w-md">
            Menjadi penyedia utama dan terdepan di industri kontraktor GRC
            cetak, memberikan solusi yang inovatif dan estetik untuk arsitek
            dan kontraktor, menciptakan keindahan dan kekuatan dalam setiap
            proyek.
          </p>
          <Image src={"/images/vm-bg.jpg"} alt="visi misi pt adiya cahaya gemilang" width={1600} height={600} className="" />
        </div>
        <div className="lg:w-1/2 flex items-start flex-col">
          <h1 className="font-bold text-2xl">
            Misi PT Adiya Cahaya Gemilang
          </h1>
          <ul className="list-decimal">
            <li>
              <h2 className="font-semibold text-lg">Inovasi Tanpa Henti :</h2>
              <p className="text-muted-foreground">
                Kami berkomitmen untuk terus mengembangkan teknologi dan
                metode terbaru dalam pembuatan GRC cetak untuk memberikan
                produk berkualitas tinggi
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg">Keunggulan Dalam Kualitas :</h2>
              <p className="text-muted-foreground">
              Kami berdedikasi untuk memberikan GRC cetak dengan kualitas unggul, dengan menggunakan bahan-bahan berkualitas tinggi dan proses produksi yang canggih
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg">Keindahan Yang Abadi :</h2>
              <p className="text-muted-foreground">
              Kami menghasilkan produk GRC cetak yang menggabungkan keindahan estetik dengan daya tahan jangka panjang, memungkinkan arsitek dan pemilik proyek untuk menciptakan bangunan yang antik dan unik.
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg">Kepuasan Pelanggan :</h2>
              <p className="text-muted-foreground">
              Kami selalu berusaha untuk memahami kebutuhan dan keinginan pelanggan kami, memberikan layanan yang ramah dan responsif, serta memastikan kepuasan mereka dalam setiap proyek.
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg">Konservasi Lingkungan :</h2>
              <p className="text-muted-foreground">
              Kami berkomitmen untuk mengurangi dampak lingkungan dengan menggunakan bahan-bahan ramah lingkungan dan praktik produksi yang berkelanjutan dalam semua aspek bisnis kami.
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg">Kemitraan yang Kuat :</h2>
              <p className="text-muted-foreground">
              Kami menjalin kemitraan yang kokoh dengan arsitek, kontraktor, dan pemilik proyek, memastikan kolaborasi yang sukses dan keberlanjutan dalam pencapaian tujuan bersama.
              </p>
            </li>
          </ul>
        </div>
      </section>
    )
}

export default Vm