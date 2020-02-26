import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager.js';
import OwnerCard from './OwnerCard';

const OwnerList = () => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    return OwnerManager.getAll().then(ownersFromAPI => {
      setOwners(ownersFromAPI)
    });
  };

  const deleteOwner = id => {
    OwnerManager.delete(id)
      .then(() => OwnerManager.getAll().then(setOwners));
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <div className="container-cards">
      {owners.map(owner => 
      <OwnerCard 
      key={owner.id} 
      owner={owner}
      deleteOwner={deleteOwner} />)}
    </div>
  );
};
export default OwnerList