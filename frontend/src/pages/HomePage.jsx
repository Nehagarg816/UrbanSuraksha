import React,{ useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import PGCard from '../components/PGCard';
import Footer from '../components/Footer';
import NewListing from '../components/NewListing';

const HomePage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const response = await fetch("/listings");
      const data = await response.json();
      setListings(data);
    };

    fetchListings();
  }, []);
  return (
    <div>
      <Navbar/>
      <Filters/>
      <NewListing/>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {listings.map((pg) => (
        <PGCard key={pg._id} pg={{ 
          ...pg, 
          id: pg._id, 
          imageUrl: pg.image?.url || '', 
          name: pg.title 
        }} />
      ))}
    </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
