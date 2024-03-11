import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import cvic_logo_600 from '../public/logos/cvic_logo_600.png'
import { AiOutlineClose } from 'react-icons/ai';

interface SideBarProps {
    nav: boolean;
    handleNav: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ nav, handleNav }) => {
  return (
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
        <div className={ nav
        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-white'
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
    }>
        <div>
                <div className='flex w-full items-center justify-between'>
                    <Link
                        className='scroll-false'
                        onClick={handleNav}
                        href='/'>
                        <Image
                            src={cvic_logo_600}
                            height='35'
                            alt='/logo'
                        />
                    </Link>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer'>
                        <AiOutlineClose/>
                    </div>
                </div>
                <div className='border-b border-grey-300 my-4'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar