import Image from 'next/image';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const ImageCard = ({cow}) => {
    const {name,type,breed,price,weight,age,location,description,image,category}= cow
    return (
       <div className="card bg-base-100  shadow-sm">
  <figure className='w-full h-60'>
    <Image
      src={image}
      alt="Shoes" width={500} height={500}  className='object-center w-full'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-between">
      {name}
      <div className="badge badge-success rounded-2xl text-xs">{category}</div>
    </h2>
    <div></div>
    <span>{breed}</span>
    <span>Weight : {weight}</span>
    <div className='flex gap-1 items-center '>
      location : <FaLocationDot /> <p>{location}</p>
    </div>
    <p>{description}</p>
    <button className='btn btn-warning'>View Details</button>
  </div>
</div>
    );
};

export default ImageCard;