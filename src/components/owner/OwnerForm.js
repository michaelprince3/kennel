import React, { useState } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerForm.css";

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create owner      object, invoke the OwnerManager post method, and redirect to the full owner list
   */
  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.breed === "") {
      window.alert("Please input an owner name and phone number");
    } else {
      setIsLoading(true);
      // Create the owner and redirect user to owner list
      OwnerManager.post(owner).then(() => props.history.push("/owners"));
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
              placeholder="Owner name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phone"
              placeholder="Phone"
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm;
