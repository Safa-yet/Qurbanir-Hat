import React from 'react';
import ImageCard from '../Shared Item/ImageCard';
import { Button } from '@heroui/react';
import Link from 'next/link';

const FeaturedAnimal = async() => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();

    console.log(data);

    return (
        <div className='container mx-auto py-12'>
            <h1 className='text-2xl mb-10'>Featured Animal</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    data.slice(0,6).map(cow=> <ImageCard key={cow.id} cow={cow}></ImageCard>)
                }
            </div>
            <div className='flex items-center justify-center my-8'>

            <Link href={'/animal'}>
            <Button className='mx-auto bg-green-600 rounded-lg'size='lg'>See More</Button>
            </Link>

            </div>
        </div>
    );
};

export default FeaturedAnimal;