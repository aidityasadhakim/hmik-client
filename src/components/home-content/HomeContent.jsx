import styles from "./Home.module.css";
import Misi from "./Misi";
import Visi from "./Visi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HomeContent = () => {
  const h1Variant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <div className="w-full bg-blue-800 flex flex-col h-[1000px]">
        <div className={`text-white text-center p-5 pt-[120px]`}>
          <motion.h1
            variants={h1Variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold tracking-tight text-[32px] underline underline-offset-[10px] decoration-[#F87F2C] decoration-2"
          >
            Kabinet Bersatu Maju
          </motion.h1>
        </div>

        {/* Visi */}
        <Visi />

        {/* Misi */}
        <Misi />
      </div>
    </>
  );
};

export default HomeContent;
