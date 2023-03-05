import React from 'react';

const Footer = () => {
    return (
        <div className='flex py-[10px] px-[10px] bg-white justify-between'>
            <div>
                <img className='w-[20px] h-[20px] ml-[10px] '  src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt="home logo" />
                <p className='text-[13px]'>Home</p>
            </div>
            <div>
                <img className='w-[20px] h-[20px]  ml-[10px] '  src="https://w7.pngwing.com/pngs/754/150/png-transparent-financial-planner-business-graph-of-a-function-business-angle-text-people-thumbnail.png" alt="trading logo" />
                <p>Trading</p>
            </div>
            <div >
            <div className="avatar">
        <div className="w-[32px] h-[32px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
         <img className='w-[30px] h-[30px] rounded-full' src="https://media.licdn.com/dms/image/C560BAQH0FaeOknHxFg/company-logo_200_200/0/1670521590918?e=2147483647&v=beta&t=9T44WdyRvJBkJXI8dm7hhM1H8ukAUmLqozbaPluz2tM" alt="logo" /> 
         </div>
         </div>
                <p>Invest</p>
            </div>
            <div>
                <img  className='w-[20px] ml-[10px] h-[20px]' src="https://freepngimg.com/download/social_media/62953-icons-media-share-computer-design-social-icon.png" alt="Share icon" />
                <p>Share</p>
            </div>
            <div>
                <img className='w-[20px] ml-[10px] h-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCTbivzwipgFl1wPKPLBqNX64UF9aFZ7GUQ&usqp=CAU" alt="human icon" />
                <p>Mine</p>
            </div>
        </div>
    );
};

export default Footer;