import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  bouncePopUpLeft,
  bouncePopUpRight,
  slideUp,
} from "@/variants/variants";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const MemberContent = ({
  className,
  reverse = false,
  name = "Nama",
  position = "Posisi di HMIK",
  description = "Moto Hidup",
  imgUrl = "https://res.cloudinary.com/dhutys1vb/image/upload/q_auto:eco/v1684908123/pexels-pixabay-220453_lmj70j.jpg",
  github = "",
  instagram = "",
  linkedin = "",
}) => {
  return (
    <div className={className}>
      <div
        className={clsx(
          "flex gap-[30px] items-center",
          `${reverse ? "flex-row-reverse" : ""}`,
          "mx-auto w-full",
          "md:w-3/4",
          "text-white"
          //   "border"
        )}
      >
        <motion.div
          variants={reverse ? bouncePopUpRight() : bouncePopUpLeft()}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
          className="w-[400px] md:2/3 overflow-hidden relative rounded-[30px] "
        >
          <img
            src={imgUrl}
            alt="Profile"
            className={`w-[300px] drop-shadow-xl ${
              reverse ? "float-left" : "float-right"
            }`}
          />
        </motion.div>
        <motion.div
          variants={slideUp(2)}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
          className={`flex flex-col mt-[-40px] md:mt-[-70px] ${
            reverse ? "text-end" : ""
          }`}
        >
          <h1 className="font-bold text-[18px] md:text-[24px] underline underline-offset-[5px] decoration-[#F87F2C] decoration-3">
            {name}
          </h1>
          <h3 className="font-medium italic text-[14px] md:text-[18px]">
            {position}
          </h3>
          <p className="font-light text-[10px] md:text-[12px]">{description}</p>
          <div className="flex flex-row gap-[5px] mt-[5px]">
            <a href={github} target="_blank">
              <FaGithub className="text-[34px] hover:fill-cyan-400 hover:-translate-y-1 transition duration-500 hover:scale-125" />
            </a>
            <a href={instagram} target="_blank">
              <FaInstagram className="text-[34px] hover:fill-cyan-400 hover:-translate-y-1 transition duration-500 hover:scale-125" />
            </a>
            <a href={linkedin} target="_blank">
              <FaLinkedin className="text-[34px] hover:fill-cyan-400 hover:-translate-y-1 transition duration-500 hover:scale-125" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MemberContent;
