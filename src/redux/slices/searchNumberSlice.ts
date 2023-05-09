import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";


const initialState: {searchValue: string} = {
  searchValue: ''
}

const searchNumberSlice = createSlice({
  name: 'searchNumber',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    clearValue: (state) => {
      state.searchValue = ''
    }
  }
})

export const { setValue, clearValue } = searchNumberSlice.actions;
export default searchNumberSlice.reducer