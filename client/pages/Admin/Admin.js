import { Box } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
const Admin = () => {
  const history = useHistory();
  const { user, dispatch } = useContext(UserContext);

  return Array.isArray(user) ? (
    <div>
      Admin Page
      {user.map((user) => (
        <Box key={user.rid}>{user.description}</Box>
      ))}
      <button onClick={() => history.push('/admin_company_view')}>
        company
      </button>
    </div>
  ) : (
    <div>waiting</div>
  );
};

export default Admin;
