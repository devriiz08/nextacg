import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import CardGallery from "@/components/ui/gallery/cardgallery";
import Header from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Galeri() {
  return (
    <>
      <Header page="galeri" />
      <main>
        <div className="py-10 px-14 w-full">
          <h1 className="font-bold text-4xl mb-6">Galeri</h1>
          <Separator />
          <div className="mt-8 flex items-center justify-center flex-wrap gap-4">
            <CardGallery />
            <CardGallery />
            <CardGallery />
            <CardGallery />
            <CardGallery />
            <CardGallery />
          </div>
          <div className="flex items-center mt-4 justify-center">
            <Button variant={"ghost"} className="mx-auto">
              Next
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
