'use client'
import React, {useState} from 'react';
import { AiFillBank,AiFillPhone,AiOutlineSearch  } from "react-icons/ai";

//import { products } from '../data';

//import ArrowImg from '../assets/img/product/cards/arrow.svg'



const Features = () => {

  const [index,setIndex] = useState(1)
 // const {cardss } = products

  return (
  <div>
      <div className='mt-[140px]'>

      <h2 className="text-4xl font-bold text-purple-700 mb-16 mt-12 text-center">
     تحصل على منزل احلامك في  3 خطوات بسيطة
      </h2>
      </div>

  <div className='flex lg:mx-[130px] mt-[80px] flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px] ml-[-60px]'>

   
        <div>

          <div  className={`w-[350px] h-[350px]  flex flex-col justify-center items-center  ml-[150px] p-[65px] text-center rounded-[12px] cursor-pointer transition-all bg-white shadow-2xl hover:bg-purple-600/20`}>

            <div className='mb-6'>

            <AiOutlineSearch  className='mx-auto w-[160px] h-[50px]' />

            </div>

            <div className='mb-3 text-[30px] font-medium '>
            أولا قم بالتصفح و البحث عن المنزل المناسب لك
            </div>
           

           

          </div>

        </div>

<div>

<div  className={`w-[350px] h-[350px]  flex flex-col justify-center items-center  ml-[150px] p-[65px] text-center rounded-[12px] cursor-pointer transition-all bg-white shadow-2xl hover:bg-purple-600/20`}>

  <div className='mb-6'>
  <AiFillPhone  className='mx-auto w-[160px] h-[50px]' />

  </div>
  <div className='mb-3 text-[30px] font-medium '>
  ثانيا اتصل بصاحب المنزل
  </div>
 

  {/* <img src={ArrowImg} />  */}



</div>
</div>


<div>
<div  className={`w-[350px] h-[350px]  flex flex-col justify-center items-center  ml-[150px] p-[65px] text-center rounded-[12px] cursor-pointer transition-all bg-white shadow-2xl hover:bg-purple-600/20`}>
  <div className='mb-6'>

  <AiFillBank  className='mx-auto w-[160px] h-[50px]' />

  </div>
  <div className='mb-3 text-[30px] font-medium '>
  ثالثا قم بامضاء العقد و مدة الكراء و اغلاق الصفقة
  </div>
 

  {/* <img src={ArrowImg} />  */}



</div>
</div>



</div>
</div>
  
)
};

export default Features;