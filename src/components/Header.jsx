import React from "react";
import logo from "../../src/assets/images/more/logo1.png";
const Header = () => {
  return (
    <div className="flex gap-5 items-center justify-center bg-[url('../../src/assets/images/more/15.jpg')]">
      <img className="w-[50px] " src={logo} alt="" />
      <h1 className="text-white text-3xl font-bold">Espresso Emporium</h1>
    </div>
  );
};

export default Header;
