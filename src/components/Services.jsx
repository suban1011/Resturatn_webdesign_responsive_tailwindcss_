
import { PiBowlFoodLight } from "react-icons/pi";
import { LuGift } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";

function Services() {
    return (
        <>
            <div className="my-[40px]">
                <div className="max-w-[1240px] mx-auto p-[20px] flex flex-col md:flex-row justify-between ">
                    <div className="col-span-1 ">
                        <h2 className='text-[#FF6868] font-semibold'>OUR STORY & SERVICES</h2>
                        <h1 className='font-bold text-[25px]'>Our Culinary Journey And Services</h1>
                        <p>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                        <button className=' font-bold bg-[#39DB4A] rounded-3xl m-3 px-4 py-[5px] text-white'>Explore</button>
                    </div>
                    <div className="col-span-1 ">
                        <div className="flex justify-center">
                            <div className="">
                                <div className="shadow-lg rounded-md shadow-gray-300 hover:bg-slate-100 hover:scale-110 duration-300 text-center m-3 p-3 h-[205px] w-[175px]">
                                    <PiBowlFoodLight className='text-[60px] mx-auto text-[#39DB4A]' />
                                    <h2 className='font-bold text-[#39DB4A]'>CATERING</h2>
                                    <p>Delight your guests with our flavors and  presentation</p>
                                </div>
                            </div>
                            <div className=""> <div className="shadow-lg rounded-md shadow-gray-300 hover:bg-slate-100 hover:scale-110 duration-300 text-center m-3 p-3 h-[205px] w-[175px]">
                                <FaShippingFast className='text-[60px] mx-auto text-[#39DB4A]' />
                                <h2 className='font-bold text-[#39DB4A]'>Fast delivery</h2>
                                <p>We deliver your order promptly to your door </p>
                            </div></div>
                        </div>
                        <div className="flex justify-center">
                            <div className=""> <div className="shadow-lg rounded-md shadow-gray-300 hover:bg-slate-100 hover:scale-110 duration-300 text-center m-3 p-3 h-[205px] w-[175px]">
                                <BsCartCheck className='text-[60px] mx-auto text-[#39DB4A]' />
                                <h2 className='font-bold text-[#39DB4A]'>CATERING</h2>
                                <p>Delight your guests with our flavors and  presentation</p>
                            </div></div>
                            <div className=""> <div className="shadow-lg rounded-md shadow-gray-300 hover:bg-slate-100 hover:scale-110 duration-300 text-center m-3 p-3 h-[205px] w-[175px]">
                                <LuGift className='text-[60px] mx-auto text-[#39DB4A]' />
                                <h2 className='font-bold text-[#39DB4A]'>Gift Cards</h2>
                                <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
                            </div></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services
