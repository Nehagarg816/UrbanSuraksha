import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import '../styles/TiffinMap.css';

const tiffinData = [
  {
    id: 1,
    name: 'Anjali Tiffin Service',
    foodType: 'Veg',
    lat: 19.118,
    lng: 72.869,
  },
  {
    id: 2,
    name: 'Home Food Corner',
    foodType: 'Non-Veg',
    lat: 19.119,
    lng: 72.901,
  },
  {
    id: 3,
    name: 'Delight Meals',
    foodType: 'Veg',
    lat: 19.12,
    lng: 72.87,
  },
];

const TiffinMap = () => {
  const [foodType, setFoodType] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Location error:", error);
        // fallback to Mumbai
        setUserLocation([19.118, 72.869]);
      }
    );
  }, []);

  const handleSearch = () => {
    const results = tiffinData.filter(item =>
      item.foodType.toLowerCase().includes(foodType.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <div className="tiffin-container">
      <div className="tiffin-search">
        <h2>Find Tiffin Services Near You</h2>
        <input
          type="text"
          placeholder="Food Preference (Veg / Non-Veg)"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {filteredData.length > 0 && (
          <>
            <div className="results-count">{filteredData.length} results found</div>
            <ul>
              {filteredData.map((item) => (
                <li key={item.id}>
                  <h4>{item.name}</h4>
                  <p> {item.foodType}</p>
                  <button className="order-btn">Order Now</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="tiffin-map">
        {userLocation && (
          <MapContainer center={userLocation} zoom={14} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={userLocation}
              icon={L.icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149059.png',
                iconSize: [30, 30],
              })}
            >
              <Popup>You are here</Popup>
            </Marker>

            {filteredData.map((item) => (
              <Marker
                key={item.id}
                position={[item.lat, item.lng]}
                icon={L.icon({
                  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
                  iconSize: [32, 32],
                })}
              >
                <Popup>
                  <strong>{item.name}</strong><br />
                  Type: {item.foodType}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default TiffinMap;
