import React from "react";
import "../index.css";
import logo from "../assets/icon/logo.png";

function Header() {
  return (
    <header className="flex h-[65px]">
  <div className="bg-[#1e67af] w-[295px] h-[65px] flex items-center justify-center">
    <img src={logo} alt="Logo" className="h-[20px] w-[209px]" />
  </div>
  <div className="flex-row ml-[33px] mr-[847px]">
    <span className="icon-search h-[19px] my-[23px] mr-[10px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <input
      type="text"
      placeholder="Search anything here..."
      className="bg-white my-[23px] h-[19px] text-[14px]"
    />
  </div>
  <div className="flex my-[25px]">
    <span className="icon-logout mr-[11px]">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <button className="bg-white text-[#EE0D0D] mr-[25px]">
      Logout
    </button>
  </div>
  <div className="flex my-[23px] bg-white items-center justify-center">
    <i className="icon-menus">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
  </div>
</header>

  );
}

export default Header;
