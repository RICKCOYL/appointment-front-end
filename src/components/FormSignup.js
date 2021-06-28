/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createUser } from '../api';

const FormSignup = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(state));

    setState({
      username: '',
      email: '',
      password: '',
    });
  };

  if (auth.id) return <Redirect to="/booking" />;

  return (
    <div id="login-box">
      <form className="left" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={(e) => setState({ ...state, username: e.target.value })}
          value={state.username}
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          required
          onChange={(e) => setState({ ...state, email: e.target.value })}
          value={state.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setState({ ...state, password: e.target.value })}
          value={state.password}
        />

        <input type="submit" name="signup_submit" value="Sign up" />
        <br />
        <br />
        <a href="/">Already have an account</a>
      </form>

      <div className="right">

        <input type="submit" className="social-signin facebook" value="Sign up with facebook" />
        <input type="submit" className="social-signin twitter" value="Sign up with Twitter" />
        <input type="submit" id="google" className="social-signin google" value="Sign up with Google" />
      </div>
      <div className="or">OR</div>
    </div>
  );
};

export default FormSignup;
