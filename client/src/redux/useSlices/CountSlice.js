import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { value: 0 }, // giá trị number, string thì phải đặt value, giá trị tham chiếu array, obj thì không cần
  reducers: {
    increase: (state, action) => {
      // console.log(action);
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = countSlice.actions; // export action ra bên ngoài
export default countSlice.reducer;
