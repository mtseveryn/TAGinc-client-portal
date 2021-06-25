import React from 'react';
import './assets/styles.css';
import ClientPage from './components/ClientPage/clientPage';
import Header from './components/Header/Header';

const App = () => {
	return (
		<>
			<Header/>
			<ClientPage />
		</>
	);
};

export default App;
