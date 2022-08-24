import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './UserSlice'
import ProductReducer from './ProductSlice'
import CartReducer from './CartSlice'

export default configureStore({
    reducer:{
        user:UserReducer,
        products:ProductReducer,
        cart:CartReducer
    }
})