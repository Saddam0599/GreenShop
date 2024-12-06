import React from 'react'
import Image from 'next/image'
import GardenCare from "@/public/icons/GardenCare.svg";
import GardenCareBody from "@/public/icons/GardenCareBody.svg";
import Rectangle from "@/public/icons/Rectangle.svg";
import PlantRenovation from "@/public/icons/PlantRenovation.svg";
import WateringGraden from "@/public/icons/WateringGraden.svg";
import Logo from "@/public/Logo.svg";
import Location from "@/public/Location.svg";
import Message from "@/public/Message.svg";
import Calling from "@/public/Calling.svg";
import Facebook from "@/public/icons/Facebook.svg";
import Instagram from "@/public/icons/Instagram.svg";
import Twitter from "@/public/icons/Twitter.svg";
import Linkedin from "@/public/icons/Linkedin.svg";
import Union from "@/public/icons/Union.svg";
import Breands from "@/public/icons/Breands.svg";



const page = () => {
  return (

        <footer className="max-w-[1200px] max-h-[910px] m-auto py-10">
            <section className="max-w-[1200px] h-[250px] mx-auto px-[24px] py-[24.5px] flex text-center bg-[#FBFBFB] ">
                <div className="relative w-[204px] h-[201px] flex flex-col items-start justify-center ">
                    <span className="w-[74px] h-[74px] rounded-full bg-[#E3F0E6] mt-[23px]"></span>

                    <Image
                        src={GardenCare}
                        alt="Garden Care"
                        className="absolute top-[1px] left-[16px] w-[61px] h-[46px]" 
                    />

                    <Image
                        src={GardenCareBody}
                        alt="Garden Care Body"
                        className="absolute top-[43px] left-[16px] w-[55px] h-[48px]" 
                    />

                    <h3 className="font-[Cera Pro] text-[17px] leading-[16px] text-left decoration-skip-ink decoration-from-font text-lg font-semibold text-[#3D3D3D] mt-[12px] mb-[9px]">
                        Garden Care
                    </h3>

                    <p className="font-[Cera Pro] text-[14px] font-normal leading-[22px] text-left hover:underline decoration-skip-ink decoration-from-font text-[#727272]">
                        We are an online plant shop offering a wide range of cheap and trendy plants.
                    </p>
                </div>

                <Image src={Rectangle} alt="Rectangle" className='w-[2px] h-[187px] ml-[34px] mr-[27px] mt-1'/>

                <div className="relative w-[204px] h-[196px] flex flex-col items-center md:items-start ">
                    <span className="w-[74px] h-[74px] rounded-full bg-[#E3F0E6] mt-[20px]"></span>

                    <Image src={PlantRenovation} alt="Plant Renovation" className=" absolute left-[16px] w-[68px] h-[87px] mb-4" />
                    <h3 className="font-[Cera Pro] text-[17px] leading-[16px] text-left decoration-skip-ink decoration-from-font text-lg font-semibold text-[#3D3D3D] mt-[12px] mb-[9px]">Plant Renovation</h3>
                    <p className="font-[Cera Pro] text-[14px] font-normal leading-[22px] text-left hover:underline decoration-skip-ink decoration-from-font text-[#727272]">
                        We are an online plant shop offering a wide range of cheap and trendy plants.
                    </p>
                </div>

                <Image src={Rectangle} alt="Rectangle" className='w-[2px] h-[187px] ml-[26px] mr-[35px] mt-1'/>

                <div className="relative w-[204px] h-[195px] flex flex-col items-center md:items-start ">
                    <span className="w-[74px] h-[74px] rounded-full bg-[#E3F0E6] mt-[20px]"></span>
                    <Image src={WateringGraden} alt="Watering Garden" className="absolute left-[16px] w-[83px] h-[85px] mb-4" />
                    <h3 className="font-[Cera Pro] text-[17px] leading-[16px] text-left decoration-skip-ink decoration-from-font text-lg font-semibold text-[#3D3D3D] mt-[12px] mb-[9px]">Watering Garden</h3>
                    <p className="font-[Cera Pro] text-[14px] font-normal leading-[22px] text-left hover:underline decoration-skip-ink decoration-from-font text-[#727272]">
                        We are an online plant shop offering a wide range of cheap and trendy plants.
                    </p>
                </div>

                <div className="w-[354px] flex flex-col items-start ml-14">
                        <h3 className="font-[Cera Pro] text-[17px] leading-[16px] text-left decoration-skip-ink decoration-from-font text-lg font-semibold text-[#3D3D3D]">Would you like to join newsletters?</h3>
                        <span className='flex shadow-md rounded-l-md rounded-r-md my-[17.5px]'>
                            <input
                                type="email"
                                placeholder="enter your email address..."
                                className="border rounded-l-md px-4 py-2 w-[269px] font-[Cera Pro] text-[14px] font-normal leading-[16px] text-left "
                            />
                            <button className="bg-[#46A358] text-white px-6 py-2 rounded-r-md">Join</button>
                        </span>
                        <p className="font-[Cera Pro] text-[14px] font-normal leading-[22px] text-left decoration-skip-ink decoration-from-font text-[#727272]">
                            We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! 
                        </p>
                </div>
            </section>

             <section className='w-[1200px] h-[88px] flex px-[23px] bg-[#ECF6EE]'>
                <Image width={150} height={34.3} src={Logo} alt="Site Logo" />
                <div className='flex items-center justify-center gap-[9px] ml-[87px] mr-[60px]'>
                    <Image width={17} height={20} src={Location} alt="Site Location"/>
                      <p className='text-sm font-normal leading-[22px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]'>70 West Buckingham Ave. <br /> Farmingdale, NY 11735</p>
                </div>
                <div className='flex items-center justify-center gap-[10px]'>
                    <Image width={20} height={20} src={Message} alt="Site Message"/>
                    <p className="text-sm font-normal leading-[22px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">contact@greenshop.com</p>
                </div>
                <div className='flex items-center justify-center gap-[8px] ml-[73px]'>
                    <Image width={20} height={20} src={Calling} alt="Site Calling"/>
                    <p className="text-sm font-normal leading-[22px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">+88 01911 717 490</p>
                </div>
            </section>

            <section className="bg-[#FBFBFB] px-[23px] py-[33px] border-b-[2px] border-[#ECF6EE]">
                <div className="max-w-[1200px] mx-auto flex">
                    <div>
                        <h3 className="font-cera-pro text-[18px] font-semibold leading-[16px] text-left underline-from-font decoration-skip-none text-[#3D3D3D]">My Account</h3>
                        <ul className="text-sm mt-4 space-y-2">
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">My Account</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Our stores</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Contact us</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Career</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Specials</li>
                        </ul>
                    </div>
                    <div className='ml-[176px] mr-[128px]'>
                        <h3 className="font-cera-pro text-[18px] font-semibold leading-[16px] text-left underline-from-font decoration-skip-none text-[#3D3D3D]">Help & Guide</h3>
                        <ul className="text-sm mt-4 space-y-2">
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Help Center</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">How to Buy</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Shipping & Delivery</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Product Policy</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">How to Return</li>
                        </ul>
                    </div>
                    <div className='mr-[173px]'>
                        <h3 className="font-cera-pro text-[18px] font-semibold leading-[16px] text-left underline-from-font decoration-skip-none text-[#3D3D3D]">Categories</h3>
                        <ul className="text-sm mt-4 space-y-2">
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">House Plants</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Potter Plants</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Seeds</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Small Plants</li>
                        <li className="text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]">Accessories</li>
                        </ul>
                    </div>

                    <div className='flex flex-col'>
                        <div>
                            <h3 className="font-cera-pro text-[18px] font-semibold leading-[16px] text-left underline-from-font decoration-skip-none text-[#3D3D3D]">Social Media</h3>
                            <ul className='flex gap-[10px] mt-[20px] mb-[22px]'>
                                <li className='w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#46A35833] rounded-[4px]'>
                                    <Image width={8} height={16} src={Facebook} alt="Facebook" />
                                </li>
                                <li className='w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#46A35833] rounded-[4px]'>
                                    <Image width={16} height={16} src={Instagram} alt="Instagram" />
                                </li>
                                <li className='w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#46A35833] rounded-[4px]'>
                                    <Image width={16} height={13} src={Twitter} alt="Twitter" />
                                </li>
                                <li className='w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#46A35833] rounded-[4px]'>
                                    <Image width={16} height={15.33} src={Linkedin} alt="LinkedIn" />
                                </li>
                                <li className='w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#46A35833] rounded-[4px]'>
                                    <Image width={18.67} height={13.98} src={Union} alt="YouTube" />
                                </li>
                            </ul>
                            <div>
                                <h3 className="font-cera-pro text-[18px] font-semibold leading-[16px] text-left underline-from-font decoration-skip-none text-[#3D3D3D] mb-[13px]">We accept</h3>
                                <Image src={Breands} alt="Breands" />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>

            <span className='w-[1200px] h-[47px] flex items-center justify-center'>
                <p className=' text-sm font-normal leading-[30px] text-left hover:underline underline-from-font decoration-skip-none text-[#3D3D3D]'>© 2021 GreenShop. All Rights Reserved.</p>
            </span>
        </footer>
  )
}

export default page;