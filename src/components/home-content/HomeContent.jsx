import { motion } from "framer-motion";
import ImageDescription from "./ImageDescription";
import { visiMisi } from "@/constant/VisiMisi";
import { NamaAnggota } from "@/constant/NamaAnggota";
import slideRight from "@/variants/slideRight";
import slideLeft from "@/variants/slideLeft";

const HomeContent = () => {
  const h1Variant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <div className="w-full bg-[#1e40af] flex flex-col h-full pb-[100px]">
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
        <motion.div
          variants={slideRight(1.5)}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
        >
          <ImageDescription
            name={NamaAnggota.ketuaHimpunan.name}
            position={NamaAnggota.ketuaHimpunan.position}
            image={NamaAnggota.ketuaHimpunan.image}
            text={visiMisi.visi}
            title="Visi"
          />
        </motion.div>
        {/* <Visi /> */}

        {/* Misi */}
        <motion.div
          variants={slideLeft(1.5)}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
        >
          <ImageDescription
            name={NamaAnggota.wakilKetuaHimpunan.name}
            position={NamaAnggota.wakilKetuaHimpunan.position}
            image={NamaAnggota.wakilKetuaHimpunan.image}
            text={visiMisi.misi}
            title="Misi"
            reverse={true}
          />
        </motion.div>
        {/* <Misi /> */}

        {/* BPH */}
        <motion.div
          variants={slideRight(1.5)}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
        >
          <ImageDescription
            name={NamaAnggota.badanPengurusHarian.name}
            position={NamaAnggota.badanPengurusHarian.position}
            image={NamaAnggota.badanPengurusHarian.image}
            text={NamaAnggota.badanPengurusHarian.text}
            title={NamaAnggota.badanPengurusHarian.position}
          />
        </motion.div>
      </div>
    </>
  );
};

export default HomeContent;
