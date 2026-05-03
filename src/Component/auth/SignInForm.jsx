"use client";
import Image from 'next/image';
import React from 'react';
import formBg from '@/image/97_pattern_colour.jpg';

import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import SocialLink from '@/Component/Shared Item/SocialLink';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
    const router = useRouter();
    
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email, // required
            password: userData.password, // required
            rememberMe: true,
            callbackURL: '/',
        }, {
            onSuccess: () => {
                router.push('/');
                toast.success("Login Successful");
            }
        });

        console.log("Sign in ", data, error);
        if(error){
            toast.error(error.message);
        }
    };

    return (
        <div className='relative'>
            <div className='relative lg:h-screen h-[80vh] md:h-[70vh]'>
                <Image src={formBg} alt='Login Page Background' fill className='object-cover'></Image>
            </div>

            <div className='absolute top-0 flex items-center justify-center w-full lg:h-screen h-[80vh] md:h-[70vh] inset-0 bg-black/50'>
                <div className='px-5'>
                    <h1 className='text-2xl text-center mb-10 text-white'>Login to Your Qurbani Account</h1>
                    <Form
                        className="flex lg:w-96  flex-col gap-4 bg-white/50 lg:p-10 p-5 rounded-2xl "
                        render={(props) => <form {...props} data-custom="foo" />}
                        onSubmit={onSubmit}
                    >
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
                            Sign In
                        </Button>

                      <div className="divider">OR</div>
                        <div>
                            <div>
                                <p className="text-sm text-center">
                                    Dont have an account? 
                                    <Link href="/auth/signup" className="text-blue-600 hover:underline">
                                        Register
                                    </Link>
                                </p>

                                <p className='text-sm text-center'>Select any option below to continue.</p>
                                <SocialLink></SocialLink>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
