import React from 'react';
import ImageCard from '../Shared Item/ImageCard';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { TbTopologyStar3 } from 'react-icons/tb';
import { syne } from '@/app/layout';

const FeaturedAnimal = async() => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();

    console.log(data);

    return (
        <div className='container mx-auto py-12' id='featured-animal'>
            <p className='text-green-600 flex gap-1 font-semibold items-center mb-2'> <TbTopologyStar3 />Top Picks</p>
            <h1 className={`${syne.className} text-3xl `}>Featured <span className='text-green-600'>Animal</span></h1>
        <div className='h-1 w-20 bg-green-600 rounded-full mt-2 mb-6 '></div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    data.slice(0,6).map(cow=> <ImageCard key={cow.id} cow={cow}></ImageCard>)
                }
            </div>
            <div className='flex items-center justify-center my-8'>

            
            <Button className='mx-auto bg-green-600 rounded-lg'size='lg'>See More</Button>
         

            </div>
        </div>
    );
};

export default FeaturedAnimal;