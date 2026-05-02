

import Image from 'next/image';
import React from 'react';
import bg from '../../../../public/img/photorealistic-view-cow-grazing-nature-outdoors2.jpg'
import { Card, CloseButton} from "@heroui/react";
import { MdOutlineMonitorWeight } from 'react-icons/md';
import { GiCow, GiDna2, GiGoat, GiWeightScale } from 'react-icons/gi';
import { FcCalendar } from 'react-icons/fc';
import { FaLocationDot } from 'react-icons/fa6';
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEnvelope } from 'react-icons/bi';
import BookForm from '@/Component/Shared Item/BookForm';
import ApiCalling from '@/app/ApiCalling';

const AnimalDetails = async({params}) => {
  const {id} = await params;
const{data} =await ApiCalling();
console.log("details", data);


const findCow = data.find((cow)=> cow.id == id);
    const {name,type,breed,price,weight,age,location,description,image,category}= findCow;



  console.log("iddd",findCow);

    return (
      <div className='container mx-auto py-8'>
        <div>
        <h1 className='text-3xl font-bold'>Animal Details</h1>
        <div className='h-1 w-20 bg-green-600 rounded-full mt-2 mb-4'></div>

        </div>

<div className="card card-side  flex-col flex md:flex-row justify-between items-center h-[80vh] rounded-2xl">
  <figure className='lg:w-1/2 aspect-square rounded-2xl'>
    <Image
      src={image}
      alt="Movie" width={500} height={500} className='w-full object-contain '/>
  </figure>
  <div className="card-body lg:w-1/2 ">
    <h2 className="card-title text-4xl font-bold ">{name}</h2>
    <p className='flex  items-center gap-1 text-lg text-gray-500'> 
       <FaLocationDot className='text-red-500' /> {location}

      </p> 
    
    <div>
      <h1 className=" text-2xl  text-green-600  font-bold">${price}</h1>
      
    </div>
    <div className='grid grid-cols-2 gap-5'>
      <div className='border rounded-xl flex p-3 gap-3 border-gray-200'>
        <GiWeightScale  className='text-5xl text-green-500'/>
        
        <div>

        <h1 >Weight:</h1>
        <p  className='font-semibold text-lg'>{weight}kg</p>
        </div>
      </div>
      <div className='border rounded-xl flex p-3 gap-3 border-gray-200'>
        <FcCalendar  className='text-5xl'/>
        
        <div>

        <h1 >Age</h1>
        <p  className='font-semibold text-lg'>{age}Year</p>
        </div>
      </div>
      <div className='border rounded-xl flex p-3 gap-3 border-gray-200'>
        <GiDna2   className='text-5xl text-purple-500'/>
        
        <div>

        <h1 >Breed</h1>
        <p  className='font-semibold text-lg'>{breed}</p>
        </div>
      </div>
      <div className='border rounded-xl flex p-3 gap-3 border-gray-200'>
        {
          type == "Cow"? 
          <GiCow    className='text-5xl text-orange-500'/>:
          <GiGoat  className='text-5xl text-orange-500' />
        }
          
        
        
        <div>

        <h1 >Type</h1>
        <p  className='font-semibold text-lg'>{type}</p>
        </div>
      </div>


    </div>

    
    <p>{description}</p>
    <div className="card-actions justify-end">
     <BookForm></BookForm>
    </div>
  </div>
</div>    
      </div>
);
};

export default AnimalDetails;