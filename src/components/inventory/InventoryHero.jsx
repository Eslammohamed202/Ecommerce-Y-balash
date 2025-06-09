import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { AiFillProduct } from "react-icons/ai";


const InventoryHero = () => {
    return (
        <div className='container flex  justify-between items-center flex-wrap lg:mt-12 mt-6 gap-6'>


            <div className='flex  items-center justify-between p-2 h-[150px] w-[300px] bg-white rounded-xl'>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'>  Total Products   </p>
                    <p className='text-black text-xl font-bold'> 452</p>
                </div>
                <div className='p-2 rounded-lg bg-[#EDE9FE] lg:mr-5 mr-2'>
                    <AiFillProduct className='text-[#FFCD29] size-8 ' />
                </div>
            </div>
            <div className='flex  items-center justify-between p-2 h-[150px] w-[300px] bg-white rounded-xl'>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'> Out Of Stock</p>
                    <p className='text-black text-xl font-bold'> 120</p>


                </div>
                <div className='p-2 rounded-lg bg-Main lg:mr-5 mr-2'>
                    <FaShoppingCart className='text-[#F7F2E8] size-8 ' />
                </div>
            </div>

            <div className='flex  items-center justify-between p-2 h-[150px] w-[300px] bg-white rounded-xl'>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'>  Low Stock Items </p>
                    <p className='text-black text-xl font-bold'> 12</p>
                </div>
                <div className='p-2 rounded-lg bg-[#FFEDD5] lg:mr-5 mr-2'>
                    <GoAlertFill className='text-[#F97316] size-8 ' />
                </div>
            </div>



        </div>
    )
}

export default InventoryHero 