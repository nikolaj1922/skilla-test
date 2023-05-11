import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { title: string; inOutState: string | null } = {
  title: "Все типы",
  inOutState: null,
};

const inOutSlice = createSlice({
  name: "inOut",
  initialState,
  reducers: {
    setInOut: (state, action: PayloadAction<string>) => {
      state.inOutState = action.payload;
      if (action.payload === "0") state.title = "Исходящие";
      if (action.payload === "1") state.title = "Входящие";
    },
    resetInOut: (state) => {
      state.inOutState = null;
      state.title = "Все типы";
    },
  },
});

export const { setInOut, resetInOut } = inOutSlice.actions;
export default inOutSlice.reducer;
