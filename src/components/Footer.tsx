import { FC } from "react";
import { Social } from "../chunks/Social";

export const Footer: FC = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="w-full h-32 bg-[#2d2e32] font-poppins box-border text-white flex flex-col xl:justify-between justify-around items-center xl:px-96 px-10 xl:py-10 py-5 xl:flex-row">
      <h3 className="font-bold text-[1rem] text-center">
        Copyright © <span>{Year}</span>. All rights are reserved
      </h3>
      <Social jusitfy="RIGHT" size={20} />
    </footer>
  );
};
