// UserForm.js
import React, { useState } from 'react';

const UserForm = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    alert(`Name: ${userInfo.name}, Email: ${userInfo.email}`);
    userInfo.name ='';
    userInfo.email ='';
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;