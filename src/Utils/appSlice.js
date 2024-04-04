
import { createSlice } from "@reduxjs/toolkit";

const appSlicee = createSlice({
    name:"app",
    initialState:{
        open: true,
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.open = !state.open;
        }
    }
})
export const {toggleSidebar}= appSlicee.actions;
export default appSlicee.reducer;