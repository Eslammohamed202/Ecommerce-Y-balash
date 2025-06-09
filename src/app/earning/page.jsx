import Balance from '@/components/earning/Balance'
import EarningHeader from '@/components/earning/EarningHeader'
import EarningHero from '@/components/earning/EarningHero'
import RecentPayouts from '@/components/earning/RecentPayouts'
// import RevenueTrends from '@/components/earning/RevenueTrends'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { FaCheckCircle, FaClock, FaCrown, FaShoppingCart, FaUndo } from 'react-icons/fa';

const page = () => {
    return (
        <div>
               <Navbar />
            <EarningHeader />
            <Balance />
            <EarningHero />
            {/* <RevenueTrends /> */}
            <RecentPayouts />


            <div className='flex flex-wrap items-center justify-between container mt-12 mb-12'>
                <div className="bg-white shadow-sm p-6 rounded-lg flex items-start justify-between w-[370px] mt-2 mb-2 ">
                    <div className='flex flex-col gap-2 items-start'>
                        <p className="text-md text-Main font-bold">Refunds</p>
                        <p className="text-xl text-[#FFCD29] font-bold">EGP 240</p>
                        <p className="text-sm text-[#6B7280]">4 refunds this month</p>
                    </div>
                    <div>
                       <FaUndo className="text-[#EF4444]" size={24} />
                    </div>


                </div>
                <div className="bg-white  p-6 rounded-lg flex items-start justify-between w-[370px] mt-2 mb-2 ">
                    <div className='flex flex-col gap-2 items-start'>
                        <p className="text-md text-Main font-bold">Best Seller</p>
                        <p className="text-xl text-[#FFCD29] font-bold">Donuts</p>
                        <p className="text-sm text-[#6B7280]">142 units sold</p>
                    </div>
                    <FaCrown className="text-[#FFCD29]" size={24} />
                </div>
                <div className="bg-white  p-6 rounded-lg flex items-start justify-between w-[370px] mt-2 mb-2 ">
                    <div className='flex flex-col gap-2 items-start'>
                        <p className="text-md text-Main font-bold">Completed Orders</p>
                        <p className="text-xl text-[#FFCD29] font-bold">324</p>
                        <p className="text-sm text-[#6B7280]">This month</p>
                    </div>
                    <FaCheckCircle className="text-[#10B981]" size={24} />
                </div>
            </div>
        </div>
    )
}

export default page