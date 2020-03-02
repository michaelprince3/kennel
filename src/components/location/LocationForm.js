import React, { useState } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

const LocationForm = props => {
  const [kennelLocation, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...kennelLocation };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const constructNewLocation = evt => {
    evt.preventDefault();
    if (kennelLocation.name === "" || kennelLocation.address === "") {
      window.alert("Please input a kennelLocation name and address");
    } else {
      setIsLoading(true);
      LocationManager.post(kennelLocation).then(() => props.history.push("/locations"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Location name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Address"
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm;
