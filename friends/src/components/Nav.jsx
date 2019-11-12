import React from 'react'
// import { withRouter } from 'react-router-dom';

const Nav = ({ logout }) => {
  return (
    <div className="nav">
      <button>Profile</button>
      <button>Add Friend</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

// export default withRouter(Nav)
export default Nav;
