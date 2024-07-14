import React from 'react';
import SearchBar from '../elments/SearchBar';
import StaffList from '../elments/StaffList';

const Home = () => {
  return (
    <div className="container">
      <SearchBar />
      <StaffList />
    </div>
  );
};

export default Home;
