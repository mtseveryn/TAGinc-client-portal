import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Form from '../Form/Form';
import Tickets from '../Tickets/Tickets';
import useStyles from './styles';

const POST_PATH = 'tickets/message';
const GET_PATH = 'tickets/data';

const ClientPage = () => {
	const classes = useStyles();

	//todo: helper function to retrieve all data from backend
	const getData = async () => {
		
		try {
			// ! check backend routes and then update route here
			const { data } = await axios.get(`http://localhost:3000/${GET_PATH}`);
			console.log('data: ', data);
			setAllData(data);
			//console.log('response: ', response);
		} catch (error) {
			console.error('err in getData', error);
		}
	}; //end of getData

	// todo: helper function to save data to backend
	const saveData = async () => {
		try {
			await axios.post(`http://localhost:3000/${POST_PATH}`, postData);
		} catch (error) {
			console.log('saveData() from clientPage error: ', error);
		}
	};
	
	// handleSubmit
	const handleSubmit = (event) => {
		event.preventDefault();
		saveData();
	};
	// Clear form
	const clear = () => {
		setPostData(postInitialState);
	}

	//page should re-rendering when data changes
	useEffect(() => {
		getData();
	}, []);

	const change = false;

	return (
		<>
			<Container className={classes.container} maxWidth='xl'>
				<Form/>				
			</Container>
			<Container 
				className={classes.container} 
				maxWidth='xl'
			>
			{allData.map((el, index) => (
					<Box 
						border= {1}
						borderColor = "lightgrey"
						key={index}
					>
						<Typography 
							variant='h6' 
							className={classes.paper}
						>
							{el.description}
						</Typography>
					</Box>
				))
			}
			
			</Container>
		</>
	);
};

export default ClientPage;
