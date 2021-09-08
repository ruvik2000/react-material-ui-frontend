import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Register your self for the raffle draw
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField variant="outlined" onChange={props.handleChange}
            required
            id="fullName"
            name="fullName"
            // helperText="Incorrect entry."
            label="Full Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant="outlined" onChange={props.handleChange}
            required
            id="email"
            name="email"
            // helperText="Incorrect entry."
            label="Email"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant="outlined" onChange={props.handleChange}
            required
            id="contactNumber"
            name="contactNumber"
            // helperText="Incorrect entry."
            label="Contact Number"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField variant="outlined" onChange={props.handleChange}
                required
                id="nic"
                name="nic"
                // helperText="Incorrect entry."
                label="NIC"
                fullWidth
            />
        </Grid>
        <Grid item xs={12}>
          <TextField variant="outlined" onChange={props.handleChange}
            required
            id="address"
            name="address"
            // helperText="Incorrect entry."
            label="Address"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}