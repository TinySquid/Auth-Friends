import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';

const Nav = ({ logout }) => {
  //Nav doesn't have access to history or location props from router, so use the hooks provided to gain access.
  let history = useHistory();
  let location = useLocation();

  return (
    <div className="nav">
      <button onClick={() => history.push('/profile')}>Profile</button>
      <button onClick={() => history.push(`${location.pathname}/addfriend`)}>Add Friend</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Nav;
