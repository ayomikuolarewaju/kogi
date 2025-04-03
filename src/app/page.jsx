import React from 'react'
import Formsy from '../components/Formsy'

export const metadata ={
  title : "kogi tax home",
  description : "pay your tax"
}

const page = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64flex w-screen  overflow-hidden'>
      <div className=' flex justify-center items-center  h-screen bg-gradient-to-tl from-[#054CA8] to-[#010B48] bg-contain w-full md:w-1/2 md:absolute md:top-0 md:left-[870px]'>
        <Formsy
          div1={!true}
          name1='email'
          label1='enter your email'
          type1='email'
          div2={!true}
          name2='password'
          label2='enter your password'
          type2='password'
          div3={true}
          div4={true}
          action='login'
          okaybtn={!true}
        />
      </div>
    </div>
  )
}

export default page
