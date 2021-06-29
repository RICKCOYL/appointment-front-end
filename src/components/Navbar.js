import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../api';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(signOut());
    history.push('/login');
  };

  return (
    <div>
      <Link to="/">Sign up</Link>
      <Link to="/login">Login</Link>
      <input type="submit" value="" onClick={() => logout()} />
    </div>
  );
};

export default Navbar;
