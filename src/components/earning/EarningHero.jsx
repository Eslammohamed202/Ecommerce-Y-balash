import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { MdOutlineEventNote } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";

const EarningHero = () => {
    return (
        <div className='container flex  justify-between items-center flex-wrap lg:mt-12 mt-6 gap-6'>


            <div className='flex  items-center justify-between p-2 h-[150px] w-[300px] bg-white rounded-xl'>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'> Total Earning</p>
                    <p className='text-black text-xl font-bold'> 200000</p>
                    <div className='flex items-center'>
                        <FaLongArrowAltDown className='text-[#10B981] text-sm font-semibold' />
                        <p className='text-red-600 text-sm font-semibold'>
                            12% Last Month</p>
                    </div>

                </div>
                <div className='p-2 rounded-lg bg-[#DBEAFE] lg:mr-5 mr-2'>
                    <LuDollarSign className='text-[#2563EB] size-8 ' />
                </div>
            </div>


            <div className='flex  items-center justify-between p-2 h-[150px] w-[300px] bg-white rounded-xl'>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'>  Total Orders </p>
                    <p className='text-black text-xl font-bold'> 150</p>
                    <div className='flex items-center'>
                        <FaLongArrowAltUp className='text-[#10B981] text-sm font-semibold' />
                        <p className='text-[#10B981] text-sm font-semibold'>
                            12% Last Month</p>
                    </div>                </div>
                <div className='p-2 rounded-lg bg-[#EDE9FE] lg:mr-5 mr-2'>
                    <AiFillProduct className='text-[#7C3AED] size-8 ' />
                </div>
            </div>

            <div className='flex  items-center justify-between p-2 h-[150px] w-[300px] bg-white rounded-xl'>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'>   this month </p>
                    <p className='text-black text-xl font-bold'> 12</p>
                    <div className='flex items-center'>
                        <FaLongArrowAltUp className='text-[#10B981] text-sm font-semibold' />
                        <p className='text-[#10B981] text-sm font-semibold'>
                            12% Last Month</p>
                    </div>
                </div>
                <div className='p-2 rounded-lg bg-[#FEF3C7] lg:mr-5 mr-2'>
                    <FaChartLine className='text-[#D97706] size-8 ' />
                </div>
            </div>

            <div className='flex  items-center justify-between p-2 h-[150px] w-[300px] bg-white rounded-xl'>
                <div className='  flex flex-col items-start justify-center gap-2 lg:pl-5 pl-2 '>
                    <p className='text-[#6B7280] text-lg font-bold'>   Average Orders   </p>
                    <p className='text-black text-xl font-bold'> 25</p>
                    <div className='flex items-center'>
                        <FaLongArrowAltUp className='text-[#10B981] text-sm font-semibold' />
                        <p className='text-[#10B981] text-sm font-semibold'>
                            12% Last Month</p>
                    </div>
                </div>
                <div className='p-2 rounded-lg bg-[#D1FAE5] lg:mr-5 mr-2'>
                    <MdOutlineEventNote className='text-[#059669] size-8 ' />
                </div>
            </div>

        </div>
    )
}

export default EarningHero 