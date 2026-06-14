import React from 'react';
import Image from "next/image"
import { FaStar } from 'react-icons/fa';
import { Chip } from '@heroui/react';
import Link from 'next/link';

const Photocard = ({photo}) => {
    return (
        <div >
            <div key={photo.id}>
                <div>
                    <div className="card bg-base-100 w-96 shadow-sm bg-gradient-to-r from-pink-100 to-pink-300">
  <figure>
    <img  src={photo.image} alt="image" className="w-full aspect-square object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      <span className='text-pink-500 font-bold text-[22px]'>{photo.name}</span>
      <div className="badge text-white bg-pink-600"><FaStar />{photo.rating}</div>
    </h2>
    <p className='text-[15px] font-bold'>Hot deal: <span className='text-[20px]'> ${photo.price}</span> only!</p>
    <div className="card-actions justify-end">
      <Link href={`/products/${photo.id}`}><button className="btn bg-pink-400 outine-none text-white">View Details</button></Link>
      
    </div>
  </div>
</div></div>
                </div>
        </div>
    );
};

export default Photocard;