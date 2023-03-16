import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  type: '',
  priority: 'Faible',
  title: '',
  description: '',
  context: '',
  url: '',
  browser: '',
  os: '',
  attachment: '',
};

export const ticketsSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    fetchTickets: (state, action) => {
      return {
        ...state,
        tickets: [...action.payload],
      };
    },
    deleteTicket: (state, action) => {
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket.id !== action.payload),
      };
    },
    setTicket: (state, action) => {
      return {
        ...state,
        tickets: [...state.tickets, { ...action.payload }],
      };
    },
    setValue: (state, action) => {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    },
  },
});

export const { fetchTickets, deleteTicket, setTicket, setValue } = ticketsSlice.actions;

export const selectTickets = (state) => state.tickets.tickets;
export const selectValue = (state) => state.tickets;

export default ticketsSlice.reducer;
