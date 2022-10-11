import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const [mayBe, setmayBe] = useState("red");
  const handleNovbar = () => {
    if (localStorage.getItem("item")) {
      setmayBe(true);
    } else {
      setmayBe(false);
    }
  };
  useEffect(() => {
    handleNovbar();
  }, [mayBe]);
  return (
    <div style={{display:"flex",justifyContent:"space-between", background:"rgb(42, 49, 72)"}}>
      <div className="left">
        <ul className="nav-ul">
          {mayBe ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/expense">Expense</Link>
              </li>
              <li>
                <Link to="/todo">Todo List</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/crypto">Crypto</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="right">
        <form>
          <input type="text"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
