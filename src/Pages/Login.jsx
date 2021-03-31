import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../Components/LoginForm'
import { useOktaAuth } from '@okta/okta-react';
import SiteHeader from '../Components/SiteHeader';
import SiteFooter from '../Components/SiteFooter';
import { Layout } from 'antd';

const { Content } = Layout;

const Login = ({ baseUrl, issuer }) => {
  const { authState } = useOktaAuth();

  if (authState.isPending) {
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/Dashboard' }} /> :
    <Layout>
      <SiteHeader selectedKey="login"></SiteHeader>
      <Content>
        <LoginForm baseUrl={baseUrl} issuer={issuer} />
      </Content>

      <SiteFooter></SiteFooter>
    </Layout>
};

export default Login;