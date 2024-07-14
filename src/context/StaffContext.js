import React, { createContext, useState, useEffect } from 'react';

export const StaffContext = createContext();

const StaffProvider = ({ children }) => {
  const [staff, setStaff] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (member) => {
    setFavorites((prevFavorites) => [...prevFavorites, member]);
  };

  const removeFavorite = (email) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((mem) => mem.email !== email)
    );
  };

  return (
    <StaffContext.Provider value={{ staff, setStaff, favorites, addFavorite, removeFavorite }}>
      {children}
    </StaffContext.Provider>
  );
};

export default StaffProvider;
