import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../actions/action';

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const history = useHistory();

  const logout = () => {
    dispatch(signOut());
    history.push('/login');
  };

  return (
    <nav className="position-sticky">
      {!auth.id ? (
        <div>
          <Link id="signup" to="/">Sign up</Link>
          <Link id="login" to="/login">Login</Link>
        </div>
      )
        : (
          <nav className="second-nav">
            <div>
              <p id="home">Appointment List</p>
            </div>

            <div id="nameandbtn">
              <span id="username">
                (
                {auth.name}
                )
              </span>
              <input id="signout" type="submit" value="Sign Out" onClick={() => logout()} />
            </div>
          </nav>
        )}

    </nav>
  );
};

export default Navbar;
