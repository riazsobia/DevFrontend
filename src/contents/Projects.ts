import { DiReact } from "react-icons/di";
import { SiReactrouter, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Skills } from "./About";

export type Project = {
  heading: string;
  projects: {
    image: {
      url: string;
      description: string;
    };
    title: string;
    description: string;
    stackUsed: Skills;
    gitrepo: {
      gitlab: string;
      github: string;
    };
    link: string;
  }[];
};

export const Works: Project = {
  heading: "Each project is a unique piece of development 🧩",
  projects: [
    {
      image: {
        url: "project/project1.png",
        description: "PriyanshuKJ.dev",
      },
      title: "PriyanshuKJ.dev👤",
      description:
        "Landing page for 👨‍💻developers to showcase their 💻Skills, Personality, 📝Projects. It's a portfolio website work as a  🌐︎Digital Resume.",
      stackUsed: [
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
        },
        {
          name: "React Js",
          icon: DiReact,
        },
        {
          name: "Typescript",
          icon: SiTypescript,
        },
        {
          name: "React-Router",
          icon: SiReactrouter,
        },
      ],
      gitrepo: {
        github: "https://github.com/Priyanshukj02/developer",
        gitlab: "https://gitlab.com/Priyanshukj02/developer",
      },
      link: "https://dev.fundbank.in",
    },
  ],
};
