import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FamilyPhysician, FootOrthotics, eleSec2, holterSec1, sec6, section, sections, tbl, traditionalSec1 } from "./AllServicesAPI"


const initialState = {
    eleSec2: [],
    holterSec1: [],
    traditionalSec1: [],
    sections: [],
    sec6: [],
    section: [],
    tbl: [],
    FamilyPhysician: [],
    FootOrthotics: []
}

export const FamilyPhysicianData = createAsyncThunk("FamilyPhysician/FamilyPhysicianData", async () => {
    const response = await FamilyPhysician()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const FootOrthoticsData = createAsyncThunk("FootOrthotics/FootOrthoticsData", async () => {
    const response = await FootOrthotics()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const eleSec2Data = createAsyncThunk("eleSec2/eleSec2Data", async () => {
    const response = await eleSec2()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const holterSec1Data = createAsyncThunk("holterSec1/holterSec1Data", async () => {
    const response = await holterSec1()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const traditionalSec1Data = createAsyncThunk("traditionalSec1/traditionalSec1Data", async () => {
    const response = await traditionalSec1()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const sectionsData = createAsyncThunk("sections/sectionsData", async () => {
    const response = await sections()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const sec6Data = createAsyncThunk("sec6/sec6Data", async () => {
    const response = await sec6()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const sectionData = createAsyncThunk("section/sectionData", async () => {
    const response = await section()
    if (response && response.status == 200) {
        return response.data.data
    }
})

export const tblData = createAsyncThunk("tbl/tblData", async () => {
    const response = await tbl()
    if (response && response.status == 200) {
        return response.data.data
    }
})



const AllServicesSlice = createSlice({
    name: 'allServicesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FamilyPhysicianData.fulfilled, (state, action) => {
            state.FamilyPhysician = action.payload
        }).addCase(FootOrthoticsData.fulfilled, (state, action) => {
            state.FootOrthotics = action.payload
        }).addCase(eleSec2Data.fulfilled, (state, action) => {
            state.eleSec2 = action.payload
        }).addCase(holterSec1Data.fulfilled, (state, action) => {
            state.holterSec1 = action.payload
        }).addCase(traditionalSec1Data.fulfilled, (state, action) => {
            state.traditionalSec1 = action.payload
        }).addCase(sectionsData.fulfilled, (state, action) => {
            state.sections = action.payload
        }).addCase(sec6Data.fulfilled, (state, action) => {
            state.sec6 = action.payload
        }).addCase(sectionData.fulfilled, (state, action) => {
            state.section = action.payload
        }).addCase(tblData.fulfilled, (state, action) => {
            state.tbl = action.payload
        })
    }
})
export default AllServicesSlice.reducer