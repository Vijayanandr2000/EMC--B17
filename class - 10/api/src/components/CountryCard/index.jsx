import React from "react";

const CountryCard = ({ name, flag }) => {
  return (
    <div className="country-card">
      <img src={flag} alt="flag" />
      <h2>{name}</h2>
    </div>
  );
};

export default CountryCard;
