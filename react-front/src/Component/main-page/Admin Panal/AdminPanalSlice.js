import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Dashboard } from "./AdminPanalApi";


const initialState = {
    Dashboard: []
}

export const dashboardData = createAsyncThunk("dashboard/dashboardData", async () => {
    const response = await Dashboard()
    if (response && response.status == 200) {
        return response.data.data
    }
})


const AdminPanal = createSlice({
    name: 'blogPost',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(dashboardData.fulfilled, (state, action) => {
            state.Dashboard = action.payload
        })
    }
})

export default AdminPanal.reducer