import { Carousel } from "flowbite-react";
import styles from "./carousel.module.css";
import Image from "next/image";
import { imageCover } from "@/constant/ImageUrl";

const HomeCarousel = () => {
  return (
    <div className="h-[488px] md:h-[550px] sm:h-[550px] xl:h-[550px] 2xl:h-[550px] bg-blue-800 relative">
      <Carousel slideInterval={5000}>
        <div className="h-full w-full">
          <Image
            alt="HMIK"
            src={imageCover}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-full w-full">
          <Image
            alt="HMIK"
            src={imageCover}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-full w-full">
          <Image
            alt="HMIK"
            src={imageCover}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      </Carousel>
      <h1
        className={`absolute w-1/2 text-[38px] bottom-[100px] left-[65px] md:bottom-[70px] md:left-[130px] text-white font-bold md:text-[64px] md:w-3/5 ${styles.text}`}
      >
        Himpunan Mahasiswa Ilmu Komputer
      </h1>
    </div>
  );
};

export default HomeCarousel;
