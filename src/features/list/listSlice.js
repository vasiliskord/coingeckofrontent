import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import listService from "./listService";

const initialState = {
  coins: [],
  success: false,
  loading: false,
  error: null,
};

//get all coins
export const getList = createAsyncThunk("list/getCoins", async (_,thunkAPI) => {
  try {
    const response = await listService.getCoins();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.coins = action.payload;
      })
      .addCase(getList.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      });
  },
});

export const { reset } = listSlice.actions;
export default listSlice.reducer;
