import { createSlice } from '@reduxjs/toolkit'


export const CartSlice = createSlice({
  name: 'CartSlice',
  initialState:[],
  reducers: {
    Addproduct:(state,action)=>{
        const finditem = state.find((item)=>item.id === action.payload.id)
        if(finditem){
          finditem.quantity +=1
        }else{
          const itemsclone ={...action.payload , quantity:1}
          state.push(itemsclone)
        }},
    deleteproduct:(state,action)=>{
        return state.filter((item)=>item.id !== action.payload.id)
    },
    Clear:(state,action)=>{
      return []
      }
},


  }
)

export const {Addproduct,deleteproduct,Clear} = CartSlice.actions

export default CartSlice.reducer