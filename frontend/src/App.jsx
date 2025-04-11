import React, { useEffect } from "react";
import {useState} from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CreateListing from "./pages/CreateListing";
import ShowListing from "./pages/ShowListing"; 
import Dashboard from "./pages/Dashboard";
import Sidebar from "./layout/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/Layout.css";
import { loginSuccess } from './features/authSlice';
import MyBills from "./pages/MyBills";
import TiffinMap from "./pages/TiffinMap";
import 'leaflet/dist/leaflet.css';


// Helper component to handle conditional layout
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Define paths where the full dashboard layout should be shown
  const isDashboardLayout = location.pathname.startsWith("/dashboard");

  if (isDashboardLayout) {
    return (
      <div className="app-layout">
        {sidebarOpen && <Sidebar />}
        <div className="main-area">
          <Navbar toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
          <div className="main-content">{children}</div>
          <Footer />
        </div>
      </div>
    );
  }

  // For public routes like Home, Login, Create, etc.
  return (
    <>
      {children}
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userEmail = Cookies.get("userEmail");
    const isLoggedIn = Cookies.get("isLoggedIn") === "true";

    if (isLoggedIn && userEmail) {
      dispatch(loginSuccess({ email: userEmail }));
    }
  }, [dispatch]);

  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateListing />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
          <Route path="/listing/:id" element={<ShowListing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/bills" element={<MyBills />} />
          <Route path="/dashboard/tiffin" element={<TiffinMap />} />


        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

export default App;