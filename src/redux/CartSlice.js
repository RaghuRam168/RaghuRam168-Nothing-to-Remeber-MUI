import {createSlice,current} from '@reduxjs/toolkit'
export const CartSlice = createSlice({
    name:'CartProductsInfo',
    initialState:{
        items:[]
    },
    reducers:{
        addProduct:(state,action)=>{
            state.items=[...state.items,action.payload]
            console.log((state.items))
        },
        editProductQuantityInCart:(state,action)=>{
         //   console.log(action.payload)
            for(var index =0;index<state.items.length;index++)
            {
                
                if(state.items[index].id===action.payload.id)
                {
                    if(action.payload.quantity<=0)
                    {
                        state.items.splice(index,1)
                    }
                    else
                    {
                        state.items[index].quantity=action.payload.quantity
                    }
                   break
                }
            }
        }
    }
})

export const {addProduct,editProductQuantityInCart} = CartSlice.actions
export default CartSlice.reducer