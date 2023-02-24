import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchapi =createAsyncThunk("productslice/fetchdata",async()=>{
    const res =await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
})


export const productslice = createSlice({
  name: 'productslice',
  initialState:[],
  reducers: {

  },
extraReducers:(builder)=>{
    builder.addCase(fetchapi.fulfilled,(state,action)=>{
        return action.payload
    })
}
})

export const {cateproduct} = productslice.actions

export default productslice.reducer