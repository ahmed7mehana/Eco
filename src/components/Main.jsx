import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";

function Main() {
  return (
    <div className='main '>
    <div className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col  justify-center text-white font-bold'>
    <h1 className='uppercase'>Eco <span className='text-[#475569]'>Thebest online store in the Middle East</span> </h1>
    <p className='text-[23px]' >Now you can buy at the best price</p>
    <a href='/#Product' className=' flex items-center  mr-auto ml-auto no-underline  text-white font-bold text-[18px] '>shoping now <AiFillCaretDown/></a>
    </div>
    </div>
  )
}

export default Main