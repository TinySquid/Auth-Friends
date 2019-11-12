import React from 'react'
import { withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Nav from './Nav';
import FriendsList from './FriendsList';
import AddFriend from './AddFriend';

const UserProfile = props => {

  const logout = () => {
    sessionStorage.removeItem('token');
    props.history.push('/login');
  }

  return (
    <>
      <Nav logout={logout} />

      <PrivateRoute exact path="/profile">
        <FriendsList />
      </PrivateRoute>

      <PrivateRoute exact path="/profile/addfriend">
        <AddFriend />
      </PrivateRoute>
    </>
  )
}

export default withRouter(UserProfile);
