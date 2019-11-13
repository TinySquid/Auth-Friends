import React from 'react'
import { withRouter } from 'react-router-dom';

const Nav = ({ logout, history, location }) => {

  return (
    <div className="nav">
      <button onClick={() => history.push('/profile')}>Profile</button>
      <button onClick={() => history.push(`${location.pathname}/addfriend`)}>Add Friend</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default withRouter(Nav);
