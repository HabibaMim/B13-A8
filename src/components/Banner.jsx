import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div>
        <div style={{ backgroundImage: `url('./banner.jpg')` }} className="bg-cover bg-center h-[500px] my-[40px] mx-[15px] sm:mx-0 rounded-lg text-[33px] font-bold text-red-950 lg:text-white flex flex-col justify-end pb-[35px] gap-[20px] items-center">
            <span className='animate__animated animate__bounce animate__infinite'>Hot Deals!</span>
        <div className='flex gap-[15px]'>
            <Link href='/products' className='btn text-[17px] text-white flex justify-center bg-pink-400 '>Explore now</Link>
            <Link href='/products' className='btn text-[17px] text-white flex justify-center bg-pink-600 '>View Pricing</Link>
        </div>
        </div>
        </div>
    );
};

export default Banner;