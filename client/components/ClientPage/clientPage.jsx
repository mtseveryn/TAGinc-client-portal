import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Container } from '@material-ui/core';
import Form from '../Form/Form';
import Tickets from '../Tickets/Tickets';
import useStyles from './styles';


const ClientPage = () => {
	const classes = useStyles();

	return (
		<>
			<Container className={classes.container} maxWidth='xl'>
				<Form/>				
			</Container>
			<Container 
				className={classes.container} 
				maxWidth='lg'
			>
				<Tickets/>			
			</Container>
		</>
	);
};

export default ClientPage;
