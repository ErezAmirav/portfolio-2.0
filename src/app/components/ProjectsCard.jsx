"use client";
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectsCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className="h-full flex flex-col"
    >
      <div
        className="h-52 md:h-72 rounded-t-xl border-[#414559] relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div
          className={`overlay items-center border-[#414559] border-r-2 border-l-2 border-t-2 rounded-t-xl justify-center absolute top-0 left-0 w-full h-full bg-[#181818] transition-all duration-500
          md:hidden md:group-hover:flex md:group-hover:bg-opacity-80 
          ${isSelected ? "flex bg-opacity-80" : "hidden bg-opacity-0"}`}
        >
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#babbf1] hover:border-[#99d1db] group/link shadow-lg shadow-[#babbf1]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#babbf1]" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#babbf1] hover:border-[#99d1db] group/link shadow-lg shadow-[#babbf1]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#babbf1]" />
          </Link>
        </div>
      </div>
      <div className="text-white border-l-2 border-r-2 border-b-2 border-[#414559] rounded-b-xl bg-[#181818] py-6 px-4 flex flex-col flex-1">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
