import { InfoLomba } from "@/constant/InfoLomba"

const BoxLomba = () => {
    return(
        <div className="my-10 flex justify-center items-center ">
            <div className="flex flex-col md:flex-row bg-[#efefef] p-50 relative w-[350px] h-[625px] md:w-[800px] md:h-[300px] box-content rounded-md drop-shadow-xl">
                <div className="basis-1/2">
                    <img className="object-contain h-full w-full md:object-left" src="/rectangle12.png" alt="" />
                </div>
                <div className="basis-1/2">
                   <h1 className="md:ml-0 ml-3 font-bold text-[30px] md:text-[40px] pt-10 pb-5 text-[#F87F2C]">{InfoLomba.lomba1.judul}</h1>
                   <h3 className="md:ml-0 ml-3 font-bold text-[20px]">{InfoLomba.lomba1.tanggal}</h3>
                   <h3 className="md:ml-0 ml-3 font-bold text-[20px]">{InfoLomba.lomba1.lokasi}</h3>

                   <button className="md:ml-0 ml-3 font-bold bg-[#F87F2C] py-2 px-7 mt-6 rounded-full text-white">Details</button>
                </div>
            </div>
        </div>
        
    )
}

export default BoxLomba