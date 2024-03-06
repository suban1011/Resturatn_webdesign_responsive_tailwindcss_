import React from 'react'
import MainDishes from '../assets/img/MainDishes.png';
import desert from '../assets/img/desert.png';
import Juice from '../assets/img/Juice.png';
import breakfast from '../assets/img/breakfast.png';
function PopularCategory() {
    return (
        <>
            <div className="">
                <div className="max-w-[1240px] mx-auto my-[20px]">
                    <div className="text-center">
                        <h3 className='text-[#FF6868] text-[20px]'>CUSTOMER FAVORITES</h3>
                        <h1 className='text-[40px] md:text-[60px] font-bold'>Popular Category</h1>
                    </div>
                    <div className="mx-auto items-center flex flex-col md:flex-row  m-10">
                        <div className="hover:bg-slate-100 hover:scale-110 duration-300 shadow-md shadow-gray-300 rounded-lg md:w-[200px] w-[300px]
                     p-[20px] m-[20px]">
                            <div className="rounded-full h-[100px] w-[100px] mx-auto my-[10px] bg-[#C1F1C6] "><img className='py-[10px]' src={MainDishes} alt="" /></div>

                            <h2 className='font-bold text-center'>Main Dish</h2>
                            <p className='text-center '>(86 dishes)</p>
                        </div>
                        <div className="hover:bg-slate-100 hover:scale-110 duration-300 shadow-md shadow-gray-300 rounded-lg md:w-[200px] w-[300px] p-[20px] m-[20px]">
                            <div className="rounded-full h-[100px] w-[100px] mx-auto my-[10px] bg-[#C1F1C6] "><img className='py-[10px]' src={breakfast} alt="" /></div>

                            <h2 className='font-bold text-center'>Break Fast</h2>
                            <p className='text-center '>(34 break fast)</p>
                        </div>
                        <div className="hover:bg-slate-100 hover:scale-110 duration-300 shadow-md shadow-gray-300 rounded-lg md:w-[200px] w-[300px] p-[20px] m-[20px]">
                            <div className="rounded-full h-[100px] w-[100px] mx-auto my-[10px] bg-[#C1F1C6] "><img className='py-[10px]' src={desert} alt="" /></div>

                            <h2 className='font-bold text-center'>Desert</h2>
                            <p className='text-center '>(48 desert)</p>
                        </div>
                        <div className="hover:bg-slate-100 hover:scale-110 duration-300 shadow-md shadow-gray-300 rounded-lg md:w-[200px] w-[300px] p-[20px] m-[20px]">
                            <div className="rounded-full h-[100px] w-[100px] mx-auto my-[10px] bg-[#C1F1C6]"><img className='py-[10px]' src={Juice} alt="" /></div>

                            <h2 className='font-bold text-center'>Juice</h2>
                            <p className='text-center '>(30 juice)</p>
                        </div>
                        <div className="hover:bg-slate-100 hover:scale-110 duration-300 shadow-md shadow-gray-300 rounded-lg md:w-[200px] w-[300px] p-[20px] m-[20px]">
                            <div className="rounded-full h-[100px] w-[100px] mx-auto my-[10px] bg-[#C1F1C6] "><img className='center' src={Juice} alt="" /></div>

                            <h2 className='font-bold text-center'>Browse All</h2>
                            <p className='text-center '>(255 items)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCategory;
