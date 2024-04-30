
import { createSlice } from "@reduxjs/toolkit";

const appSlicee = createSlice({
    name: "app",
    initialState: {
        open: true,
        video: [],
        category: "All",
        searchSuggestion: [],

    },
    reducers: {
        toggleSidebar: (state) => {
            state.open = !state.open;
        },
        setHomeVideo: (state, action) => {
            state.video = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setSearchSuggestion: (state, action) => {
            state.searchSuggestion = action.payload;
        }

    }
})
export const { toggleSidebar, setHomeVideo, setCategory,setSearchSuggestion } = appSlicee.actions;
export default appSlicee.reducer;