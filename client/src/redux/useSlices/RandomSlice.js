import { createSlice } from "@reduxjs/toolkit";

const randomSlice = createSlice({
  name: "random",
  initialState: [], // Cơ chế có type vs payload do thư viện Immer
  reducers: {
    random: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
  },
});

export const { random } = randomSlice.actions;
export default randomSlice.reducer;
