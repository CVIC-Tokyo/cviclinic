import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import cvic_logo_600 from '../public/logos/cvic_logo_600.png'
import { AiFillCalendar, AiFillPushpin, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';

interface SideBarProps {
    nav: boolean;
    setNav: (arg:boolean) => void;
    handleNav: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ nav, setNav, handleNav }) => {
  return (
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
        <div className={ nav
        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-5 ease-in duration-500 bg-white'
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
            <div className=''>
                <div className='flex w-full h-[100px] items-center justify-between'>
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
        <div className='py-4 flex-col'>
                <ul className='uppercase'>
                    <div
                        className="mb-2 text-sm"
                    >
                        Language toggle
                    </div>
                    <Link className='hover:scale-200 ease-in duration-300'
                        onClick={() => setNav(false)} href='/'>
                        <li className='py-4 text-sm'>Home</li>
                    </Link>
                    <Link onClick={() => setNav(false)} href='/'>
                        <li className='py-4 text-sm'>Cardiac Imaging</li>
                    </Link>
                    <Link onClick={() => setNav(false)} href='/'>
                        <li className='py-4 text-sm'>Inspection Flow</li>
                    </Link>
                    <Link onClick={() => setNav(false)} href='/'>
                        <li className='py-4 text-sm'>Dock Lists</li>
                    </Link>
                    <Link onClick={() => setNav(false)} href='/'>
                        <li className='py-4 text-sm'>Fees</li>
                    </Link>
                    <Link onClick={() => setNav(false)} href='/'>
                        <li className='py-4 text-sm'>Access</li>
                    </Link>
                    <Link onClick={() => setNav(false)} href='/'>
                        <li className='py-4 text-sm'>More</li>
                    </Link>
                </ul>
                <div className='pt-10'>
                    <p className='uppercase'>
                        Let&apos;s Connect!
                    </p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <div
                            className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                            <AiFillPushpin />
                        </div>
                        <div
                            className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                            <AiFillCalendar />
                        </div>
                        <Link
                            href='/#contact'
                            className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'
                            onClick={() => setNav(false)}   
                        >
                            <AiOutlineMail />
                        </Link>
                    </div>
                </div>
                <div className='border-b border-grey-300 my-4'>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar