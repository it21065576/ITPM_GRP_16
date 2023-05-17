import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography variant="h4" component="h1" className={classes.title}>
        Welcome to My App
      </Typography>
      <Typography variant="subtitle1" component="p">
        This is a sample home page built with React and Material-UI.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        href="/serviceDash"
      >
        Get Started
      </Button>
    </Container>
  );
}

export default HomePage;
