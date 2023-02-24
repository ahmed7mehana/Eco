import { configureStore } from '@reduxjs/toolkit'

import CartSlice from './Slices/CartSlice'
import categoriesSlice from './Slices/categoriesSlice'
import productSlice  from './Slices/productSlice'

export const Store = configureStore({
  reducer: {
    Product:productSlice ,
    Cart:CartSlice ,
    categories:categoriesSlice ,

  },
})