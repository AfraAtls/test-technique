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
import { useSelector } from 'react-redux';
import { selectTickets } from '../../reducers/example/ticketSlice';

function TicketTable() {
  const tickets = useSelector(selectTickets);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
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
            <TableRow key={ticket.id}>
              <TableCell>{ticket.id}</TableCell>
              <TableCell>{ticket.type}</TableCell>
              <TableCell>{ticket.title}</TableCell>
              <TableCell>{ticket.status}</TableCell>
              <TableCell>{ticket.priority}</TableCell>
              <TableCell>{new Date(ticket.updated_at).toLocaleDateString()}</TableCell>
              <TableCell>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TicketTable;
