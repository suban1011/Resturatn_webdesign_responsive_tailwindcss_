import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiTwitter, CiYoutube } from "react-icons/ci";
function Footer() {
    return (
        <>
            <div className="">
                <div className="w-[100%] md:max-w-[1240px] mx-auto   p-[20px]">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col space-y-3">
                            <p className='font-bold text-[25px]' ><span className='text-white bg-[#39DB4A]  px-[3px] rounded-md  my-[px]'>F</span><sup class="font-features sups">ODDI</sup></p>
                            <p className='text-[20px]'>Savor the artistry where <br /> every dish is a culinary <br /> masterpiece</p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <div className='font-bold'>Useful links</div>
                            <div >About us</div>
                            <div >Events</div>
                            <div >Blogs</div>
                            <div >FAQ</div>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <div className='font-bold'>Main Menu</div>
                            <div >Home</div>
                            <div >Offers</div>
                            <div >Menus</div>
                            <div>Reservations</div>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <div className='font-bold'>Contacts</div>
                            <div >example@gmail.com</div>
                            <div >+977 9867783860</div>
                            <div >Socail medis</div>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-8 m-[10px] p-[20px] items-center ">
                        <div className="flex justify-center text-2xl ">

                            <div className="rounded-full p-[10px]  mx-[5px] bg-[#39DB4A]"><FaFacebookF /> </div>
                            <div className="rounded-full p-[10px]  mx-[5px] "><FaInstagram /> </div>
                            <div className="rounded-full p-[10px]  mx-[5px] "><FaTwitter /> </div>
                            <div className="rounded-full p-[10px]  mx-[5px] "><CiYoutube /> </div>
                        </div>
                        <div className="text-xl">Copyright @ 2024 mycode | All right reserved</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
