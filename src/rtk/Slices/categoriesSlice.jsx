import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const categories =createAsyncThunk("categories/fetchcategories",async()=>{
    const res =await fetch("https://fakestoreapi.com/products/categories")
    const data = await res.json()
    return data
})



export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState:[],
  reducers: {

  },
extraReducers:(builder)=>{
    builder.addCase(categories.fulfilled,(state,action)=>{
        return action.payload
    })
}
})

export const {cateproduct } = categoriesSlice.actions

export default categoriesSlice.reducer