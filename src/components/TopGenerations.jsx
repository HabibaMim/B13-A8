import React from 'react';
import photos from '../../public/data.json'
import Photocard from './Photocard';
import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const TopGenerations = () => {
    const topPhotos =photos.slice(0,3)
    return (
        <div className='mx-[15px] sm:mx-0'>
            <div className='flex justify-between'>
            <h1 className='text-[35px] font-bold'>Popular Products</h1>
            <Link href="/products" className='flex items-center gap-[7px]'>View All Products<FaArrowAltCircleRight /></Link>
            </div>
            <div className='flex justify-between mt-[20px] mb-[50px]'>
                {topPhotos.map(photo => <Photocard key={photo.id} photo={photo}></Photocard>)}
                
                </div>
        </div>
        
    );
};

export default TopGenerations;