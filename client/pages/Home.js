import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <div>
      Home page
      <button onClick={() => history.push('/admin')}>admin</button>
    </div>
  );
};

export default Home;
