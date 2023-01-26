import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'


const Sidebar = ({children}) => {

    const icons =[
        {id:1, icon: <RxDashboard/>, href: '/'},
        {id:2, icon: <RxPerson/>, href: '/customers'},
        {id:3, icon: <HiOutlineShoppingBag/>, href: '/orders'},
        {id:4, icon: <FiSettings/>, href: '/'},
    ];

  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='bg-cyan-600 text-white p-3 rounded inline-block'>
                        <RxSketchLogo />
                    </div>
                </Link>
                <span className='border-b-[2px] border-gray-100 w-full p-2'></span>
                {icons.map(({id, icon, href}) => (

                <Link key={id} href={href}>
                    <div className='bg-gray-100 hover:bg-gray-200 my-4 p-3 rounded inline-block'>
                       {icon}
                    </div>
                </Link>
                ))}
            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar