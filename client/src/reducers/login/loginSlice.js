import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from './loginMiddleware';

const initialState = {
  isLogged: false,
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
    setIsLogged: (state) => {
      return {
        ...state,
        isLogged: true,
      };
    },
    onLogout: (state) => {
      localStorage.clear();
      return {
        ...initialState,
      };
    },
  },
});

export const { setCredential, setToken, setIsLogged, onLogout } = loginSlice.actions;

export const selectCredentials = (state) => state.login;
export const selectisLogged = (state) => state.login.isLogged;

export default loginSlice.reducer;
