import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Hod from "./Dashboard/Hod";
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reg" element={<Register />} />
              <Route path="/hoddash" element={<Hod />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
