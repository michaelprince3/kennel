import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employeeName">Giggles</span>
        </h3>
        <p>Job Title: Groomer</p>
      </div>
    </div>
  );
};

export default EmployeeCard;