import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager.js";
import LocationCard from "./LocationCard";

const LocationList = props => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI);
    });
  };

  const deleteLocation = id => {
    LocationManager.delete(id).then(() =>
      LocationManager.getAll().then(setLocations)
    );
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/locations/new");
          }}
        >
          Make Location
        </button>
      </section>
      <div className="container-cards">
        {locations.map(kennelLocation => (
          <LocationCard
            key={kennelLocation.id}
            kennelLocation={kennelLocation}
            deleteLocation={deleteLocation}
            {...props}
          />
        ))}
      </div>
    </>
  );
};
export default LocationList;
