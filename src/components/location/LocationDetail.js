import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";
import EmployeeCard from "../employee/EmployeeCard";

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.getWithEmployees(props.locationId)
    .then(APIResult => {
      setLocation({
        name: APIResult.name,
        address: APIResult.address
      });
      setEmployees(APIResult.employees)
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
        {employees.map(employee =>
          <EmployeeCard
          key={employee.id}
          employee={employee}
          {...props}
          />
          )}
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Sell It!
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;
