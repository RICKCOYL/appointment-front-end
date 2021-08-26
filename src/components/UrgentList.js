import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteUrgency } from '../actions/booking';

const UrgentList = () => {
  const urgentList = useSelector((state) => state.GetUrgents[0]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);

  const handleDeleteUrgency = (id) => {
    dispatch(deleteUrgency(id));
  };

  if (!auth.id) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Urgent List</h1>
      <div id="bookings-grid">
        <div className="bookings">
          { urgentList === undefined ? <div>Loading...</div>
            : urgentList.map((e) => (
              <div className="booking-cta" key={e.id}>
                <h4>{e.title}</h4>
                <div>{`DATE: ${e.date} & ${e.time}`}</div>
                <div>{e.details}</div>
                <span><i role="button" onKeyDown={handleDeleteUrgency} aria-label="Delete button" tabIndex={0} id="trash" className="far fa-trash-alt" onClick={() => handleDeleteUrgency(e.id)} /></span>
              </div>

            ))}
        </div>
      </div>
    </div>
  );
};

export default UrgentList;
