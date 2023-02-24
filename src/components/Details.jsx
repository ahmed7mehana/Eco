import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import { Addproduct } from '../rtk/Slices/CartSlice';

function Details() {
    const params =useParams()
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.Product)
    const Details =products[params.Productid-1]
  return (
    <div className='p-4 mt-[100px]'>
    <h6 className=' mb-6 uppercase  bg-slate-600 rounded-full  text-white   p-2'>{Details.title}</h6>
    <div className='flex justify-between items-center flex-col  flex-wrap space-x-4 space-y-5'>

    <div className='m-auto'>
    <h4 className=' bg-slate-600 rounded-full font-bold text-white uppercase  p-3 '>category: {Details.category}</h4>
    <img className='w-[40%] m-auto' src={Details.image} alt='img'/>
    <h2 className='uppercase  bg-slate-600 rounded-full font-bold text-white mt-4  p-2 hover:bg-green-500 flex items-center m-auto justify-center w-fit '>rate: {Details.rating.rate} <AiFillStar/> </h2>
    <button className=' bg-slate-600 rounded-full font-bold text-white  p-2 hover:bg-red-500 m-3 ' > price: {Details.price} $</button>
    <button className=' bg-slate-600 rounded-full font-bold text-white  p-2 hover:bg-red-500  m-3' > count: {Details.rating.count}</button>
    </div>

   <div className='space-x-4 space-y-5'>
   <p className=' mt-20 font-bold subpixel-antialiased ' > <span className='uppercase bg-slate-600 rounded-full font-bold text-white mt-4  p-2 '>Description :</span> <br/> <br/> {Details.description}</p>
   </div>

   <button  className='  hover:bg-red-600 text-white w-[90px]  p-1 hover:font-bold   rounded bg-slate-600 border  focus:bg-teal-400' onClick={()=>{dispatch(Addproduct(Details))}}>  Buy</button>


    </div>
    </div>
    
  )
}

export default Details
