import React, { useContext } from 'react';
import { StaffContext } from '../context/StaffContext';
import StaffCard from './StaffCard';

const StaffList = () => {
  const { staff } = useContext(StaffContext);

  return (
    <div>
      {staff.map((member) => (
        <StaffCard key={member.email} member={member} />
      ))}
    </div>
  );
};

export default StaffList;
