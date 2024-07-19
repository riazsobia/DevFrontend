import { FC } from "react";
import { Skills } from "../contents/About";

type TechStack = {
  skills: Skills;
  size: number;
};

export const Skill: FC<TechStack> = (props) => {
  return (
    <div className="flex flex-row gap-5 items-center justify-evenly flex-wrap">
      {props.skills.map((skill) => (
        <div
          className="cursor-pointer flex justify-center items-center"
          aria-label={skill.name}
        >
          <skill.icon size={props.size} />
        </div>
      ))}
    </div>
  );
};
