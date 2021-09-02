import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import { Redirect } from 'react-router-dom';
import { createUser } from '../actions/auth';

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
      <h3>Sign Up</h3>
      <NotificationContainer />
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
          type="email"
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

        <input className="signup-btn" type="submit" name="signup_submit" value="Sign up" />
        <a href="/login">Already have an account</a>
      </form>
    </div>
  );
};

export default FormSignup;
