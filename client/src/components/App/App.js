import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getTickets } from '../../reducers/example/ticketMiddleware';
import { selectTickets } from '../../reducers/example/ticketSlice';
import Form from '../Form/Form';
import TicketTable from '../TicketTable/TicketTable';

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector(selectTickets);

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <Container className="App">
      <Routes>
        {tickets.length > 0 && (
          <Route
            path="/"
            element={<TicketTable />}
          />
        )}
        <Route
          path="/form"
          element={<Form />}
        />
      </Routes>
    </Container>
  );
}

export default App;
