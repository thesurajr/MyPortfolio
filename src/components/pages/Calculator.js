import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("item")) {
      navigate("/signup");
    }
  }, []);
  return (
    <div style={{ width: "100%", height: "600px", background:"grey"} }>
      <div
        style={{
          color: "red",
          position: "absolute",
          left: "50%",
          right: "50%",
          border: "2px solid black",
          transform: "translate(-50%,-50%)",
          top: "40%",
          width: "150px",
          height: "40px",
          textDecoration: "none",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "aquamarine",
          textAlign: "center",
          paddingTop: "5px",
        }}
      >
        <a
        href="https://www.calculator.net"
          // href="https://ahfarmer.github.io/calculator"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
          }}
          target="black"
        >
          Use Calculator
        </a>
      </div>
    </div>
  );
};

export default Calculator;
