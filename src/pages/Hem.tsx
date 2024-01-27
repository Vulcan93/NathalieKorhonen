import React from "react";
import nathalieProfil from "/NathalieProfil.png";

export default function Hem() {
  return (
    <div>
      <h1>Hem</h1>
      om mig:
      <img src={nathalieProfil} className="logo" alt="Vite logo" />
    </div>
  );
}
