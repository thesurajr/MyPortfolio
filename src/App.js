import React from "react";
import "./App.css";
import Nav from "./components/pages/Nav";
import { Routes, Route } from "react-router-dom";
import Calculator from "./components/pages/Calculator";
import Contact from "./components/pages/Contact";
import Logout from "./components/pages/Logout";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/pages/Footer";
import Expensee from "./components/Expensee";
import Todo from "./components/pages/Todo";
import Crypto from "./components/pages/Crypto";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/expense" element={<Expensee />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
