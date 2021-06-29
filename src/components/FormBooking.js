import React from 'react';

const FormBooking = () => (
  <div id="booking" className="section">
    <div className="section-center">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-md-push-5">
            <div className="booking-cta">
              <h1>Make your reservation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                facere, soluta
                magnam
                consectetur molestias itaque
                ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates
                aliquid consequuntur cumque quasi.
                Perspiciatis.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-md-pull-7">
            <div className="booking-form">
              <form>
                <div className="form-group">
                  <span className="form-label">Appointment</span>
                  <input className="form-control" type="text" placeholder="Reason for Booking" />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <span className="form-label">Day</span>
                      <input className="form-control" type="date" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <span className="form-label">Time</span>
                      <input className="form-control" type="time" required />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <span className="form-label">Appointment</span>
                  <select className="form-control">
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
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FormBooking;