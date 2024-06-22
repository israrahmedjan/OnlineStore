import { configureStore, combineReducers } from "@reduxjs/toolkit"
import ProductsSlice from "../Reducers/ProductsSlice"
import CartSlice from "../Reducers/CartSlice";
import OrdersSlice from "../Reducers/OrdersSlice";
import UserSlice from "../Reducers/UserSlice ";


const rootReducer = combineReducers({
  products: ProductsSlice,
  Cart: CartSlice,
  Order: OrdersSlice,
  user: UserSlice
  // Add other slices here
});
const Store = configureStore({
  reducer: rootReducer,
  // Other store configurations go here
});

export default Store


