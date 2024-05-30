import React from "react";

function Footer() {
  return (
    <div>
      <div className="w-full h-[40vh] dark:bg-slate-950 grid grid-cols-3">
        <div className="m-auto">
          <img className="w-[150px]" src="/fcq.png" alt="" />
        </div>
        <div className="m-auto  h-full w-full flex-wrap-reverse">
          <div className="h-1/3 w-full  text-center flex">
            <p className="mx-auto mt-auto font-bold">
              Dr. Iván Alonso Santos López
            </p>
          </div>
          <div className="h-1/3 w-full  text-center">
            <p className="mx-auto">Facultad de Ciencias Químicas, UANL</p>
            <p>+52 811-1234-567</p>
            <div className="border mt-5 border-black dark:border-yellow-100 w-[80%] mx-auto"></div>
          </div>
        </div>
        <div className="m-auto">
          <img className="w-[150px]" src="/uanl.svg" alt="UANL Logo" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
