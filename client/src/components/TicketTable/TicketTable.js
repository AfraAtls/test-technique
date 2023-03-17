import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { selectTickets, setConsultedTicket } from '../../reducers/ticket/ticketSlice';
import { Link, useNavigate } from 'react-router-dom';
import { getTicket } from '../../reducers/ticket/ticketMiddleware';

function TicketTable() {
  const tickets = useSelector(selectTickets);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <TableContainer
      component={Paper}
      sx={{ position: 'relative' }}
    >
      <Table
        sx={{ minWidth: 650, mt: 5 }}
        aria-label="ticket table"
      >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Titre</TableCell>
            <TableCell>Statut</TableCell>
            <TableCell>Priorité</TableCell>
            <TableCell>Dernière activité</TableCell>
            <TableCell>Consulter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow
              key={ticket.id}
              id={ticket.id}
            >
              <TableCell>{ticket.id}</TableCell>
              <TableCell>{ticket.type}</TableCell>
              <TableCell>{ticket.title}</TableCell>
              <TableCell>{ticket.status}</TableCell>
              <TableCell>{ticket.priority}</TableCell>
              <TableCell>{new Date(ticket.updated_at).toLocaleDateString()}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => {
                    dispatch(getTicket(ticket.id));
                    dispatch(setConsultedTicket(ticket));
                    navigate(`/ticket/${ticket.id}`);
                  }}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <IconButton
        sx={{ position: 'absolute', top: 8, right: 8 }}
        component={Link}
        to="/form"
      >
        <AddIcon />
      </IconButton>
    </TableContainer>
  );
}
export default TicketTable;
