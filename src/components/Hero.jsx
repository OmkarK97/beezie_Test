import { bg_hero, profile } from '../assets'
import { hero_items } from '../data'

const Hero = () => {
  return (
    <div className='relative h-[556px] w-screen'>
    <div className='w-full mt-[1px]'>
        <img src={bg_hero} alt='bg_hero' className='h-[140px] w-full md:h-[290px] object-cover' />
    </div>
    <div className='absolute top-20 left-12 transform -translate-x-1/4 md:top-1/3 md:left-24 md:translate-x-[-10%]'>
        <img src={profile} alt='profile' className='w-[100px] md:w-56' />
    </div>
    <div className='relative flex justify-end items-center mt-5 md:mt-10 px-5 md:px-14 text-white'>
        <div className='h-[18px] w-[95.94px] md:h-6 md:w-[116px] flex'>
            {hero_items.map((items) => (
                <div key={items} className='w-full justify-between'>
                    <img src={items} alt='items' className='w-6'/>
                </div>
            ))}
        </div>
    </div>
    <div className='text-white flex flex-col h-[50px] w-[342px] md:h-[74px] md:w-[379px] p-8 md:p-20 md:text-xl'>
        <span className='font-montserrat font-semibold'>Jane Doe</span>
        <span className='font-karla font-medium text-sm md:text-xl md:w-[379px] md:h-[26px]'>One Piece & Pokemon TCG Collector!!</span>
    </div>
</div> 

  )
}

export default Hero