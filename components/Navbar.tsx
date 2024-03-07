import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cvic_logo_600 from '../public/logos/cvic_logo_600.webp'

interface NavBarProps {
    showShadow: boolean,
    setShowShadow: (arg: boolean) => void;
}

const Navbar: React.FC<NavBarProps> = ({ showShadow, setShowShadow}) => {

  return (
    <div className={showShadow ? "fixed top-0 left-0 right-0 z-[100] bg-white shadow" : "fixed top-0 left-0 right-0 z-[100] bg-white"}>
        <div className="max-w-[1240px] mx-auto flex justify-between items-center p-2 2xl:px-16">
            <Link className='scroll-false' href='/'>
                <Image
                    src={cvic_logo_600}
                    alt='/logo'
                    width='600'
                    unoptimized
                />
            </Link>
            <div>language toggle</div>
        </div>
        <div className='max-w-[1240px] mx-auto flex justify-between items-center p-2 2xl:px-16"'>
            <div className='w-full h-full p-2 grid grid-cols-7'>
                <div className='p-2 bg-white text-md tracking-wide uppercase'>Home</div>
                <div className='p-2 bg-white text-md tracking-wide uppercase'>Cardiac Imaging</div>
                <div className='p-2 bg-white text-md tracking-wide uppercase'>Inspection Flow</div>
                <div className='p-2 bg-white text-md tracking-wide uppercase'>Dock List</div>
                <div className='p-2 bg-white text-md tracking-wide uppercase'>Fees</div>
                <div className='p-2 bg-white text-md tracking-wide uppercase'>Access</div>
                <div className='p-2 bg-white text-md tracking-wide uppercase'>More</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar