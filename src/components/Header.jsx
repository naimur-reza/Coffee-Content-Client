import React from "react";
const Header = () => {
  return (
    <div className="flex gap-5 items-center justify-center bg-[url('../../src/assets/images/more/15.jpg')]">
      <img
        className="w-[50px] "
        src="../../src/assets/images/more/logo1.png"
        alt=""
      />
      <h1 className="text-white text-3xl font-bold">Espresso Emporium</h1>
    </div>
  );
};

export default Header;
