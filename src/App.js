import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import AuthFooter from './AuthFooter'; // Import the AuthFooter component
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            {/* Default route to Home component */}
            <Route path="/" element={<Dashboard />} />
             <Route path="home" element={<Home />} />
          </Routes>
        </main>
        <AuthFooter /> {/* Add the footer here */}
      </div>
    </Router>
  );
}

export default App;
