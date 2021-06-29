/* eslint-disable no-console */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../api';

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

        <input type="submit" name="signup_submit" value="Login" />
      </form>

      <div className="right">

        <input type="submit" className="social-signin facebook" value="Log in with facebook" />
        <input type="submit" className="social-signin twitter" value="Log in with Twitter" />
        <input type="submit" id="google" className="social-signin google" value="Log in with Google" />
      </div>
      <div className="or">OR</div>
    </div>
  );
};

export default FormLogin;
