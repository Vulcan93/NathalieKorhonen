import React from "react";
import nathalieProfil from "/NathalieProfil.png";
import "./Hem.css";

export default function Hem() {
  return (
    <section className="hem-container">
      <div className="hem-leftside">
        <h1></h1>
        <h3>Sidans beskrivning:</h3>
        <p className="p-Content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ad
          suscipit totam. In eligendi dolorum magni modi laborum quia nesciunt
          atque at nemo optio numquam quas, iure nihil delectus quos? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ad
          suscipit totam. In eligendi dolorum magni modi laborum quia nesciunt
          atque at nemo optio numquam quas, iure nihil delectus quos? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ad
          suscipit totam. In eligendi dolorum magni modi laborum quia nesciunt
          atque at nemo optio numquam quas, iure nihil delectus quos? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ad
          suscipit totam. In eligendi dolorum magni modi laborum quia nesciunt
          atque at nemo optio numquam quas, iure nihil delectus quos?
        </p>
      </div>
      <div className="hem-rightside">
        <h3>Om mig:</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ad
          suscipit totam. In eligendi dolorum magni modi laborum quia nesciunt
          atque at nemo optio numquam quas, iure nihil delectus quos?
        </p>
        {/* <div className="hem-img"> */}
        {/* <img src={nathalieProfil} className="logo" alt="Profilbild" /> */}
        {/* </div> */}
      </div>
    </section>
  );
}
