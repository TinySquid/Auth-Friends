import React, { useState } from 'react';

import { axiosWithAuth } from './axiosWithAuth';

const AddFriend = () => {
  //Used to change the form header text to notify user of activity
  const [isLoading, setIsLoading] = useState(false);

  //Form inputs
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
    email: ''
  });

  //Input state handler
  const handleInput = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    //persist will prevent react from removing the event apparently, so I can then call .reset on the element later.
    e.persist();

    //Notify user we are submitting data...
    setIsLoading(true);

    axiosWithAuth()
      .post('http://localhost:5000/api/friends', inputs)
      .then(() => {
        //Show user that we finished successfully
        alert('New friend added');

        //Clear form
        setInputs({
          name: '',
          age: '',
          email: ''
        });

        //Prevent form input from showing invalid state (red border)
        e.target.reset();
      })
      .catch(error => console.log(error))
      .finally(() => {
        //Clear loading flag after work is complete
        setIsLoading(false);
      })
  }

  return (
    <form onSubmit={handleSubmit} className="add-friend">
      <h1>{isLoading ? 'Adding friend...' : 'Add a Friend'}</h1>
      <input type="text" name="name" value={inputs.name} onChange={handleInput} placeholder="Enter Name" required />
      <input type="number" name="age" value={inputs.age} onChange={handleInput} placeholder="Enter Age" required />
      <input type="email" name="email" value={inputs.email} onChange={handleInput} placeholder="Enter Email" required />
      <button type="submit">Add Friend</button>
    </form>
  )
}

export default AddFriend;
