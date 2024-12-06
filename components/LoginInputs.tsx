"use client"
import React, { SetStateAction, useState } from 'react'
import Input from './Input'


interface LoginType {
setIsLogin:React.Dispatch<SetStateAction<"login" | "register" | "verifyRegister" | "forgotPassword" |"newPassword">>
}


const LoginInputs:React.FC<LoginType> = ({setIsLogin}) => {

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

  return (
    <>
        <Input name='email' placeholder='almamun_uxui@outlook.com' type='email' inputClass='w-full' />
          <div className="relative">
            <Input
              name="password"
              placeholder="***********"
              type={isVisible ? "text" : "password"}
              inputClass="w-full"
            />
            <span
              onClick={toggleVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {isVisible ? "👁️" : "🙈"}
            </span>
          </div>
          <p onClick={() => setIsLogin("forgotPassword")} className='text-[#46A358] cursor-pointer text-end'>Forgot Password?</p>
    </>
  )
}

export default LoginInputs