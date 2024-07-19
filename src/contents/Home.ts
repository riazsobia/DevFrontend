import { FC } from "react";
import { IoLaptopSharp } from "react-icons/io5";
import { Social, SocialProps } from "../chunks/Social";
import { Size } from "./Footer";

type Image = {
  url: string;
  description: string;
};
type HomeContent = {
  heading: string;
  description: string;
  image: Image;
  supporticon: FC<Size>;
  socialicon: FC<SocialProps>;
};

export const Hero: HomeContent = {
  heading: "Front-End React Developer",
  description:
    "Hi, I'm Priyanshu Kumar Jha. A passionate Programmer based in Bihar, India. 📍",
  image: {
    url: "assets/developer.jpeg",
    description: "Developer",
  },
  supporticon: IoLaptopSharp,
  socialicon: Social,
};
