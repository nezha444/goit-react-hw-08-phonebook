import { loginThunk } from 'components/redux/auth/authThunk';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const [email, setEmaitl] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmaitl(value);
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
    dispatch(loginThunk({ email, password }));

    setEmaitl('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
