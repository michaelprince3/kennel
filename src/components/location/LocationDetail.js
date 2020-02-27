import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.get(props.locationId).then(location => {
      setLocation({
        name: location.name,
        address: location.address
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./house.svg")} alt="My Store" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{location.name}</span>
        </h3>
        <p>Address: {location.address}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Sell It!
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;
