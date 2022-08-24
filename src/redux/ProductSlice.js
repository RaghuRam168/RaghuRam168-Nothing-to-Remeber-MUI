import { createSlice } from "@reduxjs/toolkit";
import data from '../data/Data'
export const ProductSlice = createSlice({
  name: "ProductsInfo",
  initialState: {
    pending: false,
    error: false,
    items: [...data],
  },
  reducers: {
    startProductFetch: (state) => {
      state.pending = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.pending = false;
    },
    fetchProductsError: (state) => {
      state.pending = false;
      state.error = true;
    },
    addProduct: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    editProduct: (state, action) => {
      console.log(action.payload)
      for (var index = 0; index < state.items.length; index++) {
        if (state.items[index].id === action.payload.id) {
          
          state.items[index].cost = action.payload.cost;
          state.items[index].name = action.payload.name;
          state.items[index].photo = action.payload.photo;
          state.items[index].stock = action.payload.stock;
          state.items[index].selected = action.payload.selected;
          state.items[index].category = state.items.category 
          break;
        }
      }
    },
    editProductQuantityInProducts: (state, action) => {
      console.log(action.payload)
      for (var index = 0; index < state.items.length; index++) {
        if (state.items[index].id === action.payload.id) {
          state.items[index].selected = action.payload.quantity;
          break;
        }
      }

    }
    ,
    deleteProduct: (state, action) => {
     
      for (var index = 0; index < state.items.length; index++) {
        if (state.items[index].id === action.payload.id) {
          console.log(action.payload)
          state.items.splice(index, 1);
          break;
        }
      }
    },
  },
});

export const {startProductFetch,fetchProductsSuccess,fetchProductsError,addProduct,editProduct, editProductQuantityInProducts,deleteProduct} = ProductSlice.actions
export default ProductSlice.reducer
