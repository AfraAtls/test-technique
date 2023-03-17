import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { onLogout } from '../../reducers/login/loginSlice';

function Header() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

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
              dispatch(onLogout());
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
