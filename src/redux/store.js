import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

// Комбінуємо ред'юсери
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
