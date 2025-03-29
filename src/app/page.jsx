import React from "react";
import Formsy from "../components/Formsy";
import Nav from "@/components/Nav";

const page = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="hidden md:flex bg-[url('../image/fbg.svg')] bg-contain bg-no-repeat bg-fixed text-white w-1/2 h-screen justify-center items-center p-10 flex-1">
        <Nav />
      </div>
      <div className=" flex justify-start items-start md:justify-center md:items-center  h-screen bg-gradient-to-tl from-[#054CA8] to-[#010B48] bg-contain w-full md:w-1/2">
        <Formsy
          div1={!true}
          name1="email"
          label1="enter your email"
          type1="email"
          div2={!true}
          name2="password"
          label2="enter your password"
          type2="password"
          div3={true}
          div4={true}
          action="login"
          okaybtn={!true}
        />
      </div>
    </div>
  );
};

export default page;
