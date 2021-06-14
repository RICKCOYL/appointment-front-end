/* eslint-disable no-console */
import React from 'react';

const FormLogin = () => (
  <div id="login-box">
    <div className="left">
      <input type="text" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" />

      <input type="submit" name="signup_submit" value="Login" />
    </div>

    <div className="right">

      <input type="submit" className="social-signin facebook" value="Log in with facebook" />
      <input type="submit" className="social-signin twitter" value="Log in with Twitter" />
      <input type="submit" id="google" className="social-signin google" value="Log in with Google" />
    </div>
    <div className="or">OR</div>
  </div>
);
export default FormLogin;
