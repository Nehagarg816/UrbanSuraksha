import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CreateListing from "./pages/CreateListing";
import ShowListing from "./pages/ShowListing"; 

import { loginSuccess } from './features/authSlice';

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateListing />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/listings/:id" element={<ShowListing />} /> {/* Dynamic Route */}
      </Routes>
    </Router>
  );
};

export default App;
