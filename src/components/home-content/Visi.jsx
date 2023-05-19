import { motion } from "framer-motion";
import slideRight from "@/variants/slideRight";

const Visi = () => {
  return (
    <motion.div
      variants={slideRight(1.5)}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true }}
      className="flex flex-row gap-[20px] w-5/6 md:gap-[40px] md:w-1/2 mx-auto text-center md:text-start"
    >
      <div
        id="profilePicture"
        className="flex flex-col text-white items-center h-[210px] w-[440px]"
      >
        <img src="/image8.png" alt="Kahim" className="h-full w-full" />
        <h5 className="font-bold text-[18px]">Julius Ganteng</h5>
        <p className="opacity-50 font-light text-sm text-[14px]">Kepala SUKU</p>
      </div>

      <div
        id="visi-description"
        className="flex flex-col items-center border rounded-lg border-2 p-[10px]"
      >
        <h5 className="text-[#F87F2C] font-bold p-[10px]">Visi</h5>
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
          quod odio non eius iure voluptatibus odit pariatur quae dignissimos
          placeat animi ut officia hic ratione officiis consequuntur molestias
          asperiores neque?
        </p>
      </div>
    </motion.div>
  );
};

export default Visi;
