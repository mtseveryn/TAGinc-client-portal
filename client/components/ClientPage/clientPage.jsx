import React from 'react';
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
				maxWidth='xl'
			>
				<Tickets/>			
			</Container>
		</>
	);
};

export default ClientPage;
