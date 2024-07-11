"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-inside list-image-[url(/images/arrow.png)] pl-2 text-[#ADB7BE]">
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-inside grid grid-cols-2 list-image-[url(/images/arrow.png)] pl-2 text-[#ADB7BE]">
        <li>NextJS</li>
        <li>ReactJS</li>
        <li>FabricJS</li>
        <li>NodeJS</li>
        <li>MongoDB</li>
        <li>TailwindCSS</li>
        <li>MUI</li>
        <li>FetchAPI</li>
        <li>Redux</li>
        <li>Wordpress</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-inside list-image-[url(/images/arrow.png)] pl-2 text-[#ADB7BE]">
        <li>Git</li>
        <li>DevTools</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-inside list-image-[url(/images/arrow.png)] pl-2 text-[#ADB7BE]">
        <li>Computer Science Graduate (B.Sc.)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about image"
          className="xl:block lg:block md:block xs:hidden pointer-events-none"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-4">About Me</h2>
          <p className="text-[#ADB7BE] text-base sm:text-md mb-6 lg:text-md">
            Computer Science graduate (B.Sc.) specializing in Fullstack
            development. Ambitious, collaborative, and driven by a passion for
            tackling challenges and pushing boundaries in technology.
          </p>
          <div className="flex flex-row md:justify-start xs:justify-center mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              Frameworks
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              Tools
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
