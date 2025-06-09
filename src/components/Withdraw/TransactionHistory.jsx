import React from 'react';

const TransactionHistory = () => {
  const payouts = [
    { date: 'Apr 15, 2025', amount: 'EGP 1200', method: 'Bank Transfer', status: 'Paid' },
    { date: 'Apr 01, 2025', amount: 'EGP 850', method: 'PayPal', status: 'Pending' },

  ];

  return (
    <div className="container mx-auto p-4 bg-white rounded-xl shadow-md mb-6  ">
        <h2 className="text-xl font-bold text-Main">TransactionHistory</h2>
      <div className=" p-4 ">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-[#6B7280]">Date</th>
              <th className="py-2 text-[#6B7280]">Amount</th>
              <th className="py-2 text-[#6B7280]"> Method</th>
              <th className="py-2 text-[#6B7280]">Status</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 text-[#6B7280]">{payout.date}</td>
                <td className="py-2 text-[#6B7280]">{payout.amount}</td>
                <td className="py-2 text-[#6B7280]">{payout.method}</td>
                <td className="py-2 text-[#6B7280] flex items-center">
                  {payout.status === 'Paid' ? (
                    <div className='bg-[#D1FAE5] text-[#047857] py-1 px-3 rounded-full text-sm'>
                      Paid
                    </div>
                  ) : (
                    <div className="flex items-center bg-[#FEF3C7] text-[#B45309] py-1 px-3 rounded-full text-sm">
                      
                      Pending
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
  );
};
 
export default TransactionHistory;
