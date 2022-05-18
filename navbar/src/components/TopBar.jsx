import React from 'react';
import '../assets/styles/TopBar.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Router>
      <div className="top-bar">
        <div className="social-media">
          Social
        </div>
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="sign-in">
          sign-in
        </div>
      </div>

      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
  )
}

export default TopBar