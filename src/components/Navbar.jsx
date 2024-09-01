import { hamburger, logo, mLogo } from '../assets/index'
import React from 'react'
import { nav_items } from '../data'

const Navbar = () => {
    return (
        <div className='h-[70px] border-b-[1px] border-[#525252] md:border-none md:h-32 w-screen flex justify-between items-center px-5 md:px-10'>
            <div className='hidden md:block md:w-36'>
                <img src={logo} alt='logo' />
            </div>
            <div className='w-28 md:hidden'>
                <img src={mLogo} alt='logo' />
            </div>
            <div className='text-white flex justify-evenly items-center md:gap-10 md:w-[811px] h-14'>
                <div className='hidden md:flex justify-between w-[70%] font-karla'>
                    {nav_items.map((item, index) => (
                        <button
                            key={item}
                            className={index === 0 ? 'text-[#F5A600]' : ''}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className='hidden md:block'>
                    <button className='bg-[#F5A600] text-customDark text-lg w-28 h-14 font-bold font-montserrat rounded-xl'>
                        Log in
                    </button>
                </div>
                <div className='flex justify-end items-center w-11 h-6 md:hidden'>
                    <img src={hamburger} alt="hamburger" />
                </div>
            </div>
        </div>
    )
}

export default Navbar