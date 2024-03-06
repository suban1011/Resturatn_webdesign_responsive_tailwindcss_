import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Header() {
    const [toogle, setToogle] = useState(false);
    return (
        <>


            <nav className="max-w-[100%] mx-auto my-[20px] flex justify-between shadow-lg py-[10px] md:px-[100px]">
                <div className="text-3xl  font-bold hover:text-green-500 duration-200 hover:scale-110 ">
                    <p ><span className='text-white bg-[#39DB4A]  px-[3px] rounded-md  my-[px]'>F</span><sup>ODDI</sup></p>
                </div>
                <ul className='hidden md:flex gap-7 font-semibold '>
                    <li href="#" className='hover:text-green-500 duration-200'><Link to={"/"}>Home</Link></li>
                    <li href="#" className='hover:text-green-500 duration-200'><Link to={"/menu"}>Menu</Link></li>
                    <li href="#" className='hover:text-green-500 duration-200'><Link to={"/services"}>Services</Link></li>
                    <li href="#" className='hover:text-green-500 duration-200'><Link to={"/offers"}>Offers</Link></li>

                </ul>
                <div className="hidden md:flex gap-7">

                    <IoIosSearch className='text-3xl hover:text-green-500 duration-200 hover:scale-110' />
                    <IoBagOutline className='text-3xl hover:text-green-500 duration-200 hover:scale-110' />
                    <button className='bg-[#39DB4A] rounded-xl px-4 py-1 text-white hover:bg-green-500 duration-200 hover:scale-110'>Contact</button>

                </div>

                {toogle ? <IoClose className='md:hidden block text-4xl ' onClick={() => setToogle(!toogle)} /> : <RiMenu3Fill className=' md:hidden block text-4xl ' onClick={() => setToogle(!toogle)} />}

                <ul className={`bg-gray-800 font-bold text-white md:hidden fixed duration-300 top-[60px] w-[100%] h-[100%] ${toogle ? 'left-[0]' : 'left-[100%]'} px-[10px] py-[10px] space-y-2`}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/menu"}>Menu</Link></li>
                    <li><Link to={"/services"}>Services</Link></li>
                    <li><Link to={"/Offers"}>Offers</Link></li>

                    <IoIosSearch className='text-3xl hover:text-green-500 duration-200 hover:scale-110' />
                    <IoBagOutline className='text-3xl hover:text-green-500 duration-200 hover:scale-110' />
                    <button className='bg-[#39DB4A] rounded-xl px-4 py-1 text-white hover:bg-green-500 duration-200 hover:scale-110'>Contact</button>
                </ul>

            </nav>


        </>
    )
}

export default Header;

