import React from 'react';
import '../styles/Layout.css'; 

function BillingSummary() {
  return (
    <div className="dashboard-card">
      <h2>Billing Overview</h2>
      <p><strong>Rent Due:</strong> ₹8000 on 10th April</p>
      <p><strong>Tiffin Plan:</strong> Active (Next due: 12th April)</p>
      <p><strong>Utilities:</strong> ₹350 (Pending, due 15th April)</p>
      <p><strong>Total Outstanding:</strong> ₹8350</p>
    </div>
  );
}

export default BillingSummary;
