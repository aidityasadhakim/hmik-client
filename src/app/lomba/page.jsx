"use client";
import { Carousel } from "flowbite-react";
import LombaContent from "@/components/lomba/LombaContent";
import BoxLomba from "@/components/lomba/BoxLomba";
import { InfoLomba } from "@/constant/InfoLomba";
import { FiCalendar } from "react-icons/fi";
import { IconContext } from "react-icons";
import Gradient from "@/components/materials/Gradient";

const page = () => {
  return (
    <div>
      <div className="h-[720px] md:h-[800px] sm:h-[800px] xl:h-[800px] 2xl:h-[800px] bg-blue-800 relative">
          <Carousel slideInterval={5000}>
            <img
              className="object-none"
              src="/image9.png"
              alt="HMIK"
            />
            <img
              className="object-none"
              src="/image9.png"
              alt="HMIK"
            />
          </Carousel>
          <h1
            className="text-[30px] absolute w-1/2 md:text-[65px] bottom-[300px] left-[100px] text-white font-bold drop-shadow-lg "
          >
            Judul Lomba Terbaru<br></br>
            yang Akan Datang
          </h1>
          <button className="absolute bottom-[250px] left-[100px] font-bold bg-[#F87F2C] py-3 px-10 md:px-20 mt-6 rounded-full text-white drop-shadow-lg">Details</button>
          <IconContext.Provider value = {{ color: "white"}}>
            <FiCalendar className="absolute bottom-[269px] left-[250px] md:left-[350px]" />
          </IconContext.Provider>
          <h3 className="absolute bottom-[265px] left-[250px] md:left-[350px] ml-5 text-white font-bold">{InfoLomba.lomba1.tanggal}</h3>
        </div>
      <LombaContent />
      <BoxLomba />
      <BoxLomba />
      <BoxLomba />
    </div>
  );
};

export default page;
