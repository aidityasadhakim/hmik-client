import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import {
  bouncePopUpLeft,
  bouncePopUpRight,
  slideUp,
} from "@/variants/variants";

const MemberContent = ({ className, reverse = false }) => {
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
          className="w-[400px] md:2/3 overflow-hidden relative rounded-[30px]"
        >
          <img
            src="https://res.cloudinary.com/dhutys1vb/image/upload/q_auto:eco/v1684908123/pexels-pixabay-220453_lmj70j.jpg"
            alt="Profile"
            className={`w-[300px] ${reverse ? "float-left" : "float-right"}`}
          />
          {/* <Image
              src={
                "https://res.cloudinary.com/dhutys1vb/image/upload/q_auto:eco/v1684908123/pexels-pixabay-220453_lmj70j.jpg"
              }
              width={350}
              height={350}
              alt="profile"
              style={{ objectFit: "cover" }}
              className="float-right"
            /> */}
        </motion.div>
        <motion.div
          variants={slideUp(2)}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
          className={`flex flex-col mt-[-70px] ${reverse ? "text-end" : ""}`}
        >
          <h1 className="font-bold text-[18px] md:text-[24px]">
            Aidityas Adhakim
          </h1>
          <h3 className="font-medium italic text-[14px] md:text-[18px]">
            Kepala Departemen Pendidikan IT
          </h3>
          <p className="font-light text-[10px]">
            Moto Hidup: Hidup Cuma Sekali Guys
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MemberContent;
