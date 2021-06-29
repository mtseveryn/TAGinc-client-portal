import React from 'react';
import { useHistory } from 'react-router-dom';
const Admin = () => {
  const history = useHistory();
  return (
    <div>
      Admin Page
      <button onClick={() => history.push('/admin_company_view')}>
        company
      </button>
      ;
    </div>
  );
};

export default Admin;
