import './App.css';
import React from "react";
import {Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";

function App() {
  return (
      <div className="container-fluid">
          <Navbar />
          <div className="container">
              <Outlet />
          </div>
      </div>
  );
}

export default App;
