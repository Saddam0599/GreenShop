"use client"

import React, { useState } from 'react'

interface InputType {
    inputClass:string
    name:string
    type:"text" | "password" | "email"
    placeholder:string
}

const Input:React.FC<InputType> = ({inputClass,name,type,placeholder}) => {
    const [focus, setFocus] = useState<boolean>(false)
  return (
    <input required onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} className={`${inputClass} ${focus ? "border-[#46A358]" : "border-[#EAEAEA]"} py-[10px] text-[14px] outline-none pl-[14px] rounded-[5px] border-[1px] border-[#EAEAEA]`} name={name} type={type} placeholder={placeholder}/>
  )
}

export default Input