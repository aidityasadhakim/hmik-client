import { motion } from "framer-motion";
import Link from "next/link";

const ImageDesc2 = ({
  name = "tyasganteng123",
  position = "Moto Hidup",
  image = "/image8.png",
  text = "Terganteng SeHMIK",
  groupImage = "/image7.png",
  title = "Departemen",
  reverse = false,
}) => {
  const h1Variant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };
  return (
    <div className="flex flex-col w-5/6 mx-auto text-center items-center">
      <div className={`text-[#1e40af] text-center p-5 pt-[20px] font-bold`}>
        <Link
          href={`/members/${title
            .replace("Departemen ", "")
            .replace(" ", "-")
            .toLowerCase()}`}
        >
          <motion.h1
            variants={h1Variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold tracking-tight text-[28px] underline underline-offset-[10px] decoration-[#F87F2C] decoration-2"
          >
            {title}
          </motion.h1>
        </Link>
      </div>
      {reverse ? (
        <div className="grid grid-cols-4 gap-[10px]">
          <div className="flex flex-col hidden md:block text-[#1e40af] text-center items-center my-auto">
            <img src={`/img/${groupImage}`} alt="Group Image" />
            <h5 className="font-bold text-[18px] ">Anggota {title}</h5>
          </div>

          <div className="text-[14px] grow md:text-[18px] p-[10px] col-span-3 md:col-span-2 md:pt-[80px]">
            <p>{text}</p>
            <Link href={`/department/${title.toLowerCase().trim()}`}>
              Know Us More!
            </Link>
          </div>

          <div
            id="profilePicture"
            className="flex flex-col text-[#1e40af] text-center items-center my-auto"
          >
            <img src={`/img/${image}`} alt="Profile Image" />
            <h5 className="font-bold text-[18px]">{name}</h5>
            <p className="opacity-50 font-light text-[14px]">{position}</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-[10px]">
          <div
            id="profilePicture"
            className="flex flex-col text-[#1e40af] text-center items-center my-auto"
          >
            <img src={`/img/${image}`} alt="Profile Image" />
            <h5 className="font-bold text-[18px]">{name}</h5>
            <p className="opacity-50 font-light text-[14px]">{position}</p>
          </div>

          <div className="text-[14px] grow md:text-[18px] p-[10px] col-span-3 md:col-span-2 md:pt-[80px]">
            {text}
          </div>

          <div className="flex flex-col hidden md:block text-[#1e40af] text-center items-center my-auto">
            <img src={`/img/${groupImage}`} alt="Group Image" />
            <h5 className="font-bold text-[18px] ">Anggota {title}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDesc2;
