import { FC } from "react";
import { ContactChunk } from "../chunks/Contact";
import { list } from "../contents/Contact";

export const Contact: FC = () => {
  const contactLenght = list.length;
  let grid: string = "grid-cols-1";
  if (contactLenght == 1) {
    grid = "grid-cols-1";
  } else if (contactLenght == 2) {
    grid = "grid-cols-2";
  } else {
    grid = "grid-cols-3";
  }
  return (
    <main
      className={`h-[calc(87vh-80px)] bg-[#f9f9f9] w-full grid xl:${grid} grid-cols-1 place-items-center shadow-black shadow-sm font-poppins`}
    >
      {list.map((content, index) => {
        return (
          <ContactChunk
            location={content.location}
            locationArt={content.locationArt}
            email={content.email}
            phoneNo={content.phoneNo}
            key={index}
          />
        );
      })}
    </main>
  );
};
