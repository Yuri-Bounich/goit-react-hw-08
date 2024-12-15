import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.default.baseURL = 'https://connections-api.goit.global/';
//якщо є кілька урл - відкриваємо нові через axios.create щоб
//не було конфліктів
export const newApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = token => {
  newApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  newApi.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await newApi.post('users/signup', credentials);
      setAuthHeader(response.data.token);
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
      const token = response.data.token;
      setAuthHeader(token);
      localStorage.setItem('token', token);
      return response.data;
      // console.log('User registered:', response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await newApi.post('users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const isRefreshing = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth;
    console.log(savedToken);

    if (!savedToken) {
      return thunkAPI.rejectWithValue('Token is not exist!');
    }
    try {
      setAuthHeader(savedToken);
      const { data } = await newApi.post('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
