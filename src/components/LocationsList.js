import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function LocationsList() {}

export const Navigation = () => {
  return (
    <div>
      <div className="App">
        <Link to="/WelcomePage" className="Nav-link">
          Home
        </Link>
        <Link to="/CharacterCard" className="Nav-link">
          Characters
        </Link>
      </div>
    </div>
  );
};
