import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout, refreshing } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(refreshing.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshing.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshing.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;
