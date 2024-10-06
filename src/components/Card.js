import React from 'react';
import './Card.css';

const Card = ({ profile, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={require(`../assets/images/${profile.image}`).default} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.expertise}</p>
      <a href={profile.website}>View Website</a>
    </div>
  );
};

export default Card;
