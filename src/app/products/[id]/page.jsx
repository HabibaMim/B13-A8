import React from 'react';
import photos from "../../../../public/data.json"
import Link from 'next/link';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

const PhotoDetailsPage = async ({params}) => {
    const {id} = await params;
    const photo =photos.find(p => p.id == id)
    
    return (
        <div className='mx-auto'>
          <div className="mx-auto mt-[40px] mb-[40px] rounded-lg flex items-start bg-base-100 shadow-sm bg-gradient-to-r from-pink-100 to-pink-300">
  <figure className=' m-[40px] '>
    <img  src={photo.image} alt="image" className="rounded-lg aspect-square h-[400px] object-cover" />
  </figure>
  <div className="card-body">
    
      <p className='text-pink-500 font-bold text-[22px]'>{photo.name}</p>
      
      <p>Rating: <span className="badge text-white bg-pink-600"><FaStar />{photo.rating}</span></p>
    
    <p><span className='font-semibold'>Brand: </span>{photo.brand}</p>
    <p className='text-[15px] font-bold'>Hot deal: <span className='text-[20px]'> ${photo.price}</span> only!</p>
    <p>{photo.description}</p>
    <div>Category: <span className='badge text-white bg-pink-400'>{photo.category}</span></div>
    <div className="">
      <div>In stock: <span className='font-bold text-[20px]'> {photo.stock}</span> left</div>
      <div className=" flex gap-3 mt-[30px]">
    <a className="btn bg-pink-400 text-white"><FaShoppingCart /> Add To Cart</a>
    <a className="btn bg-pink-600 text-white">Buy Now</a>
  </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default PhotoDetailsPage;