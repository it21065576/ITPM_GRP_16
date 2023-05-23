import React from 'react';  //category changeth donation..
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import plntbtn1 from '../Images/plantbtn.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),

    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <Container >
      <center>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>

              {/* < img src={plntbtn1} style={{ height: '100px', width: 'flex', filter: 'brightness(50%)' }} 
              /> */}
              <Button variant="outlined" color="secondary" href="/Plants">
                Plants
              </Button>
              <Button variant="outlined" color="secondary" href="/Machines">
                Smart Farming Machines
              </Button>
              <Button variant="outlined" color="secondary" href="/Fertilizer">
                Fertilizers
              </Button>



            </Grid>
          </Grid>



        </div>
      </center>
    </Container>
  );
}
