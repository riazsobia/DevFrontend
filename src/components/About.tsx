import { FC } from "react";
import { Skill } from "../chunks/Skill";
import { Developer } from "../contents/About";

export const About: FC = () => {
  return (
    <main className="w-full xl:h-[calc(87vh-80px)] h-auto bg-[#f9f9f9] flex flex-col justify-center items-center box-border">
      <section className="w-full h-5/6 flex flex-col justify-center items-center gap-10 py-8 bg-white">
        <section className="2xl:w-4/6 w-5/6 h-auto flex xl:flex-row flex-col items-center justify-between gap-12 py-3">
          <img
            src={Developer.about.supportimage.url}
            alt={Developer.about.supportimage.description}
            className="h-full xl:w-1/2 w-auto rounded-md"
          />
          <article className="xl:w-1/2 w-full h-full flex flex-col items-start justify-start gap-3">
            <h4 className="text-[18px] font-bold text-blue-500 font-poppins">
              ABOUT ME
            </h4>
            <h2 className="font-semibold text-2xl text-black font-poppins">
              {Developer.about.heading}
            </h2>
            <p className="font-normal text-gray-500 font-mulish">
              {Developer.about.description}
            </p>
          </article>
        </section>
        <section className="flex xl:flex-row flex-col items-center justify-start w-5/6 2xl:w-4/6 gap-5">
          <p className="font-medium font-mulish text-xl border-b-2 xl:border-none border-black">
            Tech Stack
          </p>
          <Skill skills={Developer.skills} size={30} />
        </section>
      </section>
    </main>
  );
};
