/* eslint-disable no-console */
import { React, useState } from 'react';

const FormSignup = () => {
  const initialState = {
    username: '',
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
        <input type="text" placeholder="Username" required onChange={handleChange} value={state.username} />
        <input type="text" name="email" placeholder="E-mail" required onChange={handleChange} value={state.email} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} value={state.password} />

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
