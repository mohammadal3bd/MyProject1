/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StaffContext } from '../context/StaffContext';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const detailsStyle = css`
  h2 {
    margin-top: 0;
  }
  .map {
    height: 400px;
    margin-top: 20px;
  }
  button {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const StaffDetails = () => {
  const { email } = useParams();
  const { staff, addFavorite } = useContext(StaffContext);
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?email=${email}`);
        setMember(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching staff details:', error);
      }
    };

    const foundMember = staff.find((mem) => mem.email === email);
    if (foundMember) {
      setMember(foundMember);
    } else {
      fetchMember();
    }
  }, [email, staff]);

  if (!member) return <p>Loading...</p>;

  return (
    <div css={detailsStyle}>
      <h2>{member.name.first} {member.name.last}</h2>
      <p>Email: {member.email}</p>
      <p>Phone: {member.phone}</p>
      <p>Location: {member.location.street.name} {member.location.street.number}, {member.location.city}, {member.location.country}</p>
      <div className="map">
        <MapContainer center={[member.location.coordinates.latitude, member.location.coordinates.longitude]} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[member.location.coordinates.latitude, member.location.coordinates.longitude]} />
        </MapContainer>
      </div>
      <button onClick={() => addFavorite(member)} className="btn btn-primary mt-3">Add to Favorites</button>
    </div>
  );
};

export default StaffDetails;
