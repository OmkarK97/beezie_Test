import React, { useEffect, useState } from 'react'
import { content_nav_items, nft_items } from '../data'
import { arrow, search, settings } from '../assets';

const Content = () => {
    const [navItems, setNavItems] = useState(content_nav_items);

    const updateNavItems = () => {
        if (window.innerWidth < 768) {
            setNavItems(['Owned', 'Offers sent', 'Offers received']);
        } else {
            setNavItems(content_nav_items);
        }
    };

    useEffect(() => {
        updateNavItems();
        window.addEventListener('resize', updateNavItems);
        return () => window.removeEventListener('resize', updateNavItems);
    }, []);
    return (
        <div className='h-screen w-screen bg-customDark mt-36 px-5 md:mt-8 md:px-20 text-white'>
            <div className='h-[69px] w-[400px] md:h-[90px] md:w-full justify-between flex gap-2 border-b-[1px] border-[#302E2E]'>
                <div className='h-[37px] w-[402px] md:h-[58px] md:w-[605px] flex'>
                    {navItems.map((item, index) => (
                        <button
                            key={item}
                            className={`${index === 0 ? 'bg-[#302E2E]' : ''} font-karla font-medium text-lg md:text-xl h-[37px] md:h-[58px] w-full rounded-md md:rounded-2xl`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button className='bg-[#F5A600] h-9 w-[133px] items-center rounded-[7px] py-2 px-8 font-montserrat text-customDark font-bold hidden md:block'>
                    Transfer
                </button>
            </div>
            <div className='hidden md:flex w-full h-screen gap-8'>
                <div className='w-[274px] h-[304px] pt-4 pr-0 pb-4 pl-4 mt-8 border-2 border-[#302E2E] rounded-xl'>
                    <div className='flex justify-center gap-2 items-center'>
                        <img src={settings} alt='settings' className='w-6' />
                        <span className='font-karla font-bold text-xl'>Filters</span>
                    </div>
                    <div className='mt-4'>
                        <div className='flex w-64 h-10 justify-between items-center px-2'>
                            <span className='font-karla font-bold text-xl'>Category</span>
                            <img src={arrow} alt='arrow' className='w-3 h-2 ' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <span className='h-9 w-64 p-2 gap-2 font-karla font-medium text-lg text-[#F5A600]'>Pokemon</span>
                            <span className='h-9 w-64 p-2 gap-2 font-karla font-medium text-lg'>One Piece</span>
                            <span className='h-9 w-64 p-2 gap-2 font-karla font-medium text-lg'>Marvel</span>
                            <span className='h-9 w-64 p-2 gap-2 font-karla font-medium text-lg'>Comics</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center w-[1036px] px-5 gap-3 h-11 border-2 border-[#302E2E] mt-8 rounded-lg'>
                        <img src={search} alt='search' className='w-5 flex items-center' />
                        <span className='text-[#9C9C9C] font-karla font-bold text-base' >Search by item name, serial number, grader</span>
                    </div>
                    <div className='w-[1036px] h-screen mt-6 grid grid-cols-4'>
                        {nft_items.map((item) => (
                            <div key={item.id} className='h-[328px] w-[235px] border-2 border-[#302E2E] mb-6 rounded-[20px]'>
                                <div>
                                    <img src={item.img} alt='nft_img' className='h-[235px] w-[235px] rounded-[20px] object-' />
                                </div>
                                <div className='flex flex-col gap-2 px-4 mt-2'>
                                    <span className='font-karla font-bold text-sm w-[203px] h-11 overflow-hidden text-ellipsis line-clamp-2'>
                                        {item.title}
                                    </span>
                                    <span className='text-[#F5A600] h-5 w-full font-karla font-medium text-center'>{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='md:hidden flex flex-col w-full h-screen gap-8'>
                <div>
                    <div className='flex justify-between mt-6 gap-2 items-center w-[400px] h-10'>
                        <div className='flex justify-center items-center w-14 bg-[#302E2E] rounded-md h-10'>
                            <img src={settings} alt='settings' className='border-2 border-[#302E2E]' />
                        </div>
                        <button className='bg-[#F5A600] h-9 w-[133px] items-center rounded-[7px] py-2 px-8 font-montserrat text-customDark font-bold md:hidden'>
                            Transfer
                        </button>
                    </div>
                </div>
                <div className='w-[400px] h-screen mt-6 mx-10 grid grid-cols-1'>
                    {nft_items.map((item) => (
                        <div key={item.id} className='h-[400px] w-[308px] border-2 border-[#302E2E] mb-6 rounded-[10px]'>
                            <div>
                                <img src={item.img} alt='nft_img' className='h-[300px] w-[308px] rounded-[10px]' />
                            </div>
                            <div className='flex flex-col h-[61px] my-4 gap-2 px-4 w-[308px] '>
                                <span className='font-karla font-bold text-sm w-[276px] h-11 overflow-hidden text-ellipsis line-clamp-2'>
                                    {item.title}
                                </span>
                                <span className='text-[#F5A600] h-3 w-[276px] font-karla font-medium '>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Content