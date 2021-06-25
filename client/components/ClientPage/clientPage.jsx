import React, { useEffect, useState } from 'react';
import {
	TextField,
	Button,
	Typography,
	Paper,
	Container,
	Grid,
} from '@material-ui/core';
import useStyles from './styles';

const POST_PATH = '';
const GET_PATH = '';

const ClientPage = () => {
	// todo: declare states
	const postInitialState = {
		message: '',
	};
	
	const dataInitialState = [
		{
			msgId: 1,
			message:'Message 1',
		}, 
		{message:'Message 2'}, 
		{message:'Message 3'}
	];

	const [allData, setAllData] = useState(dataInitialState);
	const [postData, setPostData] = useState(postInitialState);
	const classes = useStyles();

	//todo: helper function to retrieve all data from backend
	const getData = () => {
		console.log('render')
		return;
		try {
			// ! check backend routes and then update route here
			const response = axios.get(`http://localhost:3000/${GET_PATH}`);
			setAllData(response);
		} catch (error) {
			console.error('err in getData', error);
		}
	}; //end of getData

	// todo: helper function to save data to backend
	const saveData = () => {
		return;
		try {
			axios.post(`http://localhost:3000/${POST_PATH}`, postData);
		} catch (error) {
			console.log('saveData() from clientPage error: ', error);
		}
	};
	// handleSubmit
	const handleSubmit = (event) => {
		event.preventDefault();
		saveData();
	};
	//page should re-rendering when data changes
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Container className={classes.container} maxWidth='lg'>
				<Paper className={classes.paper}>
					<form onSubmit={handleSubmit}>
						<Typography variant='h4'>Submit a help request</Typography>

						<TextField
							name='message'
							variant='outlined'
							label='Message'
							fullWidth
							multiline rows={2}
							value={postData.message}
							onChange={(e) =>
								setPostData({ ...postData, message: e.target.value })
							}
						/>
						<Button
							type='submit'
							variant='contained'
							size='large'
							fullWidth
						>
							Submit
						</Button>
					</form>
				</Paper>
			</Container>
			<Container 
				className={classes.container} 
				maxWidth='lg'
			>
			{allData.map((el, index) => (
					<Paper 
						className={classes.paper} 
						key={index}
					>
						<Typography 
							variant='h6' 
							className={classes.paper}
						>
							{el.message}
						</Typography>
					</Paper>
				))
			}
			</Container>
		</>
	);
};

export default ClientPage;
