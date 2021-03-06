import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager.js';
import LocationCard from './LocationCard';

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };
  
  const deleteLocation = id => {
    LocationManager.delete(id)
      .then(() => LocationManager.getAll().then(setLocations));
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="container-cards">
      {locations.map(location => 
      <LocationCard 
      key={location.id} 
      location={location}
      deleteLocation={deleteLocation} />)}
    </div>
  );
};
export default LocationList