/* eslint-disable no-console */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assests/css/style.css';
// import FormBooking from './components/FormBooking';
import FormSignup from './components/FormSignup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={FormSignup} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
