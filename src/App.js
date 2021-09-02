import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormBooking from './components/FormBooking';
import FormSignup from './components/FormSignup';
import FormLogin from './components/FormLogin';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={FormSignup} />
          <Route exact path="/login" component={FormLogin} />
          <Route exact path="/booking" component={FormBooking} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
