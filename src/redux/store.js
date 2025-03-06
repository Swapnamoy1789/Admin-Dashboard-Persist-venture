import { configureStore } from "@reduxjs/toolkit";
import challengesReducer from "./challengesSlice";
import completersReducer from "./completersSlice";
import foundersReducer from "./foundersSlice";

const store = configureStore({
  reducer: {
    challenges: challengesReducer,
    completers: completersReducer,
    founders: foundersReducer,
  },
});

export default store;
