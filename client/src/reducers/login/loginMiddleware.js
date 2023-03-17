// import axios from 'axios';
// import { deleteTicket, fetchTickets, setTicket } from './loginSlice';

import axios from 'axios';
import { setIsLogged, setToken } from './loginSlice';

// export const getTickets = () => async (dispatch) => {
//   try {
//     const response = await axios.get('http://localhost:8000/api/tickets');
//     console.log('OK');
//     console.log(response.data.data);
//     dispatch(fetchTickets(response.data.data));

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const login = () => async (dispatch, getState) => {
  const { email, password } = getState().login;
  try {
    const response = await axios.post('http://localhost:8000/api/login', {
      email: 'john.doe@example.com',
      password: 'password',
    });
    localStorage.setItem('token', response.data.token);
    dispatch(setIsLogged());
    dispatch(setToken(response.data.token));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
