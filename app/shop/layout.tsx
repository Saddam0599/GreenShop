"use client"
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout:React.FC<{children:ReactNode}> = ({children}) => {
    const path = usePathname()
  return (
    <>
    <h2 className="max-w-[1200px] m-auto text-sm font-normal leading-[16px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]"><strong className='font-cera-pro text-base font-bold leading-[16px] text-left hover:underline underline-from-font decoration-skip-none'>Home</strong> / Shop{path.includes("shopping-card") ? "/ Shopping Card" : ""}</h2>
    {children}
    </>
  )
}

export default layout