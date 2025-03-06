import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "VideoVerse",
    funding: "₹13,000.00",
    deadline: "2025-02-07",
    description: "Seeking a Creative AI Developer",
  },
  {
    title: "VeneersAI",
    funding: "₹10,500.00",
    deadline: "2025-02-09",
    description: "Build a SaaS AI tool for veneers",
  },
  {
    title: "RhinoplastyAI",
    funding: "₹13,000.00",
    deadline: "2025-02-09",
    description: "Develop an innovative AI tool",
  },
];

const challengesSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {
    addChallenge: (state, action) => {
      state.push(action.payload);
    },
    removeChallenge: (state, action) => {
      return state.filter((challenge, index) => index !== action.payload);
    },
  },
});

export const { addChallenge, removeChallenge } = challengesSlice.actions;
export default challengesSlice.reducer;
