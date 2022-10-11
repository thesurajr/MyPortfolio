import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const Logoutpage = () => {
    localStorage.clear("item");
  
    navigate("/signup");
    window.location.reload(true);
  };
  return (
    <div style={{width:"100%",height:"600px"}}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid black",
          width: "400px",
          height: "200px",
          background: "#fff",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <p>Are you sure want to Logout</p>
          <button
            style={{
              width: "80px",
              margin: "30px",
              padding: "5px",
              background: "blue",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => Logoutpage()}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
