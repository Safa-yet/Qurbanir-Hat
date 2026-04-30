"use client";
import Image from 'next/image';
import React from 'react';
import formBg from '../../../image/97_pattern_colour.jpg'


import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from 'next/link';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

import SocialLink from '@/Component/Shared Item/SocialLink';



const SignUpPage = () => {
  const router = useRouter();
  const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    
const { data, error } = await authClient.signUp.email({
    name: userData.name, // required
    email: userData.email, // required
    password: userData.password, // required
    image: userData.image,

},
{
  onSuccess: ()=>{
    router.push("/");
  }

});


console.log("SignUp   :" ,data,error);
  };


    return (
            <div className='relative'>
                  <div className='h-screen'>
                  <Image src={formBg} alt='Login Page Background' fill className='object-cover'></Image>
      
                  </div>
      
      <div className='absolute top-0 flex items-center justify-center w-full h-screen inset-0 bg-black/50'>
      <div className='px-5'>
        <div className='mb-10 text-center'>
<h1 className='text-2xl   text-white'>Create your account</h1>
<p className='text-gray-300'>Join thousands buying Qurbani animals with trust</p>

        </div>

        <div className='bg-white/50 lg:p-10 p-5 rounded-2xl '>
         <Form
            className="flex lg:w-96  flex-col gap-4 "
            render={(props) => <form {...props} data-custom="foo" />}
            onSubmit={onSubmit}
          >
            <TextField
              isRequired
              name="name"
              type="text"
            >
              <Label>Name</Label>
            <Input placeholder="Qurbanir Hat" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
      
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="image"
              type='url'
             
            >
              <Label>Profile URL</Label>
              <Input placeholder="Put your photo url" />
              <FieldError />
            </TextField>
      
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
      
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <FieldError />
            </TextField>
      
              <Button type="submit" className={'w-full bg-amber-400 rounded-xl'}>
                Submit
              </Button>
      
          </Form>
            <div>
              <div>
      
      <p className='text-sm text-center'>Select any option below to continue.</p>
      <SocialLink></SocialLink>
      
              </div>
      
            </div>


        </div>
      
      </div>
      
      </div>
              </div>
    );
};

export default SignUpPage;