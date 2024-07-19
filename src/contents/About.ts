import { FC } from "react";
import { Size } from "./Footer";
import { GrReactjs } from "react-icons/gr";
import {
  SiExpress,
  SiGraphql,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { SiBun } from "react-icons/si";
import { DiNginx, DiRedis } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { BsGit } from "react-icons/bs";

type AboutContent = {
  about: {
    supportimage: {
      url: string;
      description: string;
    };
    heading: string;
    description: string;
  };
  skills: Skills;
};

export type Skills = {
  name: string;
  icon: FC<Size>;
}[];

export const Developer: AboutContent = {
  about: {
    supportimage: {
      url: "assets/Web-Dev-Header.jpeg",
      description: "AI",
    },
    heading: "A dedicated Full-Stack Developer based in Bihar, India 📍",
    description:
      "As a dedicated Full-Stack Developer, i never forget to learn new tech. Learning new things is in my veins, currently learning Machine Learning to upskill my profile. My researches speaks my credibility. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.",
  },
  skills: [
    {
      name: "ReactJs",
      icon: GrReactjs,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "Bun",
      icon: SiBun,
    },
    {
      name: "Linux",
      icon: SiLinux,
    },
    {
      name: "Nginx",
      icon: DiNginx,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
    {
      name: "Git",
      icon: BsGit,
    },
    {
      name: "Prisma",
      icon: SiPrisma,
    },
    {
      name: "MongoDb",
      icon: SiMongodb,
    },
    {
      name: "Redis",
      icon: DiRedis,
    },
    {
      name: "NextJs",
      icon: SiNextdotjs,
    },
    {
      name: "ExpressJs",
      icon: SiExpress,
    },
    {
      name: "NestJs",
      icon: SiNestjs,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
    },
  ],
};
