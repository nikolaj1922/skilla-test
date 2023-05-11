import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { totalCalls: number; newCalls: number } = {
  totalCalls: 0,
  newCalls: 0,
};

const ratingNewCallsReducer = createSlice({
  name: "ratingNewCalls",
  initialState,
  reducers: {
    setTotalCalls: (state, action: PayloadAction<number>) => {
      state.totalCalls = action.payload;
    },
    setNewCalls: (state, action: PayloadAction<number>) => {
      state.newCalls = action.payload;
    },
  },
});

export const { setTotalCalls, setNewCalls } = ratingNewCallsReducer.actions;
export default ratingNewCallsReducer.reducer;
