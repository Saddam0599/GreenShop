import React from 'react'
import Input from './Input'

const NewPassword = () => {
  return (
    <>
    <Input name='password' placeholder='Enter new password' type='password' inputClass='w-full' />
    <Input name='otp' placeholder='Enter code' type='text' inputClass='w-full' />
    </>
  )
}

export default NewPassword;