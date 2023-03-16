import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getTickets } from '../../reducers/ticket/ticketMiddleware';
import { selectTickets } from '../../reducers/ticket/ticketSlice';
import Form from '../Form/Form';
import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';
import TicketTable from '../TicketTable/TicketTable';

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector(selectTickets);
  const token = localStorage.getItem('token');

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
          element={token && tickets.length > 0 ? <TicketTable /> : <Navigate to="/" />}
        />

        <Route
          path="/form"
          element={token ? <Form /> : <Navigate to="/" />}
        />
      </Routes>
    </Container>
  );
}

export default App;
