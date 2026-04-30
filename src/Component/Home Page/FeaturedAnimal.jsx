import React from 'react';
import ImageCard from '../Shared Item/ImageCard';

const FeaturedAnimal = async() => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();

    console.log(data);

    return (
        <div className='container mx-auto py-12'>
            <h1 className='text-2xl mb-10'>Featured Animal</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    data.map(cow=> <ImageCard key={cow.id} cow={cow}></ImageCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedAnimal;