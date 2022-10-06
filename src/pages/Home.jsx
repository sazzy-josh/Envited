import React from 'react'
import heroImg from '../assets/hero image.png'
import { Outlet , Link } from 'react-router-dom'


const Home = () => {
  return (
      <>
    <div>
    {/* Desktop view */}
      <Outlet/>
    <div className="hidden lg:grid lg:grid-cols-2 h-screen w-screen bg-slate-50 px-[160px]">
     {/* Image Section */}
      <div className='image-container w-full h-full '>
       <img src={heroImg} alt="hero-image" className='object-contain h-[480px] w-[480px] drop-shadow-lg' />
      </div>
     {/* Text Section */}
      <div className='h-full w-full flex flex-col items-end justify-center gap-y-1'>
        <div className='flex flex-col'>
         <p className='text-color leading-[55px] py-4'>
         &nbsp; &nbsp;&nbsp;Imagine if <br /><span className='text-gradient '>&nbsp;&nbsp; &nbsp;&nbsp;Snapchat</span><br /> &nbsp;&nbsp;had events.   
         </p>
        </div>
        <span className='text-right font-light text-2xl color'>Easily host and share events with your friends<br/> across any social media.</span>
        <Link to='create/new'>
        <span className='border rounded-lg flex items-center justify-center p-4 font-semibold w-[320px] h-[55px] mt-7 text-[20px] text-white btn-gradient shadow-lg '> 🎉 Create my event </span>
        </Link>
      </div>      
    </div>
    </div>
</>
  )
}

export default Home