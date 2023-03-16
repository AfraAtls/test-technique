import axios from 'axios';
import { deleteTicket, fetchTickets, setTicket } from './ticketSlice';

export const getTickets = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8000/api/tickets');
    console.log('OK');
    console.log(response.data.data);
    dispatch(fetchTickets(response.data.data));

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postTicket = () => async (dispatch, getState) => {
  const { type, title, priority, description, context, url, browser, os, attachment } =
    getState().tickets;
  try {
    const response = await axios.post('http://localhost:8000/api/tickets', {
      type: type,
      title: title,
      priority: priority,
      description: description,
      context: context,
      url: url,
      browser: browser,
      operating_system: os,
      attachment: attachment,
    });
    console.log('POST');
    console.log(response.data);
    dispatch(setTicket(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export const deleteTicket = (id) => async (dispatch) => {
//   try {
//     const response = await axios.delete(`http://localhost:8000/api/tickets/${id}`);
//     console.log('DELETE');
//     console.log(response.data);
//     dispatch(deleteTicket(id));
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
