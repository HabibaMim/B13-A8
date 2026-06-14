import Image from 'next/image';
import React from 'react';
import image1 from "../../public/logo_bluum.png"
import image2 from "../../public/logo_a.png"
import image3 from "../../public/logo_b.png"
import image5 from "../../public/logo_c.png"
import image4 from "../../public/logo_d.png"

const Topbrands = () => {
    return (
        <div className=' p-[25px] mb-[50px] mt-[50px]'>
            <p className='text-[35px] font-bold pb-[15px]'>Top Brands</p>
            <div className='flex justify-between items-center '>
            <Image className='bg-pink-300 rounded-lg ' src={image1} h={200} width={200} alt="b1"></Image>
            <Image className='bg-pink-300 rounded-lg ' src={image3} h={200} width={200} alt="b1"></Image>
            <Image className='bg-pink-300 rounded-lg ' src={image2} h={200} width={200} alt="b1"></Image>
            <Image className='bg-pink-300 rounded-lg ' src={image4} h={200} width={200} alt="b1"></Image>
            <Image className='bg-pink-300 rounded-lg ' src={image5} h={200} width={200} alt="b1"></Image>
            </div>
        </div>
    );
};

export default Topbrands;