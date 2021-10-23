import { createSlice } from '@reduxjs/toolkit';
const namespace = 'cart';
const initialState = {
  loading: false,
  errror: false,
  data: null
};

const cartSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: {}
});
export const { setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
