import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/login/loginSlice';
import ticketReducer from '../reducers/ticket/ticketSlice';

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    login: loginReducer,
  },
});

export default store;
