import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import { AiFillProduct } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";


const OrdersHero = () => {
    return (
        <div className='container flex  justify-center items-center flex-wrap lg:mt-12 mt-6 gap-6'>


            <div className='flex  items-center justify-start p-2 h-[120px] w-[300px] bg-white rounded-xl'>
                <div className='p-2 rounded-lg bg-Main mr-1'>
                    <FaShoppingCart className='text-[#F7F2E8] size-8 ' />
                </div>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'> Total Orders</p>
                    <p className='text-black text-xl font-bold'> 1200</p>
                </div>
            </div>


            <div className='flex  items-center justify-start p-2 h-[120px] w-[300px] bg-white rounded-xl'>
                <div className='p-2 rounded-lg bg-[#FEF3C7] mr-1'>
                    <MdAccessTime className='text-[#D97706] size-8 ' />
                </div>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'> Pending Orders  </p>
                    <p className='text-black text-xl font-bold'> 12</p>
                </div>

            </div>

            <div className='flex  items-center justify-start p-2 h-[120px] w-[300px] bg-white rounded-xl'>
                <div className='p-2 rounded-lg bg-[#D1FAE5] mr-1'>
                    <MdLocalShipping className='text-[#059669] size-8 ' />
                </div>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'> Shipped Orders </p>
                    <p className='text-black text-xl font-bold'> 12</p>
                </div>

            </div>

            <div className='flex  items-center justify-start p-2 h-[120px] w-[300px] bg-white rounded-xl'>

                <div className='p-2 rounded-lg bg-[#EDE9FE] mr-1'>
                    <LuDollarSign className='text-[#7C3AED] size-8 ' />
                </div>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'>  Total Revenue   </p>
                    <p className='text-black text-xl font-bold'> 452 EGP</p>
                </div>
            </div>

        </div>
    )
}

export default OrdersHero 