import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../../App/Api/authAPIs/authAPI";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: null,
};

export const loginHander = createAsyncThunk(
  "auth/login",
  async (values, { rejectWithValue }) => {
    try {
      const data = await authAPI.login(values);

      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginHander.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginHander.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(loginHander.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
