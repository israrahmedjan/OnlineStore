import { createSlice } from "@reduxjs/toolkit";

// Create a slice with a name, initial state, and reducers
const OrderSlice = createSlice({
  name: 'Orders', // Name of the slice (used in the Redux store)
  initialState: { Addresses: [], OrderItems: [], totalAmount: 0 }, // Initial state
  reducers: {
    AddAddressAC: (state, action) => {
      state.Addresses = [...state.Addresses, action.payload]
    },
    PlaceOrderSetAC: (state, action) => {
      state.PlaceOrder = action.payload;
    },
    PlaceOrderAC: (state, action) => {
      state.OrderItems = [...state.OrderItems, action.payload]
    }

  },

});
export const { AddAddressAC, PlaceOrderSetAC, PlaceOrderAC } = OrderSlice.actions;
export default OrderSlice.reducer;