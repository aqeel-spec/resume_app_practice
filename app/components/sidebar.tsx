import React, { useId } from "react";
import { PersonalData } from "@/app/types/personalData";
import Image from "next/image";
import Profile from "../../public/pi.jpg";
import {
  FaBeer,
  FaDiscord,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";

type Data = {
  data: PersonalData;
};

function Sidebar({ data }: Data) {
  const { name, role, education, contactLinks } = data;
  const id = useId();
  return (
    <div className="bg-black flex flex-col  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          src={Profile}
          priority
          className="rounded-full h-full  object-cover object-top"
          height={300}
          width={300}
          alt="mt picture"
        />
        <h1 className="mb-2 text-3xl font-extrabold md:text-5xl sm:text-4xl">
          {name}
        </h1>
        <h2 className="mb-8">{role}</h2>
        {education.map((edu) => (
          <p className="mb-2" key={edu}>
            {edu}
          </p>
        ))}
        {/* <p className="mb-2">{education[1]}</p> */}
        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2">Contact me</h3>
          <div className="flex flex-row justify-center gap-2 ">
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label="email link"
            >
              <FaTwitter />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label="email link"
            >
              <FaFacebook />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label="email link"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label="email link"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
