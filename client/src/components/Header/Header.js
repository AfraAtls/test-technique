import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';

function Header() {
  const token = localStorage.getItem('token');

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {token && (
          <Button
            color="inherit"
            component={Link}
            to="/tickets"
          >
            Tickets
          </Button>
        )}
        {token ? (
          <Button
            color="inherit"
            onClick={() => {
              localStorage.clear();
              <Navigate to="/" />;
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
