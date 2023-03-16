import axios from 'axios';
import { fetchTickets, setTicket } from './ticketSlice';

export const getTickets = () => async (dispatch, getState) => {
  try {
    const token = getState().login.token;
    const response = await axios.get('http://localhost:8000/api/tickets', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('OK');
    console.log(response.data.data);
    dispatch(fetchTickets(response.data.data));

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTicket = (id) => async (dispatch, getState) => {
  try {
    const token = getState().login.token;
    const response = await axios.get(`http://localhost:8000/api/tickets/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const postTicket = () => async (dispatch, getState) => {
  const { type, title, priority, description, context, url, browser, os, attachment } =
    getState().tickets;
  const token = getState().login.token;
  console.log(token);
  try {
    const response = await axios.post(
      'http://localhost:8000/api/tickets',
      {
        type: type,
        title: title,
        priority: priority,
        description: description,
        context: context,
        url: url,
        browser: browser,
        operating_system: os,
        attachment: attachment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('POST');
    console.log(response.data);
    dispatch(setTicket(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
