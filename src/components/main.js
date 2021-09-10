import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import axios from 'axios'
import { Card, Grid, LinearProgress, CardContent } from '@material-ui/core';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
  const initialState = { product_name: '', category: '', description: '' };
  const classes = useStyles();
  const [details, setDetails] = React.useState(initialState);
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setisLoading] = React.useState(false);
  const params = useParams()
  const location = useLocation()

  const valueChecking = (details) => {
    if(details.product_name === '' || details.category === '' || details.description === ''){
      setError(" You need to fill all details ")
      return true
    }else{
      return false
    }
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    const valueCheck = valueChecking(details)
    console.log(valueCheck)
    if(valueCheck === false){
      setisLoading(true)
      axios.post("http://127.0.0.1:3000/v1/products", details).then(res => {
      // axios.post("http://localhost:5000/register", details).then(res => {
          console.log(res)
          setisLoading(false)
          setResponse(res.data.message)
      }).catch(err => {
          console.log(err)
          console.log(err.message)
          console.log(err.response)
          setisLoading(false)
          // setError(err.response.data.message)
      })
    }
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const valueCheck = valueChecking(details)
    console.log(valueCheck)
    console.log("Update ", details)
    if(valueCheck === false){
      setisLoading(true)
      axios.put(`http://127.0.0.1:3000/v1/products/${params.id}`, details).then(res => {
      // axios.post("http://localhost:5000/register", details).then(res => {
          console.log(res)
          setisLoading(false)
          setResponse(res.data.message)
      }).catch(err => {
          console.log(err)
          console.log(err.message)
          console.log(err.response)
          setisLoading(false)
          // setError(err.response.data.message)
      })
    }
  };

  React.useEffect(() => {
    console.log(location.state)
    console.log(params)
    if(location.state){
      setDetails(location.state)
    }
  }, [])


  const handleChange = (e) => {
      setDetails({ ...details, [e.target.name]: e.target.value })
    };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" >
            Ecommerce Product Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            {response ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Success
                </Typography>
                <Typography variant="subtitle1">
                  {response}
                </Typography>
                <Link  to="/">
                  <Button size="small">Go back home</Button>
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <AddressForm handleChange={handleChange} updateState={details} isUpdate={location.state? true : false} />
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
                    onClick={location.state? handleUpdateProduct : handleAddProduct}
                    className={classes.button}
                  >{location.state? "Update" : "Add"}</Button>
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