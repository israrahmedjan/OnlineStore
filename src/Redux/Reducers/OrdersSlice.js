import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { saveOrdersAPI, fetchOrdersAPI } from "./API/API";
import { useSelector } from "react-redux";

// Create a slice with a name, initial state, and reducers
export const saveOrder = createAsyncThunk("save/Order", async (orderData) => {
  try {
    const data = await saveOrdersAPI(orderData);
    return orderData;
  } catch (error) {
    console.log("Error:", error);
  }

})

// Create a slice with a name, initial state, and reducers
export const fetchOrders = createAsyncThunk("fetch/orders", async (userData) => {
  try {
    const data = await fetchOrdersAPI(userData);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }

})


const OrderSlice = createSlice({
  name: 'Orders', // Name of the slice (used in the Redux store),
  initialState: { Addresses: "", OrderItems: "", totalAmount: 0, ordersdata: "" },
  reducers: {
    orderSet: (state, action) => {
      // state.OrderItems = [...state.OrderItems, action.payload]
      state.OrderItems = action.payload.items;
      state.Addresses = action.payload.addresses;
      state.totalAmount = action.payload.totalAmount;

      // state.OrderItems = [...state.OrderItems, action.payload.items]
      //state.Addresses = [...state.Addresses, action.payload.addresses]
      // console.log("Order Slice is called!", action.payload)
    },
    addressSet: (state, action) => {
      // state.OrderItems = [...state.OrderItems, action.payload]
      state.Addresses = action.payload.address;
      //state.Addresses = [...state.Addresses, action.payload.addressObj]
      // console.log("Order Slice is called!", action.payload)
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(saveOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.ordersdata = action.payload;
      })
      .addCase(saveOrder.rejected, (state, action) => {
        state.status = 'failed';
        //state.error = action.error.message;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log("Fullfiled my orders", action.payload);
        state.ordersdata = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        //state.error = action.error.message;
      })

  }

});
export const { orderSet } = OrderSlice.actions;
export default OrderSlice.reducer;