import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  duration: number;
  changerValue: number;
  title: string;
  isCustomDuration: boolean;
} = {
  duration: 3,
  changerValue: 0,
  title: "3 дня",
  isCustomDuration: false,
};

const sortDurationSlice = createSlice({
  name: "sortDuration",
  initialState,
  reducers: {
    changeDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
      if (action.payload === 3) state.title = "3 дня";
      if (action.payload === 7) state.title = "Неделя";
      if (action.payload === 30) state.title = "Месяц";
      if (action.payload === 365) state.title = "Год";
    },
    setChangerValue: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) state.changerValue = 0;
      state.changerValue += action.payload;
    },
    setIsCustomDuration: (state, action: PayloadAction<boolean>) => {
      state.isCustomDuration = action.payload;
    },
  },
});

export const {
  changeDuration,
  setChangerValue,
  setIsCustomDuration,
} = sortDurationSlice.actions;
export default sortDurationSlice.reducer;
