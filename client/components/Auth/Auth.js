import React, {useState} from 'react'
import { Typography, Button, TextField, Container } from '@material-ui/core'
import useStyles from './styles';



const Auth = () => {
  const loginInitialState = {
    email: '',
    password: '',
  }

  const [loginDetails, setLoginDetails] = useState(loginInitialState)
  const classes = useStyles();


  const handleLogin = (e)=>{
    e.preventDefault();
  }
  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleLogin}>
        <Typography variant='h5'>Login</Typography>
        <TextField
          name='email'
          variant='outlined'
          label='Email'
          type='email'
          fullWidth
          value={loginDetails.email}
          onChange={(e)=>setLoginDetails({...loginDetails, email: e.target.value})}
        />
        <TextField
          name='password'
          variant='outlined'
          label='Password'
          type='password'
          fullWidth
          value={loginDetails.email}
          onChange={(e)=>setLoginDetails({...loginDetails, email: e.target.value})}
        />
        <Button
          type="submit"
        >
          submit
        </Button>
      </form>
    </Container>
  )
}

export default Auth
