import React, { useContext, useEffect, useState } from 'react';
import {
  useHistory,
  useRouteMatch,
  Route,
  Switch,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Company from './Company/Company.js';
import ComboBox from '../../components/ComboBox/ComboBox';
import {
  Container,
  Button,
  Box,
  TextField,
  Paper,
  Grid,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import TicketsContainer from '../../components/TicketsContainer/TicketsContainer';
import useStyles from './styles';

const Admin = () => {
  const history = useHistory();
  const matchObj = useRouteMatch();
  const { path, url } = matchObj;

  console.log('matchObj -> ', matchObj);

  console.log('path:', path, ' url: ', url);

  const { user, dispatch } = useContext(UserContext);

  const tickets = [
    {
      description: 'Some ticket description 1',
      id: '1',
      status: 'open',
    },
    {
      description: 'Some ticket description 2',
      id: '2',
      status: 'closed',
    },
    {
      description: 'Some ticket description 3',
      id: '3',
      status: 'pending',
    },
    {
      description: 'Some ticket description 4',
      id: '4',
      status: 'closed',
    },
    {
      description: 'Some ticket description 5',
      id: '5',
      status: 'pending',
    },
    {
      description: 'Some ticket description 6',
      id: '6',
      status: 'closed',
    },
  ];

  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} maxWidth="xl">
        <Paper className={classes.paper}>
          <Button variant="outlined" fullWidth>
            Add New Client
          </Button>
        </Paper>
        <Paper className={classes.paper}>
          <ComboBox />
        </Paper>
        <Paper className={classes.paper}>
          <TicketsContainer tickets={tickets} />
        </Paper>
      </Container>

      {Array.isArray(user) ? (
        <div>
          Admin
          {user.map((user) => (
            <Box key={user.rid}>{user.description}</Box>
          ))}
        </div>
      ) : (
        <div>waiting</div>
      )}

      <Button onClick={() => history.push(`${url}/company`)} variant="outlined">
        Company
      </Button>
      <Link to={`${url}/company`}>Company</Link>

      <Route path={`${url}/:company`}>
        {console.log(`inside ${path}/company`)}
        <Company />
      </Route>
    </>
  );
};

export default Admin;
