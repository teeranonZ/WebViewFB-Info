import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import UserInfo from './components/UserInfo';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/user-info" element={<UserInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
