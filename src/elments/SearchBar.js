/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { StaffContext } from '../context/StaffContext';

const formStyle = css`
  display: flex;
  margin-bottom: 20px;
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
  }
  button {
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { setStaff } = useContext(StaffContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=10&seed=${query}`);
      setStaff(response.data.results);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} css={formStyle} className="input-group">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by company..."
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
};

export default SearchBar;

