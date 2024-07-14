import React, { useContext } from 'react';
import { StaffContext } from '../context/StaffContext';
import StaffCard from './StaffCard';

const Favorites = () => {
  const { favorites } = useContext(StaffContext);

  return (
    <div>
      <h2>Favorite Staff Members</h2>
      {favorites.map((member) => (
        <StaffCard key={member.email} member={member} />
      ))}
    </div>
  );
};

export default Favorites;
