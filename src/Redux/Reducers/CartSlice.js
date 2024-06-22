import { createSlice } from "@reduxjs/toolkit";

// Create a slice with a name, initial state, and reducers
const CartSlice = createSlice({
  name: 'Cart', // Name of the slice (used in the Redux store)
  initialState: { Cartitems: [], cartstatus: false, Discount: 10, ShippingCharges: 20, TotalPrice: 0, TotalNumItems: 0 }, // Initial state
  reducers: {
    AddItems: (state, action) => {
      const oldItem = state.Cartitems.find((item) => item.id === action.payload.id)
      const index = state.Cartitems.indexOf(oldItem);
      if (oldItem) {
        state.Cartitems[index] = action.payload;
        state.cartstatus = true;
      }
      else {
        state.Cartitems = [...state.Cartitems, action.payload]
        state.cartstatus = true;
      }
      state.TotalPrice = TotalItemsPrice(state.Cartitems);
      state.TotalNumItems = TotalNumItemsFun(state.Cartitems);
      //const index = state.Cartitems.indexOf(oldItem);
    },
    UpdateItems: (state, action) => {

      const oldItem = state.Cartitems.find((item) => item.id === action.payload.id)
      if (oldItem != "undefined") {
        const index = state.Cartitems.indexOf(oldItem);
        state.Cartitems[index] = action.payload;
        state.TotalPrice = TotalItemsPrice(state.Cartitems);
        state.TotalNumItems = TotalNumItemsFun(state.Cartitems);
      }


      //const index = state.Cartitems.indexOf(oldItem);
    },
    RemoveItemAC: (state, action) => {
      const oldItem = state.Cartitems.find((item) => item.id === action.payload.id)
      //const index = (oldItem != "undefined")?"":state.Cartitems.indexOf(oldItem)
      //const index = state.Cartitems.indexOf(oldItem);

      if (oldItem != "undefined") {
        let index = state.Cartitems.indexOf(oldItem)
        state.Cartitems.splice(index, 1)
        state.TotalPrice = TotalItemsPrice(state.Cartitems);
        state.TotalNumItems = TotalNumItemsFun(state.Cartitems);
        console.log("Item is rmoved  : ")

      }

      //const index = state.Cartitems.indexOf(oldItem);
    },
    EmptyCartAC: (state) => {
      //state.Cartitems = []
      state.Cartitems = [];
      state.cartstatus = false;
      state.Discount = 0;
      state.ShippingCharges = 0;
      state.TotalPrice = 0;
      state.TotalNumItems = 0;
    }

  },

});

function TotalItemsPrice(Items) {
  let total = Items.reduce((start, itm) => {
    return start + (itm.price * itm.qty)
  }, 0)
  return total.toFixed(2)
}

function TotalNumItemsFun(Items) {
  let total = Items.reduce((start, itm) => {
    return start + itm.qty
  }, 0)
  return total

}
export const { AddItems, UpdateItems, RemoveItemAC, EmptyCartAC } = CartSlice.actions;
export default CartSlice.reducer;