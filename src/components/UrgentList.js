import React from 'react';
import { useSelector } from 'react-redux';

const UrgentList = () => {
  const urgentList = useSelector((state) => state.GetUrgents[0]);
  console.log(urgentList);
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
                <span><i role="button" aria-label="Delete button" tabIndex={0} id="trash" className="far fa-trash-alt" /></span>
              </div>

            ))}
        </div>
      </div>
    </div>
  );
};

export default UrgentList;
