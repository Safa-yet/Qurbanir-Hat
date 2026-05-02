"use client";
import ImageCard from "@/Component/Shared Item/ImageCard";
import React, { useEffect, useState } from "react";
import { Label, ListBox, Select } from "@heroui/react";

const AllAnimalPage = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const sortedData = [...data].sort((a, b) => {
    if (sortType === "low") {
      return a.price - b.price;
    }
    if (sortType === "high") {
      return b.price - a.price;
    }
  });

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl">All Animal</h1>
        <div >
          <p className="mb-1" >Sort By :</p>


    <select defaultValue="Price" className="select ">
  <option disabled={true}>Price</option>
  <option onClick={()=>setSortType("high")}>Low to High</option>
  <option  onClick={()=>setSortType("low")}>High to Low</option>

</select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedData.map((cow) => (
          <ImageCard key={cow.id} cow={cow}></ImageCard>
        ))}
      </div>
    </div>
  );
};

export default AllAnimalPage;

                // onClick={() => setSortType("high")}
                // onClick={() => setSortType("low")}