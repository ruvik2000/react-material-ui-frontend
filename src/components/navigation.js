import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
  }));
export default function Navigation() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <Typography variant="h6" >
                Ecommerce Product Finder
            </Typography>

            
            <Button color="inherit">
                <Link to="/add_new_product">Add product</Link>
            </Button>
        </Toolbar>
    </AppBar>
  );
}