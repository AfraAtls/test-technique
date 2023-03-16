import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from '../reducers/example/ticketSlice';

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
  },
});

export default store;
