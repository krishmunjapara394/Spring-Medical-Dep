import { createSlice } from '@reduxjs/toolkit';

const aosSlice = createSlice({
  name: 'aos',
  initialState: {
    initialized: false,
    settings: {}
  },
  reducers: {
    initializeAOS: (state, action) => {
      state.initialized = true;
      state.settings = action.payload;
    },
    updateAOSSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload };
    }
  }
});

export const { initializeAOS, updateAOSSettings } = aosSlice.actions;
export default aosSlice.reducer;
