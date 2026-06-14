
"use client"
import React from 'react';
import Image from "next/image"
import logo from "../../public/suncart_logo_v8.png"

import Link from 'next/link';
import { Avatar, LinkRoot } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user
    const router =useRouter()

    const handleSignout = async () => {
        await authClient.signOut();
        router.push('/')
    }

    return (
        <div >
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><Link href="/" className='text-pink-800 font-semibold text-[20px]'>Home</Link></li>
    <li><Link href="/products" className='text-pink-800 font-semibold text-[20px]'>Products</Link></li>
    <li><Link href="/" className='text-pink-800 font-semibold text-[20px]'>My Profile</Link></li>
      </ul>
    </div>
    <Image src={logo} alt="logo" className='h-20 w-38'></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link href="/" className='text-pink-800 font-semibold text-[20px]'>Home</Link></li>
    <li><Link href="/products" className='text-pink-800 font-semibold text-[20px]'>Products</Link></li>
    <li><Link href="/my-profile" className='text-pink-800 font-semibold text-[20px]'>My Profile</Link></li>
     
      
    </ul>
  </div>
   <div className="navbar-end flex gap-4">
    {!user && <div> <Link href='/signin' className="btn bg-pink-400 text-white">Login</Link>
    <Link href='/signup' className="btn bg-pink-600 text-white">Register</Link></div>}

    {user && (
        <div className='flex justify-between gap-[15px]'>
             <Avatar>
        <Avatar.Image alt="image" src={user?.image} referrerPolicy="no-referrer" />
        <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
      </Avatar>
      <button onClick={handleSignout} className='btn bg-pink-600 text-white'>SignOut</button>
        </div>
    )}
  </div>
</div>
        </div>
    );
};

export default Navbar;