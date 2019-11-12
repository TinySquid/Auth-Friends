import React from 'react'

const Login = ({ isLoading }) => {
  return (
    <form className="login">
      <h1>{isLoading ? 'Logging In...' : 'Login'}</h1>
      <input type="text" name="username" placeholder="Enter Username" required />
      <input type="password" name="password" placeholder="Enter Password" required />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login;
