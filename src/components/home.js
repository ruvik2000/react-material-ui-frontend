import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import axios from 'axios'
import { Card, Grid, LinearProgress, CardContent, CardActions } from '@material-ui/core';
import {Link} from 'react-router-dom'
import Navigation from './navigation';
// import Navigation from './navigation';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(1000 + theme.spacing(3) * 2)]: {
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
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  center: {
    textAlign: 'center',
  }
}));

export default function Home() {
  const classes = useStyles();
  const [products, setProducts] = React.useState([]);
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setisLoading] = React.useState(false);

  const fetchData = () => {
    setisLoading(true)
    axios.get("http://127.0.0.1:3000/v1/products/").then(res => {
        console.log(res.data)
        setisLoading(false)
        setProducts(res.data)
        setResponse(res.data.newRegistration)
    }).catch(err => {
        console.log(err)
        console.log(err.message)
        console.log(err.response)
        setisLoading(false)
    })
  }

  React.useEffect(() => {
    fetchData()
    }, [])

    const deleteFunction = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            // setisLoading(true)
            axios.delete(`http://127.0.0.1:3000/v1/products/${id}`).then(res => {
                console.log(res.data)
                // setisLoading(false)
                // setProducts(res.data)
                // setResponse(res.data.newRegistration)
            }).catch(err => {
                console.log(err)
                console.log(err.message)
                console.log(err.response)
                // setisLoading(false)
            })
        }
    }

    if(isLoading){
        return(
            // <Card className={classes.root}>
            //     <CardContent>
            //         <Typography className={classes.title} color="textSecondary" gutterBottom>
            //         Loading
            //         </Typography>
            //     </CardContent>
            // </Card>            
            <div className={classes.root}>
              <LinearProgress />
            </div>
        )
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation/>
      <main className={classes.layout}>
        <Grid container spacing={3}>
            {products && products.data && products.data.map(item => {
                return(
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {item.product_name}
                                </Typography>
                                <Typography color="textSecondary">
                                    {item.category}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => deleteFunction(item.id)}>Delete</Button>
                                <Link  to={{
                                    pathname: `/update_product/${item.id}`,
                                    state: { 
                                        product_name: item.product_name, 
                                        category: item.category,
                                        description: item.description 
                                    }
                                }}>
                                    <Button size="small">Update</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
      </main>
    </React.Fragment>
  );
}