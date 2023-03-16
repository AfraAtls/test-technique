import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectCredentials, setCredential } from '../../reducers/login/loginSlice';
import { Box } from '@mui/material';
import { login } from '../../reducers/login/loginMiddleware';

function LoginForm() {
  const credentials = useSelector(selectCredentials);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(setCredential({ name: event.target.name, value: event.target.value }));
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',

        width: '50%',
        m: 'auto',
        mt: 5,
      }}
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(login());
      }}
    >
      <TextField
        label="Nom d'utilisateur"
        name="email"
        variant="outlined"
        value={credentials.email}
        onChange={handleChange}
      />

      <TextField
        label="Mot de passe"
        variant="outlined"
        name="password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
      />

      <Button
        variant="contained"
        type="submit"
      >
        Connexion
      </Button>
    </Box>
  );
}

export default LoginForm;
