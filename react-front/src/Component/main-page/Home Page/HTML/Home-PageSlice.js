import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { navbar1, sec2, sec3, sec4_1, sec4_2, sec6, sec7_1, sec7_2 } from "./Home-PageAPI";

const initialState = {
    navbar1: [],
    sec2: [],
    sec3: [],
    sec4_1: [],
    sec4_2: [],
    sec6: [],
    sec7_1: [],
    sec7_2: []
}

export const navbar1Data = createAsyncThunk("navbar1/navbar1Data", async () => {
    const response = await navbar1()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const sec2Data = createAsyncThunk("sec2/sec2Data", async () => {
    const response = await sec2()
    if (response && response.status == 200) {
        return response.data
    }
})

export const sec3Data = createAsyncThunk("sec3/sec3Data", async () => {
    const response = await sec3()
    if (response && response.status == 200) {
        return response.data
    }
})

export const sec4_1Data = createAsyncThunk("sec4_1/sec4_1Data", async () => {
    const response = await sec4_1()
    if (response && response.status == 200) {
        return response.data
    }
})

export const sec4_2Data = createAsyncThunk("sec4_2/sec4_2Data", async () => {
    const response = await sec4_2()
    if (response && response.status == 200) {
        return response.data
    }
})

export const sec6Data = createAsyncThunk("sec6/sec6Data", async () => {
    const response = await sec6()
    if (response && response.status == 200) {
        return response.data
    }
})

export const sec7_1Data = createAsyncThunk("sec7_1/sec7_1Data", async () => {
    const response = await sec7_1()
    if (response && response.status == 200) {
        return response.data
    }
})

export const sec7_2Data = createAsyncThunk("sec7_2/sec7_2Data", async () => {
    const response = await sec7_2()
    if (response && response.status == 200) {
        return response.data
    }
})

const HomeSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(navbar1Data.fulfilled, (state, action) => {
            state.navbar1 = action.payload
        }).addCase(navbar1Data.rejected, (state, action) => {
            state.navbar1 = []
        })
        .addCase(sec2Data.fulfilled, (state, action) => {
            state.sec2 = action.payload
        }).addCase(sec3Data.fulfilled, (state, action) => {
            state.sec3 = action.payload
        }).addCase(sec4_1Data.fulfilled, (state, action) => {
            state.sec4_1 = action.payload
        }).addCase(sec4_2Data.fulfilled, (state, action) => {
            state.sec4_2 = action.payload
        }).addCase(sec6Data.fulfilled, (state, action) => {
            state.sec6 = action.payload
        }).addCase(sec7_1Data.fulfilled, (state, action) => {
            state.sec7_1 = action.payload
        }).addCase(sec7_2Data.fulfilled, (state, action) => {
            state.sec7_2 = action.payload
        })
    }
})

export default HomeSlice.reducer