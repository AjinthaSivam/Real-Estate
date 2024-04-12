import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <Box
      component="form"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}
    >
      <TextField
        label="First Name"
        variant="filled"
        style={{ marginBottom: '20px' }}
        onKeyDown={handleKeyDown}
        fullWidth
       
      />
      <TextField
        label="Last Name"
        variant="filled"
        style={{ marginBottom: '20px' }}
        onKeyDown={handleKeyDown}
        fullWidth
       
      />
      <TextField
        label="Email"
        variant="filled"
        style={{ marginBottom: '20px' }}
        onKeyDown={handleKeyDown}
        fullWidth
        required
      />
      <TextField
        label="Message"
        variant="filled"
        multiline
        rows={4}
        style={{ marginBottom: '20px', fontSize: '20px', fontWeight: 'bold' }}
        onKeyDown={handleKeyDown}
        fullWidth
        required
      />
      <Button
        type="submit"
        variant="contained"
        style={{ padding: '10px', borderRadius: '10px', backgroundColor: '#BDE290', color: 'black', fontWeight: 'bold', borderColor: 'white' }}
      >
        Submit form
      </Button>
    </Box>
  );
}

export default FormExample;
