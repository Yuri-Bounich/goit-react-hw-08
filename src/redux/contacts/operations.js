import { createAsyncThunk } from '@reduxjs/toolkit';
import { newApi } from '../auth/operations';
import toast from 'react-hot-toast';

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
      toast.success('Contact deleted successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to delete contact!');
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
      toast.success('Contact successfully added!');
      return response.data;
    } catch (error) {
      toast.error('Failed to add contact!');
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
