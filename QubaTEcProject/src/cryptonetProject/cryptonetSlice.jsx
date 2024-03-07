import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

export const cryptonetApi = createAsyncThunk(
  "cryptonetApi", 
  async (datas) => {
  const response = await axios.get(
    `https://randomuser.me/api/?page=${datas}&results=1&seed=abc`
  );
  // console.log(response.data);
  return response.data;
});

const CryptonetPeoject = createSlice({
  name: "apiDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(cryptonetApi.pending, (state) => {
        state.loading = "idle";
      })
      .addCase(cryptonetApi.fulfilled, (state, action) => {
        state.loading = "success";
        state.data = action.payload;
      })
      .addCase(cryptonetApi.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error;
      });
  },
});

export default CryptonetPeoject.reducer;
