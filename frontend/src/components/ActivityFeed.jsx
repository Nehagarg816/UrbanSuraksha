import React from 'react';
import '../styles/Layout.css'; 

function ActivityFeed() {
  return (
    <div className="dashboard-card">
      <h2>Recent Activity</h2>
      <p><strong>Rent Paid:</strong> ₹8000 on April 1</p>
      <p><strong>Maintenance request resolved:</strong> Light fixed</p>
      <p><strong>New announcement:</strong>Water supply issue on 9th</p>
      <p><strong>Reminder:</strong> Rate this week’s tiffin</p>
    </div>
  );
}

export default ActivityFeed;
