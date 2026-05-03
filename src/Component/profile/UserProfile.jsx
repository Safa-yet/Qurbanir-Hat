"use client";
import UpdateProfile from "@/Component/Shared Item/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { RiInformation2Fill, RiInformationFill } from "react-icons/ri";

const UserProfile = () => {
  const { data: session, isPending } = authClient.useSession();

  const userProfile = session?.user;
  return (
    <div className="container  mx-auto flex flex-col justify-center items-center py-12">
      <h1 className="text-3xl font-bold  uppercase">User Profile</h1>
      <div className="h-1.5 w-16 bg-green-500 mb-6 mx-auto mt-2 rounded-full"></div>

      {isPending ? (
        <h1>Loading</h1>
      ) : (
        <div className="max-w-4xl w-full  bg-white rounded-2xl shadow-2xl border border-green-200 p-6 grid md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center text-center border-r border-gray-200 pr-4">
            <div className="relative w-40 h-40 rounded-full outline-2 outline-green-500  overflow-hidden ">
              <Image
                src={userProfile?.image || '/placeholder-image.jpg'}
                alt="profile"
                fill
                refferpolicy="no-reffer"
                className="object-cover"
              />
            </div>

            <span className="mt-2 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
              Logged In
            </span>

            <h2 className="mt-3 text-xl font-bold text-gray-800">
              {userProfile?.name}
            </h2>

            <p className="text-gray-500 text-sm">{userProfile?.email}</p>

            <UpdateProfile></UpdateProfile>
          </div>

          <div className="pl-2">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-1"><RiInformation2Fill /> Personal Information</h3>

            <div className="grid grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Full Name
                </label>
                <p className="text-gray-700 font-semibold border-b border-gray-50 pb-2">
                  {userProfile?.name}
                </p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                 Email Address
                </label>
                <p className="text-gray-700 font-semibold border-b border-gray-50 pb-2">
                  {userProfile?.email}
                </p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Phone
                </label>
                <p className="text-gray-700 font-semibold border-b border-gray-50 pb-2">
                  +88 0171223 131231
                </p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Location
                </label>
                <p className="text-gray-700 font-semibold border-b border-gray-50 pb-2">
                  Dhaka, Bangladesh
                </p>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
