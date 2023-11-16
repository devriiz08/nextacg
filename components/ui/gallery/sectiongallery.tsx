"use client";

import { dataGaleri1, dataGaleri2, dataGaleri3 } from "@/lib/data";
import { Separator } from "../separator";
import { useState } from "react";
import CardGallery from "./cardgallery";

const SectionGallery = () => {
  const data = dataGaleri1;
  const data2 = dataGaleri2;
  const data3 = dataGaleri3;
  const [tab, setTab] = useState(1);

  return (
    <div className="py-10 px-14 w-full">
      <h1 className="font-bold text-2xl lg:text-4xl mb-6">Galeri</h1>
      <Separator />

      {tab == 1 ? (
        <div className="mt-8 flex items-center justify-center flex-wrap gap-4">
          {data != undefined ? (
            data.map((recent: any, i: any) => (
              <div key={i}>
                <CardGallery
                  title={recent.title}
                  thumbnail={recent.thumbnail}
                />
              </div>
            ))
          ) : (
            <div>Ups data not found...</div>
          )}
        </div>
      ) : (
        ""
      )}
      {tab == 2 ? (
        <div className="mt-8 flex items-center justify-center flex-wrap gap-4">
          {data2 != undefined ? (
            data2.map((recent: any, i: any) => (
              <div key={i}>
                <CardGallery
                  title={recent.title}
                  thumbnail={recent.thumbnail}
                />
              </div>
            ))
          ) : (
            <div>Ups data not found...</div>
          )}
        </div>
      ) : (
        ""
      )}
      {tab == 3 ? (
        <div className="mt-8 flex items-center justify-center flex-wrap gap-4">
          {data3 != undefined ? (
            data3.map((recent: any, i: any) => (
              <div key={i}>
                <CardGallery
                  title={recent.title}
                  thumbnail={recent.thumbnail}
                />
              </div>
            ))
          ) : (
            <div>Ups data not found...</div>
          )}
        </div>
      ) : (
        ""
      )}

      <div className="flex items-center mt-4 justify-center">
        <div className="tabs tabs-boxed">
          <div className={`tab transition-all duration-500 ${tab == 1 ? "tab-active" : ""}`} onClick={() => setTab(1)}>1</div>
          <div className={`tab transition-all duration-500 ${tab == 2 ? "tab-active" : ""}`} onClick={() => setTab(2)}>2</div>
          <div className={`tab transition-all duration-500 ${tab == 3 ? "tab-active" : ""}`} onClick={() => setTab(3)}>3</div>
        </div>
      </div>
    </div>
  );
};

export default SectionGallery;
