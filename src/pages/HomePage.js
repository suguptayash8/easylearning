import React, { useState } from 'react';
import Card from '../components/Card';
import './HomePage.css';

const HomePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      id: 1,
      name: 'John Doe',
      expertise: 'Web Development',
      image: 'person1.png',
      website: '#',
    },
    {
      id: 2,
      name: 'Jane Smith',
      expertise: 'Graphic Design',
      image: 'person2.png',
      website: '#',
    },
  ];

  const handleCardClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="homepage">
      <div className="card-container">
        {profiles.map((profile) => (
          <Card key={profile.id} profile={profile} onClick={() => handleCardClick(profile)} />
        ))}
      </div>

      {selectedProfile && (
        <div className="profile-details">
          <h2>{selectedProfile.name}</h2>
          <p>Expertise: {selectedProfile.expertise}</p>
          <a href={selectedProfile.website}>Visit Website</a>
        </div>
      )}
    </div>
  );
};

export default HomePage;
