import React from "react";


const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
      <picture>
          <img src={require("./walking-with-dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Owner Name: <span className="card-ownername">{props.owner.name}</span>
        </h3>
        <p>Phone: {props.owner.phone}</p>
        <button
          type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
        >
          Edit
        </button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Delete</button>
      </div>
    </div>
  );
};

export default OwnerCard;
 