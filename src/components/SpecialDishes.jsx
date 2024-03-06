import React from 'react'
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Eggsalad from '../assets/img/Eggsalad.png'
import Fattoushsalad from '../assets/img/Fattoushsalad.png'
import Vegetablesalad from '../assets/img/Vegetablesalad.png'

import { FaStar } from "react-icons/fa";

function SpecialDishes() {
    return (
        <>
            <div className="">
                <div className="max-w-[1240px] mx-auto ">
                    <h2 className='text-[#FF6868] font-bold mx-[20px] text-center md:text-left '>SPECIAL DISHES</h2>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='text-[30px] font-bold mx-[20px]'>Standout Dishes <br /> From Our Menu</div>
                        <div className="flex gap-10 my-[30px]">

                            <div className="hover:scale-110 duration-300 rounded-full shadow-lg h-[40px] w-[40px] hover:bg-slate-400  "> <FaLessThan className='mx-auto my-[10px]' /></div>
                            <div className="hover:scale-110 duration-300 rounded-full shadow-lg h-[40px] w-[40px] hover:bg-slate-400 text-white bg-[#39DB4A] "> <FaGreaterThan className='mx-auto my-[10px]' /></div>

                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-20  m-3">
                        <div className="shadow-lg rounded-2xl  h-[380px] w-[290px]  hover:bg-slate-100 hover:scale-110 duration-300 items-center">

                            <img className='my-8 mx-auto' src={Fattoushsalad} alt="" width={200} height={200} />
                            <h2 className='font-bold mx-4'>Fattoush Salad</h2>
                            <p className='mx-4 '>Description of the Item</p>
                            <div className='flex justify-between m-4'>
                                <p>$24.00</p>
                                <div className="flex items-center">
                                    <FaStar className='text-yellow-600 mx-2' />
                                    <p>4.9</p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg rounded-2xl h-[380px] w-[290px]  hover:bg-slate-100 hover:scale-110 duration-300 items-center">

                            <img className='my-8 mx-auto' src={Vegetablesalad} alt="" width={200} height={200} />
                            <h2 className='font-bold mx-3'>Vegetable Salad</h2>
                            <p className='mx-4 '>Description of the Item</p>
                            <div className='flex justify-between m-4'>
                                <p>$24.00</p>
                                <div className="flex items-center">
                                    <FaStar className='text-yellow-600 mx-2' />
                                    <p>4.9</p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg rounded-2xl h-[380px] w-[290px]  hover:bg-slate-100 hover:scale-110 duration-300 items-center">

                            <img className='my-8 mx-auto' src={Eggsalad} alt="" width={200} height={200} />
                            <h2 className='font-bold mx-4'>Egg Salad</h2>
                            <p className='mx-4 '>Description of the Item</p>
                            <div className='flex justify-between m-3'>
                                <p>$24.00</p>
                                <div className="flex items-center">
                                    <FaStar className='text-yellow-600 mx-2' />
                                    <p>4.9</p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg rounded-2xl h-[380px] w-[290px]  hover:bg-slate-100 hover:scale-110 duration-300 items-center">

                            <img className='my-8 mx-auto' src={Eggsalad} alt="" width={200} height={200} />
                            <h2 className='font-bold mx-4'>Egg Salad</h2>
                            <p className='mx-4 '>Description of the Item</p>
                            <div className='flex justify-between m-3'>
                                <p>$24.00</p>
                                <div className="flex items-center">
                                    <FaStar className='text-yellow-600 mx-2' />
                                    <p>4.9</p>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default SpecialDishes
