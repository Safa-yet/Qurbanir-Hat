import { syne } from '@/app/layout';
import { Avatar } from '@heroui/react';
import React from 'react';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaCow } from 'react-icons/fa6';
import { GiCow, GiGoat, GiHealingShield, GiLifeTap } from 'react-icons/gi';
import { RiGeminiLine } from 'react-icons/ri';
import { SiSwisscows } from 'react-icons/si';

const TipsSection = () => {
    const qurbaniTips = [
  {
    id: 1,
    icon : <GiHealingShield /> ,
    title: "Choose a Healthy Animal",
    subtitle: "Always select an animal that is active, healthy, and free from any visible diseases or injuries to ensure a proper Qurbani.",
  },
  {
    id: 2,
    icon:<BsCalendar2DateFill/> ,
    title: "Verify Age Requirements",
    subtitle: "Make sure the animal meets the required age criteria according to Islamic guidelines before making your purchase.",
},
{
    id: 3,
    icon:<GiLifeTap /> ,
    title: "Ensure Proper Care Before Qurbani",
    subtitle: "Provide clean food, water, and a safe environment to keep the animal calm and well-maintained until the day of sacrifice.",
  },
]

const topBreeds = [
  {
    id: 1,
    breed: "Brahman",
    available: "120+ available",
    icon: <SiSwisscows />
  },
  {
    id: 2,
    breed: "Desi Local",
    available: "300+ available",
    icon: <FaCow />
  },
  {
    id: 3,
    breed: "Sahiwal",
    available: "80+ available",
    icon: <GiCow />,
  },
  {
    id: 4,
    breed: "Boer Goat",
    available: "150+ available",
    icon: <GiGoat />
  }
]
    return (<>
    
        <div className=' bg-green-950 text-white'>


        <div className='container mx-auto py-16 '>
            <p className='text-amber-400 flex gap-1 font-semibold items-center mb-2'><RiGeminiLine /> Qurbani Guide</p>
            <h1 className={ `text-3xl font-bold ${syne.className}`}>Essential <span className='text-amber-400'>Quarbani Tips</span></h1>
        <div className='h-1 w-30 bg-amber-600 rounded-full mt-2 mb-6 '></div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
                {
                    qurbaniTips.map(tips =>
                        <div key={tips.id} className='p-5 border rounded-2xl space-y-2 shadow-lg border-amber-400/50' >
                            <Avatar className="rounded-lg size-14 text-4xl text-amber-400" >{tips.icon}

      </Avatar>
                            <h1 className='text-xl font-bold'>{tips.title}</h1>
                            <p className='text-gray-300'>{tips.subtitle}</p>
                        </div>
                    )
                }
                

            </div>
        </div>
        </div>
        <div className='container mx-auto my-16'>
            <p className='text-green-600 flex gap-1 font-semibold items-center mb-2'><RiGeminiLine /> Popular Choices</p>
            <h1 className={ `text-3xl font-bold ${syne.className}`}>Top <span className='text-green-600'>Breeds</span> This Season</h1>
        <div className='h-1 w-20 bg-green-600 rounded-full mt-2 mb-6 '></div>

<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-10'>
                {
                    topBreeds.map(breed =>
                        <div key={breed.id} className='py-7 border rounded-2xl space-y-2 shadow-lg border-green-700/50 flex flex-col items-center justify-center' >
                            <Avatar className="rounded-lg size-14 text-4xl text-amber-600" >{breed.icon}

      </Avatar>
                            <h1 className='text-xl font-bold'>{breed.breed}</h1>
                            <p className='text-gray-500'>{breed.available}</p>
                        </div>
                    )
                }
                

            </div>

        </div>
    
    </>
    );
};

export default TipsSection;