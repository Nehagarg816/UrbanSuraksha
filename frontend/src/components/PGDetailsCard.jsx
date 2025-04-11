import React from 'react';
import '../styles/Layout.css'; 

function PGDetailsCard() {
  return (
    <div className="dashboard-card">
      <h2>PG Information</h2>
      <p><strong>PG Name:</strong> Sunshine Residency</p>
      <p><strong>Address:</strong> 123 MG Road, Bangalore</p>
      <p><strong>Room:</strong> B-204 (Upper Bed)</p>
      <p><strong>Landlord:</strong> Rajesh Kumar</p>
      <p><strong>Contact:</strong> +91 9876543210</p>
    </div>
  );
}

export default PGDetailsCard;
