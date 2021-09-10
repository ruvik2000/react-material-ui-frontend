import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm(props) {
  React.useEffect(() => {
    console.log("gooo", props.updateState)
  }, [])
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {props.isUpdate? "Update a product" : "Add a product"}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField variant="outlined" onChange={props.handleChange}
            required
            id="product_name"
            name="product_name"
            value= {props.updateState? props.updateState.product_name : null}
            // helperText="Incorrect entry."
            label="Product Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField variant="outlined" onChange={props.handleChange}
            required
            id="category"
            name="category"
            // helperText="Incorrect entry."
            value= {props.updateState? props.updateState.category : null}
            label="Category"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
            <TextField variant="outlined" onChange={props.handleChange}
                required
                id="description"
                name="description"
                // helperText="Incorrect entry."
                value= {props.updateState? props.updateState.description : null}
                label="Description"
                fullWidth
                multiline
                rows={4}
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}