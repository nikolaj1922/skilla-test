import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  duration: number;
  changerValue: number;
  title: string;
  customStartValue: string;
  customEndValue: string;
} = {
  duration: 3,
  changerValue: 0,
  title: "3 дня",
  customStartValue: "",
  customEndValue: "",
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
    setCustomEndValue: (state, action: PayloadAction<string>) => {
      state.customEndValue = action.payload;
    },
    setCustomStartValue: (state, action: PayloadAction<string>) => {
      state.customStartValue = action.payload;
    },
  },
});

export const { changeDuration, setChangerValue, setCustomEndValue, setCustomStartValue } = sortDurationSlice.actions;
export default sortDurationSlice.reducer;