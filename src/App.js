/* eslint-disable no-console */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormBooking from './components/FormBooking';
import FormSignup from './components/FormSignup';
import FormLogin from './components/FormLogin';
import Navbar from './components/Navbar';
import UrgentList from './components/UrgentList';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={FormSignup} />
          <Route exact path="/login" component={FormLogin} />
          <Route exact path="/booking" component={FormBooking} />
          <Route exact path="/urgent-list" component={UrgentList} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
