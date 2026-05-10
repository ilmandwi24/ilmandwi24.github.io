"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import portofolio from "@/data/portofolio.json";
const Portofolio = () => {
  const portofolioPerRow = 4;
  const [visible, setVisible] = useState(portofolioPerRow);

  const handleMorePorto = () => {
    // setNext(next + portofolioPerRow);
    setVisible(visible + portofolioPerRow);
  };

  return (
    <section>
      <div className="container ">
        <div className={`border-x border-border `}>
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7 ">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Portofolio
              </p>
              {/* <Button
                variant={"outline"}
                className="h-auto py-3 px-5"
                nativeButton={false}
                render={<Link href={"/"}>Download Portfolio</Link>}
              /> */}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border ">
            {portofolio?.length != 0 &&
              portofolio?.slice(0, visible).map((value: any, index: number) => {
                const isRightCol = index % 2 === 1;
                console.log(value);
                return (
                  <div
                    key={index}
                    className={`group flex flex-col  gap-3.5 sm:gap-5 p-3.5 sm:p-6 border-b  odd:border-r ${isRightCol ?? " md:border-border"}`}
                  >
                    <Link href={value?.url || "#"} aria-label={value?.title} target="_blank" rel="noopener noreferrer" className="overflow-hidden">
                      <div className="relative w-full aspect-video border border-border">
                        <Image
                          src={value?.image}
                          alt={value?.title}
                          fill
                          loading="lazy"
                           sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover  group-hover:scale-105  transition-transform  duration-300 ease-in-out"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                      <Link href={value?.url || "#"} target="_blank" rel="noopener noreferrer" >
                        <h3>{value?.title}</h3>
                      </Link>
                      <div className="flex">
                        <p>{value?.roles?.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {visible < portofolio.length && (
            <div className="flex text-center max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-8">
              <button
                className="cursor-pointer group flex items-center mx-auto gap-1 bg-transparent"
                onClick={handleMorePorto}
              >
                <h4>Lebih banyak</h4>
                <Image
                  src={"/images/icon/tile-arrow-icon.svg"}
                  alt="tile-icon"
                  width={24}
                  height={24}
                  className="rotate-135 md:rotate-45 group-hover:translate-x-1 group-hover:rotate-135 transition-all duration-300 ease-in"
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div
          className={`h-4 border border-border ${
            visible >= portofolio.length && "border-t-0"
          }`}
        />
      </div>
    </section>
  );
};

export default Portofolio;
