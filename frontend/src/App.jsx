import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CreateListing from "./pages/CreateListing";
import ShowListing from "./pages/ShowListing";
import Dashboard from "./pages/Dashboard";
import MyBills from "./pages/MyBills";
import TiffinMap from "./pages/TiffinMap";
import FileComplaint from "./pages/FileComplaint";

import Sidebar from "./layout/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/Layout.css";
import "leaflet/dist/leaflet.css";
import { loginSuccess } from "./features/authSlice";


// Layout wrapper to conditionally show layout elements
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
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

  return <>{children}</>;
};


// Inner App that uses LayoutWrapper + Routes
const AppContent = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/signup" element={<AuthPage />} />
      <Route path="/create" element={<CreateListing />} />
      <Route path="/listing/:id" element={<ShowListing />} />

      {/* Dashboard Routes (inside layout) */}
      <Route
        path="/dashboard"
        element={
          <LayoutWrapper>
            <Dashboard />
          </LayoutWrapper>
        }
      />
      <Route
        path="/dashboard/bills"
        element={
          <LayoutWrapper>
            <MyBills />
          </LayoutWrapper>
        }
      />
      <Route
        path="/dashboard/tiffin"
        element={
          <LayoutWrapper>
            <TiffinMap />
          </LayoutWrapper>
        }
      />
      <Route
  path="/dashboard/complaint"
  element={
    <LayoutWrapper>
      <FileComplaint />
    </LayoutWrapper>
  }
/>

    </Routes>
  );
};


// Final App with Redux + Cookie check
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
      <AppContent />
    </Router>
  );
};

export default App;
