import React from 'react'
import InvestPart from './InvestPart'

function Invest() {

  const data = [
    {
      rate:'19.00',
      cycle: '100 Day',
      purchase:10,
      profit: 'Principal and interest due'
    },
    {
      rate:'19.00',
      cycle: '100 Day',
      purchase:10,
      profit: 'Principal and interest due'
    },
    {
      rate:'19.00',
      cycle: '100 Day',
      purchase:10,
      profit: 'Principal and interest due'
    },
    {
      rate:'19.00',
      cycle: '100 Day',
      purchase:10,
      profit: 'Principal and interest due'
    },
    {
      rate:'19.00',
      cycle: '100 Day',
      purchase:10,
      profit: 'Principal and interest due'
    }
  ]
  return (
    <div>
      <p className='text-right text-[14px] text-[#2E82A5] bg-white py-[12px] px-[16px]'>Investment record</p>

      {
        data.map(d=><InvestPart></InvestPart>)
      }
    </div>
  )
}

export default Invest
