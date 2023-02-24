import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { deleteproduct } from '../rtk/Slices/CartSlice';
import { BsFillTrashFill } from "react-icons/bs";


function Cart() {
    const Cart =useSelector(state=>state.Cart)
    const dispatch = useDispatch()
    const totalprice =Cart.reduce(
      (acc, cart) => {acc += cart.price * cart.quantity
      return acc},0);

      console.log(Cart)
  
  return (
    <div className='mt-[100px] '> 
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>image</th>
          <th>Price</th>
          <th>quantity</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
      {Cart.map((item)=>(
          <tr>
            <td><img  style={{ width: '4rem' , margin:"auto" }}  src={item.image}></img></td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td><button className=' bg-slate-600 rounded-full font-bold text-white  p-2 hover:bg-red-500  ' onClick={()=>{dispatch(deleteproduct(item))}}><BsFillTrashFill/> </button></td>
          </tr>

          ))}
        <tr>
          
        <td>Total Price</td>
          <td colSpan={3}>{totalprice.toFixed(2)}$</td>
        </tr>
      </tbody>
    </Table>

  
    </div>
  )
}

export default Cart