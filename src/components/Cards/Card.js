import React from "react";
import "./Card-style.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Trading Card</h2>
        <p className="card-body">
          Nisi amet veniam in non consequat tempor culpa cupidatat. Minim
          exercitation ex in exercitation
        </p>
        <a href="/" className="button">
          learn more
        </a>
      </div>
    </div>
  );
};

export default Card;
