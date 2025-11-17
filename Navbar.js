import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/pizzaLogo.png"; 
import ReorderIcon from '@mui/icons-material/Reorder';// your uploaded pizza image

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo} alt="Pizza Logo" />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link>
        <button>
          <ReorderIcon />
        </button>
        </Link>
       
      </div>
    </div>
  );
};

export default Navbar;


