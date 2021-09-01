/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  addBook, getBooks, removeBook, urgencyState, getUrgency,
} from '../actions/booking';
import urgentImg from '../assests/img/urgent.png';

const FormBooking = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getUrgency());
  }, []);

  const auth = useSelector((state) => state.authReducer);

  const bookings = useSelector((state) => state.userObject);

  // return a list of books if booking.map((book) => book.user_id) === auth.id
  const userBookings = bookings.filter((book) => book.user_id === auth.id);

  console.log(userBookings);

  const [state, setState] = useState({
    title: '',
    date: '',
    time: '',
    details: 'Dr. Will Halstead',
  });

  const [urgency, setUrgency] = useState({
    title: '',
    date: '',
    time: '',
    details: '',
  });

  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBook(state));

    setState({
      title: '',
      date: '',
      time: '',
      details: 'Dr. Will Halstead',
    });
  };

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  const handleCheckBox = (value, title, time, date, details) => {
    console.log(value);
    if (value === true && title !== null && time !== null && date !== null && details !== null) {
      setUrgency({
        title,
        date,
        time,
        details,
      });
    } else if (value === false) {
      setUrgency({
        title: '',
        date: '',
        time: '',
        details: '',
      });
    }

    dispatch(urgencyState(urgency));
  };

  if (!auth.id) return <Redirect to="/login" />;

  return (
    <div className="section">
      {!auth.id ? <div>Loading</div> : (
        <div className="section-center">
          <div className="container">
            <div id="booking">

              <div className="booking-form mr-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="form-group ">
                    <span className="form-label">Appointment</span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Reason for Booking"
                      onChange={(e) => setState({ ...state, title: e.target.value })}
                      value={state.title}
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Day</span>
                        <input
                          className="form-control"
                          type="date"
                          required
                          onChange={(e) => setState({ ...state, date: e.target.value })}
                          value={state.date}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Time</span>
                        <input
                          className="form-control"
                          type="time"
                          required
                          onChange={(e) => setState({ ...state, time: e.target.value })}
                          value={state.time}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="form-label">Appointment</span>
                    <select
                      className="form-control"
                      onChange={(e) => setState({ ...state, details: e.target.value })}
                      value={state.details}
                    >
                      <option>Dr. Will Halstead</option>
                      <option>Dr. Natalie Manning</option>
                      <option>Dr. Connor Rhodes</option>
                      <option>Dr. Ethan Choi</option>
                    </select>
                  </div>
                  <div className="form-btn">
                    <button type="submit" className="submit-btn">Book</button>
                  </div>
                </form>
              </div>
              <div>
                <p className="info">* To add Appointments to your urgent list please make sure the checkbox is checked</p>
                <div id="bookings-grid">
                  <div className="bookings">

                    { userBookings === undefined ? <div>Loading...</div>
                      : userBookings.map((e) => (
                        <div className="booking-cta" key={e.id}>
                          <h4>{e.title}</h4>
                          <div>{`DATE: ${e.date} & ${e.time}`}</div>
                          <div>{e.details}</div>
                          <span>
                            <i
                              onKeyDown={handleDelete}
                              role="button"
                              aria-label="Delete button"
                              tabIndex={0}
                              id="trash"
                              className="far fa-trash-alt"
                              onClick={() => handleDelete(e.id)}
                            />
                          </span>
                          <input
                            type="checkbox"
                            id="urgent"
                            defaultChecked={checkbox}
                            className=" ml-4"
                            onChange={(element) => handleCheckBox(element.target.checked,
                              e.title, e.time, e.date, e.details)}
                          />
                        </div>

                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default FormBooking;
