import { createAsyncThunk } from '@reduxjs/toolkit';
import { newApi } from '../auth/operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    // console.log('FetchContacts: Запит надсилається...');
    try {
      const response = await newApi.get('/contacts');
      // console.log('FetchContacts: Дані отримані:', response.data);
      return response.data;
    } catch (error) {
      // console.log(error.message);
      // console.error('FetchContacts: Помилка запиту:', error.message);
      // помилка 1) прописуємо спеціальний обєкт thunkAPI.rejectWithValue
      //щоб не впав сайт а видало помилку
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// видал 1) функція для видалення елемента
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await newApi.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

//додав 1) функція для додавання елемента
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const response = await newApi.post(`/contacts`, body);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
