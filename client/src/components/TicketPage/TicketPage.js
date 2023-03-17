import React from 'react';
import { Typography, Chip } from '@mui/material';

function TicketPage({ ticket }) {
  const { id, priority, type, title, updated_at } = ticket;
  return (
    <div>
      <Typography
        variant="h5"
        component="div"
      >
        #{id} {title}
      </Typography>
      <div>
        <Chip label={priority} />
        <Chip label={type} />
        <Chip label={new Date(updated_at).toLocaleDateString()} />
      </div>
    </div>
  );
}

export default TicketPage;
