/* eslint-disable no-console */
import { useState } from 'react';

const FormLogin = () => {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setstate] = useState(initialState);

  const handleSubmit = () => {

  };

  const handleChange = (e) => {
    setstate({
      [e.target.name]: console.log(e.target.value),
    });
  };

  return (
    <div id="login-box">
      <form className="left" onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="E-mail" onChange={handleChange} value={state.email} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={state.password} />

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
