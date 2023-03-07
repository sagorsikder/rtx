import React from 'react'

function InvestPart() {
  return (
    <div className='flex rounded-[8px] bg-white m-[8px] p-[12px]'>
        <div className='w-[140px] h-[92px]'>
        <img className='w-full h-full' src='https://i.ibb.co/8KQBWsB/Logo.png' alt='logo'/>
        </div>

        <div className='ml-[10px]'>
          <p className='text-[#2E82A5] text-[14px]'>Daily rate: <span className='font-bold text-[14px] text-[#12B298]'>19.00%</span> </p>
          <p  className='text-[#2E82A5] text-[14px]'>Cycle: <span className='font-bold text-[14px] text-[#3783A1]'>100 Day</span> </p>
          <p  className='text-[#2E82A5] text-[14px]'>Number of purchase: <span className='font-bold text-[14px] text-[#3783A1]'>10</span> </p>
          <p  className='text-[#2E82A5] text-[14px]'>Profit Type: Principal and interest due</p>
        </div>
      </div>
  )
}

export default InvestPart
