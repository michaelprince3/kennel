import React from "react";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./house.svg")} alt="My Dog" />
        </picture>
        <h3>
          Location Name:
          <span className="card-locationName">{props.kennelLocation.name}</span>
        </h3>
        <p>Address: {props.kennelLocation.address}</p>
        <Link to={`/locations/${props.kennelLocation.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/locations/${props.kennelLocation.id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.kennelLocation.id)}
        >
          Sell It
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
