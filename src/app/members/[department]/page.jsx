// Photos from https://citizenofnowhe.re/lines-of-the-city

"use client";

import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  return (
    <div className="bg-[#1e40af] text-white">
      <h1>Halaman department {params.department}</h1>
    </div>
  );
};

export default page;
