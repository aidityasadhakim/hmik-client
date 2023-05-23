"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const { department } = useParams();
  return (
    <div className="bg-[#1e40af] text-white">
      <h1>Halaman department {department}</h1>
    </div>
  );
};

export default Page;
