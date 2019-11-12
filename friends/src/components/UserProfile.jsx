import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';

import Nav from './Nav';

const UserProfile = props => {

  const logout = () => {
    sessionStorage.removeItem('token');
    props.history.push('/login');
  }

  return (
    <>
      <Nav logout={logout} />
    </>
  )
}

export default withRouter(UserProfile);
