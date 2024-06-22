import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserAPI } from "./API/API";
import { act } from "react-dom/test-utils";

export const fetchUser = createAsyncThunk("fetch/user", async (userData) => {
  try {
    const data = await fetchUserAPI(userData);
    // console.log("Thunk method", data);
    return data;
  } catch (error) {
    console.log("Error:", error);
  }

})


const UserSlice = createSlice({
  name: 'User', // Name of the slice (used in the Redux store)
  initialState: { User: [], status: "", }, // Initial state
  reducers: {
    logout: (state) => {
      state.status = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        //console.log("Fullfilled", action.payload);
        state.User = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        // state.error = action.error.message;
      })

  }
});
export const { logout } = UserSlice.actions
export default UserSlice.reducer;