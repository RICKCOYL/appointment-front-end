/* eslint-disable no-console */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/auth';

const FormLogin = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(state));
    setState({
      email: '',
      password: '',
    });
  };

  if (auth.id) return <Redirect to="/booking" />;

  return (

    <div id="login-box">

      <>
        <h3>Log in</h3>
        <form className="left" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />

          <input className="signup-btn" type="submit" name="signup_submit" value="Login" />
          <a href="/">Dont have an account</a>
        </form>
      </>
    </div>
  );
};

export default FormLogin;
