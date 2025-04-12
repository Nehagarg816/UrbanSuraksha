import React from 'react';
import '../styles/Layout.css'; 

function QuickActions() {
  return (
    <div className="dashboard-card">
      <h2>Quick Actions</h2>
      <div className="buttons">
        <button> Pay Rent</button>
        <button> View Bills</button>
        <button> Raise Maintenance</button>
        <button> Contact Landlord</button>
        <button> Manage Tiffin</button>
      </div>
    </div>
  );
}

export default QuickActions;
