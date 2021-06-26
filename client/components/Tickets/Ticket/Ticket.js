import React from 'react'
import { Box, Typography } from '@material-ui/core'

import useStyles from './styles';


const Ticket = ({message, index}) => {
  const classes = useStyles();
  return (
    <Box 
      border= {1}
      borderColor = "lightgrey"
    >
      <Typography 
        variant='h6' 
        className={classes.paper}
      >
        {message}
      </Typography>
    </Box>
  )
}

export default Ticket
