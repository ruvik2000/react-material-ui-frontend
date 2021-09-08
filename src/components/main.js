import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import axios from 'axios'
import { Card, Grid, LinearProgress, CardContent } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  dermatixLogo: {
    width: 'auto',
    height:200
  },
  center: {
    textAlign: 'center',
  }
}));

export default function Checkout() {
  const initialState = { fullName: '', email: '', contactNumber: '', nic: '', address: '' };
  const classes = useStyles();
  const [details, setDetails] = React.useState(initialState);
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setisLoading] = React.useState(false);

  const valueChecking = (details) => {
    if(details.fullName === '' || details.contactNumber === '' || details.email === '' || details.nic === '' || details.address === ''){
      setError(" You need to fill all details ")
      return true
    }else{
      return false
    }
  }

  const handleSubmit = (e) => {

  };



  const handleChange = (e) => {
      setDetails({ ...details, [e.target.name]: e.target.value })
    };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            NHSL Plastic Surgery Unit Tweetup 2021
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            {response ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for Registering.
                </Typography>
                <Typography variant="subtitle1">
                  Your raffle draw number is {response.raffleDrawNumber}.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <AddressForm handleChange={handleChange} />
                {error ?  <Card className={classes.root}>
                            <CardContent>
                              <Typography className={classes.title} color="error" gutterBottom>
                                {error}
                              </Typography>
                            </CardContent>
                          </Card>
                : null }
                <div className={classes.buttons}>
                <Button
                   disabled={isLoading? true : false}
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.button}
                  >Next</Button>
                </div>

              </React.Fragment>
            )} 
            {isLoading? 
            <div className={classes.root}>
              <LinearProgress />
            </div>
            : null }
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}