import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NewListing = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleCreateListing = () => {
    if (isLoggedIn) {
      navigate('/create');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-between items-center px-8 py-6 bg-white-100 rounded-xl mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 ml-28">
        Ready to Find your pg? Add or purchase your pg now...
      </h2>
      <button
        onClick={handleCreateListing}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1.5 rounded-full ml-2 text-sm cursor-pointer mr-28"
      >
        Add New PG
      </button>
    </div>
  );
};

export default NewListing;
