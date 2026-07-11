import { createSlice } from "@reduxjs/toolkit";
const initialState={
    token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null
}

const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state,action){
          
            state.token=action.payload
           
        },
        logout(state){
            state.token=null
        }
    }
})

export const {setToken,logout}= authSlice.actions
export default authSlice.reducer;