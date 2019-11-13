import React, { useState } from 'react';

import axios from 'axios';

const Login = ({ history }) => {
  //Form input state
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });

  //Loader bool to notify user of server activity (login process)
  const [isLoading, setIsLoading] = useState(false)

  //Form input handler
  const handleInput = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  //Form submit handler
  const handleLogin = e => {
    e.preventDefault();

    //Notify user we are logging them in...
    setIsLoading(true);

    //Send payload (username, password)
    axios.post('http://localhost:5000/api/login', inputs)
      .then(response => {
        //Server will respond with a token in the payload if successful
        if (response.data.payload) {
          //Store auth token into sessionStorage 
          sessionStorage.setItem('token', response.data.payload);

          //Redirect to profile
          history.push('/profile');
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <form className="login" onSubmit={handleLogin}>
      <h1>{isLoading ? 'Logging In...' : 'Login'}</h1>
      <input type="text" name="username" value={inputs.username} onChange={handleInput} placeholder="Enter Username" required />
      <input type="password" name="password" value={inputs.password} onChange={handleInput} placeholder="Enter Password" required />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login;
