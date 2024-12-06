"use client";
import React, { useState } from "react";
import { useAxios } from "@/hook/useAxios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";



interface Product {
  product_id: string;
  product_name: string;
  product_description: string;
  price: string | number;
  image_url: string[];
}

const Page: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  const { data: SingleData = {} } = useQuery({
    queryKey: ["single-products"],
    queryFn: () =>
      useAxios()
        .get(`/products?page=1&limit=1000`)
        .then((res) => {
          setData(res.data?.products);
          console.log(res.data);
        }),
  });
  console.log(SingleData);

  return (
    <div className="max-w-[1200px] m-auto ">
      <h2 className="text-[#46A358] mt-[43px] mb-[12px] font-semibold">
        Related Products
      </h2>
      <hr className="mt-[25px] border-b-2 border-[#F5F5F5] mb-[44px]" />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data?.map((product) => (
          <SwiperSlide key={product.product_id}>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-sm text-gray-600 uppercase font-bold">
                {product.product_name}
              </h3>
              <p className="mt-2 text-gray-700">
                {product.product_description}
              </p>
              <span className="text-gray-500 text-sm font-semibold">
                ${product.price}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  );
};

export default Page;










// "use client";
// // import Image from "next/image";
// import Products from "@/service/Products";




// const ShopPage: React.FC = () => {



//   return (
//     <div className="max-w-[1200px] m-auto border-2 border-red-500">
//       <h2 className="text-[#46A358] mt-[43px] mb-[12px] font-semibold">
//         Related Products
//       </h2>
//       <hr className="mt-[25px] border-b-2 border-[#F5F5F5] mb-[44px]" />
//       <Products/>
//     </div>
//   );
// };

// export default ShopPage;















// "use client";
// import Products from "@/service/Products";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import ProductCard from "@/components/ProductCard"; 
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { useState } from "react";

// const Page: React.FC = () => {
//   const [products, setProducts] = useState([]);

//   return (
//     <div className="max-w-[1200px] m-auto border-2 border-red-500">
//       <h2 className="text-[#46A358] mt-[43px] mb-[12px] font-semibold">
//         Related Products
//       </h2>
//       <hr className="mt-[25px] border-b-2 border-[#F5F5F5] mb-[44px]" />

//       <Products onProductsFetched={(fetchedProducts) => setProducts(fetchedProducts)} />

//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={50}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.product_id}>
//             <ProductCard item={product} /> 
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Page;






