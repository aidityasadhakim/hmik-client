import ImageDesc2 from "./ImageDesc2";
import { Department } from "@/constant/Department";
import { motion } from "framer-motion";
import { slideUp } from "@/variants/variants";

const HomeSection2 = () => {
  return (
    <div className="w-full bg-white flex flex-col h-full mb-[100px]">
      {/* Internal */}
      <motion.div
        variants={slideUp(2)}
        initial="offScreen"
        whileInView={`onScreen`}
        viewport={{ once: true }}
      >
        <ImageDesc2
          name={Department.internal.name}
          position={Department.internal.position}
          image={Department.internal.image}
          groupImage={Department.internal.groupImage}
          text={Department.internal.text}
          title={Department.internal.title}
          departmentId={1}
        />
      </motion.div>

      {/* Eksternal */}
      <motion.div
        variants={slideUp(2)}
        initial="offScreen"
        whileInView={`onScreen`}
        viewport={{ once: true }}
      >
        <ImageDesc2
          name={Department.eksternal.name}
          position={Department.eksternal.position}
          image={Department.eksternal.image}
          groupImage={Department.eksternal.groupImage}
          text={Department.eksternal.text}
          title={Department.eksternal.title}
          reverse={true}
          departmentId={2}
        />
      </motion.div>

      {/* Pendidikan IT */}
      <motion.div
        variants={slideUp(2)}
        initial="offScreen"
        whileInView={`onScreen`}
        viewport={{ once: true }}
      >
        <ImageDesc2
          name={Department.pendidikanIt.name}
          position={Department.pendidikanIt.position}
          image={Department.pendidikanIt.image}
          groupImage={Department.pendidikanIt.groupImage}
          text={Department.pendidikanIt.text}
          title={Department.pendidikanIt.title}
          reverse={false}
          departmentId={3}
        />
      </motion.div>

      {/* Publikasi Dokumentasi */}
      <motion.div
        variants={slideUp(2)}
        initial="offScreen"
        whileInView={`onScreen`}
        viewport={{ once: true }}
      >
        <ImageDesc2
          name={Department.pubdok.name}
          position={Department.pubdok.position}
          image={Department.pubdok.image}
          groupImage={Department.pubdok.groupImage}
          text={Department.pubdok.text}
          title={Department.pubdok.title}
          reverse={true}
          departmentId={4}
        />
      </motion.div>
    </div>
  );
};

export default HomeSection2;
