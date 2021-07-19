import React from 'react';
import { useParams } from 'react-router-dom';

const Company = (props) => {
  const {company} = useParams();
  console.log('Company ->', company);
  return <div>Admin &gt; Company2</div>;
};

export default Company;
