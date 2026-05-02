import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const ImageCard = ({ cow }) => {
  const {
    id,
    name,
    type,
    breed,
    price,
    weight,
    age,
    location,
    description,
    image,
    category,
  } = cow;
  return (
    <div className="card bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group overflow-hidden">
      <figure className="w-full h-64 overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="badge badge-success py-3 px-4 text-white font-semibold shadow-lg border-none">
            {category}
          </span>
        </div>
      </figure>

      <div className="card-body p-2">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
              {name}
            </h2>
            <p className="text-sm text-gray-500 font-medium">{breed}</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-green-600">${price}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 my-3">
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg text-sm font-medium">
            <span className="text-gray-400">Weight:</span> {weight}
          </div>
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg text-sm font-medium">
            <FaLocationDot className="text-red-500" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        <p className="line-clamp-2 text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="card-actions mt-auto">
          <Link href={`/animal/${id}`} className="w-full">
            <button className="btn btn-warning border-none bg-gradient-to-r from-yellow-400 to-orange-400  text-white w-full font-bold shadow-md transform active:scale-95 transition-all">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
