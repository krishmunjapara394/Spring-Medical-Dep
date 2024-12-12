import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firstMain, main, sidebar } from "./Blog postAPI";


const initialState = {
    sidebar: [],
    firstMain: [],
    main: []
}

export const sidebarData = createAsyncThunk("sidebar/sidebarData", async () => {
    const response = await sidebar()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const firstMainData = createAsyncThunk("firstMain/firstMainData", async () => {
    const response = await firstMain()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const mainData = createAsyncThunk("main/mainData", async () => {
    const response = await main()
    if (response && response.status == 200) {
        return response.data.data
    }
})


const BlogPost = createSlice({
    name: 'adminPanal',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sidebarData.fulfilled, (state, action) => {
            state.sidebar = action.payload
        }).addCase(firstMainData.fulfilled, (state, action) => {
            state.firstMain = action.payload
        }).addCase(mainData.fulfilled, (state, action) => {
            state.main = action.payload
        })
    }
})

export default BlogPost.reducer