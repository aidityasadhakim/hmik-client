import { redirect } from "next/navigation";
import Head from "next/head";

export const metadata = {
  title: "Blocg",
};

const page = () => {
  // redirect("/");
  return <div>Hello</div>;
};

export default page;
