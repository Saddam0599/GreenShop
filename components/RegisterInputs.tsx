"use client"
import React, { useState } from 'react'
import Input from './Input';

const RegisterInputs = () => {

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

  return (
    <>
    <Input name='username' placeholder='Username' type='text' inputClass='w-full' />
    <Input name='email' placeholder='Enter your email address' type='email' inputClass='w-full' />
          <div className="relative">
            <Input
              name="password"
              placeholder="Password"
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
    <Input name='confirmPassword' placeholder='Confirm Password' type='password' inputClass='w-full' />
    </>
  )
}

export default RegisterInputs