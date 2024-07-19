import { FC } from "react";
import { BsGithub } from "react-icons/bs";
import { SiGitlab } from "react-icons/si";

export const DEFAULT_SIZE: number = 20;
export type Size = {
  size: number;
};
export type SocialInputs = {
  title: string;
  component: FC<Size>;
  url: string;
}[];
export const socials: SocialInputs = [
  {
    title: "Github",
    component: BsGithub,
    url: "https://github.com/Priyanshukj02",
  },
  {
    title: "Gitlab",
    component: SiGitlab,
    url: "https://gitlab.com/Priyanshukj02",
  },
];
