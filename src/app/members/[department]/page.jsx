"use client";
import clsx from "clsx";
import { useParams } from "next/navigation";
import MemberContent from "@/components/members/MemberContent";
import { slideLeft } from "@/variants/variants";
import { motion } from "framer-motion";

const Page = () => {
  const { department } = useParams();
  return (
    <div
      className={clsx(
        "bg-[#1e40af] pt-[50px] px-[10px] pb-[100px]",
        "md:px-[50px]",
        "overflow-hidden"
      )}
    >
      <motion.h1
        variants={slideLeft(2)}
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true }}
        className={clsx(
          "text-white font-bold text-[32px] text-center",
          "underline underline-offset-[10px] decoration-[#F87F2C] decoration-3",
          "mx-auto"
        )}
      >
        Anggota Departemen{" "}
        {department.charAt(0).toUpperCase() + department.slice(1)}
      </motion.h1>
      <MemberContent className="mt-[100px] mb-[-50px]  md:mb-[-100px]" />
      <MemberContent reverse={true} />
    </div>
  );
};

export default Page;
