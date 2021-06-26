import React, {useState} from 'react'
import { Typography, Paper, Grid, Button, TextField } from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';

const POST_PATH = 'api/message';

const Form = () => {
  const postInitialState = {
		message: '',
	};

  const [postData, setPostData] = useState(postInitialState);
	const classes = useStyles();

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
		if(postData.message === ''){
			console.log('Nothing submitted');
			return;
		}
		saveData();
		setPostData(postInitialState)
	};
	// Clear form
	const clear = () => {
		setPostData(postInitialState);
	}


  return (
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
						<Grid container>
							<Grid item xs={10}>
								<Button
									type='submit'
									variant='text'
									size='large'
									fullWidth
									color='primary'
								>
									Submit
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									onClick={clear}
									variant='contained'
									size='large'
									fullWidth
									color="secondary"
								>
									Clear
								</Button>
							</Grid>
						</Grid>
					</form>
				</Paper>
  )
}

export default Form
