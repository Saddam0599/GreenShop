"use client"
import { Context } from '@/context/Context'
import { useAxios } from '@/hook/useAxios'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css"
import SuperSaleBanner from "../public/icons/SuperSaleBanner.svg";
import Image from "next/image";

interface CategoryType {
  category_id: string
  category_name: string
  product_count?: number
}

const Categories = () => {
  const [rangeValue, setRangeValue] = useState({ min: 22, max: 500 }) 
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null) 
  const { setCategory, setMinPrice, setMaxPrice, setSize } = useContext(Context)

  const { data: categories = [] }: any = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return [
        { category_id: "1", category_name: "House Plants", product_count: 33 },
        { category_id: "2", category_name: "Potter Plants", product_count: 12 },
        { category_id: "3", category_name: "Seeds", product_count: 65 },
        { category_id: "4", category_name: "Small Plants", product_count: 39 },
        { category_id: "5", category_name: "Big Plants", product_count: 23 },
        { category_id: "6", category_name: "Succulents", product_count: 17 },
        { category_id: "7", category_name: "Terrariums", product_count: 19 },
        { category_id: "8", category_name: "Gardening", product_count: 13 },
        { category_id: "9", category_name: "Accessories", product_count: 18 },
      ]
    },
  })

  const sizes = [
    { name: "Small", count: 198 },
    { name: "Medium", count: 86 },
    { name: "Large", count: 78 },
  ]

  function handleChangeRange(value: { min: number; max: number } | any) {
    setRangeValue(value)
    setMinPrice(value.min)
    setMaxPrice(value.max)
  }

  function handleCategoryClick(categoryName: string) {
    setSelectedCategory(categoryName)
    setCategory(categoryName)
  }

  function handleSizeClick(size: string) {
    setSelectedSize(size)
    setSize(size) 
  }

  function handleFilterClick() {
    console.log("Filter pressed:", {
      selectedCategory,
      selectedSize,
      minPrice: rangeValue.min,
      maxPrice: rangeValue.max,
    })
  }

  return (
    <aside>
        <div className="w-[310px] space-y-5 mx-auto p-4 bg-[#FAFAFA]">
        <div key="house-plants" className="flex justify-between items-center">
            <p
            onClick={() => handleCategoryClick("House Plants")}
            className={`text-[18px] font-semibold cursor-pointer ${
                selectedCategory === "House Plants"
                ? 'text-[#46A358]'
                : 'text-[#3D3D3D]'
            }`}
            >
            House Plants
            </p>
            <span className="text-sm text-gray-500">(33)</span>
        </div>

        {categories
            .filter((item: CategoryType) => item.category_name !== "House Plants")
            .map((item: CategoryType) => (
            <div key={item.category_id} className="flex justify-between items-center">
                <p
                onClick={() => handleCategoryClick(item.category_name)}
                className={`text-[18px] font-semibold cursor-pointer ${
                    selectedCategory === item.category_name
                    ? 'text-[#46A358]'
                    : 'text-[#3D3D3D]'
                }`}
                >
                {item.category_name}
                </p>
                <span className="text-sm text-gray-500">
                ({item.product_count})
                </span>
            </div>
            ))}

        <div>
            <p className="text-[16px] font-bold text-gray-800 mb-2">Price Range</p>
            <InputRange
            step={1}
            value={rangeValue}
            maxValue={1000}
            minValue={1}
            onChange={handleChangeRange}
            className="w-[200px]"
            />
            <div className="flex justify-between text-gray-600 text-sm mt-2 mb-[16px]">
            <span>${rangeValue.min}</span>
            <span>${rangeValue.max}</span>
            </div>
            <button
            onClick={handleFilterClick}
            className="w-[90px] h-[35px] bg-[#46A358] text-white text-sm py-1 px-2 rounded-md hover:bg-[#389e48] block"
            >
            Filter
            </button>
        </div>

        <div>
            <p className="text-[16px] font-bold text-gray-800 mb-2">Size</p>
            {sizes.map((size, index) => (
            <div key={index} className="flex justify-between items-center">
                <p
                onClick={() => handleSizeClick(size.name)}
                className={`ml-2 text-[12px] font-semibold cursor-pointer ${
                    selectedSize === size.name
                    ? 'text-[#46A358]'
                    : 'text-[#3D3D3D]'
                }`}
                >
                {size.name}
                </p>
                <span className="text-sm text-gray-500">({size.count})</span>
            </div>
            ))}
        </div>

        </div>
        <Image width={700} height={470} style={{marginLeft: '-35px'}} src={SuperSaleBanner} alt="SuperSaleBanner" className="mt-[24px]" />
    </aside>
  )
}

export default Categories;
