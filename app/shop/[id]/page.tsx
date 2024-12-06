"use client";
import { useAxios } from "@/hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Facebook from "@/public/icons/Facebook.svg";
import Twitter from "@/public/icons/Twitter.svg";
import Linkedin from "@/public/icons/Linkedin.svg";
import Union from "@/public/icons/Union.svg";
import ShopPage from "../page";
import OrderConfirmationModal from "@/components/OrderConfirmationModal";

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeButton, setActiveButton] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: SingleData = {} } = useQuery({
    queryKey: ["single-products"],
    queryFn: () =>
      useAxios()
        .get(`/product/${id}`)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        }),
  });

  const handleQuantityChange = (type: string) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
      setActiveButton("decrease");
    }
    if (type === "increase" && quantity < 12) {
      setQuantity((prev) => prev + 1);
      setActiveButton("increase");
    }
    setTimeout(() => setActiveButton(""), 200);
  };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const mockOrderDetails = {
    orderNumber: "19586687",
    date: "15 Sep, 2021",
    total: 2699.00,
    paymentMethod: "Cash on delivery",
    products: [
      {
        id: "1",
        name: "Barberton Daisy",
        sku: "1995751877966",
        quantity: 2,
        price: 119.00,
        image: "/placeholder.svg",
      },
      {
        id: "2",
        name: "Blushing Bromeliad",
        sku: "1995751875065",
        quantity: 6,
        price: 139.00,
        image: "/placeholder.svg",
      },
      {
        id: "3",
        name: "Aluminum Plant",
        sku: "1995751877786",
        quantity: 9,
        price: 179.00,
        image: "/placeholder.svg",
      },
    ],
    shipping: 16.00,
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 bg-[#FAFAFA]">
          <Image
            src={data?.image_url?.[0] || "/default-image.jpg"}
            alt={data?.product_name || "Product Image"}
            className="w-full h-auto object-cover rounded-md"
            width={400}
            height={400}
          />

          {data?.image_url?.length > 1 && (
            <div className="flex gap-4">
              {data.image_url.map((img: string, index: number) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md border"
                  width={100}
                  height={100}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{data?.product_name}</h1>

          <p className="text-xl text-green-600 font-semibold mb-4">${data?.cost}.00</p>

          <p className="text-gray-600 mb-4">{data?.short_description}</p>

          {data?.size && (
            <div className="mb-4">
              <span className="font-medium text-gray-700">Size:</span>
              <div className="flex gap-2 mt-2">
                {data.size.map((size: string, index: number) => (
                  <button
                    key={index}
                    className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border px-2 py-1 rounded">
              <button
                className={`px-2 ${
                  activeButton === "decrease" ? "bg-green-500 text-white" : ""
                }`}
                onClick={() => handleQuantityChange("decrease")}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className={`px-2 ${
                  activeButton === "increase" ? "bg-green-500 text-white" : ""
                }`}
                onClick={() => handleQuantityChange("increase")}
              >
                +
              </button>
            </div>
            <button 
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <button className="px-6 py-2 border rounded text-green-600 hover:bg-green-100">
              Add to Cart
            </button>
          </div>

          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">SKU:</span> {data?.product_id || "N/A"}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Category:</span> {data?.category_id || "N/A"}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Tags:</span>{" "}
              {data?.tags?.join(", ") || "No tags available"}
            </p>
            <ul className="flex gap-[10px] mt-[20px] mb-[22px]">
              Share this product:
              <li className="w-[30px] h-[30px] flex items-center justify-center ">
                <Image width={8} height={16} src={Facebook} alt="Facebook" />
              </li>
              <li className="w-[30px] h-[30px] flex items-center justify-center ">
                <Image width={16} height={13} src={Twitter} alt="Twitter" />
              </li>
              <li className="w-[30px] h-[30px] flex items-center justify-center ">
                <Image width={16} height={15.33} src={Linkedin} alt="LinkedIn" />
              </li>
              <li className="w-[30px] h-[30px] flex items-center justify-center ">
                <Image width={18.67} height={13.98} src={Union} alt="YouTube" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Product Description</h2>
        <p className="text-gray-600">{data?.product_description}</p>
      </div>
      <ShopPage />

      <OrderConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        orderDetails={mockOrderDetails}
      />
    </div>
  );
};

export default SinglePage;
