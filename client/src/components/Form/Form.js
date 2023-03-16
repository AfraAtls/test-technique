import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { selectValue, setValue } from '../../reducers/example/ticketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { postTicket } from '../../reducers/example/ticketMiddleware';

const types = [
  'Erreur 404',
  'Bouton ne fonctionne pas',
  "Problème d'affichage",
  'Formulaire ne se soumet pas',
  'Lien cassé',
];

function Form() {
  const dispatch = useDispatch();
  const values = useSelector(selectValue);

  const handleChange = (event) => {
    dispatch(setValue({ name: event.target.name, value: event.target.value }));
  };
  return (
    <Box
      component="form"
      sx={{ mt: '2em' }}
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(postTicket());
      }}
    >
      <FormControl
        variant="outlined"
        sx={{ width: '50%' }}
      >
        <InputLabel>Type</InputLabel>
        <Select
          required
          name="type"
          value={values.type}
          onChange={handleChange}
          label="Type"
        >
          {types.map((type) => (
            <MenuItem
              value={type}
              key={type}
            >
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        variant="outlined"
        sx={{ width: '50%' }}
      >
        <InputLabel>Priorité</InputLabel>
        <Select
          required
          value={values.priority}
          onChange={handleChange}
          label="Priorité"
          name="priority"
        >
          <MenuItem value="Faible">Faible</MenuItem>
          <MenuItem value="Moyenne">Moyenne</MenuItem>
          <MenuItem value="Forte">Forte</MenuItem>
          <MenuItem value="Critique">Critique</MenuItem>
        </Select>
      </FormControl>

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Titre"
        name="title"
        value={values.title}
        onChange={handleChange}
      />

      <TextField
        required
        name="description"
        placeholder="Description"
        fullWidth
        value={values.description}
        onChange={handleChange}
      />

      <TextField
        required
        name="context"
        fullWidth
        placeholder="Contexte"
        value={values.context}
        onChange={handleChange}
      />

      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Page concernée"
        name="url"
        value={values.url}
        onChange={handleChange}
      />
      <TextField
        required
        variant="outlined"
        margin="normal"
        sx={{ width: '50%' }}
        value={values.browser}
        label="Navigateur"
        name="browser"
        onChange={handleChange}
      />
      <TextField
        required
        variant="outlined"
        margin="normal"
        sx={{ width: '50%' }}
        value={values.os}
        label="Système d'exploitation"
        name="os"
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Pièce jointe"
        name="attachment"
        value={values.attachment}
        type="file"
        onChange={handleChange}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ m: 'auto' }}
      >
        Envoyer
      </Button>
    </Box>
  );
}
export default Form;
