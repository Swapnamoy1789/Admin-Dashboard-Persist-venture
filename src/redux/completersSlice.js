import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "John Doe", completed: 5 },
  { name: "Jane Smith", completed: 3 },
  { name: "Alice Brown", completed: 7 },
];

const completersSlice = createSlice({
  name: "completers",
  initialState,
  reducers: {
    addCompleter: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCompleter } = completersSlice.actions;
export default completersSlice.reducer;
