import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  addBook, getBooks, removeBook,
} from '../actions/booking';

const FormBooking = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const auth = useSelector((state) => state.authReducer);

  const bookings = useSelector((state) => state.userObject);

  const userBookings = bookings.filter((book) => book.user_id === auth.id);

  const [state, setState] = useState({
    title: '',
    date: '',
    time: '',
    details: 'Dr. Will Halstead',
  });

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

  if (!auth.id) return <Redirect to="/login" />;

  return (
    <div className="section">

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
                      </div>

                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FormBooking;
