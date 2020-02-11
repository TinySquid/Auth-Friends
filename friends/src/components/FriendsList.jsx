import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from './axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="friends">
      {friends ? friends.map((friend, idx) => (
        <div className="friend" key={idx}>
          <p>{friend.name}, Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      )) : <p>Loading friends...</p>}
    </div>
  )
}

export default FriendsList
