'use client'
import React, { useCallback, useState } from 'react'
import { TbTax } from 'react-icons/tb'
import { MdCorporateFare } from 'react-icons/md'
import { MdOutlinePersonalInjury } from 'react-icons/md'
import { FaCashRegister } from 'react-icons/fa6'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

const Nav = () => {

  const path = usePathname()
 

  const Menus = [
    {
      name: 'Taxpayer',
      des: 'Login as an individual or corporate taxpayer',
      icon: <TbTax />,
      isClicked: true,
      link: '/'
    },
    {
      name: 'Corporate Admin',
      des: 'Manage your company’s profie',
      icon: <MdCorporateFare />,
      isClicked: 'false',
      link: '/corpAdmin'
    },
    {
      name: 'Consultant',
      des: 'Login as a consultant',
      icon: <MdOutlinePersonalInjury />,
      isClicked: 'false',
      link: '/consultant'
    },
    {
      name: 'KIRS Admin',
      des: 'Login as an administrator',
      icon: <FaCashRegister />,
      isClicked: 'false',
      link: '/kirsAdmin'
    }
  ]



  return (
    <div>
      {Menus.map((m, index) => (
        <div key={index} >
          <Link
            href={m.link}
            className={
              path === m.link
                ? 'flex bg-[#054CA8] text-white p-4 rounded-lg mb-4 cursor-pointer w-[300px] h-[100px] justify-center items-center hover:bg-[#054CA5] hover:text-white transition duration-300 ease-in-out'
                : 'flex bg-[#E6F1FF] text-black p-4 rounded-lg mb-4 cursor-pointer w-[300px] h-[100px] justify-center items-center hover:bg-[#054CA5] hover:text-white transition duration-300 ease-in-out'
            }
          >
            <div className='  text-2xl'>{m.icon}</div>
            <div className='flex flex-col items-center gap-2 p-4 text-md'>
              <div className=' text-lg font-bold'>{m.name}</div>
              <div className=' text-sm'>{m.des}</div>
            </div>
            <div>
              <input type='radio' value={m.isClicked} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Nav
