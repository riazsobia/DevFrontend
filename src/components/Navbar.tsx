import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { nav } from "../contents/Navbar";
import { GrMenu } from "react-icons/gr";
import { HiMenuAlt1 } from "react-icons/hi";

export const Navbar: FC = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <header className="w-full h-20 bg-white shadow-md md:px-12 px-6 flex flex-row justify-between items-center font-poppins box-border md:py-5 py-4">
      <Link to={`/`}>
        <h1 className="font-bold font-poppins text-black text-xl">
          PriyanshuKJ.dev
        </h1>
      </Link>
      <nav className="font-semibold font-poppins text-[1.05rem] hidden flex-row justify-around items-center gap-6 cursor-pointer lg:flex">
        {nav.map((content, index) => {
          return (
            <Link to={content.path} key={index}>
              <p id={content.id} key={index} className="hover:text-blue-500">
                {content.title}
              </p>
            </Link>
          );
        })}
      </nav>
      <nav className="flex flex-col lg:hidden cursor-pointer justify-between items-center w-auto relative">
        <div
          className={`flex justify-center items-center`}
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          {toggle ? <HiMenuAlt1 size={25} /> : <GrMenu size={25} />}
        </div>
        <div
          className={`flex-col justify-center items-center gap-5 absolute top-10 right-0 bg-[#FFFFF0] shadow-md py-5 px-10 z-50 ${
            toggle ? "flex" : "hidden"
          }`}
        >
          {nav.map((content, index) => {
            return (
              <Link to={content.path} key={index}>
                <p
                  id={content.id}
                  className="hover:text-blue-500 text-black"
                  onClick={() => {
                    setToggle(false);
                  }}
                  key={index}
                >
                  {content.title}
                </p>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
