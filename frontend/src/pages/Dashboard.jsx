import React from 'react';
import PGDetailsCard from '../components/PGDetailsCard';
import BillingSummary from '../components/BillingSummary';
import ActivityFeed from '../components/ActivityFeed';
import QuickActions from '../components/QuickActions';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="card-grid">
      <PGDetailsCard />
      <BillingSummary />
      <ActivityFeed />
      <QuickActions />
    </div>
  );
}

export default Dashboard;
