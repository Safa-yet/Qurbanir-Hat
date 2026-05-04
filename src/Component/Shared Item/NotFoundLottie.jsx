"use client";


import Lottie from 'lottie-react';
import React from 'react';
import lottieImg from '../../../public/404 error not found.json'
const NotFoundLottie = () => {
    return (
        <div className='max-w-[500px]'>
            <Lottie animationData={lottieImg} loop></Lottie>
        </div>
    );
};

export default NotFoundLottie;