import React, { useState } from 'react'

import axios from 'axios';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false)

  const handleInput = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  const handleLogin = e => {
    e.preventDefault();
    setIsLoading(true);

    axios.post('http://localhost:5000/api/login', inputs)
      .then(response => {
        if (response.data.payload) {
          localStorage.setItem('token', response.data.payload);
        }
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });

    setInputs({
      username: '',
      password: ''
    });
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
