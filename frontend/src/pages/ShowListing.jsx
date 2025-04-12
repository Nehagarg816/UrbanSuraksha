// src/pages/ShowListing.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import sampleListings from '../data/sampleListings';

const ShowListing = () => {
  const { id } = useParams();
  const listing = sampleListings.find((l) => l.id === parseInt(id));

  if (!listing) return <p className="p-6">Listing not found!</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
      <img
        src={listing.image}
        alt={listing.title}
        className="rounded-lg mb-4 w-full"
      />
      <p className="text-lg mb-2">Owned by <i>{listing.owner}</i></p>
      <p className="text-gray-700 mb-4">{listing.description}</p>
      <p className="text-xl font-semibold mb-1">₹{listing.price}</p>
      <p className="text-md text-gray-800">{listing.location}</p>
      <p className="text-md text-gray-800 mb-6">{listing.country}</p>
      <div className="flex gap-4">
        <button className="bg-[#ff4d4f] text-white px-4 py-2 rounded hover:bg-[#d9363e]">Edit</button>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Delete</button>
      </div>
    </div>
  );
};

export default ShowListing;
