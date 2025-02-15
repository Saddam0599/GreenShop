"use client"
import ProductCard from '@/components/ProductCard'
import { Context } from '@/context/Context'
import { useAxios } from '@/hook/useAxios'
import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'

export interface ProductType {
    product_id?:string,
    basket?:boolean,
    cost:number,
    count?:number,
    discount?:number,
    image_url:string[],
    liked?:boolean,
    product_description?:string,
    product_name:string,
    short_description?:string,
    size?:string[],
    tags?:string[]
}


const Products = () => {
    const {category, tags, minPrice, maxPrice,token}:any = useContext(Context)


    const {data:products = [], isLoading}:any = useQuery({
        queryKey:['products', category, tags, minPrice, maxPrice],
        queryFn:() => useAxios().get("/products", {
            headers: token ? {"Authorization" : `Bearer ${token.access_token}`} : {},
            params:{
                page:1, 
                limit:100,
                category,
                size:null,
                tags,
                max_price:maxPrice,
                min_price:minPrice,
            }
        }).then(res => res.data.products ? res.data.products : []),
        enabled:true
    })
    
  return (
    <div style={{display: "flex", flexWrap:"wrap", justifyContent:'space-between'}}>
        {isLoading ? "Loading..." : products.map((item:ProductType) => <ProductCard key={item.product_id} item={item}/>)}
    </div>
  )
}

export default Products;




