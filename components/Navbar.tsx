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
    <div className='fixed w-full h-32 z-[100] bg-white shadow-2xl'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link className='scroll-false' href='/'>
                <Image
                    src={cvic_logo_600}
                    alt='/logo'
                    width='600'
                    unoptimized
                />
            </Link>
        </div>
    </div>

  )
}

export default Navbar