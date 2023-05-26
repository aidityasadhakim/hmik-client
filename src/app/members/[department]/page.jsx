"use client";
import clsx from "clsx";
import { useParams } from "next/navigation";
// import MemberContent from "@/components/members/MemberContent";
import { slideLeft } from "@/variants/variants";
import { motion } from "framer-motion";
import Headers from "./head";
import { useEffect, useState } from "react";
import api from "@/api";
import MemberList from "@/components/members/MemberList";

const Page = () => {
  const { department } = useParams();
  const [members, setMembers] = useState([]);
  const [title, setTitle] = useState("");

  const fetchMembers = async () => {
    try {
      const response = await api.get(`/api/members/department/${department}`);
      const data = await response.data.data;
      setTitle(data[0].departmentName);
      setMembers(data);
      console.log(data[0].departmentName);
    } catch (err) {
      throw Error(err);
    }
  };

  useEffect(() => {
    fetchMembers();
    window.scroll({
      top: 0,
    });
  }, []);

  return (
    <>
      <Headers title={title} />
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
          Anggota Departemen {title}
        </motion.h1>

        <MemberList members={members} />

        {/* <MemberContent className="mt-[100px] mb-[-50px]  md:mb-[-100px]" /> */}
        {/* <MemberContent reverse={true} /> */}
      </div>
    </>
  );
};

export default Page;
