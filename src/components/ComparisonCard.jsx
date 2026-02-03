import React from 'react';

const ComparisonCard = ({ countryA, countryB, contentA, contentB }) => {
  return (
    <div className="card comparison-grid">
      <div className="country-section">
        <img src={countryA.flag} alt={countryA.name} className="flag-img" />
        <h3>{countryA.name}</h3>
        <p>{contentA}</p>
      </div>
      <div className="country-section">
        <img src={countryB.flag} alt={countryB.name} className="flag-img" />
        <h3>{countryB.name}</h3>
        <p>{contentB}</p>
      </div>
    </div>
  );
};

export default ComparisonCard;
