import { motion } from "framer-motion";

const LombaContent = () => {

    const h1Variant = {
        visible: { opacity: 1, transition: { duration: 2 } },
        hidden: { opacity: 0 },
      };

    return(
        <div className={`text-[#004289] text-center p-5 pt-[120px]`}>
          <motion.h1
            variants={h1Variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold tracking-tight text-[32px] underline underline-offset-[10px] decoration-[#F87F2C] decoration-2"
          >
            Lomba
          </motion.h1>
        </div>
    )
}

export default LombaContent;