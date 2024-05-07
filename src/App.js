import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Hod from "./Dashboard/Hod";
import Addfaculty from "./Dashboard/Addfaculty";
import Addsubject from "./Dashboard/Addsubject";
import Addsemy from "./Dashboard/Addsemy";
import Section from "./Dashboard/Section";
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
              <Route path="/addf" element={<Addfaculty />} />
              <Route path="/adds" element={<Addsubject />} />
              <Route path="/addsy" element={<Addsemy />} />
              <Route path="/sec" element={<Section />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
