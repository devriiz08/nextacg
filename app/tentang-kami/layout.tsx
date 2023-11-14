import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PT Adiya Cahaya Gemilang | Tentang PT Adiya Cahaya Gemilang',
  description: 'PT ADIYA CAHAYA GEMILANG adalah Perusahaan yang bergerak di bidang kontraktor produk yang kami sajikan adalah GRC cetak, dengan bahan utama nyapasir,semen air, additive dan serta FIBRE GLASS sebagai tulangan pokok, di campur / diaduk hingga menjadi mortar yang homogen.dengan demikian akan di peroleh bentuk GRC yang kuat dan rapi GRC cetak merupakan penemuan produk yang handal/canggih di bidang exterior dan interior untuk membantu arsitek dalam mendesign bangun/rumah yang sangat antik dan unik. kami ciptakan berbagai corak dan bentuk sesuai selera dengan kualitas yang terjamin dan artistik. kamirancang sedemikian rupa sehingga kesan nya nampak utuh, untukmemudah kan dalam pemasangan di proyek. sangat tepat sekali di jaman modern ini menggunakan produk GRC cetak, apalagi sekarangkebanyakan arsitek di dalam mendesign bangunan/rumah kembali mengarah kebentuk klasik.',
}

export default function TentangKamiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
