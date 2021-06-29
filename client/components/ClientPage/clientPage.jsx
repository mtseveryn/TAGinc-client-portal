import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Form from '../Form/Form';
import Tickets from '../Tickets/Tickets';
import useStyles from './styles';

const POST_PATH = 'tickets/message';
const GET_PATH = 'tickets/data';

const ClientPage = () => {
  const classes = useStyles();

  const change = false;

  return (
    <>
      <Container className={classes.container} maxWidth="xl">
        <Form />
      </Container>
      <Container className={classes.container} maxWidth="xl">
        <Tickets />
      </Container>
    </>
  );
};

export default ClientPage;
