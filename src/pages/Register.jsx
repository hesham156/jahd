import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#F5F5F5',
  },
  card: {
    width: '90%',
    maxWidth: 400,
    margin: 'auto',
    padding: theme.spacing(2),
    borderRadius: 10,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    '&:hover': {
      backgroundColor: '#388E3C',
    },
    width: '100%',
    borderRadius: 5,
    marginTop: theme.spacing(2),
  },
  oauthButton: {
    width: '100%',
    borderRadius: 5,
    marginTop: theme.spacing(2),
  },
}));
const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleGoogleSignIn = () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider);
  };

  const handleFacebookSignIn = () => {
    // const provider = new firebase.auth.FacebookAuthProvider();
    // firebase.auth().signInWithPopup(provider);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <div>
            <Typography variant="h5" className={classes.title}>Sign up</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                className={classes.textField}
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                className={classes.textField}
                value={password}
                onChange={handlePasswordChange}
              />
              <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
                className={classes.textField}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <Button type="submit" variant="contained" className={classes.button}>
                Sign up
              </Button>
              <Button
                variant="contained"
                className={classes.oauthButton}
                onClick={handleGoogleSignIn}
              >
                Sign up with Google
              </Button>
              <Button
                variant="contained"
                className={classes.oauthButton}
                onClick={handleFacebookSignIn}
              >
                Sign up with Facebook
              </Button>
            </form>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://picsum.photos/200" alt="signup illustration" style={{ width: '100%' }} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register