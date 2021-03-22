import React, { useEffect, useState } from "react";
import "./Nav.css";
import netLogo from "./images/clipart2059157.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={netLogo} alt="Netflix Logo" />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/564x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d.jpg"
        alt="User Logo"
      />
    </div>
  );
}

export default Nav;
