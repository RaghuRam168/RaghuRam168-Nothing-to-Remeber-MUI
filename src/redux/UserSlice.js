import {createSlice} from '@reduxjs/toolkit'
export const UserSlice= createSlice({
    name:'userInfo',
    initialState:{
        id:null,
        userName:'',
        email:'',
        phoneNo:''      
    },
    reducers:{
        updateUser:(state,action)=>{
            state.id=action.payload.id
            state.email=action.payload.email
            state.phoneNo=action.payload.phoneNo
            state.userName=action.payload.userName
        }
    }
})
export const {updateUser} = UserSlice.actions
export default UserSlice.reducer