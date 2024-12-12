import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sec2, sec5, sec7 } from "./Why SpringAPI";

const initialState = {
    sec2: [],
    sec5: [],
    sec7: []
}
export const sec2Data = createAsyncThunk("sec2/sec2Data", async () => {
    const response = await sec2()
    if (response && response.status == 200) {
        return response.data
    }
})

export const sec5Data = createAsyncThunk("sec5/sec5Data", async () => {
    const response = await sec5()
    if (response && response.status == 200) {
        return response.data
    }
})

export const sec7Data = createAsyncThunk("sec7/sec7Data", async () => {
    const response = await sec7()
    if (response && response.status == 200) {
        return response.data
    }
})

const WhySpring = createSlice({
    name: 'whySpring',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sec2Data.fulfilled, (state, action) => {
            state.sec2 = action.payload
        }).addCase(sec5Data.fulfilled, (state, action) => {
            state.sec5 = action.payload
        }).addCase(sec7Data.fulfilled, (state, action) => {
            state.sec7 = action.payload
        })
    }
})  

export default WhySpring.reducer
