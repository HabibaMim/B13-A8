import Photocard from '@/components/Photocard';
import React from 'react';
import photos from "../../../public/data.json"

const AllPhotosPage = () => {
    return (
        <div>
            <h1 className='font-bold text-[30px] mt-[40px]'>All Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px] mb-[40px]'>
                {photos.map(photo => <Photocard key={photo.id} photo={photo}></Photocard>)}
            </div>
        </div>
    );
};

export default AllPhotosPage;