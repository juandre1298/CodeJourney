import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Provider } from "react-redux";

// first we need to install: npm install @reduxjs/toolkit react-redux
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Router>
      </Provider>
    </div>
  );
}
o;
export default App;
