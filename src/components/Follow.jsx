import React from "react";
import ig1 from "../../src/assets/images/cups/Rectangle 1.png";
import ig2 from "../../src/assets/images/cups/Rectangle 2.png";
import ig3 from "../../src/assets/images/cups/Rectangle 3.png";
import ig4 from "../../src/assets/images/cups/Rectangle 4.png";
import ig5 from "../../src/assets/images/cups/Rectangle 5.png";
import ig6 from "../../src/assets/images/cups/Rectangle 6.png";
import ig7 from "../../src/assets/images/cups/Rectangle 7.png";
import ig8 from "../../src/assets/images/cups/Rectangle 8.png";
const Follow = () => {
  return (
    <>
      <h1 className="text-4xl text-center mt-14">Our Upcoming Coffees</h1>
      <div className="grid lg:grid-cols-4 px-10 my-10 grid-cols-2 gap-5">
        <img src={ig1} alt="" />
        <img src={ig2} alt="" />
        <img src={ig3} alt="" />
        <img src={ig4} alt="" />
        <img src={ig5} alt="" />
        <img src={ig6} alt="" />
        <img src={ig7} alt="" />
        <img src={ig8} alt="" />
      </div>
    </>
  );
};

export default Follow;
