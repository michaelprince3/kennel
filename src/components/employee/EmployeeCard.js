import React from "react";
import "./Employee.css";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
      <picture>
          <img src={require("./employee.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-employeeName">{props.employee.name}</span>
        </h3>
        <p>Job Title: {props.employee.title}</p>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fired</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
