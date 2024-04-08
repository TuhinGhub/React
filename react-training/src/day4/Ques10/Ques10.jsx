import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ValidationTextFields() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [number, setNumber] = React.useState('');

  const [firstNameError, setFirstNameError] = React.useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    // Simple validation example: Check if the first name is empty
    if (event.target.value.trim() === '') {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          error={firstNameError}
          id="outlined-error"
          label="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          helperText={firstNameError ? "Please Enter a valid First Name" : "Please Enter your First Name"}
        />
        <TextField
          required
          id="outlined-error-helper-text"
          label="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          helperText="Please Enter your Last Name"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />
        <TextField 
          id="outlined-number" 
          label="Number" 
          type="number" 
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
    </Box>
  );
}