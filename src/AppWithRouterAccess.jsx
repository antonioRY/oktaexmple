import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'

const AppWithRouterAccess = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    history.push('/login');
  };

  const baseDomain = 'https://dev-09741123.okta.com'; 
  const issuer =  baseDomain + '/oauth2/default';
  const clientId = '0oafcoyneVITsU1RY5d6'; 
  const redirect = 'http://localhost:3000/login/callback';

  return (
    <Security issuer={issuer}
              clientId={clientId}
              redirectUri={redirect}
              onAuthRequired={onAuthRequired}
              pkce={true}>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/login' render={() => <Login baseUrl={baseDomain} issuer={issuer}/>}/>
      <SecureRoute path='/Dashboard' exact={true} component={Dashboard}/>
      <Route path='/login/callback' component={LoginCallback}/>
    </Security>
  );
};

export default AppWithRouterAccess;