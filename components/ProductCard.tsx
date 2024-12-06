
import { Context, ContextType } from '@/context/Context';
import { useAxios } from '@/hook/useAxios';
import { BasketCount, LikeIcon } from '@/public/images/Icon';
import { ProductType } from '@/service/Products';
import { QueryClient, useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const ProductCard: React.FC<{ item: ProductType }> = ({ item }) => {
  const imageUrl = item.image_url && item.image_url.length > 0 ? item.image_url[0] : '/default-image.jpg';

  const { token }: ContextType = useContext(Context);
  const router = useRouter();

  const queryClient = new QueryClient();
  async function likeClick() {
    if (!token) {
      alert("Ro'yxatdan o'tish kerak");
    } else {
      const response = await useAxios().post(`/like/${item.product_id}`, {}, {
        headers: { "Authorization": `Bearer ${token.access_token}` }
      });
      return response.data;
    }
  }

  async function basketClick() {
    if (!token) {
      alert("Ro'yxatdan o'tish kerak");
    } else {
      const response = await useAxios().post(`/basket/`, { productId: item.product_id }, {
        headers: { "Authorization": `Bearer ${token.access_token}` }
      });
      return response.data;
    }
  }

  async function searchClick() {
    if (!token) {
      alert("Ro'yxatdan o'tish kerak");
    } else {
      alert("Search funksiyasi ishladi!");
    }
  }

  const likeMutation = useMutation({
    mutationFn: () => likeClick(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] })
  });

  const basketMutation = useMutation({
    mutationFn: () => basketClick(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] })
  });

  return (
    <div className="w-[250px] space-y-2">
      <div className="relative group">
        <Image
          onClick={() => router.push(`/shop/${item.product_id}`)}
          src={imageUrl}
          priority
          className="w-full h-[250px] object-cover"
          alt={item.product_name}
          width={250}
          height={250}
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center space-x-5">
          <button onClick={() => likeMutation.mutate()} className={item.liked ? "text-red-500" : ""}>
            <LikeIcon />
          </button>
          <button onClick={() => basketMutation.mutate()} className={item.basket ? "text-green-500" : ""}>
            <BasketCount />
          </button>
          <button onClick={() => searchClick()} className="text-blue-500">
            <Image
              className="w-5 h-5"
              priority
              src={"/Poisk.svg"}
              alt="Search"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <h2 className="text-[#3D3D3D] font-[Cera Pro] text-[16px] font-normal leading-[16px] text-left from-font decoration-none">
        {item.product_name}
      </h2>
      <strong className="text-[#46A358] font-[Cera Pro] text-[18px] font-bold leading-[16px] text-left hover:underline from-font decoration-none">
        $<strong>{item.cost}</strong>.00
      </strong>
    </div>
  );
};

export default ProductCard;
 

