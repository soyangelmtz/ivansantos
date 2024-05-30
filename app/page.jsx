import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className=" mt-2 flex p-2">
      <div className="w-[85vw]  mx-auto">
        <div className="w-full h-[30vh] rounded-md overflow-hidden flex ">
          <Image
            src="/jumbotron.png"
            loading="lazy"
            width={900}
            height={900}
            className="select-none brightness-75 w-full h-full object-cover object-center "
          />
        </div>

        <div className="my-10 w-full flex-row">
          <p className="ml-20 text-3xl font-bold">Home Page</p>
          <div className="mx-20 mt-5  -black text-xl flex">
            <div className=" w-full  aspect-video flex">
              <div className=" w-[60%] rounded-lg overflow-hidden dark:-yellow-100  dark:-2 -black aspect-square flex ml-auto mr-4">
                <img
                  src="/homepage-research.jpg"
                  alt="Research home page placeholder image"
                  className="m-auto object-cover object-center w-full h-full"
                />
              </div>
            </div>
            <div className=" w-full flex aspect-video ">
              <div className=" w-full my-auto">
                <p className="my-auto text-lg">
                  En esta página se enlistan los artículos y/o publicaciones mas
                  recientes que se suban al sitio web.
                </p>
                <p className="my-auto text-lg">
                  Todas las páginas del sitio cuentan con el mismo estilo, para
                  conservar la uniformidad del estilo.
                </p>
                <p className="my-auto text-lg">
                  Dicho estilo es inspirado en la página inicial de{" "}
                  <a
                    className="italic hover:text-blue-500 transition-all hover:underline hover:bg-white"
                    target="_blank"
                    href="https://www.medford.chbe.gatech.edu/"
                  >
                    Medford Group
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="  py-2 mx-20 mt-5">
            <div className=" border-t-2 border-slate-600 pt-20 mb-3">
              <h1 className="text-2xl ml-14 italic">Areas of Research</h1>
            </div>
            <div className=" flex p-10">
              <div className=" w-[50vw] m-auto grid grid-rows-2">
                <div className=" grid grid-cols-3 gap-10">
                <div className=" group aspect-[3/4]">
                    <div className=" rounded-full cursor-pointer overflow-hidden aspect-square transition-all group-hover:-4 -black">
                      <img src="/1.png" className="w-full h-full object-cover transition-all object-center group-hover:scale-110 " alt="" />
                    </div>
                    <div className=" -black w-full h-1/4 flex">

                    <p className=" w-full text-center my-auto text-xl group-hover:italic transition-all cursor-pointer">Renewable Fertilizer</p>
                    </div>
                  </div>
                  <div className=" group aspect-[3/4]">
                    <div className=" rounded-full cursor-pointer overflow-hidden aspect-square transition-all group-hover:-4 -black">
                      <img src="/2.png" className="w-full h-full object-cover transition-all object-center group-hover:scale-110 " alt="" />
                    </div>
                    <div className=" -black w-full h-1/4 flex">

                    <p className=" w-full text-center my-auto text-xl group-hover:italic transition-all cursor-pointer">Biomass Refining</p>
                    </div>
                  </div>
                  <div className=" group aspect-[3/4]">
                    <div className=" rounded-full cursor-pointer overflow-hidden aspect-square transition-all group-hover:-4 -black">
                      <img src="/3.png" className="w-full h-full object-cover transition-all object-center group-hover:scale-110 " alt="" />
                    </div>
                    <div className=" -black w-full h-1/4 flex">

                    <p className=" w-full text-center my-auto text-xl group-hover:italic transition-all cursor-pointer"> Natural Gas Conversion</p>
                    </div>
                  </div>
                </div>



                <div className=" grid grid-cols-3 gap-10">

                  <div className=" group aspect-[3/4]">
                    <div className=" rounded-full cursor-pointer overflow-hidden aspect-square transition-all group-hover:-4 -black">
                      <img src="/4.png" className="w-full h-full object-cover transition-all object-center group-hover:scale-110 " alt="" />
                    </div>
                    <div className=" -black w-full h-1/4 flex">

                    <p className=" w-full text-center my-auto text-xl group-hover:italic transition-all cursor-pointer">Electronic Structure</p>
                    </div>
                  </div>
                  <div className=" group aspect-[3/4]">
                    <div className=" rounded-full cursor-pointer overflow-hidden aspect-square transition-all group-hover:-4 -black">
                      <img src="/5.png" className="w-full h-full object-cover transition-all object-center group-hover:scale-110 " alt="" />
                    </div>
                    <div className=" -black w-full h-1/4 flex">

                    <p className=" w-full text-center my-auto text-xl group-hover:italic transition-all cursor-pointer">Kinetic Models</p>
                    </div>
                  </div>
                  <div className=" group aspect-[3/4]">
                    <div className=" rounded-full cursor-pointer overflow-hidden aspect-square transition-all group-hover:-4 -black">
                      <img src="/6.png" className="w-full h-full object-cover transition-all object-center group-hover:scale-110 " alt="" />
                    </div>
                    <div className=" -black w-full h-1/4 flex">

                    <p className=" w-full text-center my-auto text-xl group-hover:italic transition-all cursor-pointer">Surface Analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
