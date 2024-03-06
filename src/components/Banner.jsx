import React from 'react'
import { IoPlay } from "react-icons/io5";
import girl from '../assets/img/girl.png'

function Banner() {
    return (
        <>
            <div className="">
                <div className="max-w-[1240px] mx-auto  grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 ">
                        <h2 className='text-[40px] md:text-[50px] font-bold m-3'>Dive into Delights of Delectable <span className='text-[#39DB4A]'>Food</span>
                        </h2>
                        <p className='text-[12px] md:text-[25px] m-3'>Where Each Plates Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                        <div className="flex text-[15px] md:text-[20px] font-bold  items-center">
                            <button className='bg-[#39DB4A] rounded-3xl m-3 px-4 py-[10px] text-white '>Order Now</button>
                            <button className=' mx-3'>Watch video</button>
                            <div className=' h-26 w-26 rounded-full shadow-lg hover:scale-110 hover:bg-slate-400 duration-300 '><IoPlay className='text-[50px] p-4' /></div>
                        </div>
                    </div>
                    <div className="col-span-1 text-xl">
                        <div className="mx-auto w-[400px] md:w-[600px] ">
                            <img src={girl} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Banner
