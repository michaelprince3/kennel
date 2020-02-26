import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
      <picture>
          <img src={require("./house.svg")} alt="My Dog" />
        </picture>
        <h3>
          Location Name:
          <span className="card-locationName">{props.location.name}</span>
        </h3>
        <p>Address: {props.location.address}</p>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Sell It</button>
      </div>
    </div>
  );
};

export default LocationCard;
