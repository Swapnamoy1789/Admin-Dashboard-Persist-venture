import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const foundersSlice = createSlice({
  name: "founders",
  initialState,
  reducers: {
    addFounder: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addFounder } = foundersSlice.actions;
export default foundersSlice.reducer;
