import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsFillEmojiWinkFill } from "react-icons/bs";

function Categoty() {

const categories = useSelector((state)=>state.categories)
const [Caprud,setCaprud]=useState()
const [Show,setShow]=useState(true)

const Categoryprod=(name)=>{
        fetch(`https://fakestoreapi.com/products/category/${name}`)
        .then(res=>res.json())
        .then(json=>setCaprud(json)
        )
    }

useEffect(()=>{
        Categoryprod()
       },[])


  return (
    <div >
    <div className='flex   flex-wrap   justify-center p-5'>  
    <button onClick={
        ()=>{
            setShow(true)}
      
    }   className='hover:bg-red-600 hover:uppercase w-[70px]  text-white p-2 text-decoration-none  rounded bg-slate-600 border hover:font-bold focus:bg-teal-400'>All</button> 
    {categories.map((cat)=>
        (
    <div key={cat.id} >
    <button onClick={
        ()=>{Categoryprod(cat)
            setShow(false)}
      
}   className=' w-[181px] hover:bg-red-600 text-white p-2 hover:uppercase   text-decoration-none  rounded bg-slate-600 border hover:font-bold focus:bg-teal-400'>{cat}</button>
    </div>
    ))}
    </div>

    <div className=' bg-slate-600 flex  flex-wrap rounded p-5 justify-center  space-x-8'>
    {Show?(<div> 
        <h2   className=' text-white flex flex-col items-center uppercase  flex-wrap' >Hope you enjoy here <BsFillEmojiWinkFill className='m-2'/></h2>
        </div>):(<div className='flex  justify-center flex-wrap rounded   '>{Caprud.map((item)=>(
        <div>
        <img width="150px"  className=' rounded h-[150px] p-1 m-2' src={item.image} alt='img'/>
        <Link  className=' hover:bg-red-600 text-white p-1  text-decoration-none  rounded bg-slate-600 border focus:bg-teal-400' to={`/Product/${item.id}`}> Details</Link>
        </div>
      ))}</div>)}
 


        </div>
  
    </div>
  )
}

export default Categoty
