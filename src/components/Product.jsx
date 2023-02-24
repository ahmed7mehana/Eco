import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { categories } from '../rtk/Slices/categoriesSlice'
import { fetchapi } from '../rtk/Slices/productSlice'
import CardProducts from './CardProducts'
import Categoty from './Categoty'
import Main from './Main'

function Product() {



  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(fetchapi())
   dispatch(categories())
  },[])

  
  return (
    <div>
    <Main/>
    <div id='Product' className='mt-3   '>
    <h2 className=' bg-slate-600 rounded text-white italic uppercase  mt-3 w-[80%] m-auto '>    Products   </h2>
    <Categoty/>
    <CardProducts/>
    </div>
    </div>
    

  )
}

export default Product