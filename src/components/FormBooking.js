import React from 'react';

const FormBooking = () => (
  <div id="booking" classNameName="section">
    <div classNameName="section-center">
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-md-7 col-md-push-5">
            <div classNameName="booking-cta">
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
          <div classNameName="col-md-4 col-md-pull-7">
            <div classNameName="booking-form">
              <form>
                <div classNameName="form-group">
                  <span classNameName="form-label">Appointment</span>
                  <input classNameName="form-control" type="text" placeholder="Reason for Booking" />
                </div>
                <div classNameName="row">
                  <div classNameName="col-sm-6">
                    <div classNameName="form-group">
                      <span classNameName="form-label">Day</span>
                      <input classNameName="form-control" type="date" required />
                    </div>
                  </div>
                  <div classNameName="col-sm-6">
                    <div classNameName="form-group">
                      <span classNameName="form-label">Time</span>
                      <input classNameName="form-control" type="time" required />
                    </div>
                  </div>
                </div>
                <div classNameName="form-group">
                  <span classNameName="form-label">Appointment</span>
                  <select classNameName="form-control">
                    <option>Dr. Will Halstead</option>
                    <option>Dr. Natalie Manning</option>
                    <option>Dr. Connor Rhodes</option>
                    <option>Dr. Ethan Choi</option>
                  </select>
                </div>
                <div classNameName="form-btn">
                  <button type="submit" classNameName="submit-btn">Book</button>
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
