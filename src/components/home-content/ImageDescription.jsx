const ImageDescription = ({
  name = "tyasganteng123",
  position = "Moto Hidup",
  image = "/image8.png",
  text = "Terganteng SeHMIK",
  title = "Jangan lupa ngoding",
  reverse = false,
}) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } gap-[20px] w-5/6 md:gap-[40px] md:w-1/2 mx-auto text-center items-center mt-[80px]`}
    >
      <div
        id="profilePicture"
        className="flex flex-col flex-none text-white text-center items-center h-[100px] w-[100px] md:h-[150px] md:w-[150px]"
      >
        <img src={image} alt="Kahim" className="h-full w-full" />
        <h5 className="font-bold text-[18px]">{name}</h5>
        <p className="opacity-50 font-light text-[14px]">{position}</p>
      </div>

      <div
        id="visi-description"
        className="flex flex-col flex-auto items-center border rounded-lg border-2 p-[10px]"
      >
        <h5 className="text-[#F87F2C] font-bold text-[24px] p-[10px]">
          {title}
        </h5>
        <p className="text-white text-[14px] md:text-[18px] pb-[10px] font-[300]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ImageDescription;
