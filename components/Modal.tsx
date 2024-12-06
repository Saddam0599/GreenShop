"use client"
import { CloseIcon } from '@/public/images/Icon'
import React, { ReactNode, SetStateAction} from 'react'

interface ModalType {
    children:ReactNode
    openModal:boolean
    setOpenModal:React.Dispatch<SetStateAction<boolean>>
    modalStyle?:string
}
const Modal:React.FC<ModalType> = ({children, setOpenModal, openModal,modalStyle}) => {
  return (
    <div onClick={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => (e.target as HTMLDivElement).id == "wrapper" ? setOpenModal(false) : ""} id='wrapper' className={`fixed flex items-center justify-center duration-300 inset-0 z-50 bg-[#000]/30 ${openModal != true && "scale-0"}`}>
        <div className={`${modalStyle} bg-white w-[578px] pt-[62px] relative pb-[50px]`}>
        <button className='absolute top-[17px] right-[14px]' onClick={() => setOpenModal(false)}><CloseIcon/></button>
        {children}
        </div>  
    </div>
  )
}

export default Modal;