import { Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const ImageCard = ({cow}) => {
    const {id,name,type,breed,price,weight,age,location,description,image,category}= cow
    return (
       <div className="card bg-base-100  shadow-sm">
  <figure className='w-full h-60'>
    <Image
      src={image}
      alt="Shoes" width={500} height={500}  className='object-center w-full'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-between text-xl font-blod  text-green-800 ">
      {name}
      <div className="badge badge-success rounded-2xl text-xs">{category}</div>
    </h2>
    <h3 className='text-lg font-semibold'>Price:${price}</h3>
    <span >{breed}</span>
    <span>Weight : {weight}</span>
    <div className='flex gap-1 items-center '>
      location : <FaLocationDot /> <p>{location}</p>
    </div>
    <p className='line-clamp-2 text-gray-500'>{description}</p>
    <Link href={`/animal/${id}`} >
    <button className='btn btn-warning w-full'>View Details</button>
    </Link>
  </div>
</div>
    );
};

export default ImageCard;