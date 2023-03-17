import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  consultedTicket: {},
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
    setConsultedTicket: (state, action) => {
      return {
        ...state,
        consultedTicket: action.payload,
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

export const { fetchTickets, deleteTicket, setTicket, setValue, setConsultedTicket } =
  ticketsSlice.actions;

export const selectTickets = (state) => state.tickets.tickets;
export const selectValue = (state) => state.tickets;
export const selectConsultedTicket = (state) => state.tickets.consultedTicket;

export default ticketsSlice.reducer;
