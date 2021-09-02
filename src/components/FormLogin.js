import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
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
        <NotificationContainer />

        <form className="left" onSubmit={handleSubmit}>
          <input
            type="email"
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
          <Link to="/">Dont have an account</Link>
        </form>
      </>
    </div>
  );
};

export default FormLogin;
