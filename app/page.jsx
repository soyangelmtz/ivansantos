import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <div className="mt-2 flex p-2">
      <div className="w-[85vw] mx-auto">
        <div className="w-full h-[30vh] rounded-md overflow-hidden flex">
          <Image
            src="/jumbotron.png"
            loading="lazy"
            width={900}
            height={900}
            className="select-none brightness-75 w-full h-full object-cover object-center"
            alt="Jumbotron"
          />
        </div>

        <div className="my-10 w-full flex-row">
          <p className="md:ml-20 ml-5 text-3xl font-bold">Home Page</p>
          <div className="md:mx-20 mt-5 text-xl md:flex">
            <div className="w-full aspect-video flex">
              <div className="w-[60%] rounded-lg overflow-hidden aspect-square flex md:ml-auto md:mr-4 mx-auto">
                <Image
                  src="/homepage-research.jpg"
                  alt="Research home page placeholder image"
                  className="m-auto object-cover object-center w-full h-full"
                  width={900}
                  height={900}
                />
              </div>
            </div>
            <div className="w-full flex aspect-video">
              <div className="w-full my-auto">
                <p className="my-auto text-lg md:text-left text-center">
                  En esta página se enlistan los artículos y/o publicaciones más
                  recientes que se suban al sitio web.
                </p>
                <p className="my-auto text-lg md:text-left text-center">
                  Todas las páginas del sitio cuentan con el mismo estilo, para
                  conservar la uniformidad del estilo.
                </p>
                <p className="my-auto text-lg md:text-left text-center">
                  Dicho estilo es inspirado en la página inicial de{" "}
                  <a
                    className="italic hover:text-blue-500 transition-all hover:underline"
                    target="_blank"
                    href="https://www.medford.chbe.gatech.edu/"
                    rel="noopener noreferrer"
                  >
                    Medford Group
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="py-2 md:mx-20 mt-5">
            <div className="border-t-2 border-slate-600 flex pt-20 mb-3">
              <h1 className="text-2xl md:ml-14 mx-auto italic">Areas of Research</h1>
            </div>
            <div className="flex md:p-10">
              <div className="md:w-[50vw] w-[90vw] m-auto gap-7 grid grid-rows-2">
                <div className="grid grid-cols-3 gap-10">
                  {[
                    { src: "/1.png", alt: "Renewable Fertilizer", title: "Renewable Fertilizer" },
                    { src: "/2.png", alt: "Biomass Refining", title: "Biomass Refining" },
                    { src: "/3.png", alt: "Natural Gas Conversion", title: "Natural Gas Conversion" },
                  ].map((item, index) => (
                    <div key={index} className="group aspect-[3/4] my-auto">
                      <div className="rounded-full cursor-pointer overflow-hidden aspect-square transition-all group-hover:scale-110">
                        <Image
                          src={item.src}
                          className="w-full h-full object-cover transition-all object-center"
                          alt={item.alt}
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="w-full h-1/4 flex">
                        <p className="w-full text-center my-auto text-xl group-hover:italic transition-all cursor-pointer">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-10">
                  {[
                    { src: "/4.png", alt: "Electronic Structure", title: "Electronic Structure" },
                    { src: "/5.png", alt: "Kinetic Models", title: "Kinetic Models" },
                    { src: "/6.png", alt: "Surface Analysis", title: "Surface Analysis" },
                  ].map((item, index) => (
                    <div key={index} className="group aspect-[3/4] my-auto">
                      <div className="rounded-full cursor-pointer overflow-hidden aspect-square transition-all group-hover:scale-110">
                        <Image
                          src={item.src}
                          className="w-full h-full object-cover transition-all object-center"
                          alt={item.alt}
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="w-full h-1/4 flex">
                        <p className="w-full text-center my-auto text-xl group-hover:italic transition-all cursor-pointer">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
