import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.default.baseURL = 'https://connections-api.goit.global/';
//якщо є кілька урл - відкриваємо нові через axios.create щоб
//не було конфліктів
export const newApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await newApi.post('users/signup', credentials);
      return response.data;
      // console.log('User registered:', response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await newApi.post('users/login', credentials);
      return response.data;
      // console.log('User registered:', response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
