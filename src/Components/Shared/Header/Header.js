import React from 'react';

const Header = () => {
    return (
        <div className='flex py-[10px] px-[10px] bg-white justify-between'>
           
          <div className='flex'>
          <div className="avatar">
        <div className="w-[28px] h-[28px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
         <img className='w-[30px] h-[30px] rounded-full' src="https://media.licdn.com/dms/image/C560BAQH0FaeOknHxFg/company-logo_200_200/0/1670521590918?e=2147483647&v=beta&t=9T44WdyRvJBkJXI8dm7hhM1H8ukAUmLqozbaPluz2tM" alt="logo" /> 
         </div>
         </div>
        <p className='font-bold text-[15px] ml-[10px]'>https://trx.pet</p>

          </div>

            <div className='flex'>
                <span className='border rounded-full px-[10px] text-[12px]'>English</span>
                <img className='w-[30px] h-[30px] p-1 mx-2 rounded-full' src="https://www.shutterstock.com/shutterstock/photos/1135840925/display_1500/stock-vector-alarm-vector-icon-on-transparent-background-alarm-icon-1135840925.jpg" alt="alerm" />
                <img className='w-[30px] h-[30px] p-1 bg-yellow-400 rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJASkYCOk4NkuNL1nPTXXIaMaSDEXSOs-qQ&usqp=CAU" alt="support" />
            </div>
        </div>
    );
};

export default Header;