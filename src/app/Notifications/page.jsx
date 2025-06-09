import React from 'react';
import { IoCartSharp } from "react-icons/io5";
import { FiCheckCircle } from 'react-icons/fi';
import { AiOutlineWarning } from 'react-icons/ai';
import NotificationsHeader from '@/components/Notifications/NotificationsHeader';
import Navbar from '@/components/Navbar/Navbar';

const page = () => {
    return (
        <div>
               <Navbar />
            <NotificationsHeader />

            <div className="container mx-auto p-4">
                <div className="space-y-4">
                    <h1 className="text-[#4B5563] text-[18px]">Today</h1>
                    {/* Notification 1 */}
                    <div className="p-4 rounded-lg shadow bg-white flex justify-between items-start">
                        <div className="flex items-start">
                            <div className="mr-2 mt-1 p-2 bg-[#DBEAFE] rounded-full">
                                <IoCartSharp className="text-[#2563EB]" />
                            </div>
                            <div>
                                <p className='text-[18px] font-semibold text-[#111827]'>New Order Received</p>
                                <p className="text-xs text-[#4B5563] mb-2">
                                    New Order Received - Order #YB1034 is pending shipment. Customer: John Doe
                                </p>
                                <a href="#" className="text-[#2563EB] text-sm ">
                                    View Order Details →
                                </a>
                            </div>
                        </div>
                                                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>

                    </div>

     <h1 className="text-[#4B5563] text-[18px]">Yesterday</h1>
                    {/* Notification 1 */}
                    <div className="p-4 rounded-lg shadow bg-white flex justify-between items-start">
                        <div className="flex items-start">
                            <div className="mr-2 mt-1 p-2 bg-[#DBEAFE] rounded-full">
                                <IoCartSharp className="text-[#2563EB]" />
                            </div>
                            <div>
                                <p className='text-[18px] font-semibold text-[#111827]'>New Order Received</p>
                                <p className="text-xs text-[#4B5563] mb-2">
                                    New Order Received - Order #YB1034 is pending shipment. Customer: John Doe
                                </p>
                                <a href="#" className="text-[#2563EB] text-sm ">
                                    View Order Details →
                                </a>
                            </div>
                        </div>
                                                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                                                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
