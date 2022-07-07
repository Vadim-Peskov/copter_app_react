import { createSlice } from "@reduxjs/toolkit";
import copter_1 from '../images/copter_1.jpg';
import copter_2 from '../images/copter_2.jpg';
import copter_3 from '../images/copter_3.jpg';
import copter_4 from '../images/copter_4.jpg';

const copterSlice = createSlice({
  name: 'copter',
  initialState: {
    imagesList: [
      {id: 1, img: copter_1, active: true},
      {id: 2, img: copter_2, active: false},
      {id: 3, img: copter_3, active: false},
      {id: 4, img: copter_4, active: false},
    ],
    cart: localStorage.getItem('cart') || 0,
    price: 130000,
  },
  reducers: {
    setImageList(state, action) {
      state.imagesList = action.payload;
    },
    setCart(state, action) {
      state.cart = state.cart + 1;
    },
    removeCart(state, action) {
      state.cart = state.cart > 0 && state.cart - 1;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
  },
});

export const {setImageList, setCart, removeCart, setPrice} = copterSlice.actions;
export default copterSlice.reducer;