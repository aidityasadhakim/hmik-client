import styles from "./Home.module.css";
import Visi from "./Visi";

const HomeContent = () => {
  return (
    <>
      <div className="w-full bg-blue-800 flex flex-col h-[1000px]">
        <div className={`text-white text-center p-5 pt-[40px]}`}>
          <h1 className="font-bold tracking-tight text-[32px] underline underline-offset-[10px] decoration-[#F87F2C] decoration-2">
            Kabinet Bersatu Maju
          </h1>
        </div>

        {/* Visi */}
        <Visi />

        {/* Misi */}
        <div className="flex flex-row-reverse gap-[20px] w-5/6 md:gap-[40px] md:w-1/2 mx-auto mt-[50px]">
          <div
            id="profilePicture"
            className="flex flex-col text-white items-center h-full w-full"
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, quod odio non eius iure voluptatibus odit pariatur
                quae dignissimos placeat animi ut officia hic ratione officiis
                consequuntur molestias asperiores neque?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
