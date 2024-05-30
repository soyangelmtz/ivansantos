import React from "react";
import { EnvelopeAt, Geo, Phone, PhoneLandscape, Telephone } from "react-bootstrap-icons";

function page() {
  return (
    <div className=" w-[90vw] h-[90vh] m-auto">
      <div className="w-full  h-[15vh] flex ">
        <p className="text-6xl ml-20 mt-auto w-fit font-bold transition-all">Contact</p>
      </div>
      <div className=" w-full h-full">
        <div className=" mx-auto my-20 w-[85vw] h-[60vh] grid grid-cols-2">
          <div className="flex  ">
            <div className="border-2 border-slate-800 dark:border-yellow-100 rounded-lg w-[35%] mr-10 ml-auto my-auto aspect-portrait overflow-hidden">
              <img
                className="object-cover w-full h-full hover:scale-110 transition-all ease-in-out"
                src="/contact.jpg"
                alt="Contact Image"
              />
            </div>
          </div>
          <div className=" flex  ">
            <div className="h-[85%] w-[80%]  my-auto  ">
              <p className="text-3xl ml-2 italic">Contact Information</p>

              <div className="flex mt-12 group w-fit">
                <EnvelopeAt height={30} className="transition-all text-4xl ml-8 mt-2 group-hover:-translate-y-1" />
                <a
                  className=" mt-auto hover:underline ml-2 hover:text-blue-400 transition-all text-lg"
                  href="mailto:ivansantos@uanl.edu.mx"
                  target="_blank"
                >
                  ivansantos@uanl.edu.mx
                </a>
              </div>
              <div className="flex my-5 group w-fit">
                <Telephone height={30} className="transition-all text-4xl ml-8 mt-2 group-hover:-translate-y-1" />
                <p className=" text-lg cursor-pointer mt-auto hover:underline ml-2 hover:text-blue-400 transition-all">
                  +82 81 1234 5678
                </p>
              </div>
              <div className="flex group w-fit ">
                <Geo height={30} className="transition-all text-4xl ml-8 mt-2 group-hover:-translate-y-1 " />
                <a href="https://maps.app.goo.gl/d3cSHQ1sLaLzorfi7" target="_blank" className=" text-lg cursor-pointer mt-auto hover:underline ml-2 w-fit  hover:text-blue-400 transition-all">
                  División de Estudios de Posgrado, Facultad de Ciencias
                  Químicas UANL
                </a>
              </div>
              <div className=" text-lg mt-20 ml-2  w-full">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellendus soluta optio id numquam, consequatur voluptatibus, reiciendis saepe blanditiis voluptates cum quia at nihil corporis accusantium minima dolore et, exercitationem ad officiis. 
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
