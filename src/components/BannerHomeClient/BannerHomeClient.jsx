'use client'

import Image from 'next/image'


export default function BannerHome() {
  return (
    <>
      {/* Start Banner */}
      <div className="flex items-center justify-between bg-[#1C573E] mx-6 my-4 rounded-2xl h-[400px] mb-[50px]">
        <div>
            <Image
                className="relative left-[-30px] top-[30px] opacity-[0.19]"
                width={155}
                height={155}
                src='/photoBanner.png'
                alt=""
            />

            <Image
                className="relative top-[170px] left-[-25px] opacity-[0.19]"
                width={155}
                height={155}
                src='/cabbage.png'
                alt="" 
            />

            <Image
                className="relative left-[330px] top-[35px] opacity-[0.19]"
                width={155}
                height={155}
                src='/photoBanner.png'
                alt=""
            />
        </div>

        <div className="mx-[120px]">
          <h1 className="font-bold font-inria-sans text-[#F5F6DB] text-3xl font-size-revert leading-[40px]">
            Your favorite shop, 
            just <br /> a doorstep away. 
          </h1>
          <button className="bg-[#F7F2E8] w-[120px] h-[40px] rounded-xl mt-5 text-[#0E554F]">Shop now</button>
        </div>

        <div className="relative w-[500px] h-[400px] overflow-hidden mx-[120px]">
            <Image
                className="absolute top-0 left-0 mt-[70px]"
                width={400}
                height={400}
                src='/photos.png'
                alt=""
            />
        </div>
      </div>
      {/* End Banner */}

      <h2 className='text-[#1C573E] pl-[25px] font-bold leading-24 text-[36px] '>Categories</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 ml-6 mr-6 my-4 mb-[50px] ml-[25px]">

        <div className="flex items-center justify-between bg-[#FFFFFF] rounded-3xl">
            <div className="bg-[#FFFFFF] mb-[65px] ">
                <h3 className='ml-[15px] text-[#0B332B] font-inter font-semibold text-[24px]  '>Milk & Dairy</h3>
                <p className='ml-[15px] text-[#333333A8] font-inter font-medium text-[18px] leading-100 '>In store delivery</p>
            </div>

            <Image
                className="mt-[15px] relative right-[28px] top-2"
                width={155}
                height={155}
                src='/dairy2.png'
                alt=""
            />
        </div>

        <div className="flex items-center justify-between bg-[#FFFFFF] rounded-2xl">
            <div className="bg-[#FFFFFF] mb-[65px] ">
                <h3 className='ml-[15px] text-[#0B332B] font-inter font-semibold text-[24px]  '>Desserts</h3>
                <p className='ml-[15px] text-[#333333A8] font-inter font-medium text-[18px] leading-100 '>Comical free</p>
            </div>

            <Image
                className="mt-[15px] relative right-[28px] top-2"
                width={155}
                height={155}
                src='/image.png'
                alt=""
            />
        </div>

        <div className="flex items-center justify-between bg-[#FFFFFF] rounded-2xl">
            <div className="bg-[#FFFFFF] mb-[65px] ">
                <h3 className='ml-[15px] text-[#0B332B] font-inter font-semibold text-[24px]  '>Bakery</h3>
                <p className='ml-[15px] text-[#333333A8] font-inter font-medium text-[18px] leading-100 '>Comical free</p>
            </div>

            <Image
                className="mt-[15px] relative right-[28px] top-2"
                width={155}
                height={155}
                src='/image2.png'
                alt=""
            />
        </div>

        <div className="flex items-center justify-between bg-[#FFFFFF] rounded-2xl">
            <div className="bg-[#FFFFFF] mb-[65px] ">
                <h3 className='ml-[15px] text-[#0B332B] font-inter font-semibold text-[24px]  '>Beverages</h3>
                <p className='ml-[15px] text-[#333333A8] font-inter font-medium text-[18px] leading-100 '>Comical free</p>
            </div>

            <Image
                className="mt-[15px] relative right-[28px] top-2"
                width={155}
                height={155}
                src='/image3.png'
                alt=""
            />
        </div>


        {/* <div className="bg-[#BBF572] w-[70px] h-[90px]">
          <Link href="/todaysOffer">
            <div>
              <i className="fa-solid fa-arrow-right mr-2 text-center mx-5 my-3 bg-[#FFFFFF] p-2 rounded-full"></i>
              <p className="text-center my-[-10px] font-inria-sans text-[#142922] font-size-[20px]">see all</p>
            </div>
          </Link>
        </div> */}
      </div>
    </>
  )
}
