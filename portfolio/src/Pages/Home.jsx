import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import designs from "../Data/design";
import Profile from '../Assets/Profile/Profile pic.png'
import ParticleImage from "../Components/ParticleImage";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center h-screen w-full overflow-hidden">
      <ParticleImage/>
      {/* <Marquee speed={60} gradient={false}>
        {designs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center gap-6 mx-3 text-lg font-medium"
          >
            <img
              src={item.image}
              alt=""
              className="w-[400px] rounded-xl blur-sm p-4 grayscale"
            />
          </div>
        ))}
      </Marquee> */}
      <img src={Profile} alt="" className="absolute h-full"/>
      <div className=" z-10 flex flex-col justify-between  w-full  px-5  ">
        <div className="w-3/6 space-y-4 flex flex-col justify-start items-start text-start ">
          <h1 className="font-bold text-6xl text-black">
            Hi, I'M BASLIEL BEDEWI
          </h1>
          <p className="ml-20 ">
            I am an exprienced Graphics Designer with over 3 years of
            exprience.I specilize in: <span className="block font-bold mt-2"> Logo Design,Brand Identity,Visual Identity,
            Poster Design , Illustrations, Social Media Content, Character
            Development and Motion Design.</span>
          </p>
        </div>

        <div className="flex flex-col justify-end items-end text-start space-y-4">
          <h1 className="font-bold text-2xl">Tools I use</h1>
          <div className="mr-10">
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe After Effect</li>
            <li>Adobe Indesign</li>
            <li>Figma</li>
          </div>
        </div>
      </div>
    </div>
  );
}
