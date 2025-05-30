import React from 'react'
import Formsy from '@/components/Formsy'
import Nav from '@/components/Nav'
import Link from 'next/link'

const page = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex w-screen overflow-hidden'>
      <div className=' flex flex-col justify-center items-center  h-screen bg-gradient-to-tl from-[#054CA8] to-[#010B48] w-full xl:w-1/2 md:absolute md:top-0 md:left-[870px]'>
        <Formsy
          div1={true}
          div2={!true}
          name2='taxId'
          label2='tax id'
          type2='text'
          div3={!true}
          name3='password'
          label3='enter your password'
          type3='password'
          div4={true}
          action='login'
          okaybtn={!true}
        />
        <div className='flex flex-col w-[600px] justify-center gap-y-3 items-center text-center translate-y-[-120px]'>
          <Link
            className='capitalize w-[400px] bg-blue-500 text-white p-5 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'
            href='/taxpayment/register'
          >
            Create New Tax ID
          </Link>
          <div className='w-[300px] flex justify-center items-center'>
            <p className='flex w-[250px] h-1 border-b-2 justify-center items-center'></p>
            <p className='flex w-[70px] justify-center items-center'>OR</p>
            <p className='flex w-[250px] h-1 border-b-2 justify-center items-center'></p>
          </div>
          <Link
            className='capitalize w-[400px] bg-blue-500 text-white p-5 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'
            href='/taxpayment/verifiedTax'
          >
            Verify A Tax Clearance Certificate
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
