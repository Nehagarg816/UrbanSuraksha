import React from 'react';
import { useNavigate , Link} from 'react-router-dom';
import '../styles/Layout.css';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/profile.jpg" alt="User" />
        <h3>Hi, Anuradha</h3>
      </div>
      <nav>
        <ul>
          <li onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>Dashboard</li>
          <li><Link to="/dashboard/bills">My Bills</Link></li>
          <li><Link to="/dashboard/tiffin">Tiffin Service Near Me</Link></li>
          <li><Link to="/dashboard/complaint">File Complaint</Link></li>

          <li onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</li>

        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
