import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { selectisLogged } from '../../reducers/login/loginSlice';
import { getTickets } from '../../reducers/ticket/ticketMiddleware';
import { selectConsultedTicket, selectTickets } from '../../reducers/ticket/ticketSlice';
import TicketForm from '../TicketForm/TicketForm';
import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';
import TicketTable from '../TicketTable/TicketTable';
import TicketPage from '../TicketPage/TicketPage';

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector(selectTickets);
  const token = localStorage.getItem('token');
  const isLogged = useSelector(selectisLogged);
  const consultedTicket = useSelector(selectConsultedTicket);

  useEffect(() => {
    if (token) {
      dispatch(getTickets());
    }
  }, []);

  return (
    <Container className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<LoginForm />}
        />
        <Route
          path="/tickets"
          element={
            isLogged || (token && tickets.length > 0) ? <TicketTable /> : <Navigate to="/" />
          }
        />
        <Route
          path="/form"
          element={isLogged || token ? <TicketForm /> : <Navigate to="/" />}
        />
        <Route
          path="/ticket/:id"
          element={<TicketPage ticket={consultedTicket} />}
        />
      </Routes>
    </Container>
  );
}

export default App;
