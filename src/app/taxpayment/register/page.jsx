import Image from "next/image";
import React from "react";
import { AiOutlineTransaction } from "react-icons/ai";

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex bg-[url('../image/fbg.svg')] bg-cover bg-no-repeat bg-fixed text-white w-full h-screen justify-center items-center p-10 ">
      <div className="bg-white w-[1000px] h-[700px] shadow-2xl shadow-gray-800 rounded-2xl p-2 flex justify-center items-start">
        <div className="flex flex-col w-1/2 h-full text-black justify-start items-start p-5 gap-10">
          <div className="font-sans pt-10 text-[20px] pl-10 capitalize">
            <h1>Create a New Tax Payer ID</h1>
          </div>
          <div className="font-sans flex flex-col gap-y-10 pl-10 capitalize text-[15px]">
            <p>
              To create your Individual Tax Payer ID, provide your
              Identification number and to create your corporate Tax Payer ID,
              provide your CAC number.
            </p>
            <p>
              In order to enforce authorization, your new TaxPayer account will
              be verified using the phone number or email provided.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-full text-black justify-start items-start p-5 gap-10">
          <div className="w-full h-[20px] justisfy-center items-center">
            <h3 className="text-center">Create New Account</h3>
          </div>
          <div className="bg-[#E6F1FF] h-[150px] w-[430px] flex flex-col gap-3 p-3">
            <h5 className="text-sm">Message to Customers:</h5>
            <p className="text-[10px] w-[250px]">
              Corporate taxpayers are required to contact an admin for
              registration pending integration with CAC.
            </p>
            <p className="text-[10px] w-[250px]">
              Please ensure you have your CAC certificate ready when reaching
              out. For assistance, email us at 
              <em className="font-bold text-[15px]">etax.Kirs.net</em>
            </p>
          </div>
          <form className="w-[500px] flex flex-col justisfy-start items-start pt-[120px]">
            <div className="flex flex-col gap-2 w-[500px] justify-center items-start h-[100px]">
              <div className="flex flex-col gap-2 w-[500px] justify-start items-start">
                <label className="text-black text-xs font-normal capitalize">
                  Select Tax Payer Type
                </label>
                <input
                  type="text"
                  name="cert"
                  placeholder="Individual"
                  className="w-[300px] p-5 text-black text-xs font-bold border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex flex-col gap-2 w-[500px] justify-start items-start">
                <label className="text-black text-xs font-normal capitalize">
                  Select Identification System Type
                </label>
                <input
                  type="text"
                  name="cert"
                  placeholder="BVN"
                  className="w-[300px] p-5 text-black text-xs font-bold border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex flex-col gap-2 w-[500px] justify-start items-start">
                <input
                  type="text"
                  name="cert"
                  placeholder="Enter BVN No."
                  className="w-[300px] p-5 text-black text-xs font-bold border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex gap-2 w-[500px] justify-start items-center">
                <label className="text-black text-xs font-normal capitalize">
                  <AiOutlineTransaction size={30} color="black" />
                </label>
                <input
                  type="text"
                  name="cert"
                  placeholder="Enter BVN No."
                  className="w-[300px] p-5 text-black text-xs font-bold border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex justify-center items-center w-[400px]  h-[50px]">
                <button className="cursor-pointer bg-[#054CA8] text-white text-sm font-bold py-2 px-4 flex text-center justify-center items-center rounded-lg w-full h-[50px]">
                  Verify Certificate
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
