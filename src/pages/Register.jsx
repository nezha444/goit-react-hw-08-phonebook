import { registerThunk } from 'components/redux/auth/authThunk';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(registerThunk({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" onChange={handleChange} value={name} type="name" />
        </label>

        <label>
          Email
          <input
            name="email"
            onChange={handleChange}
            value={email}
            type="email"
          />
        </label>

        <label>
          Password
          <input
            name="password"
            onChange={handleChange}
            value={password}
            type="password"
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};
