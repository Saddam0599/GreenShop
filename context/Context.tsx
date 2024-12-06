"use client"

import { createContext, ReactNode, SetStateAction, useState } from "react";


export interface ContextType {
    category:string | null,
    setCategory:React.Dispatch<SetStateAction<string | null>>,
    tags:string | null,
    setTags:React.Dispatch<SetStateAction<string | null>>,
    size:string | null,
    setSize:React.Dispatch<SetStateAction<string | null>>
    minPrice:number | string | null,
    setMinPrice:React.Dispatch<SetStateAction<number | string | null>>
    maxPrice:number | string | null,
    setMaxPrice:React.Dispatch<SetStateAction<number | string | null>>
    token:string | null | any
    setToken:React.Dispatch<SetStateAction<any>>
}

export const Context = createContext<ContextType>({
    category:null,
    setCategory:() => "",
    tags:null,
    setTags:() => "",
    size:null,
    setSize:() => "",
    minPrice:null,
    setMinPrice:() => "",
    maxPrice:null,
    setMaxPrice:() => "",
    token:null,
    setToken:() => {},
})

export const ContextProvider:React.FC<{children:ReactNode}> = ({children}) => {
    let data: string | null = null;
    if (typeof window !== "undefined") {
        data = localStorage.getItem("user");
    }
    const [category, setCategory] = useState<string | null>(null)
    const [tags, setTags] = useState<string | null>(null)
    const [size, setSize] = useState<string | null>(null)
    const [maxPrice, setMaxPrice] = useState<number | string | null>(null)
    const [minPrice, setMinPrice] = useState<number | string | null>(null)
    const [token, setToken] = useState<any>(data ? JSON.parse(data) : null)

    localStorage.setItem("user", JSON.stringify(token))
    return <Context.Provider value={{category, setCategory, tags, setTags, size, setSize, minPrice, setMinPrice, maxPrice, setMaxPrice, token, setToken}}>{children}</Context.Provider>
}