import Image from 'next/image';
import React from 'react';
import NotFoundImage from '../image/canvas.png'
import { Button } from '@heroui/react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className='h-screen flex items-center justify-center flex-col'>
            <Image src={NotFoundImage} alt='Not Found image' width={500} height={500}></Image>
            <h1 className='text-2xl my-3'>Page Not Available</h1>
            <Link href="/">
            <Button className='bg-green-500'>Go Back</Button>
            
            </Link>
            
        </div>
    );
};

export default NotFoundPage;