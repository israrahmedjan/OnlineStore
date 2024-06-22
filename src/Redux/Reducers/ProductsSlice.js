import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchProductsAPI, fetchProductsNewAPI, fetchProductsCatAPI, fetchProductDetailAPI } from "./API/API";
import { act } from "react-dom/test-utils";

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  try {
    const data = await FetchProductsAPI();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }

})

export const fetchProductsNew = createAsyncThunk("fetch/new/products", async (start) => {
  try {
    const data = await fetchProductsNewAPI(start);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }

})

export const fetchProductsCat = createAsyncThunk("fetch/new/productsCat", async (cat) => {
  try {
    const data = await fetchProductsCatAPI(cat);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }

})
export const fetchProductDetail = createAsyncThunk("fetch/prodcutDetail", async (prodID) => {
  try {
    const data = await fetchProductDetailAPI(prodID);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }

})



const ProductSlice = createSlice({
  name: 'Product', // Name of the slice (used in the Redux store)
  initialState: { items: [], status: "", FilterItems: '', newItems: [], catItems: [], ProductDetail: [] }, // Initial state
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductsNew.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsNew.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.newItems = action.payload;
      })
      .addCase(fetchProductsNew.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductsCat.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsCat.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.catItems = action.payload;
      })
      .addCase(fetchProductsCat.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ProductDetail = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })


  }
});


export const { } = ProductSlice.actions
export default ProductSlice.reducer;