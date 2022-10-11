import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainArea from "./MainArea";
// import Contact from "./Contact.js";
// import Expensee from "../Expensee.js";
// import Todo from "./Todo.js";
// import Calculator from "./Calculator.js";
// import Crypto from "./Crypto.js";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <MainArea />
      {/* <div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link to="/expense">Expense</Link>

          <Link to="/todo">Todo List</Link>

          <Link to="/calculator">Calculator</Link>

          <Link to="/crypto">Crypto</Link>
        </div>
      </div> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
