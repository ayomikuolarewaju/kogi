import Image from 'next/image'
import React from 'react'
import logo from '../../../image/logo.svg'
import { AiOutlineTransaction } from 'react-icons/ai'

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col bg-[url('../image/fbg.svg')] bg-cover bg-no-repeat bg-fixed text-white w-full h-screen justify-center items-center p-10 ">
      <div className='bg-white md:w-[800px] md:h-[400px] w-[400px] h-[300px] shadow-2xl shadow-gray-800 rounded-2xl p-2 flex flex-col justify-center items-center'>
        <Image src={logo} width={100} height={100} alt='logo' />
        <form className='flex flex-col gap-4 md:w-full h-full justify-center items-center'>
          <h3>VERIFY CERTIFICATE</h3>
          <div className='flex flex-col gap-2 w-1/2 justify-center items-start h-[100px]'>
            <label className='text-black text-xs font-normal capitalize'>
              Certificate Number
            </label>
            <div className='flex gap-2 w-full justify-center items-center h-[100px]'>
              <AiOutlineTransaction size={30} color='gray' />
              <input
                type='text'
                name='cert'
                placeholder='Enter Cerrtificate Number (eg. EK/TCC/023456789)'
                className='md:w-[400px] p-5 text-black text-xs font-bold border-b-2 border-gray-300 focus:outline-none focus:border-gray-500'
              />
            </div>
            <div className='flex md:w-full h-[100px] justify-center items-center'>
              <button className='cursor-pointer bg-[#054CA8] text-white md:text-sm font-bold text-xs flex p-5 justify-center items-center rounded-lg md:w-full w-[150px]  h-[50px]'>
                Verify Certificate
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
