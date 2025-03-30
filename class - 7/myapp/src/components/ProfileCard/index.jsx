import React from "react";
import "./style.css";

export default function ProfileCard({ name, age, img }) {
  console.log("ProfileCard");

  return (
    <div className="idCard">
      <h1>EMC</h1>
      <img src={img} alt={name + "pic"} />
      <h3>Name: {name}</h3>
      <h4>Age: {age}</h4>
    </div>
  );
}
