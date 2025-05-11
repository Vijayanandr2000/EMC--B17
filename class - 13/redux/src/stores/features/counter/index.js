import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1000,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state, params) => {
      const { payload = 1 } = params;
      console.log("payload", payload);
      state.value -= payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
