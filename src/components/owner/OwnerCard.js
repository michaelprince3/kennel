import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
         Owner Name: <span className="card-ownername">Doodles</span>
        </h3>
        <p>Location: Nashville</p>
      </div>
    </div>
  );
};

export default OwnerCard;