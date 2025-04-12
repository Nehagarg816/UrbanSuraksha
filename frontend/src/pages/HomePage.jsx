// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import PGCard from '../components/PGCard';
import Footer from '../components/Footer';
import NewListing from '../components/NewListing';
import sampleListings from '../data/sampleListings';

const HomePage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("/listings");
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setListings(data);
        } else {
          setListings(sampleListings);
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
        setListings(sampleListings); // fallback on error
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <Navbar />
      <Filters />
      <NewListing />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((pg) => (
          <PGCard
            key={pg._id || pg.id}
            pg={{
              ...pg,
              id: pg._id || pg.id,
              imageUrl: pg.image?.url || pg.image || '',
              name: pg.title,
            }}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
