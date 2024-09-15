import React from 'react';
import './Team.css'; // Import the CSS file for styling
import { assets } from '../../assets/assets'; // Import assets from your assets directory

const Team = () => {
  // Array of team members with imported image paths
  const members = [
    {
      name: 'Eakshitha',
      picture: assets.member1, // Assuming you have exported images from your assets file
      description: 'John is a passionate software engineer with 5 years of experience in full-stack development.'
    },
    {
      name: 'Mahek',
      picture: assets.member2,
      description: 'Jane is a skilled designer who specializes in creating user-friendly interfaces and experiences.'
    },
    {
      name: 'Sumithra',
      picture: assets.member3,
      description: 'Alice is a project manager with a knack for organizing and leading teams to success.'
    }
  ];

  return (
    <div className="team">
    <h2 class="teamname">Our Team</h2>
    <div className="team-container">
       
      {members.map((member, index) => (
        <div key={index} className="team-member">
          <div className="team-member-picture-container">
            <img src={member.picture} alt={member.name} className="team-member-picture" />
          </div>
          <h3 className="team-member-name">{member.name}</h3>
          <p className="team-member-description">{member.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Team;
