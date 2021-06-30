import React from 'react';
import './assets/styles.css';
import ClientPage from './components2/ClientPage/clientPage';
import Header from './components2/Header/Header';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin/Admin';
import Company from './pages/Admin/Company';

import UserContextProvider from './contexts/UserContext';

const App = () => {
  return (
    // <>
    //   <Header />
    //   <ClientPage />
    // </>

    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <UserContextProvider>
          <Route path="/admin_company_view" component={Company} />
          <Route path="/admin">
            <UserContextProvider>
              <Admin />
            </UserContextProvider>
          </Route>
        </UserContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
