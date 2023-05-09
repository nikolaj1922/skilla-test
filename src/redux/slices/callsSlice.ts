import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Calls } from "../../lib/types";

const initialState: { calls: Calls | null } = {
  calls: null,
};

const callsSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    setCalls: (state, action: PayloadAction<Calls>) => {
      state.calls = action.payload;
    },
  },
});

export const { setCalls } = callsSlice.actions;
export default callsSlice.reducer;
