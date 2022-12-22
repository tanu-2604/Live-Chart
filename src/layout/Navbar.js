import React from "react";
import { links, social } from "../data/data";
import logo from "../assets/logo.png";
import "../style/navbar.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useGlobalContext } from "../data/context";

export default function Navbar() {
  const { openSidebar } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          {/* <button className="nav-toggle" onClick={openSidebar}>
            <DensityMediumIcon />
          </button> */}
          <img src={logo} className="logo" alt="logo" />
          <span>HelioxChart</span>
        </div>
      </div>
    </nav>
  );
}
