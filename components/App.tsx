"use client"
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  maxWidth:'1200px',
  height: '450px',
  color: '#F5F5F5/50',
  lineHeight: '1px',
  textAlign: 'center',
};

const App: React.FC = () => (
  <Carousel className='max-w-[1200px] m-auto bg-[F5F5F5/50] mb-[46px]' autoplay>
    <div className='bg-[#FAFAFA]'>
      <h3 style={contentStyle}>
      <div className='planet mobile-planet flex items-center container'>
            <div className='planet-left'>
                <h1 className='text-left font-semibold w-[205px] h-[16px] mb-[7px] font-cera-pro text-[14px] leading-[16px] tracking-[0.1em] underline-offset-auto decoration-skip-ink'>Welcome to GreenShop</h1>
                <h2 className='text-6xl font-cera-pro font-bold leading-[76px] tracking-[0.1em] text-left underline-offset-auto decoration-skip-ink '>LET’S MAKE A <br /> BETTER <span className='text-6xl text-[#46A358] mb-[10px]'>PLANET</span></h2>
                <p className='p text-left'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>
                <button className='planet-btn ml-[-16vh]'>SHOP NOW</button>
                
                <div className='flex ml-[55vh] mt-[8vh] gap-3'>
                  <div className='w-[10px] h-[10px] border-2 border-green-200 bg-green-500 rounded-full'></div>
                  <div className='w-[10px] h-[10px] border-2 border-green-200 bg-green-100 rounded-full'></div>
                  <div className='w-[10px] h-[10px] border-2 border-green-200 bg-green-100 rounded-full'></div>
                </div>
            </div>
            <div className='planet-right mt-28'>
              <Image style={{width:"1000px", height:"1000px"}} priority  src={'./Gul.svg'} alt='Gul' width={1000} height={1000}/>
              <Image className="planet-img" style={{width:"200px", height:"200px"}} priority  src={'./Gul.svg'} alt='Gul' width={200} height={200} />
            </div>
        </div>
      </h3>
    </div>
    <div className='bg-[#FAFAFA]'>
      <h3 style={contentStyle}>
      <div className='planet mobile-planet flex items-center container bg-[#FAFAFA]'>
            <div className='planet-left'>
                <h1 className='text-left font-semibold w-[205px] h-[16px] mb-[7px] font-cera-pro text-[14px] leading-[16px] tracking-[0.1em] underline-offset-auto decoration-skip-ink'>Welcome to GreenShop</h1>
                <h2 className='text-6xl font-cera-pro font-bold leading-[76px] tracking-[0.1em] text-left underline-offset-auto decoration-skip-ink '>LET’S MAKE A <br /> BETTER <span className='text-left text-6xl text-[#46A358] mb-[10px]'>PLANET</span></h2>
                <p className='p text-left'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>
                <button className='planet-btn ml-[-16vh]'>SHOP NOW</button>
                
                <div className='flex ml-[55vh] mt-[8vh] gap-3'>
                  <div className='w-[10px] h-[10px] border-2 border-green-200 bg-green-100 rounded-full'></div>
                  <div className='w-[10px] h-[10px] border-2 border-green-200 bg-green-500 rounded-full'></div>
                  <div className='w-[10px] h-[10px] border-2 border-green-200 bg-green-100 rounded-full'></div>
                </div>
            </div>
            <div className='planet-right mt-28'>
              <Image style={{width:"1000px", height:"1000px"}} priority  src={'./Gul.svg'} alt='Site Logo' width={1000} height={1000}/>
              <Image className="planet-img" style={{width:"200px", height:"200px"}} priority  src={'./Gul.svg'} alt='Site Logo' width={200} height={200} />
            </div>
        </div>
      </h3>
    </div>
    <div className='bg-[#FAFAFA]'>
      <h3 style={contentStyle}>
      <div className='planet mobile-planet flex items-center container'>
            <div className='planet-left'>
                <h1 className='text-left font-semibold w-[205px] h-[16px] mb-[7px] font-cera-pro text-[14px] leading-[16px] tracking-[0.1em] underline-offset-auto decoration-skip-ink'>Welcome to GreenShop</h1>
                <h2 className='text-6xl font-cera-pro font-bold leading-[76px] tracking-[0.1em] text-left underline-offset-auto decoration-skip-ink'>LET’S MAKE A <br /> BETTER <span className='text-left text-6xl text-[#46A358] mb-[10px]'>PLANET</span></h2>
                <p className='p text-left'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>
                <button className='planet-btn ml-[-16vh]'>SHOP NOW</button>
                <div className='flex ml-[55vh] mt-[8vh] gap-3 '>
                  <div className='w-[10px] h-[10px] border-2 border-green-200 bg-green-100 rounded-full'></div>
                  <div className='w-[10px] h-[10px] border-2 border-green-200 bg-green-100 rounded-full'></div>
                  <div className='w-[10px] h-[10px] border-2 border-green-200 bg-green-500 rounded-full'></div>
                </div>
            </div>
            <div className='planet-right mt-28'>
              <Image style={{width:"1000px", height:"1000px"}} priority  src={'./Gul.svg'} alt='Site Logo' width={1000} height={1000}/>
              <Image className="planet-img" style={{width:"200px", height:"200px"}} priority  src={'./Gul.svg'} alt='Site Logo' width={200} height={200} />
            </div>
        </div>
      </h3>
    </div>
  </Carousel>
);

export default App;