"use client"
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
     const userData = authClient.useSession()
        const user = userData.data?.user

    return (
        <div className='my-[40px]'>
            <p className='font-semibold flex justify-center text-[30px] mb-[15px]'>My Profile</p>
            <Card className='max-w-95 bg-pink-200 mx-auto flex flex-col items-center'>
                <Avatar className='h-30 w-30 rounded-full'>
                        <Avatar.Image alt="image" src={user?.image} referrerPolicy="no-referrer" />
                        <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                      </Avatar>
                      <h2 className='font-bold text-[26px] text-pink-400'>{user?.name}</h2>
                      <p className='text-muted'>{user?.email}</p>
                      <UpdateUserModal></UpdateUserModal>
            </Card>
        </div>
    );
};

export default ProfilePage;