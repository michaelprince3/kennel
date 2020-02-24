import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Location Name: <span className="card-locationName">Nashville</span>
        </h3>
        <p>Address: 500 Puppy Way</p>
      </div>
    </div>
  );
};

export default LocationCard;