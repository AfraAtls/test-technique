import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from './loginMiddleware';

const initialState = {
  email: '',
  password: '',
  token: localStorage.getItem('token') || '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setCredential: (state, action) => {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    },
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const { setCredential, setToken } = loginSlice.actions;

export const selectCredentials = (state) => state.login;

export default loginSlice.reducer;
