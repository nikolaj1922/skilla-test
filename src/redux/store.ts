import { configureStore } from "@reduxjs/toolkit";
import sortDurationReducer from "./slices/sortDurationSlice";
import callsReducer from "./slices/callsSlice";
import inOutReducer from "./slices/inOutSlice";
import searchNumberReducer from "./slices/searchNumberSlice";
import ratingNewCallsReducer from "./slices/ratingNewCalls";

export const store = configureStore({
  reducer: {
    sortDuration: sortDurationReducer,
    calls: callsReducer,
    inOut: inOutReducer,
    searchNumber: searchNumberReducer,
    ratingNewCalls: ratingNewCallsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
