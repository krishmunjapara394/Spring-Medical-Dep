import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ourTeamapi } from "./Our TeamAPI";

const initialState = {
    ourTeamapi: []
}

export const ourTeamapiData = createAsyncThunk("ourTeamapi/ourTeamapiData", async () => {
    const response = await ourTeamapi()
    if (response && response.status == 200) {
        return response.data.data
    }
})

const OurTeam = createSlice({
    name: 'ourTeam',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(ourTeamapiData.fulfilled, (state, action) => {
            state.ourTeamapi = action.payload
        })
    }
})


export default OurTeam.reducer