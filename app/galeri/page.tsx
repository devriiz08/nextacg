import { Button } from "@/components/ui/button";
import CtaWa from "@/components/ui/ctawa";
import Footer from "@/components/ui/footer";
import CardGallery from "@/components/ui/gallery/cardgallery";
import SectionGallery from "@/components/ui/gallery/sectiongallery";
import Header from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dataGaleri1 } from "@/lib/data";
import { useState } from "react";

export default function Galeri() {
  return (
    <>
      <Header page="galeri" />
      <main>
        <SectionGallery />
        <CtaWa />
      </main>
      <Footer />
    </>
  );
}
