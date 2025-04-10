import React from 'react';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import PGCard from '../components/PGCard';
import Footer from '../components/Footer';
import NewListing from '../components/NewListing';

const HomePage = () => {
  const pgList = [
    {
      name: "Sunrise PG",
      location: "HSR Layout",
      price: 5500,
      description: "Cozy rooms with 24/7 security and WiFi.",
      imageUrl: "../../public/pg1.jpg"
    },
    {
      name: "GreenNest PG",
      location: "Koramangala",
      price: 6200,
      description: "Spacious rooms, home-cooked food, and close to metro station.",
      imageUrl: "../../public/pg2.jpg"
    },
    {
      name: "UrbanStay PG",
      location: "Indiranagar",
      price: 4800,
      description: "Affordable and clean PG with great connectivity.",
      imageUrl: "../../public/pg3.jpeg"
    }
  ];
  return (
    <div>
      <Navbar/>
      <Filters/>
      <NewListing/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {pgList.map((pg, index) => (
          <PGCard key={index} pg={pg} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
