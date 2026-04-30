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
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl mb-10">All Animal</h1>
        <Select className="w-[256px]" placeholder="Select one">
          <Label>Sort By Price</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item
                id="florida"
                textValue="low"
                onClick={() => setSortType("low")}
              >
                Low to High
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="delaware"
                textValue="high"
                onClick={() => setSortType("high")}
              >
                High to Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
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
