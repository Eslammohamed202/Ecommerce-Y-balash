import Link from 'next/link';
import React from 'react';
import { FiInfo } from 'react-icons/fi';

const Balance = () => {
    return (
        <div className='bg-white rounded-xl shadow-sm  p-4 md:p-6 mt-6 container'>
            <h3 className="text-[#1C573E] font-semibold text-md w-full md:w-auto mb-4">Current balance</h3>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0  mx-auto ">

                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-10">
                    {/* Current Account Balance */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#1C573E] text-white rounded-full flex items-center justify-center text-lg font-bold">
                            ₦
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                                Current account balance <FiInfo className="inline" />
                            </p>
                            <h2 className="text-[#1C573E] text-xl font-bold">EGP 128k</h2>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-12 w-px bg-gray-200" />

                    {/* Available for Withdrawal */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-yellow-400 text-white rounded-full flex items-center justify-center text-lg font-bold">
                            Ⓦ
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                                Available for withdrawal <FiInfo className="inline" />
                            </p>
                            <h2 className="text-[#1C573E] text-xl font-bold">EGP 512.64</h2>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-12 w-px bg-gray-200" />

                    {/* Withdraw Button */}
                    <Link href="/Withdraw-balance">
                        <button className="bg-[#1C573E] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                            Withdraw balance
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Balance;
