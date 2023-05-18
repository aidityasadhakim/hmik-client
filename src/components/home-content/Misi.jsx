import slideLeft from "@/variants/slideLeft";
import { motion } from "framer-motion";

const Misi = () => {
  return (
    <motion.div
      variants={slideLeft(1)}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true }}
      className="flex flex-row-reverse gap-[20px] w-5/6 md:gap-[40px] md:w-1/2 mx-auto mt-[50px] text-center md:text-start"
    >
      <div
        id="profilePicture"
        className="flex flex-col text-white items-center h-[210px] w-[440px]"
      >
        <img src="/image8.png" alt="Kahim" className="h-full w-full" />
        <h5 className="font-bold text-[18px]">Bryan Ganteng</h5>
        <p className="opacity-50 font-light text-sm text-[14px]">
          Kepala Daerah
        </p>
      </div>

      <div id="visi-description" className="">
        <div className="flex flex-col items-center border rounded-lg border-2 p-[10px]">
          <h5 className="text-[#F87F2C] font-bold p-[10px]">Misi</h5>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            quod odio non eius iure voluptatibus odit pariatur quae dignissimos
            placeat animi ut officia hic ratione officiis consequuntur molestias
            asperiores neque?
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Misi;
