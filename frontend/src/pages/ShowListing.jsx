import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowListing = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [pg, setPg] = useState(null);

  useEffect(() => {
    // Fetch PG listing by ID from your API or data source
    // Replace with your actual data fetching logic
    const fetchPG = async () => {
      const response = await fetch(`/api/listing/${id}`); // Assuming you have an API for this
      const data = await response.json();
      setPg(data);
    };

    fetchPG();
  }, [id]);

  if (!pg) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h1 className="text-3xl font-semibold mb-6">{pg.name}</h1>

      <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-3xl">
        <img src={pg.imageUrl} alt={pg.name} className="w-full h-64 object-cover" />
      </div>

      <div className="w-full max-w-3xl mt-4 text-center">
        <p className="text-gray-600">
          Owned by <span className="italic">{pg.owner}</span>
        </p>
        <p className="mt-2 text-lg text-gray-700">{pg.description}</p>
        <p className="mt-2 text-xl font-medium text-pink-600">₹{pg.price}</p>
        <p className="mt-1 text-gray-700">{pg.location}</p>
        <p className="text-gray-700">{pg.country}</p>

        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl text-sm shadow">
            Edit
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-xl text-sm shadow">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowListing;
