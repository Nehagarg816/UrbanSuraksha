import React from "react";
import { Link } from "react-router-dom";

const PGCard = ({ pg }) => {
  return (
    <Link to={`/listings/${pg.id}`} className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 ml-4">
      <img className="w-95 h-48 object-cover" src={pg.imageUrl} alt={pg.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pg.name}</div>
        <p className="text-gray-700 text-sm">{pg.description}</p>
      </div>
      <div className="px-6 py-2 flex justify-between items-center">
        <span className="text-pink-600 font-semibold text-lg">₹{pg.price}</span>
        <span className="text-gray-500 text-sm">{pg.location}</span>
      </div>
    </Link>
  );
};

export default PGCard;
