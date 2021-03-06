import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import spinner from '../assests/img/whitebgspinner.svg';

import { createUser } from '../actions/auth';

const FormSignup = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(state));
    setLoading(true);

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

      {loading ? (
        <div className="div-loader">
          <div><img id="loader" src={spinner} alt="" /></div>
          <div>Signing Up....</div>
        </div>
      )
        : (
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
            <Link to="/login">Already have an account</Link>
          </form>
        )}
    </div>
  );
};

export default FormSignup;
