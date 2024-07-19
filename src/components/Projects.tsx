import { FC } from "react";
import { BsGithub } from "react-icons/bs";
import { Works } from "../contents/Projects";
import { Link } from "react-router-dom";
import { SiGitlab } from "react-icons/si";
import { GrFormNextLink } from "react-icons/gr";

export const Projects: FC = () => {
  return (
    <main className="w-full h-auto bg-[#f9f9f9] flex flex-col justify-center items-center box-border xl:py-28 py-10">
      <section className="xl:w-3/6 w-5/6 h-full flex flex-col items-start justify-center gap-4">
        <h4 className="text-[18px] font-bold text-blue-500 font-poppins">
          PORTFOLIO
        </h4>
        <h2 className="font-semibold text-2xl text-black font-poppins">
          {Works.heading}
        </h2>
        {Works.projects.map((project) => {
          return (
            <div className="w-full h-auto flex xl:flex-row flex-col justify-between items-center my-10 bg-white rounded-md shadow-md shadow-gray-300 p-10 xl:gap-1 gap-10">
              <img
                src={project.image.url}
                alt={project.image.description}
                className="xl:w-1/2 w-full h-auto rounded-md shadow-md shadow-gray-200"
              />
              <article className="xl:w-[40%] w-full h-full flex flex-col items-center justify-start gap-7">
                <h4 className="text-xl font-bold text-black font-poppins">
                  {project.title}
                </h4>
                <p className="font-medium text-[18px] text-gray-500 font-mulish text-center">
                  {project.description}
                </p>
                <div className="w-full h-auto flex flex-row flex-shrink items-center justify-center gap-3">
                  {project.stackUsed.map((stack) => {
                    return (
                      <div className="w-auto h-auto p-3 flex items-center justify-center shadow-gray-300 shadow-md rounded-sm">
                        <stack.icon size={25} />
                      </div>
                    );
                  })}
                </div>
                <div className="w-full h-auto flex flex-row items-center justify-center gap-3">
                  <Link to={project.gitrepo.github}>
                    <BsGithub size={25} />
                  </Link>
                  <Link to={project.gitrepo.gitlab}>
                    <SiGitlab size={25} />
                  </Link>
                  <Link to={project.link}>
                    <GrFormNextLink size={25} />
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </section>
    </main>
  );
};
