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
const GET_PATH = '/api/data';

const ClientPage = () => {
	// todo: declare states
	const initialState = {
		message: '',
	};

	const [allData, setAllData] = useState(['1', '2', '3']);
	const [postData, setPostData] = useState(initialState);
	const classes = useStyles();

	//todo: helper function to retrieve all data from backend
	const getData = () => {
		
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
			<Container maxWidth='xl'>
				<Paper className={classes.paper}>
					<form onSubmit={handleSubmit}>
						<Typography variant='h4'>Submit a help request</Typography>

						<TextField
							name='message'
							variant='outlined'
							label='Message'
							fullWidth
							value={postData.message}
							onChange={(e) =>
								setPostData({ ...postData, message: e.target.value })
							}
						/>
						<Button
							type='submit'
							variant='contained'
							size='large'
							fullwidth='true'
						>
							Submit
						</Button>
					</form>
				</Paper>
			</Container>
			<Container>
				<Grid container direction='row' spacing={2} fullwidth='true'>
					{allData.map((el, index) => (
						<Grid key={index} item>
							<Paper className={classes.paper}>{el}</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default ClientPage;
