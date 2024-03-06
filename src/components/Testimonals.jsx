import React from 'react'
import Cheif from '../assets/img/cheif.png';
import user1 from '../assets/img/user1.png';
import user2 from '../assets/img/user2.png';
import user3 from '../assets/img/user3.png';
import rect from '../assets/img/rect.png'
import { FaStar } from "react-icons/fa";
function Testimonals() {
    return (
        <>
            <div className="my-[40px] md:h-[600px]">
                <div className="max-w-[1240px] mx-auto p-[20px] grid md:grid-cols-2 ">
                    <div className="relative">
                        <div className='md:absolute'>
                            <img src={Cheif} alt="" className='w-[400px]' />
                        </div>
                        <div className='md:absolute left-[300px] top-[180px]'>
                            <img src={rect} alt="" />

                        </div>

                    </div>
                    <div className="">
                        <h2 className='text-[#FF6868] font-semibold text-center md:text-left'>TESTIMONALS</h2>
                        <h1 className='font-bold text-[40px] text-center md:text-left'>What Our Customers Say About Us</h1>
                        <p className='text-[20px]'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                        <div className="flex my-[20px] ">
                            <div className="relative  flex w-[175px] ">

                                <div className="rounded-full   w-[60px] h-[50px] ">
                                    <img src={user2} className=' rounded-full  ' alt="" />
                                </div>
                                <div className="absolute mx-[30px] rounded-full  w-[60px] h-[60px]">
                                    <img src={user1} className=' rounded-full  ' alt="" />
                                </div>
                                <div className="absolute mx-[65px] rounded-full  w-[60px] h-[60px] ">
                                    <img src={user3} className=' rounded-full  ' alt="" />
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <h1 className='font-semibold mx-2'>Customer Feedback</h1>
                                </div>
                                <div className="flex items-center">

                                    <FaStar className='text-yellow-600 mx-2' />
                                    <div> <span className='font-bold'>4.9</span> (18.9k Reviews)</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Testimonals
