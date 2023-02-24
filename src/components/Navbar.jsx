import React, { useState } from 'react'
import { BsBag  } from "react-icons/bs";
import {AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import {useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
 
function Navbars() {
  const Cart =useSelector(state=>state.Cart)
  const totalprice =Cart.reduce(
    (acc, cart) => {acc += cart.price * cart.quantity
    return acc},0);

 const[nav,setNav]=useState(true)
const handelnav=()=>{
    setNav(!nav)
}

  return (
<div className='flex items-center z-50 top-0 fixed  w-[100%] justify-between p-1  font-bold text-[white] cursor-pointer bg-slate-600 '  >


<Link to="/"  className=' text-decoration-none text-[30px] font-bold !text-[#eee] '>ECO</Link>

<div>
<ul className='hidden md:flex  items-center space-x-1  '>
<li className="p-2"><Link to="/"  className='text-decoration-none   font-bold  !text-[#eee]  '>home</Link>
</li>
<li className="p-2 flex items-center" onClick={handelnav}><BsBag/> <Badge bg="secondary">{Cart.length}</Badge></li>

</ul>
</div>

<div onClick={handelnav} className="block md:hidden">
{!nav? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}

</div>

<div  className={!nav?'top-0 fixed h-full left-0 w-[55%]  border-r border-slate-800 z-50 bg-slate-500 ease-in-out duration-500 cart_part':'fixed left-[-200%]'}>

<div className='flex justify-between items-center m-3'>
<Link to="/"  className='text-decoration-none   text-3xl font-bold  !text-[#eee]   '>ECO</Link>
<AiOutlineClose size={30} onClick={handelnav}/>
</div>

<div className='text-start ml-2 mt-14 space-y-8 '>

<div className=' mine'>
<h4 className='uppercase'>mine :</h4>
<div className='flex flex-col '>
<p className='text-decoration-none w-fit p-1   focus:bg-teal-400 rounded   !text-slate-600 uppercase' >Total price (<strong>{totalprice.toFixed(2)}$</strong> ) </p>
<Link to='/Cart' className='text-decoration-none w-fit p-1  focus:bg-teal-400 rounded  !text-slate-600'> your Cart</Link>
<Link to='/' className='text-decoration-none w-fit p-1   focus:bg-teal-400 rounded   !text-slate-600'>let's shopping</Link>
<Link to='/Complaint' className='text-decoration-none w-fit p-1   focus:bg-teal-400 rounded   !text-slate-600'>Complaint</Link>
</div>
</div>

<div className='payment '>
<h4 className='uppercase'>payment :</h4>
<div className="flex flex-wrap space-x-3 " >
<img width="70px" className=' p-1' src='https://cdn.shopify.com/s/files/1/2526/5844/files/payment_icon_6_55x_e3ea7114-93b6-452b-a9c1-d29109e649f6_55x.png?v=1614707821' alt='img'/>
<img width="70px" className=' p-1' src='https://cdn.shopify.com/s/files/1/2526/5844/files/payment_icon_4_55x_8d074819-aab1-4d7a-bc16-b0b1c2db3aa2_55x.png?v=1614707821' alt='img'/>
<img width="70px"className=' p-1'src='https://cdn.shopify.com/s/files/1/2526/5844/files/payment_icon_5_55x_adf6c6b1-57cc-4b9a-8d9c-935e37e01d8d_55x.png?v=1614707821' alt='img'/>
<img width="70px"className=' p-1'src='https://cdn.shopify.com/s/files/1/2526/5844/files/payment_icon_3_55x_77bfaf28-f7cd-4454-ba42-28869c53f406_55x.png?v=1614707821' alt='img'/>
<img width="70px" className=' p-1' src='https://cdn.shopify.com/s/files/1/2526/5844/files/payment_icon_2_55x_22fdc273-6ce8-45aa-97eb-031979d677f8_55x.png?v=1614707821' alt='img'/>
<img width="70px" className=' p-1' src='https://cdn.shopify.com/s/files/1/2526/5844/files/payment_icon_1_55x_236d5e56-f24e-4cf7-92c8-7583ca7596c4_55x.png?v=1614707821' alt='img'/>
</div>
</div>

<div className='contact '>
<h4 className='uppercase'>contact :</h4>
<div className='flex flex-col '>
<a href='https://www.linkedin.com/in/ahmed-mehana-b39967240/' target="_blank" className='text-decoration-none w-fit p-1  focus:bg-teal-400 rounded   !text-slate-600'> LinkedIN</a>
<a href='https://github.com/'  target="_blank" className='text-decoration-none w-fit p-1  focus:bg-teal-400 rounded   !text-slate-600'>Github</a>
</div>
</div>

</div>
</div>
</div>
  )
}

export default Navbars
