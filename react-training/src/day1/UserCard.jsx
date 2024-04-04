/* 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data. */
import React from 'react';

const UserCard = ({ name, email, avatarURL }) => {
  return (
    <div>
      <img src={avatarURL} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default UserCard;
