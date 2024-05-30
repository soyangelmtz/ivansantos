import React from "react";
import DarkModeIcon from "../components/DarkModeIcon";

function Navbar() {
  return (
    <nav>
      <div className="sm:hidden">
        <div className=" flex h-28 p-1 w-[50vw]">
          <div className="w-1/3 ">responsive</div>
          <div className="w-1/3 ">responsive</div>
          <div className="w-1/3 ">responsive</div>
        </div>
      </div>

      <div className="fixed w-[50px] aspect-square bg-slate-900 dark:bg-yellow-100 p-2 rounded-full bottom-5 right-5 ">
        <DarkModeIcon />
      </div>

      <div className="sm:block hidden group select-none">
        <div className=" flex h-28 p-1 ">
          <div className=" flex w-1/3 ">
            <a
              href="/"
              className=" active:translate-y-1 text-xl text-end m-auto w-fit cursor-pointer hover:font-bold transition-all"
            >
              Dr. Iván Santos
            </a>
          </div>
          <div className="flex w-1/3 ">
            {/* <p className="m-auto ">( intentionally left blank )</p> */}
          </div>
          <div className="flex w-fit">
            <div className=" text-lg gap-10 p-1 my-auto ml-2 flex">
              <a
                href="/alumnos"
                className=" hover:-translate-y-1 active:scale-95 m-auto transition-all cursor-pointer "
              >
                Alumnos
              </a>
              <a
                href="/research"
                className="  hover:-translate-y-1 active:scale-95 m-auto transition-all cursor-pointer "
              >
                Research
              </a>
              <a
                href="/about"
                className=" hover:-translate-y-1 active:scale-95 m-auto transition-all cursor-pointer "
              >
                About
              </a>
              <a
                href="/contact"
                className=" hover:-translate-y-1 active:scale-95 m-auto transition-all cursor-pointer "
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="border border-black dark:border-yellow-100 transition-all w-[90%] mx-auto group-hover:opacity-100 opacity-15"></div>
      </div>
    </nav>
  );
}

export default Navbar;
