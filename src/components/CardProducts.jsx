import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { Addproduct } from '../rtk/Slices/CartSlice';
import { Link } from 'react-router-dom';

function CardProducts() {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.Product)
    

  return (
    <div className='flex flex-wrap'>
    {products.map((prod)=>
      (
        <Card style={{ width: '18rem' ,margin:"auto" ,height:"300px" }} className="mt-3 text-slate-600 mb-3 m-auto  ">
        <div className=' relative  left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <Card.Img style={{ width: '4rem' , margin:"auto" }}  variant="top" src={prod.image} />
        <Card.Body className=''>
          <Card.Title style={{ fontSize:"0.9rem"}}  >{prod.title}</Card.Title>
          <div className='flex justify-between m-3'>
          <Card.Title  >{prod.price}$</Card.Title>
          <Card.Title  >count: {prod.rating.count }</Card.Title>
          </div>
        
<div className='flex justify-between'>
<button  className=' hover:bg-red-600 text-white w-[90px]  p-1 hover:font-bold   rounded bg-slate-600 border  focus:bg-teal-400' onClick={()=>{dispatch(Addproduct(prod))}}>Buy  </button>
<Link  className=' hover:bg-red-600 text-white   w-[90px]  p-1 hover:font-bold  text-decoration-none  rounded bg-slate-600 border  focus:bg-teal-400  ' to={`/Product/${prod.id}`}> Details</Link>
</div>

        </Card.Body>
        </div>
      </Card>
))}
    </div>
  )
}

export default CardProducts

