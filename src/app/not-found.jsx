import Image from 'next/image';
import React from 'react';
import NotFoundImage from '../image/canvas.png'
import { Button } from '@heroui/react';
import Link from 'next/link';
import NotFoundLottie from '@/Component/Shared Item/NotFoundLottie';
export const metadata = {
  title: "404-QurbanirHat",
};
const NotFoundPage = () => {
    return (
        <div className='lg:h-screen h-[60vh] flex items-center justify-center flex-col'>
            <NotFoundLottie></NotFoundLottie>
            <h1 className='text-2xl my-3'>Page Not Available</h1>
            <Link href="/">
            <Button className='bg-green-500'>Go Back</Button>
            
            </Link>
            
        </div>
    );
};

export default NotFoundPage;