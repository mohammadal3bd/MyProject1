/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StaffContext } from '../context/StaffContext';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';

const cardStyle = css`
  .card {
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    overflow: hidden;
  }
  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .card-body {
    padding: 20px;
  }
  .card-title {
    margin-bottom: 10px;
  }
  .card-text {
    margin-bottom: 10px;
  }
  .card-footer {
    padding: 20px;
    background-color: #f8f9fa;
  }
  .btn {
    flex: 1;
    margin: 0 5px;
  }
  .btn:first-of-type {
    margin-left: 0;
  }
  .btn:last-of-type {
    margin-right: 0;
  }
`;

const StaffCard = ({ member }) => {
  const { addFavorite, removeFavorite, favorites } = useContext(StaffContext);
  const isFavorite = favorites.some((fav) => fav.email === member.email);

  return (
    <div className="card" css={cardStyle}>
      <img src={member.picture.large} className="card-img-top" alt={`${member.name.first} ${member.name.last}`} />
      <div className="card-body">
        <h5 className="card-title">{member.name.first} {member.name.last}</h5>
        <p className="card-text">Age: {member.dob.age}</p>
        <p className="card-text">Location: {member.location.city}, {member.location.country}</p>
        <Link to={`/staff/${member.email}`} className="btn btn-primary">More Details</Link>
      </div>
      <div className="card-footer d-flex justify-content-between">
        {isFavorite ? (
          <button onClick={() => removeFavorite(member.email)} className="btn btn-danger">
            <FaHeartBroken /> Remove Favorite
          </button>
        ) : (
          <button onClick={() => addFavorite(member)} className="btn btn-success">
            <FaHeart /> Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default StaffCard;

