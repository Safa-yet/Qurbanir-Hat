"use client"
import UpdateProfile from "@/Component/Shared Item/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
      const { data: session, isPending } = authClient.useSession();
    
      const userProfile = session?.user;
  return (

      <div className="container  mx-auto flex flex-col justify-center items-center py-12">
        <h1 className="text-2xl font-bold mb-6">User Profile</h1>

        {
            isPending? <h1>Loading</h1> :  
      <div className="max-w-2xl md:w-5xl  bg-white rounded-2xl shadow-lg border border-green-200 p-6 grid md:grid-cols-2 gap-6 items-center">


        <div className="flex flex-col items-center text-center border-r border-gray-200 pr-4">


          <div className="relative w-40 h-40 rounded-full outline-2 outline-green-500  overflow-hidden ">
            <Image
              src={userProfile.image}
              alt="profile"
              fill
              refferpolicy='no-reffer'
              className="object-cover"
            />
          </div>


          <span className="mt-2 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
            Logged In
          </span>

        
          <h2 className="mt-3 text-xl font-bold text-gray-800">
            {userProfile.name}
          </h2>

          <p className="text-gray-500 text-sm">
            {userProfile.email}
          </p>

           <UpdateProfile ></UpdateProfile>

         


        </div>


        <div className="pl-2">

          <h3 className="text-lg font-semibold mb-3">Personal Information</h3>

          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Name :</span> {userProfile.name}</p>
            <p><span className="font-medium">Email:</span> {userProfile.email}</p>
            <p><span className="font-medium">Phone:</span> +880 1712-345678</p>
            <p><span className="font-medium">Address:</span> Dhaka,Bangladesh</p>
          </div>

        </div>

      </div>
        }
      
    </div>
  );
};

export default ProfilePage;
