import ImageCard from '@/Component/Shared Item/ImageCard';
import React from 'react';
import {Label, ListBox, Select} from "@heroui/react";

const AllAnimalPage = async() => {
const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return (
         <div className='container mx-auto py-12'>
            <div className='flex justify-between items-center '>
                    <h1 className='text-2xl mb-10'>All Animal</h1>
                     <Select className="w-[256px]" placeholder="Select one">
      <Label>Sort By</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="florida" textValue="Florida">
            Florida
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="delaware" textValue="Delaware">
            Delaware
            <ListBox.ItemIndicator />
          </ListBox.Item>
        
        </ListBox>
      </Select.Popover>
    </Select>

            </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            data.map(cow=> <ImageCard key={cow.id} cow={cow}></ImageCard>)
                        }
                    </div>
                </div>
    );
};

export default AllAnimalPage;