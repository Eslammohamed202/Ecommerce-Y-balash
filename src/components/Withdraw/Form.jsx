"use client"
import React, { useState } from 'react';
import { FaUniversity, FaMobileAlt, FaPaypal ,FaLongArrowAltRight} from 'react-icons/fa';

const Form = () => {
  const [selectedMethod, setSelectedMethod] = useState('Bank Transfer');

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="container  p-4">
      <form className="bg-white p-6 rounded-lg shadow-md space-y-6 ">
        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium text-Main">AMOUNT TO WITHDRAW</label>
          <input
            type="text"
            placeholder="EGP 0.00"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Main"
          />
        </div>

        {/* Withdrawal Method Selection */}
        <div>
          <label className="block text-sm font-medium text-Main">SELECT WITHDRAW METHOD</label>
          <div className="mt-1 flex space-x-2">
            <button
              type="button"
              onClick={() => handleMethodChange('Bank Transfer')}
              className={`flex-1 p-2 border rounded-md flex items-center justify-center space-x-2 ${
                selectedMethod === 'Bank Transfer' ? 'border-Main ' : 'border-gray-300'
              }`}
            >
              <FaUniversity className="text-gray-600" />
              <span>Bank Transfer</span>
            </button>
            <button
              type="button"
              onClick={() => handleMethodChange('Mobile Wallet')}
              className={`flex-1 p-2 border rounded-md flex items-center justify-center space-x-2 ${
                selectedMethod === 'Mobile Wallet' ? 'border-Main ' : 'border-gray-300'
              }`}
            >
              <FaMobileAlt className="text-gray-600" />
              <span>Mobile Wallet</span>
            </button>
            <button
              type="button"
              onClick={() => handleMethodChange('PayPal')}
              className={`flex-1 p-2 border rounded-md flex items-center justify-center space-x-2 ${
                selectedMethod === 'PayPal' ? 'border-Main ' : 'border-gray-300'
              }`}
            >
              <FaPaypal className="text-gray-600" />
              <span>PayPal</span>
            </button>
          </div>
        </div>

        {/* Account Number Input */}
        <div>
          <label className="block text-sm font-medium text-Main">ACCOUNT NUMBER</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Main"
          />
        </div>

        {/* Account Holder Name Input */}
        <div>
          <label className="block text-sm font-medium text-Main">ACCOUNT HOLDER NAME</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Main"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-Main text-white p-3 rounded-md flex items-center justify-center space-x-2 hover:bg-green-900"
        >
          <span>WITHDRAW NOW</span>
         <FaLongArrowAltRight className='size-6'/>
        </button>
      </form>
    </div>
  );
};

export default Form;