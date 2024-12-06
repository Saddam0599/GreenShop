"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useState } from 'react'
import Button from './Button'
import { LoginIcon } from '@/public/images/Icon'
import Modal from './Modal'
import LoginInputs from './LoginInputs'
import RegisterInputs from './RegisterInputs'
import { useAxios } from '@/hook/useAxios'
import VerifyRegister from './VerifyRegister'
import ForgotPassword from './ForgotPassword'
import NewPassword from './NewPassword'
import { Context, ContextType } from '@/context/Context'
import { QueryClient, useQuery } from '@tanstack/react-query'

const Header = () => {
  const  path = usePathname()
    const queryClient = new QueryClient()
    const {setToken, token}:ContextType = useContext(Context)
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<"login" | "register" | "verifyRegister" | "forgotPassword" | "newPassword">("login")
    const [registerVerifyValue, setRegisterVerifyValue] = useState<string>("")
    const [registerEmail, setRegisterEmail] = useState<string>("")


    function handleSubmitLogin(e:React.MouseEvent<HTMLFormElement>){
      e.preventDefault()
      if(isLogin == "login"){
        const data = {
          usernameoremail:(e.target as HTMLFormElement).email.value,
          password:(e.target as HTMLFormElement).password.value
        }
        useAxios().post('/login', data).then(res => {
          
          setToken(res.data)
          setLoginModal(false)
          queryClient.invalidateQueries({queryKey:['products']})
        })
      }
      else if(isLogin == "register"){
        setRegisterEmail((e.target as HTMLFormElement).email.value)
        const data = {
          email:(e.target as HTMLFormElement).email.value,
          firstName:(e.target as HTMLFormElement).username.value,
          lastName:(e.target as HTMLFormElement).username.value,
          password:(e.target as HTMLFormElement).password.value
        }
        useAxios().post('/register', data).then(res => {
          setIsLogin("verifyRegister")  
        })
      }
      else if (isLogin == "verifyRegister"){
        const data = {
          email:registerEmail,
          code:registerVerifyValue
        }
        useAxios().post('/users/verify',{},{
          params:data
        }).then(res => {
          setIsLogin("login")
        })    
      }
      else if (isLogin == "forgotPassword"){
        setRegisterEmail((e.target as HTMLFormElement).email.value)
        useAxios().post(`/forgot/${(e.target as HTMLFormElement).email.value}`,{}).then(res => {
          setIsLogin("newPassword")
        })    
      }
      else if (isLogin == "newPassword"){
        const data = {
          email: registerEmail,
          new_password:(e.target as HTMLFormElement).newPassword.value,
          otp:(e.target as HTMLFormElement).otp.value
        }
        useAxios().put('/reset-password', data).then(res => {
          setIsLogin('login')
        })
      }
    }

  return (
    <header className=' max-w-[1200px] max-h-[53px] mx-auto flex items-center justify-between mt-[25px] pb-[25px] border-b-2 border-[#F5F5F5] mb-[44px]' >
        <Image style={{width:"150px", height:"34.3px"}} priority src={"/Logo.svg"} alt='Site Logo' width={150} height={34} />
        <nav className='flex items-center gap-[50px]'>
            <Link className={` h-12 mb-[-28px] font-semibold text-[16px] font-sans-serif leading-[20.11px] ${path == '/' ? "text-[#46A358] border-y-2 border-t-0 border-[#46A358]" : ""} `} href={"/"} >Home</Link>
            <Link className={`h-12 mb-[-28px] font-semibold text-[16px] font-sans-serif leading-[20.11px] ${path.includes("shop") ? "text-[#46A358] border-y-2 border-t-0 border-[#46A358]" : "" } `}  href={"/shop"}>Shop</Link>
            <Link className={`h-12 mb-[-28px] font-semibold text-[16px] font-sans-serif leading-[20.11px] ${path == '/plant-care' ? "text-[#46A358] border-y-2 border-t-0 border-[#46A358]" : ""}`} href={"/plant-care"}>Plant Care</Link>
            <Link className={`h-12 mb-[-28px] font-semibold text-[16px] font-sans-serif leading-[20.11px] ${path == '/blogs' ? "text-[#46A358] border-y-2 border-t-0 border-[#46A358]" : ""}`} href={"/blogs"}>Blogs</Link>
        </nav>
        <div className='relative flex items-center justify-between gap-[30px]'>
        <button className={`absolute left-16 bottom-4 w-3 h-3 flex items-center bg-[#46A358] text-white px-2 py-2 rounded-full`}>
          <span className='w-3 h-3 ml-[-3px] mt-[-4px] text-[10px]'>0</span>
        </button>
        <Image style={{width:"20px", height:"20px"}} priority src={"/Poisk.svg"} alt='Search' width={20} height={20} />
        <Image style={{width:"29px", height:"24px"}} priority src={"/Magazin.svg"} alt='Magazin' width={29} height={24}/>
        <Button leftIcon={<LoginIcon/>} extraClass='w-[100px] gap-[4px]' onClick={() => setLoginModal(true)} type='button'title='Login' />
        </div>
        <Modal openModal={loginModal} setOpenModal={setLoginModal} modalStyle=''>
        <ul className='flex items-center justify-center gap-[10px] font-semibold text-[22px]'>
          <li className={`${isLogin == "login" ? "text-[#46A358]":" "}`} onClick={() => setIsLogin("login")}>Login</li>
          <li className={`${isLogin == "register" ? "text-[#46A358]":" "}`} onClick={() => setIsLogin("register")}>Register</li>
        </ul>
        <form onSubmit={handleSubmitLogin} className='w-[300px] mx-auto mt-[53px] space-y-5' autoComplete='off'>
          {isLogin == "login" && <LoginInputs setIsLogin={setIsLogin}/>}  
          {isLogin == "register" && <RegisterInputs/>}  
          {isLogin == "verifyRegister" && <VerifyRegister setRegisterVerifyValue={setRegisterVerifyValue}/>}  
          {isLogin == "forgotPassword" && <ForgotPassword/>}  
          {isLogin == "newPassword" && <NewPassword/>}  
          <Button 
          extraClass='w-full' 
          title=
          {isLogin == "login" ? "Login" : "Register"} 
          type='submit' 
          onClick={() => {}}/>
        </form>
        </Modal>
    </header>
  )
}

export default Header;