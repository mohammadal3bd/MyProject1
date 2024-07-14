import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './archive/Home';
import FavoritesPage from './archive/FavoritesPage';
import StaffDetailsPage from './archive/StaffDetailsPage';
import Header from './elments/Header';
import StaffProvider from './context/StaffContext';
import './App.css';

const App = () => {
  return (
    <StaffProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/staff/:email" element={<StaffDetailsPage />} />
        </Routes>
      </Router>
    </StaffProvider>
  );
};

export default App;
