'use client'

import React, { useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cvic_logo_600 from '../public/logos/cvic_logo_600.png'
import { AiOutlineMenu } from 'react-icons/ai'
import SideBar from './SideBar'

interface NavBarProps {
}

const Navbar: React.FC<NavBarProps> = () => {
  const [nav, setNav] = useState(false);
  const [showShadow, setShowShadow] = useState<boolean>(false);

  useEffect(() => {
      const handleShadow = () => {
        if (typeof window !== 'undefined') {
          if (window.scrollY >= 90) {
            setShowShadow(true);
          } else {
            setShowShadow(false);
          }
        }
      };
  
      window.addEventListener('scroll', handleShadow);
  
      return () => {
        window.removeEventListener('scroll', handleShadow);
      };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className={showShadow ? "fixed top-0 left-0 right-0 z-[100] bg-white shadow-lg" : "fixed top-0 left-0 right-0 z-[100] bg-white"}>
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-2 2xl:px-16">
        <Link className='scroll-false' href='/'>
          <Image
              src={cvic_logo_600}
              alt='/logo'
              width='600'
              // height={'auto'}
              unoptimized
          />
        </Link>
      <div>language toggle</div>
      </div>
      <div className='max-w-[1240px] mx-auto hidden md:flex justify-between items-center p-2 2xl:px-16"'>
        <div className='w-full h-full p-2 grid grid-cols-7'>
          <Link
            href='/'
            className='p-2 bg-white text-xs md:text-base lg:text-lg  flex items-center justify-center tracking-wide uppercase hover:bg-gray-50 cursor-pointer'>
              Home
          </Link>
          <Link
            href='/'
            className='p-2 bg-white text-[10px] md:text-base lg:text-lg  flex items-center justify-center tracking-wide uppercase hover:bg-gray-50 cursor-pointer'>
              Cardiac Imaging
          </Link>
          <Link
            href=''
            className='p-2 bg-white text-[8px] md:text-base lg:text-lg  flex items-center justify-center tracking-wide uppercase hover:bg-gray-50 cursor-pointer'>
              Inspection Flow
          </Link>
          <Link
            href=''
            className='p-2 bg-white text-[10px] md:text-base lg:text-lg  flex items-center justify-center tracking-wide uppercase hover:bg-gray-50 cursor-pointer'>
              Dock List
          </Link>
          <Link
            href=''
            className='p-2 bg-white text-xs md:text-base lg:text-lg  flex items-center justify-center tracking-wide uppercase hover:bg-gray-50 cursor-pointer'>
              Fees
          </Link>
          <Link
            href=''
            className='p-2 bg-white text-xs md:text-base lg:text-lg  flex items-center justify-center tracking-wide uppercase hover:bg-gray-50 cursor-pointer'>
              Access
          </Link>
          <Link
            href=''
            className='p-2 bg-white text-xs md:text-base lg:text-lg  flex items-center justify-center tracking-wide uppercase hover:bg-gray-50 cursor-pointer'>
              More
          </Link>
        </div>
      </div>
      <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={40}/>
      </div>
      <SideBar nav={ nav} setNav={ setNav } handleNav={ handleNav }/>
    </div>
  )
}

export default Navbar